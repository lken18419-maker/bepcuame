-- ============================================================
-- Bếp Của Mẹ — Supabase Setup SQL
-- Chạy file này trong: Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. Bảng người dùng
create table if not exists users (
  id            text primary key,
  name          text not null,
  phone         text unique not null,
  email         text,
  password_hash text not null,
  total_spent   numeric default 0,
  tier          text default 'member',
  order_count   integer default 0,
  created_at    timestamptz default now()
);

-- 3b. Bảng token đặt lại mật khẩu
create table if not exists password_resets (
  phone      text primary key,
  token      text not null,
  expires_at timestamptz not null,
  created_at timestamptz default now()
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
  status      text default 'pending',
  created_at  timestamptz default now()
);

-- 3. Bảng sản phẩm
create table if not exists products (
  id              serial primary key,
  name            text not null,
  category        text,
  price           numeric not null default 0,
  wholesale_price numeric,
  image           text,
  description     text,
  rating          numeric default 4.5,
  sold            integer default 0,
  stock           integer,
  active          boolean default true,
  created_at      timestamptz default now()
);

-- 4. Bật Row Level Security
alter table users     enable row level security;
alter table orders    enable row level security;
alter table products  enable row level security;

-- 5. Policies cho bảng users
drop policy if exists "Đăng ký tài khoản mới"   on users;
drop policy if exists "Đăng nhập - đọc theo SĐT" on users;
drop policy if exists "Cập nhật điểm tích lũy"   on users;

create policy "Đăng ký tài khoản mới"
  on users for insert to anon with check (true);
create policy "Đăng nhập - đọc theo SĐT"
  on users for select to anon using (true);
create policy "Cập nhật điểm tích lũy"
  on users for update to anon using (true);

-- 6. Policies cho bảng orders
drop policy if exists "Lưu đơn hàng mới"       on orders;
drop policy if exists "Xem đơn hàng (anon)"     on orders;
drop policy if exists "Cập nhật trạng thái đơn" on orders;

create policy "Lưu đơn hàng mới"
  on orders for insert to anon with check (true);
create policy "Xem đơn hàng (anon)"
  on orders for select to anon using (true);
create policy "Cập nhật trạng thái đơn"
  on orders for update to anon using (true);

-- 7. Policies cho bảng products
drop policy if exists "Đọc sản phẩm công khai" on products;
drop policy if exists "Thêm sản phẩm (admin)"  on products;
drop policy if exists "Sửa sản phẩm (admin)"   on products;

create policy "Đọc sản phẩm công khai"
  on products for select to anon using (true);
create policy "Thêm sản phẩm (admin)"
  on products for insert to anon with check (true);
create policy "Sửa sản phẩm (admin)"
  on products for update to anon using (true);
