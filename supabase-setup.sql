-- ============================================================
-- Bếp Của Mẹ — Supabase Setup SQL
-- Chạy file này trong: Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Bảng người dùng
create table if not exists users (
  id            text primary key,
  name          text not null,
  phone         text unique not null,
  password_hash text not null,
  total_spent   numeric default 0,
  tier          text default 'member',
  order_count   integer default 0,
  created_at    timestamptz default now()
);

-- 2. Bảng đơn hàng
create table if not exists orders (
  id          uuid primary key default gen_random_uuid(),
  order_code  text unique not null,
  user_phone  text,
  name        text not null,
  phone       text not null,
  address     text,
  city        text,
  items       text,
  sub_total   numeric default 0,
  disc_amt    numeric default 0,
  ship_fee    numeric default 0,
  grand_total numeric default 0,
  payment     text,
  note        text,
  tier_name   text,
  status      text default 'Mới',
  created_at  timestamptz default now()
);

-- 3. Bật Row Level Security
alter table users  enable row level security;
alter table orders enable row level security;

-- 4. Policies cho bảng users
create policy "Đăng ký tài khoản mới"
  on users for insert to anon with check (true);

create policy "Đăng nhập - đọc theo SĐT"
  on users for select to anon using (true);

create policy "Cập nhật điểm tích lũy"
  on users for update to anon using (true);

-- 5. Policies cho bảng orders
create policy "Lưu đơn hàng mới"
  on orders for insert to anon with check (true);

create policy "Xem đơn hàng (admin)"
  on orders for select to authenticated using (true);
