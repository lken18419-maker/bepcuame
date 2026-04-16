# Hướng dẫn Deploy Google Apps Script — Bếp Của Mẹ

## Tổng quan

```
Website (script.js)  →  fetch()  →  Google Apps Script Web App  →  Google Sheets
```

Toàn bộ dữ liệu tài khoản và đơn hàng được lưu trên Google Sheets của bạn.  
Email thông báo đơn mới được gửi qua tài khoản Gmail của bạn.

---

## Bước 1 — Tạo Google Sheet

1. Truy cập [sheets.google.com](https://sheets.google.com) và tạo **Spreadsheet mới**
2. Đặt tên: `Bếp Của Mẹ - Quản lý`
3. Để nguyên — script sẽ tự tạo các sheet **"Tài khoản"** và **"Đơn hàng"** lần đầu chạy

---

## Bước 2 — Gắn Apps Script vào Sheet

1. Trong Spreadsheet, vào menu **Extensions → Apps Script**
2. Xóa toàn bộ code mặc định trong editor
3. Copy toàn bộ nội dung file `google-apps-script.js` và dán vào
4. **Quan trọng**: Sửa dòng đầu:
   ```js
   const OWNER_EMAIL = 'your-email@gmail.com';
   ```
   → Đổi thành **email Gmail của bạn** (sẽ nhận thông báo đơn hàng)
5. Nhấn **Save** (Ctrl+S) → đặt tên project: `BepCuaMe`

---

## Bước 3 — Deploy Web App

1. Nhấn nút **Deploy → New deployment**
2. Cấu hình:
   - **Type**: `Web app`
   - **Description**: `v1`
   - **Execute as**: `Me` (tài khoản của bạn)
   - **Who has access**: `Anyone` ← bắt buộc để website gọi được
3. Nhấn **Deploy**
4. Google sẽ yêu cầu **Authorize access** → nhấn **Review permissions → Allow**
5. Sau khi deploy xong, copy **Web app URL** có dạng:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## Bước 4 — Gắn URL vào Website

Mở file `script.js`, tìm dòng:

```js
const WEBHOOK_URL = ''; // ← ví dụ: 'https://script.google.com/macros/s/AKfy.../exec'
```

Dán URL vào trong dấu nháy:

```js
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
```

Lưu file → xong!

---

## Bước 5 — Kiểm tra

1. Mở website, thử **Đăng ký** tài khoản mới
2. Kiểm tra Google Sheet → sheet **"Tài khoản"** phải có dòng mới
3. Thêm hàng vào giỏ → đặt hàng
4. Kiểm tra sheet **"Đơn hàng"** + hộp thư Gmail của bạn

---

## Cập nhật code sau này

Mỗi khi sửa `google-apps-script.js`:
1. Paste code mới vào Apps Script editor
2. **Deploy → Manage deployments → Edit (bút chì) → New version → Deploy**
3. URL không thay đổi, không cần sửa `script.js` lại

---

## Cấu trúc Sheet

### Sheet "Tài khoản"
| ID | Họ tên | SĐT | Password Hash | Tổng chi tiêu | Hạng | Số đơn | Ngày đăng ký |
|---|---|---|---|---|---|---|---|

### Sheet "Đơn hàng"
| Thời gian | Mã đơn | Tên KH | SĐT | Địa chỉ | Tỉnh/TP | Sản phẩm | Tạm tính | Giảm giá | Phí ship | Tổng tiền | Thanh toán | Ghi chú | Trạng thái |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

---

## Lưu ý bảo mật

- Password được hash bằng thuật toán djb2 trước khi lưu (không lưu plain text)
- URL Web App là public — ai có URL đều gọi được API; bảo vệ bằng cách không chia sẻ URL
- Không deploy với quyền "Anyone with Google account" để tránh bị giới hạn quota
