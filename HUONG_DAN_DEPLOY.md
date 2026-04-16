# Hướng dẫn Deploy — Bếp Của Mẹ

## Tổng quan hệ thống

```
GitHub (code)
    │
    └── push lên main
            │
            ▼
    GitHub Actions (CI/CD)
            │
            ▼
    Vercel (hosting web)  ←→  Supabase (database)
    bepcuame.vercel.app         users + orders
                                    │
                              Edge Functions
                              (MoMo / VNPay)
```

---

## Phần 1 — Vercel (Hosting)

Website đã được deploy tại: **https://bepcuame.vercel.app**

### Cập nhật code lên web
```bash
git add .
git commit -m "mô tả thay đổi"
git push
```
GitHub Actions sẽ tự động deploy trong ~40 giây.

### Deploy thủ công (khi cần)
```bash
cd d:/snack-shop
vercel --yes
```

---

## Phần 2 — Supabase (Database)

### 2.1 Tạo project
1. Vào [supabase.com](https://supabase.com) → **New project**
2. Đặt tên: `bepcuame` → chọn region **Southeast Asia (Singapore)**
3. Đặt database password (lưu lại)

### 2.2 Tạo bảng
1. Vào **SQL Editor** trong dashboard Supabase
2. Copy toàn bộ nội dung file `supabase-setup.sql` → paste → nhấn **Run**
3. Kết quả: tạo 2 bảng **users** và **orders** kèm RLS policies

### 2.3 Lấy API keys
Vào **Settings → API**:

| Giá trị | Tên trường |
|---|---|
| Project URL | `https://xxxx.supabase.co` |
| anon public | key dài bắt đầu bằng `eyJ...` |

### 2.4 Gắn vào website
Mở `script.js`, tìm và điền:
```js
const SUPABASE_URL      = 'https://xxxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGci...';
```
Sau đó `git push` để deploy.

### Xem dữ liệu
- Vào **Table Editor** trong Supabase dashboard
- Bảng **users**: danh sách tài khoản khách hàng
- Bảng **orders**: tất cả đơn hàng

---

## Phần 3 — Thanh toán MoMo / VNPay

### 3.1 Cài Supabase CLI
```bash
npm install -g supabase
supabase login
```

### 3.2 Liên kết project
```bash
cd d:/snack-shop
supabase link --project-ref xxxx   # lấy ref trong URL dashboard
```

### 3.3 Thêm biến môi trường cho Edge Functions
```bash
# MoMo (lấy từ business.momo.vn sau khi đăng ký merchant)
supabase secrets set MOMO_PARTNER_CODE=your_partner_code
supabase secrets set MOMO_ACCESS_KEY=your_access_key
supabase secrets set MOMO_SECRET_KEY=your_secret_key
supabase secrets set MOMO_ENDPOINT=https://payment.momo.vn   # production

# VNPay (lấy từ vnpay.vn sau khi đăng ký merchant)
supabase secrets set VNP_TMN_CODE=your_tmn_code
supabase secrets set VNP_HASH_SECRET=your_hash_secret
supabase secrets set VNP_URL=https://pay.vnpay.vn/vpcpay.html   # production

# URL website
supabase secrets set SITE_URL=https://bepcuame.vercel.app
```

### 3.4 Deploy Edge Functions
```bash
supabase functions deploy momo-pay
supabase functions deploy vnpay-pay
```

> **Lưu ý:** Hiện tại đang dùng credentials sandbox (test).
> Để nhận tiền thật cần đăng ký merchant tại:
> - MoMo: [business.momo.vn](https://business.momo.vn)
> - VNPay: [vnpay.vn](https://vnpay.vn) → mục đối tác

---

## Phần 4 — GitHub Actions (CI/CD)

Workflow đã hoạt động tại: **github.com/lken18419-maker/bepcuame/actions**

### Secrets đã cấu hình
| Secret | Mô tả |
|---|---|
| `VERCEL_TOKEN` | Token xác thực Vercel |
| `VERCEL_ORG_ID` | `team_dEoQJq0g0QWmhudblcNJIzzp` |
| `VERCEL_PROJECT_ID` | `prj_kSNg57w98BOdYIwy6Nos9sqw098v` |

### Gia hạn token Vercel (khi hết hạn)
1. Vào [vercel.com/account/tokens](https://vercel.com/account/tokens) → **Create**
2. Cập nhật secret `VERCEL_TOKEN` trong GitHub repo

---

## Phần 5 — Tên miền riêng (tuỳ chọn)

Khi đã mua domain `bepcuame.com`:

```bash
vercel domains add bepcuame.com
```

Sau đó vào trang quản lý DNS của nhà đăng ký domain, thêm:

| Type | Name | Value |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

---

## Tóm tắt nhanh — việc cần làm để go live

- [x] Deploy Vercel → **bepcuame.vercel.app**
- [x] GitHub Actions tự động deploy khi push
- [ ] Tạo Supabase project + chạy `supabase-setup.sql`
- [ ] Điền `SUPABASE_URL` và `SUPABASE_ANON_KEY` vào `script.js`
- [ ] Đăng ký merchant MoMo / VNPay (để nhận thanh toán thật)
- [ ] Deploy Supabase Edge Functions (momo-pay, vnpay-pay)
- [ ] Mua domain `bepcuame.com` và gắn vào Vercel
