-- ============================================================
-- Bếp Của Mẹ — Dữ liệu sản phẩm mẫu (42 sản phẩm / 25 danh mục)
-- Chạy SAU khi đã chạy supabase-setup.sql
-- Supabase Dashboard → SQL Editor → Paste → Run
-- ============================================================

-- Xoá dữ liệu cũ (nếu có) trước khi insert
truncate table products restart identity cascade;

insert into products
  (name, category, price, wholesale_price, description, rating, sold, stock, active)
values

-- ── BÁNH TRÁNG ──────────────────────────────────────────────
('Bánh Tráng Trộn Sa Tế',          'banh-trang',   25000,  19000, 'Bánh tráng trộn sốt sa tế đặc biệt, cay ngọt vừa miệng, ăn một lần là ghiền.', 4.9, 850, 200, true),
('Bánh Tráng Nướng Phô Mai Tôm',   'banh-trang',   30000,  23000, 'Bánh tráng nướng giòn rụm, phủ phô mai tan chảy và tôm sấy thơm bùi.', 4.8, 620, 150, true),

-- ── BÒ ──────────────────────────────────────────────────────
('Bò Khô Sốt Sa Tế',               'bo',           65000,  50000, 'Thịt bò chọn lọc, tẩm ướp sốt sa tế đậm đà, sấy khô vừa mềm vừa dai.', 4.9, 740, 100, true),
('Bò Khô Ngũ Vị Hương',            'bo',           60000,  46000, 'Bò khô ướp ngũ vị thơm nức, vị ngọt mặn cân bằng, không chất bảo quản.', 4.7, 510, 80,  true),

-- ── MỰC ─────────────────────────────────────────────────────
('Mực Rim Chua Ngọt',              'muc',           55000,  42000, 'Mực tươi rim chua ngọt theo công thức gia truyền, ăn kèm cơm hoặc nhấm nháp đều ngon.', 4.8, 430, 120, true),
('Mực Khô Tẩm Gia Vị',             'muc',           70000,  54000, 'Mực khô cao cấp tẩm gia vị đặc trưng, sợi mực dai giòn đậm vị biển.', 4.7, 390, 90,  true),

-- ── CÁ ──────────────────────────────────────────────────────
('Cá Sặc Rằn Sấy Giòn',            'ca',            38000,  29000, 'Cá sặc rằn đặc sản miền Tây, sấy giòn tan, chấm mắm me chua ngọt tuyệt vời.', 4.6, 560, 200, true),
('Cá Cơm Rang Muối Ớt',            'ca',            32000,  24000, 'Cá cơm rang giòn với muối ớt tươi, ăn vặt lý tưởng cho buổi chiều.', 4.5, 470, 180, true),

-- ── HEO ─────────────────────────────────────────────────────
('Da Heo Chiên Giòn Sốt BBQ',      'heo',           35000,  27000, 'Da heo phồng giòn tan, tẩm sốt BBQ hảo hạng, không ngấy, ăn mãi không chán.', 4.8, 680, 250, true),
('Tai Heo Sấy Cay',                'heo',           42000,  32000, 'Tai heo sấy khô giòn sần sật, ướp ớt hiểm cay đậm đà hấp dẫn.', 4.6, 320, 100, true),

-- ── GÀ ──────────────────────────────────────────────────────
('Gà Sấy Mắm Ớt',                  'ga',            55000,  42000, 'Gà ta sấy mắm ớt theo công thức Bếp Của Mẹ – thơm, cay, đậm vị mắm nhĩ.', 4.9, 590, 120, true),
('Chân Gà Ngâm Sả Tắc',           'ga',             45000,  34000, 'Chân gà ngâm sả tắc chua cay, thanh mát, ăn kèm rau thơm càng ngon.', 4.7, 710, 150, true),

-- ── CHẢ BÔNG ────────────────────────────────────────────────
('Chả Bông Heo Lon 200g',          'cha-bong',      68000,  52000, 'Chả bông heo tơi mịn, thơm ngậy, lon tiện dụng 200g – ăn cơm, bánh mì đều hợp.', 4.9, 830, 100, true),
('Chả Bông Gà Lon 150g',           'cha-bong',      58000,  44000, 'Chả bông gà ít béo, vị nhạt nhẹ nhàng, phù hợp cho bé và người ăn kiêng.', 4.6, 410, 80,  true),

-- ── CƠM CHÁY ────────────────────────────────────────────────
('Cơm Cháy Nước Mắm Tỏi',         'com-chay',      28000,  21000, 'Cơm cháy giòn tan, chấm nước mắm tỏi ớt chua ngọt – đặc sản Ninh Bình.', 4.8, 490, 200, true),
('Cơm Cháy Tôm Chua Cay',         'com-chay',      32000,  24000, 'Cơm cháy phủ sốt tôm chua cay đặc sánh, ăn một miếng muốn ăn thêm.', 4.7, 370, 150, true),

-- ── MÓN NGON QUÊ NHÀ ────────────────────────────────────────
('Khoai Lang Sấy Mật Ong',        'mon-ngon-que-nha', 30000, 23000, 'Khoai lang mật trồng tự nhiên, sấy dẻo với mật ong nguyên chất, ngọt thanh.', 4.8, 540, 180, true),
('Bánh Đúc Lạc Mắm Tôm',         'mon-ngon-que-nha', 25000, 19000, 'Bánh đúc lạc truyền thống miền Bắc, ăn kèm mắm tôm sả ớt đậm đà.', 4.5, 260, 100, true),

-- ── ME - XI MUỐI ────────────────────────────────────────────
('Me Chua Ngọt Rim Muối Ớt',      'me-xi-muoi',    22000,  17000, 'Me chín cây rim muối ớt chua ngọt cay, đóng gói vệ sinh sạch sẽ.', 4.9, 920, 300, true),
('Xi Muối Dâu Tằm',               'me-xi-muoi',    18000,  14000, 'Xi muối dâu tằm màu đẹp, vị chua ngọt mặn đặc trưng, giải nhiệt mùa hè.', 4.7, 680, 250, true),

-- ── TRÁI CÂY SẤY ────────────────────────────────────────────
('Xoài Sấy Dẻo Không Đường',      'trai-cay-say',  45000,  34000, 'Xoài Cát Hòa Lộc sấy dẻo, không thêm đường, giữ nguyên vị ngọt tự nhiên.', 4.9, 760, 200, true),
('Mít Sấy Giòn Nguyên Múi',       'trai-cay-say',  50000,  38000, 'Mít tố nữ sấy giòn nguyên múi, thơm ngậy, giòn tan – không chất phụ gia.', 4.8, 630, 180, true),

-- ── RONG BIỂN ───────────────────────────────────────────────
('Rong Biển Tẩm Gia Vị Hàn Quốc', 'rong-bien',     32000,  24000, 'Rong biển nhập khẩu Hàn Quốc, giòn mỏng, tẩm dầu mè thơm béo ngậy.', 4.8, 870, 300, true),

-- ── ĐỒ ĂN VẶT NHẬP KHẨU ────────────────────────────────────
('Pocky Matcha Nhật Bản',          'nhap-khau',     48000,  37000, 'Bánh que Pocky vị matcha Nhật, lớp socola matcha đắng nhẹ hòa quyện bánh giòn.', 4.9, 550, 120, true),
('Snack Cay Buldak Hàn Quốc',     'nhap-khau',     42000,  32000, 'Snack gà cay 2x nổi tiếng Hàn Quốc – thử thách vị cay cho người gan dạ.', 4.7, 480, 100, true),

-- ── TRÀ - NƯỚC GIẢI NHIỆT ───────────────────────────────────
('Trà Ô Long Đài Loan Gói 50g',   'tra-nuoc',      55000,  42000, 'Trà ô long cao sơn Đài Loan, hương thơm thanh tao, vị ngọt hậu dịu nhẹ.', 4.8, 410, 150, true),
('Sâm Bí Đao Tươi Đóng Gói',      'tra-nuoc',      25000,  19000, 'Sâm bí đao tươi thanh nhiệt giải độc, đóng gói lạnh tiện lợi.', 4.6, 580, 200, true),

-- ── KẸO ─────────────────────────────────────────────────────
('Kẹo Dừa Bến Tre Gói 300g',      'keo',           45000,  34000, 'Kẹo dừa Bến Tre dẻo thơm nguyên chất, gói đẹp làm quà biếu ý nghĩa.', 4.8, 730, 200, true),
('Kẹo Gừng Mật Ong',              'keo',           28000,  21000, 'Kẹo gừng mật ong ấm bụng, vị cay dịu nhẹ, tốt cho cổ họng và tiêu hóa.', 4.6, 390, 180, true),

-- ── BÁNH ────────────────────────────────────────────────────
('Bánh Pía Đậu Xanh Sầu Riêng',   'banh',          38000,  29000, 'Bánh pía Sóc Trăng nhân đậu xanh sầu riêng béo thơm, lớp vỏ xốp tan.', 4.7, 490, 150, true),
('Bánh In Bình Định Hộp 6 Cái',   'banh',          42000,  32000, 'Bánh in truyền thống Bình Định, nhân đậu xanh thơm, vỏ giòn tan, quà Tết ý nghĩa.', 4.6, 310, 100, true),

-- ── MỨT ─────────────────────────────────────────────────────
('Mứt Dừa Non Pandan 5 Màu',      'mut',           55000,  42000, 'Mứt dừa non nhiều màu sắc tự nhiên từ lá cẩm, lá pandan – quà Tết đặc sắc.', 4.8, 380, 100, true),
('Mứt Gừng Dẻo Mật Ong',          'mut',           35000,  27000, 'Mứt gừng dẻo ngào mật ong, vị cay dịu ấm bụng, đặc biệt hợp dịp Tết.', 4.5, 270, 120, true),

-- ── ĐẬU - HẠT DINH DƯỠNG ───────────────────────────────────
('Hạt Điều Rang Muối Biển 200g',   'dau-hat',       75000,  57000, 'Hạt điều W240 rang muối biển thủ công, vàng đều, giòn bùi, không dầu chiên.', 4.9, 640, 150, true),
('Hạt Dẻ Cười Rang Muối 250g',    'dau-hat',       68000,  52000, 'Hạt dẻ cười nhập khẩu rang muối chuẩn vị, bổ dưỡng, ăn vặt lành mạnh.', 4.7, 420, 120, true),

-- ── BÁNH HẠT - ĂN VẶT HEALTHY ──────────────────────────────
('Thanh Granola Hạt Yến Mạch',    'banh-hat-healthy', 35000, 27000, 'Granola nguyên hạt, không đường tinh luyện, ăn kèm sữa chua hoặc ăn trực tiếp.', 4.7, 390, 180, true),
('Bánh Gạo Lứt Rong Biển',        'banh-hat-healthy', 28000, 21000, 'Bánh gạo lứt ít calo, giòn nhẹ, tẩm rong biển tự nhiên – bữa phụ lành mạnh.', 4.5, 310, 200, true),

-- ── MÓN CHẾ BIẾN SẴN ────────────────────────────────────────
('Chả Giò Tôm Thịt Chân Không',   'mon-che-bien',  65000,  50000, 'Chả giò nhân tôm thịt rau củ, chiên vàng giòn, đóng gói hút chân không tiện lợi.', 4.8, 470, 100, true),

-- ── GIA VỊ ──────────────────────────────────────────────────
('Muối Ớt Tôm Tây Ninh',           'gia-vi',        22000,  17000, 'Muối ớt tôm Tây Ninh chuẩn vị, màu đỏ tươi, thơm tôm khô – chấm trái cây ngon tuyệt.', 4.9, 1100, 500, true),
('Nước Mắm Nhĩ Phú Quốc 500ml',   'gia-vi',        65000,  50000, 'Nước mắm nhĩ cốt đầu Phú Quốc, độ đạm 40N, hương thơm tự nhiên đặc trưng.', 4.9, 560, 150, true),

-- ── GIÒ - CHẢ - NEM ─────────────────────────────────────────
('Nem Chua Thanh Hóa 10 Cái',     'gio-cha-nem',   45000,  34000, 'Nem chua đặc sản Thanh Hóa, vị chua cay đậm, lá chuối gói tươi mỗi ngày.', 4.8, 640, 200, true),
('Giò Thủ Truyền Thống 300g',     'gio-cha-nem',   55000,  42000, 'Giò thủ dai giòn sần sật, đậm vị gia vị, cắt lát ăn kèm dưa leo bánh mì.', 4.6, 380, 80,  true),

-- ── TÔM ─────────────────────────────────────────────────────
('Tôm Khô Cà Mau Loại 1 100g',    'tom',           85000,  65000, 'Tôm khô Cà Mau size lớn, đỏ tươi tự nhiên, thịt dày ngọt – nấu canh hay ăn trực tiếp.', 4.9, 720, 100, true),
('Tôm Sú Sấy Giòn Muối Ớt',      'tom',           60000,  46000, 'Tôm sú sấy giòn tẩm muối ớt cay nhẹ, ăn vặt đậm đà giàu đạm.', 4.7, 480, 150, true),

-- ── LẠP XƯỞNG ───────────────────────────────────────────────
('Lạp Xưởng Tươi Mai Quế Lộ 500g','lap-xuong',     95000,  72000, 'Lạp xưởng tươi ướp mai quế lộ thơm nức, hấp hoặc nướng đều ngon, đóng gói chân không.', 4.8, 560, 80,  true),

-- ── MÓN CHAY ────────────────────────────────────────────────
('Khô Chay Sốt Sa Tế',            'mon-chay',      42000,  32000, 'Khô chay từ đậu nành non, sốt sa tế cay đậm, không tanh, không cholesterol.', 4.7, 390, 150, true),
('Nem Chay Cuốn Lá Chuối',        'mon-chay',      38000,  29000, 'Nem chay nhân nấm mộc nhĩ rau củ, cuốn lá chuối thơm, chiên vàng giòn rụm.', 4.6, 280, 100, true);

-- ============================================================
-- Kiểm tra kết quả
-- ============================================================
select id, name, category, price, wholesale_price from products order by category, id;
