-- Bếp Của Mẹ — 100 sản phẩm
-- Chạy file supabase-setup.sql TRƯỚC, sau đó chạy file này

insert into products (name, emoji, category, price, old_price, badge, badge_type, origin, rating, reviews) values

-- ── CHIPS / SNACK MẶN ──────────────────────────────────────────────
('Pringles Original',        '🥔','chips',  45000, 55000,'Hot',     '',    '🇺🇸 Mỹ',        4.9, 320),
('Pringles Sour Cream',      '🥔','chips',  48000, 58000,'Hot',     '',    '🇺🇸 Mỹ',        4.8, 210),
('Pringles BBQ',             '🥔','chips',  45000, 55000, null,     '',    '🇺🇸 Mỹ',        4.7, 185),
('Doritos Nacho Cheese',     '🌽','chips',  42000, 50000,'Hot',     '',    '🇺🇸 Mỹ',        4.8, 275),
('Lay''s Thai Basil',        '🌿','chips',  28000, 35000,'Hot',     '',    '🇹🇭 Thái Lan',  4.9, 190),
('Lay''s Phô Mai',           '🧀','chips',  28000, 35000, null,     '',    '🇺🇸 Mỹ',        4.7, 165),
('Ruffles Phô Mai',          '🥔','chips',  35000,  null, null,     '',    '🇺🇸 Mỹ',        4.6, 140),
('Cheetos Flamin Hot',       '🔥','chips',  42000, 50000,'Hot',     '',    '🇺🇸 Mỹ',        4.8, 230),
('Takis Fuego',              '🌯','chips',  45000,  null,'Mới',    'new', '🇲🇽 Mexico',    4.7, 155),
('Twisties Phô Mai',         '🧀','chips',  25000,  null, null,     '',    '🇹🇭 Thái Lan',  4.4, 160),
('Taro Khoai Môn',           '🟣','chips',  28000, 33000, null,     '',    '🇹🇭 Thái Lan',  4.6, 142),
('Calbee Khoai Tây',         '🥔','chips',  35000, 42000,'Yêu thích','',  '🇯🇵 Nhật',      4.8, 198),
('Snack Oishi Tôm',          '🦐','chips',  10000,  null, null,     '',    '🇻🇳 Việt Nam',  4.3, 280),
('Snack Poca Vị Gà',         '🍗','chips',  22000, 28000,'Sale',   'sale','🇻🇳 Việt Nam',  4.5, 195),
('Bánh Phồng Tôm',           '🦐','chips',  20000,  null, null,     '',    '🇻🇳 Việt Nam',  4.4, 170),
('Funyuns Hành',             '🧅','chips',  38000, 45000,'Mới',    'new', '🇺🇸 Mỹ',        4.5, 120),
('Bugles Bắp',               '🌽','chips',  28000,  null, null,     '',    '🇺🇸 Mỹ',        4.3, 110),
('Cheese Balls',             '🧀','chips',  20000, 25000,'Sale',   'sale','🇻🇳 Việt Nam',  4.2, 200),
('Snack Cá Viên Chiên',      '🐟','chips',  22000,  null, null,     '',    '🇻🇳 Việt Nam',  4.4, 175),
('Bánh Snack Mì Khô',        '🍜','chips',  15000,  null, null,     '',    '🇻🇳 Việt Nam',  4.1, 230),

-- ── CHOCOLATE / KẸO NGỌT ───────────────────────────────────────────
('Lotte Pepero Chocolate',   '🍫','chocolate', 32000, 38000,'Sale', 'sale','🇰🇷 Hàn Quốc', 4.8, 210),
('Pepero Almond',            '🍫','chocolate', 35000, 42000, null,  '',    '🇰🇷 Hàn Quốc', 4.7, 185),
('Kit Kat Matcha',           '🍵','chocolate', 55000, 65000,'Mới', 'new', '🇯🇵 Nhật',      4.9, 198),
('KitKat Dâu Tây',           '🍓','chocolate', 55000, 65000,'Mới', 'new', '🇯🇵 Nhật',      4.8, 165),
('M&Ms Peanut',              '🟤','chocolate', 48000, 58000,'Hot',  '',    '🇺🇸 Mỹ',        4.9, 260),
('Snickers Bar',             '🍫','chocolate', 25000, 30000, null,  '',    '🇺🇸 Mỹ',        4.4, 220),
('Twix',                     '🍫','chocolate', 28000, 35000, null,  '',    '🇬🇧 Anh',       4.5, 195),
('Bounty Bar',               '🥥','chocolate', 28000, 35000, null,  '',    '🇬🇧 Anh',       4.3, 155),
('Choco Pie Lotte',          '🍮','chocolate', 28000, 35000,'Yêu thích','','🇰🇷 Hàn Quốc', 4.8, 340),
('Ferrero Rocher (3 viên)',  '🍬','chocolate', 45000, 55000, null,  '',    '🇮🇹 Ý',         4.9, 290),
('Toblerone',                '🍫','chocolate', 65000, 75000, null,  '',    '🇨🇭 Thuỵ Sĩ',  4.8, 175),
('Kinder Bueno',             '🍫','chocolate', 38000, 45000,'Hot',  '',    '🇮🇹 Ý',         4.9, 315),

-- ── BÁNH QUY / BISCUIT ─────────────────────────────────────────────
('Oreo Double Cream',        '🍪','biscuit', 28000, 35000,'Sale',  'sale','🇺🇸 Mỹ',        4.7, 185),
('Pocky Dâu Tây',            '🍓','biscuit', 35000, 40000,'Sale',  'sale','🇯🇵 Nhật',      4.9, 330),
('Pocky Chocolate',          '🍫','biscuit', 32000, 38000, null,   '',    '🇯🇵 Nhật',      4.8, 295),
('Pretz Bơ Muối',            '🥨','biscuit', 30000, 36000,'Mới',  'new', '🇯🇵 Nhật',      4.6, 112),
('Koala''s March',           '🐨','biscuit', 25000, 30000,'Yêu thích','','🇯🇵 Nhật',      4.7, 265),
('Hello Panda',              '🐼','biscuit', 22000, 28000, null,   '',    '🇲🇾 Malaysia',  4.6, 220),
('Bánh Gạo Yukimi',          '🍘','biscuit', 30000, 35000, null,   '',    '🇯🇵 Nhật',      4.5, 145),
('Tim Tam Chocolate',        '🍫','biscuit', 55000, 65000,'Hot',   '',    '🇦🇺 Úc',        4.9, 278),
('Digestive McVitie''s',     '🍪','biscuit', 40000, 48000, null,   '',    '🇬🇧 Anh',       4.6, 160),
('Bánh Wafer Bourbon',       '🍪','biscuit', 28000, 34000, null,   '',    '🇯🇵 Nhật',      4.5, 135),
('Chips Ahoy!',              '🍪','biscuit', 35000, 42000,'Hot',   '',    '🇺🇸 Mỹ',        4.7, 198),
('Bánh Crackers Ritz',       '🧀','biscuit', 32000, 40000, null,   '',    '🇺🇸 Mỹ',        4.5, 175),
('Bánh Granola Mật Ong',     '🍯','biscuit', 45000, 55000,'Healthy','sale','🇺🇸 Mỹ',      4.7, 145),

-- ── KẸO ────────────────────────────────────────────────────────────
('Haribo Gummy Bears',       '🐻','candy', 38000, 45000,'Yêu thích','','🇩🇪 Đức',         4.9, 410),
('Haribo Sâu Dẻo Trolli',   '🐛','candy', 35000, 42000, null,    '',    '🇩🇪 Đức',        4.7, 195),
('Mentos Trái Cây',          '🍭','candy', 18000,  null, null,    '',    '🇳🇱 Hà Lan',     4.2, 145),
('Mentos Bạc Hà',            '🌿','candy', 18000,  null, null,    '',    '🇳🇱 Hà Lan',     4.3, 132),
('Skittles',                 '🌈','candy', 25000, 30000,'Hot',    '',    '🇺🇸 Mỹ',         4.6, 220),
('Sour Patch Kids',          '🍬','candy', 35000, 42000,'Mới',   'new', '🇺🇸 Mỹ',         4.7, 165),
('Warheads Cực Chua',        '💀','candy', 28000,  null,'Hot',    '',    '🇺🇸 Mỹ',         4.5, 145),
('Swedish Fish',             '🐟','candy', 32000, 38000, null,    '',    '🇺🇸 Mỹ',         4.4, 120),
('Kẹo Chupa Chups',          '🍭','candy',  8000,  null, null,    '',    '🇪🇸 Tây Ban Nha',4.5, 380),
('Kẹo Hubba Bubba',          '🫧','candy', 15000,  null, null,    '',    '🇺🇸 Mỹ',         4.2, 165),

-- ── NƯỚC UỐNG ──────────────────────────────────────────────────────
('Nước Tăng Lực Monster',    '🧃','drink', 30000,  null, null,   '',    '🇺🇸 Mỹ',          4.5, 290),
('Red Bull',                 '🐂','drink', 15000,  null,'Hot',   '',    '🇹🇭 Thái Lan',    4.7, 520),
('Nước Tăng Lực Sting',     '⚡','drink', 12000,  null, null,   '',    '🇻🇳 Việt Nam',    4.4, 410),
('Pepsi Không Đường',        '🥤','drink', 15000,  null, null,   '',    '🇺🇸 Mỹ',          4.3, 500),
('Coca Cola',                '🥤','drink', 15000,  null, null,   '',    '🇺🇸 Mỹ',          4.5, 480),
('Sprite',                   '🥤','drink', 15000,  null, null,   '',    '🇺🇸 Mỹ',          4.3, 390),
('Nước Cam Tropicana',       '🍊','drink', 25000, 30000, null,   '',    '🇺🇸 Mỹ',          4.6, 235),
('Trà Đào Lipton',           '🍑','drink', 20000, 25000, null,   '',    '🇺🇸 Mỹ',          4.4, 198),
('Trà Xanh C2',              '🍵','drink', 12000,  null, null,   '',    '🇻🇳 Việt Nam',    4.3, 350),
('Nước Aloe Vera',           '🌿','drink', 22000,  null,'Healthy','sale','🇰🇷 Hàn Quốc',  4.8, 380),
('Trà Sữa Matcha Lon',       '🍵','drink', 28000, 34000,'Hot',   '',    '🇯🇵 Nhật',        4.8, 298),
('Pocari Sweat',             '💧','drink', 22000,  null,'Healthy','sale','🇯🇵 Nhật',       4.7, 215),
('Nước Dừa Coco Rico',       '🥥','drink', 18000, 22000, null,   '',    '🇹🇭 Thái Lan',    4.6, 275),
('Cà Phê G7 3in1',           '☕','drink', 18000,  null, null,   '',    '🇻🇳 Việt Nam',    4.5, 320),

-- ── MÌ ĂN LIỀN ─────────────────────────────────────────────────────
('Mì Hảo Hảo Tôm Chua Cay', '🍜','instant',  5000,  null, null,  '',    '🇻🇳 Việt Nam',   4.5, 680),
('Mì 3 Miền Bò Hầm',        '🐄','instant',  5000,  null, null,  '',    '🇻🇳 Việt Nam',   4.4, 520),
('Mì Kokomi Tôm',            '🦐','instant',  4000,  null, null,  '',    '🇻🇳 Việt Nam',   4.2, 450),
('Shin Ramyun Cay',          '🔥','instant', 22000, 28000,'Hot',  '',    '🇰🇷 Hàn Quốc',  4.8, 395),
('Samyang 2x Spicy',         '🔥','instant', 25000, 30000,'Hot',  '',    '🇰🇷 Hàn Quốc',  4.7, 365),
('Chapagetti',               '🍝','instant', 22000, 28000, null,  '',    '🇰🇷 Hàn Quốc',  4.6, 285),
('Mì Ottogi Phô Mai',        '🧀','instant', 18000, 22000,'Mới', 'new', '🇰🇷 Hàn Quốc',  4.7, 245),
('Mì Udon Nissin',           '🍜','instant', 25000, 30000, null,  '',    '🇯🇵 Nhật',       4.7, 198),
('Mì Phở Bò Khô',           '🍲','instant', 18000,  null, null,  '',    '🇻🇳 Việt Nam',   4.5, 225),
('Mì Bún Bò Huế Khô',       '🌶️','instant', 18000,  null, null,  '',    '🇻🇳 Việt Nam',   4.6, 210),

-- ── ĐỒ KHÔ / ĐẶC SẢN ──────────────────────────────────────────────
('Khô Bò Sợi',               '🥩','dried', 35000, 42000,'Yêu thích','','🇻🇳 Việt Nam',    4.8, 295),
('Khô Bò Cay',               '🌶️','dried', 45000, 55000,'Hot',  '',    '🇻🇳 Việt Nam',    4.8, 265),
('Khô Mực Tẩm Gia Vị',      '🦑','dried', 40000, 48000, null,   '',    '🇻🇳 Việt Nam',    4.7, 230),
('Mực Nướng Sa Tế',          '🦑','dried', 38000, 45000,'Hot',   '',    '🇻🇳 Việt Nam',    4.8, 245),
('Bánh Tráng Trộn Gói',      '🌶️','dried', 15000,  null, null,   '',    '🇻🇳 Việt Nam',    4.7, 350),

-- ── HẠT / NUTS ─────────────────────────────────────────────────────
('Hạt Điều Rang Muối',       '🥜','nuts', 45000, 55000, null,    '',    '🇻🇳 Việt Nam',    4.8, 265),
('Hạt Macca Úc',             '🌰','nuts', 85000, 99000,'Hot',    '',    '🇦🇺 Úc',          4.9, 145),
('Hạt Dẻ Cười Rang Muối',   '😊','nuts', 55000, 65000, null,    '',    '🇺🇸 Mỹ',          4.7, 180),
('Hướng Dương Rang Muối',    '🌻','nuts', 20000,  null, null,    '',    '🇻🇳 Việt Nam',    4.4, 235),
('Đậu Phộng Da Cá',          '🥜','nuts', 18000,  null, null,    '',    '🇻🇳 Việt Nam',    4.3, 298),
('Hạt Bí Rang Muối',         '🎃','nuts', 25000, 30000, null,    '',    '🇻🇳 Việt Nam',    4.5, 195),

-- ── THẠCH / JELLY ──────────────────────────────────────────────────
('Thạch Nata De Coco',       '🟡','jelly', 15000, 18000, null,   '',    '🇵🇭 Philippines', 4.5, 220),
('Thạch Konjac Trái Cây',    '🍇','jelly', 18000, 22000,'Healthy','sale','🇰🇷 Hàn Quốc',  4.6, 185),
('Thạch Trái Cây Nhật',      '🍊','jelly', 22000, 28000,'Mới',  'new', '🇯🇵 Nhật',        4.7, 145),

-- ── POPCORN ────────────────────────────────────────────────────────
('Popcorn Phô Mai',          '🍿','other', 25000, 30000,'Hot',   '',    '🇺🇸 Mỹ',          4.6, 195),
('Popcorn Bơ Muối',          '🍿','other', 22000, 28000, null,   '',    '🇺🇸 Mỹ',          4.5, 175),
('Popcorn Caramel',          '🍿','other', 25000, 30000,'Yêu thích','','🇺🇸 Mỹ',           4.7, 210);
