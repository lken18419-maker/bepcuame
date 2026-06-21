// ===== PRODUCT DATA =====
// price = giá lẻ | wholesale_price = giá sỉ (hiển thị trên thẻ sản phẩm)
// Giảm tự động trong giỏ: mua ≥10 SKU/món → -5%, ≥30 SKU/món → -10%
let products = [
  {
    id: 1,  name: "Rong Biển Cháy Tỏi",
    img: null, emoji: "🌿", category: "rong-bien",
    price: 180000, wholesale_price: 144000,
    badge: "Hot", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.9, reviews: 320,
    description: "Rong biển Hàn Quốc tẩm gia vị tỏi thơm, nướng giòn tan. Ăn kèm cơm hoặc nhâm nhi là ngon tuyệt. Đóng gói hút chân không giữ độ giòn lâu.",
  },
  {
    id: 2,  name: "Khô Heo Dẻo Mix Tỏi Lý Sơn",
    img: null, emoji: "🐷", category: "heo",
    price: 290000, wholesale_price: 232000,
    badge: "Bán chạy", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.9, reviews: 215,
    description: "Thịt heo chọn lọc, tẩm tỏi Lý Sơn đặc sản, sấy dẻo mềm đúng vị. Thơm ngon, không chất bảo quản. Sản phẩm bán chạy nhất tại Bếp Của Mẹ.",
  },
  {
    id: 3,  name: "Khô Heo Cháy Tỏi",
    img: null, emoji: "🥓", category: "heo",
    price: 290000, wholesale_price: 232000,
    badge: "Hot", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.8, reviews: 180,
  },
  {
    id: 4,  name: "Thiêu Sợi Nướng Than",
    img: null, emoji: "🔥", category: "mon-che-bien",
    price: 190000, wholesale_price: 152000,
    badge: "Bán chạy", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.8, reviews: 290,
  },
  {
    id: 5,  name: "Khô Bò Đen Rim Sả Ớt Kèm Nước Bò",
    img: null, emoji: "🥩", category: "bo",
    price: 180000, wholesale_price: 144000,
    badge: "Yêu thích", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.9, reviews: 410,
    description: "Bò rim sả ớt cháy cạnh, kèm hũ nước bò cô đặc đậm đà. Cay thơm đúng điệu, ăn một lần là nhớ mãi. Được khách hàng yêu thích nhất trong dòng bò khô.",
  },
  {
    id: 6,  name: "Khô Dừa Tẩm Muối Ớt",
    img: null, emoji: "🥥", category: "trai-cay-say",
    price: 180000, wholesale_price: 144000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.6, reviews: 175,
  },
  {
    id: 7,  name: "Da Heo Chiên Giòn Tỏi Ớt",
    img: null, emoji: "🍖", category: "heo",
    price: 120000, wholesale_price: 96000,
    badge: "Sale", badge_type: "sale",
    origin: "🇻🇳 Việt Nam", rating: 4.7, reviews: 198,
  },
  {
    id: 8,  name: "Bánh Tráng Hành Phi",
    img: null, emoji: "🫓", category: "banh-trang",
    price: 120000, wholesale_price: 96000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.5, reviews: 160,
  },
  {
    id: 9,  name: "Bánh Tráng Vỏ Ớt Rim",
    img: null, emoji: "🌶️", category: "banh-trang",
    price: 90000, wholesale_price: 72000,
    badge: "Sale", badge_type: "sale",
    origin: "🇻🇳 Việt Nam", rating: 4.7, reviews: 330,
  },
  {
    id: 10, name: "Set Bánh Tráng Sài Gòn",
    img: null, emoji: "🎁", category: "banh-trang",
    price: 220000, wholesale_price: 176000,
    badge: "Mới", badge_type: "new",
    origin: "🇻🇳 Việt Nam", rating: 4.8, reviews: 140,
  },
  {
    id: 11, name: "Đậu Tầm Rim Me Hạt Dẻo",
    img: null, emoji: "🫛", category: "dau-hat",
    price: 180000, wholesale_price: 144000,
    badge: "Hot", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.9, reviews: 260,
  },
  {
    id: 12, name: "Đá Me Tắc Hạt Dẻo",
    img: null, emoji: "🍋", category: "me-xi-muoi",
    price: 160000, wholesale_price: 128000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.8, reviews: 380,
  },
  {
    id: 13, name: "Chùm Ruột Rim Muối Tắc",
    img: null, emoji: "🍊", category: "trai-cay-say",
    price: 160000, wholesale_price: 128000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.7, reviews: 220,
  },
  {
    id: 14, name: "Bưởi Rim Sắc Đường Phèn",
    img: null, emoji: "🍈", category: "trai-cay-say",
    price: 160000, wholesale_price: 128000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.6, reviews: 195,
  },
  {
    id: 15, name: "Hành Phi Bắc Loại 1",
    img: null, emoji: "🧅", category: "gia-vi",
    price: 160000, wholesale_price: 128000,
    badge: "Bán chạy", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.9, reviews: 500,
    description: "Hành phi Bắc loại 1, giòn thơm, màu vàng óng tự nhiên. Dùng để rắc cháo, bún, phở, hay các món ăn hàng ngày. Đóng gói hút chân không, bảo quản lâu.",
  },
  {
    id: 16, name: "Bánh Bột Lọc Chín",
    img: null, emoji: "🍡", category: "mon-che-bien",
    price: 120000, wholesale_price: 96000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.7, reviews: 210,
  },
  {
    id: 17, name: "Bánh Ít Nếp Xào (5 cái)",
    img: null, emoji: "🥟", category: "mon-che-bien",
    price: 80000, wholesale_price: 64000,
    badge: "Sale", badge_type: "sale",
    origin: "🇻🇳 Việt Nam", rating: 4.6, reviews: 145,
  },
  {
    id: 18, name: "Bánh Ít Nếp Xào (10 cái)",
    img: null, emoji: "🥟", category: "mon-che-bien",
    price: 150000, wholesale_price: 120000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.6, reviews: 112,
  },
  {
    id: 19, name: "Dồi Sả Ớt Kèm Mắm Nêm",
    img: null, emoji: "🌭", category: "mon-che-bien",
    price: 190000, wholesale_price: 152000,
    badge: "Hot", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.8, reviews: 275,
  },
  {
    id: 20, name: "Chả Đùm Trứng",
    img: null, emoji: "🥚", category: "gio-cha-nem",
    price: 180000, wholesale_price: 144000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.7, reviews: 190,
  },
  {
    id: 21, name: "Chả Bách Hoa Lục Trứng",
    img: null, emoji: "🎆", category: "gio-cha-nem",
    price: 180000, wholesale_price: 144000,
    badge: "Mới", badge_type: "new",
    origin: "🇻🇳 Việt Nam", rating: 4.8, reviews: 130,
  },
  {
    id: 22, name: "Sốt Me Chua Cay",
    img: null, emoji: "🫙", category: "gia-vi",
    price: 140000, wholesale_price: 112000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.8, reviews: 310,
  },
  {
    id: 23, name: "Set Chấm Ngũ Vị",
    img: null, emoji: "🎁", category: "gia-vi",
    price: 230000, wholesale_price: 184000,
    badge: "Mới", badge_type: "new",
    origin: "🇻🇳 Việt Nam", rating: 4.9, reviews: 95,
  },
  {
    id: 24, name: "Set Chấm Đồ Nướng",
    img: null, emoji: "🔥", category: "gia-vi",
    price: 230000, wholesale_price: 184000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.8, reviews: 115,
  },
  {
    id: 25, name: "Set Chấm 3 Vị",
    img: null, emoji: "🫙", category: "gia-vi",
    price: 160000, wholesale_price: 128000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.7, reviews: 150,
  },
  {
    id: 26, name: "Set Chấm Chua Cay",
    img: null, emoji: "🌶️", category: "gia-vi",
    price: 160000, wholesale_price: 128000,
    badge: "Bán chạy", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.9, reviews: 240,
  },
  {
    id: 27, name: "Set Muối Ớt Tứ Xuyên",
    img: null, emoji: "🌶️", category: "gia-vi",
    price: 200000, wholesale_price: 160000,
    badge: "Hot", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.8, reviews: 185,
  },
  {
    id: 28, name: "Mắm Mực Chua Pha Sẵn",
    img: null, emoji: "🦑", category: "muc",
    price: 220000, wholesale_price: 176000,
    badge: "Bán chạy", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.8, reviews: 210,
  },
  {
    id: 29, name: "Mắm Gỏi Thịt Lọc Sợi Phi Lê",
    img: null, emoji: "🫙", category: "mon-che-bien",
    price: 180000, wholesale_price: 144000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.7, reviews: 165,
  },
  {
    id: 30, name: "Mắm Nêm Đà Nẵng",
    img: null, emoji: "🍶", category: "gia-vi",
    price: 140000, wholesale_price: 112000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.7, reviews: 280,
  },
  {
    id: 31, name: "Ba Khía Mắm Tắc",
    img: null, emoji: "🦀", category: "mon-che-bien",
    price: 120000, wholesale_price: 96000,
    badge: "Hot", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.9, reviews: 350,
    description: "Ba khía muối mắm tắc đặc sản miền Tây Nam Bộ. Vị mặn ngọt chua cay hài hòa, thịt ba khía chắc thơm. Ăn kèm cơm trắng nóng là cực phẩm.",
  },
  {
    id: 32, name: "Cá Cơm Biển Lớn Kho Cay",
    img: null, emoji: "🐟", category: "ca",
    price: 260000, wholesale_price: 208000,
    badge: "Hot", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.9, reviews: 190,
  },
  {
    id: 33, name: "Cá Ngừ Nướng Ngâm Nước Mắm",
    img: null, emoji: "🐠", category: "ca",
    price: 220000, wholesale_price: 176000,
    badge: "Bán chạy", badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.8, reviews: 225,
  },
  {
    id: 34, name: "Kiều Quế Mắm Kẹo",
    img: null, emoji: "🍯", category: "mon-che-bien",
    price: 160000, wholesale_price: 128000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.6, reviews: 135,
  },
  {
    id: 35, name: "Kiều Quế Đường Nhỏ",
    img: null, emoji: "🍯", category: "mon-che-bien",
    price: 160000, wholesale_price: 128000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.6, reviews: 120,
  },
  {
    id: 36, name: "Kiều Quế Đường Lớn",
    img: null, emoji: "🍯", category: "mon-che-bien",
    price: 280000, wholesale_price: 224000,
    badge: "Mới", badge_type: "new",
    origin: "🇻🇳 Việt Nam", rating: 4.7, reviews: 85,
  },
  {
    id: 37, name: "Nước Sâm 24 Vị",
    img: null, emoji: "🍵", category: "tra-nuoc",
    price: 95000, wholesale_price: 76000,
    badge: "Mới", badge_type: "new",
    origin: "🇻🇳 Việt Nam", rating: 4.8, reviews: 155,
  },
  {
    id: 38, name: "Nước Sâm Rong Biển Nhãn Nhục",
    img: null, emoji: "🍵", category: "tra-nuoc",
    price: 95000, wholesale_price: 76000,
    badge: null, badge_type: "",
    origin: "🇻🇳 Việt Nam", rating: 4.7, reviews: 110,
  },
];

// ===== TIER SYSTEM =====
const TIERS = [
  { key: 'diamond', name: 'Kim Cương', icon: '💎', min: 15_000_000, discount: 0.20,
    color: '#00D4FF', bg: 'linear-gradient(135deg,#0044CC,#00D4FF)', next: null },
  { key: 'platinum', name: 'Bạch Kim', icon: '🏆', min: 10_000_000, discount: 0.15,
    color: '#C8C8E0', bg: 'linear-gradient(135deg,#7070A0,#C8C8E0)', next: 'diamond' },
  { key: 'gold',    name: 'Vàng',     icon: '🥇', min:  8_000_000, discount: 0.10,
    color: '#FFD700', bg: 'linear-gradient(135deg,#E0A000,#FFD700)', next: 'platinum' },
  { key: 'silver',  name: 'Bạc',      icon: '🥈', min:  5_000_000, discount: 0.05,
    color: '#C0C0C0', bg: 'linear-gradient(135deg,#888888,#C8C8C8)', next: 'gold' },
  { key: 'bronze',  name: 'Đồng',     icon: '🥉', min:  3_000_000, discount: 0.03,
    color: '#CD7F32', bg: 'linear-gradient(135deg,#8B4500,#CD7F32)', next: 'silver' },
  { key: 'member',  name: 'Thành Viên',icon: '👤', min:  0,         discount: 0,
    color: '#7878A0', bg: 'linear-gradient(135deg,#444460,#7878A0)', next: 'bronze' },
];

function getTier(totalSpent) {
  return TIERS.find(t => totalSpent >= t.min) || TIERS[TIERS.length - 1];
}
function getNextTier(totalSpent) {
  const cur = getTier(totalSpent);
  return cur.next ? TIERS.find(t => t.key === cur.next) : null;
}

// ===== SKU BULK DISCOUNT =====
// ≥10 SKU/món → -5% | ≥30 SKU/món → -10% (áp dụng trên giá lẻ, trước giảm hạng)
function getSkuDiscount(qty) {
  if (qty >= 30) return 0.10;
  if (qty >= 10) return 0.05;
  return 0;
}
function getEffectivePrice(price, qty) {
  const d = getSkuDiscount(qty);
  return d > 0 ? Math.round(price * (1 - d)) : price;
}
function isWholesaleUser() {
  return getCurrentUser()?.customerType === 'wholesale';
}
// Returns effective unit price for a cart item based on customer type + bulk qty
function getItemPrice(item) {
  if (isWholesaleUser()) return item.wholesale_price || item.price;
  return getEffectivePrice(item.price, item.qty || 1);
}

// ===== SUPABASE BACKEND =====
// Tạo project tại supabase.com → Settings → API → dán vào đây
const SUPABASE_URL      = 'https://iupxywqjwichfkhfurmu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ZCEiZAW29XvclKz7xCoTSQ_5ctA7wVN';

const _sb = (SUPABASE_URL && SUPABASE_ANON_KEY)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

// ===== STRIPE PAYMENT =====
const STRIPE_PUB_KEY = ''; // ← 'pk_live_...' hoặc 'pk_test_...'
const _stripe = STRIPE_PUB_KEY ? window.Stripe(STRIPE_PUB_KEY) : null;

// Email reset dùng Supabase Edge Function + Resend (cấu hình qua supabase secrets)

// ===== USER STORAGE =====
function getUsers()       { return JSON.parse(localStorage.getItem('bcm_users') || '{}'); }
function saveUsers(u)     { localStorage.setItem('bcm_users', JSON.stringify(u)); }
function getCurrentUser() {
  const id = localStorage.getItem('bcm_current');
  if (!id) return null;
  return getUsers()[id] || null;
}
function setCurrentUser(id) {
  if (id) localStorage.setItem('bcm_current', id);
  else localStorage.removeItem('bcm_current');
}

function simpleHash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h) ^ str.charCodeAt(i);
  return (h >>> 0).toString(36);
}

async function authRegister(name, phone, email, password, customerType = 'retail') {
  const hash = simpleHash(password);
  const id   = 'u_' + phone.replace(/\D/g, '');

  // 1. Supabase
  if (_sb) {
    const { data: existing } = await _sb.from('users').select('id').eq('phone', phone).maybeSingle();
    if (existing) return { ok: false, msg: 'Số điện thoại đã được đăng ký!' };
    const { error } = await _sb.from('users').insert({
      id, name, phone, email, password_hash: hash,
      total_spent: 0, tier: 'member', order_count: 0, customer_type: customerType,
    });
    if (error) return { ok: false, msg: 'Lỗi đăng ký, thử lại!' };
  } else {
    // 2. Fallback: localStorage
    const users = getUsers();
    if (users[id]) return { ok: false, msg: 'Số điện thoại đã được đăng ký!' };
    users[id] = { id, name, phone, email, password: hash,
                  totalSpent: 0, orders: [], customerType, createdAt: new Date().toISOString() };
    saveUsers(users);
  }

  // Cache session
  const users = getUsers();
  users[id] = { id, name, phone, email, password: hash,
                totalSpent: 0, orders: [], customerType, createdAt: new Date().toISOString() };
  saveUsers(users);
  setCurrentUser(id);
  return { ok: true };
}

async function authLogin(phone, password) {
  const hash = simpleHash(password);
  const id   = 'u_' + phone.replace(/\D/g, '');

  // 1. Supabase
  if (_sb) {
    const { data: u, error } = await _sb.from('users').select('*').eq('phone', phone).maybeSingle();
    if (!u || error) return { ok: false, msg: 'Số điện thoại chưa đăng ký!' };
    if (u.password_hash !== hash) return { ok: false, msg: 'Mật khẩu không đúng!' };
    // Đồng bộ điểm & hạng từ server
    const users = getUsers();
    users[u.id] = { ...(users[u.id] || {}),
      id: u.id, name: u.name, phone: u.phone, password: hash,
      totalSpent: u.total_spent || 0, tier: u.tier || 'member',
      customerType: u.customer_type || 'retail',
      orders: users[u.id]?.orders || [],
    };
    saveUsers(users);
    setCurrentUser(u.id);
    // Flush điểm/đơn hàng bị queue khi mạng yếu lần trước
    flushPendingPoints();
    flushPendingOrders();
    return { ok: true };
  }

  // 2. Fallback: localStorage
  const users = getUsers();
  const user  = users[id];
  if (!user) return { ok: false, msg: 'Số điện thoại chưa đăng ký!' };
  if (user.password !== hash) return { ok: false, msg: 'Mật khẩu không đúng!' };
  setCurrentUser(id);
  return { ok: true };
}

function authLogout() {
  setCurrentUser(null);
  updateHeaderUser();
  showToast('👋 Đã đăng xuất');
}

// ===== SUPABASE RETRY & OFFLINE SYNC QUEUE =====
const _POINTS_Q = 'bcm_pending_points';
const _ORDERS_Q = 'bcm_pending_orders';

// Thử lại fn() tối đa maxAttempts lần, mỗi lần delay tăng dần
async function sbRetry(fn, maxAttempts = 3) {
  for (let i = 0; i < maxAttempts; i++) {
    const result = await fn();
    if (!result.error) return { ok: true };
    if (i < maxAttempts - 1) await new Promise(r => setTimeout(r, 700 * (i + 1)));
  }
  return { ok: false };
}

// Lưu điểm chờ đồng bộ — chỉ giữ bản mới nhất mỗi phone
function _queuePoints(phone, total_spent, tier, order_count) {
  const q = JSON.parse(localStorage.getItem(_POINTS_Q) || '[]');
  const kept = q.filter(x => x.phone !== phone);
  kept.push({ phone, total_spent, tier, order_count, ts: Date.now() });
  localStorage.setItem(_POINTS_Q, JSON.stringify(kept));
}

// Lưu đơn hàng chờ đồng bộ
function _queueOrder(payload) {
  const q = JSON.parse(localStorage.getItem(_ORDERS_Q) || '[]');
  q.push({ ...payload, ts: Date.now() });
  localStorage.setItem(_ORDERS_Q, JSON.stringify(q));
}

// Flush điểm tích lũy còn tồn đọng lên Supabase
async function flushPendingPoints() {
  if (!_sb) return;
  const q = JSON.parse(localStorage.getItem(_POINTS_Q) || '[]');
  if (!q.length) return;
  const failed = [];
  for (const item of q) {
    const { error } = await _sb.from('users').update({
      total_spent: item.total_spent, tier: item.tier, order_count: item.order_count,
    }).eq('phone', item.phone);
    if (error) failed.push(item);
  }
  localStorage.setItem(_POINTS_Q, JSON.stringify(failed));
  if (failed.length < q.length)
    console.info(`[BCM] Flushed ${q.length - failed.length} pending point sync(s)`);
}

// Flush đơn hàng còn tồn đọng lên Supabase
async function flushPendingOrders() {
  if (!_sb) return;
  const q = JSON.parse(localStorage.getItem(_ORDERS_Q) || '[]');
  if (!q.length) return;
  const failed = [];
  for (const o of q) {
    const { ts, ...payload } = o;
    const { error } = await _sb.from('orders').insert(payload);
    if (error) failed.push(o);
  }
  localStorage.setItem(_ORDERS_Q, JSON.stringify(failed));
  if (failed.length < q.length)
    console.info(`[BCM] Flushed ${q.length - failed.length} pending order(s)`);
}

async function addOrderToUser(orderData) {
  const user = getCurrentUser();

  // Chỉ tích điểm cho khách lẻ (rawTotal = baseTotal trước ship)
  const earnPoints = user && !orderData.isWholesale;
  const spentDelta = orderData.rawTotal || orderData.grandTotal;

  // Cập nhật localStorage ngay lập tức
  if (user) {
    const users = getUsers();
    if (earnPoints) {
      users[user.id].totalSpent = (users[user.id].totalSpent || 0) + spentDelta;
    }
    if (!users[user.id].orders) users[user.id].orders = [];
    users[user.id].orders.unshift({
      code: orderData.orderCode, date: new Date().toISOString(),
      items: orderData.items, total: orderData.grandTotal,
      address: orderData.address + ', ' + orderData.city,
    });
    saveUsers(users);
  }

  if (!_sb) return;

  // Gửi đơn hàng lên Supabase — retry 3 lần, fail thì queue
  const orderPayload = {
    order_code:   orderData.orderCode,
    user_phone:   orderData.userPhone || null,
    name:         orderData.name,
    phone:        orderData.phone,
    address:      orderData.address,
    city:         orderData.city,
    items:        orderData.items,
    sub_total:    orderData.subTotal,
    disc_amt:     orderData.discAmt,
    ship_fee:     orderData.shipFee,
    grand_total:  orderData.grandTotal,
    payment:      orderData.payment,
    note:         orderData.note || '',
    tier_name:    orderData.tierName || '',
    is_wholesale: orderData.isWholesale || false,
  };
  const { ok: orderOk } = await sbRetry(() => _sb.from('orders').insert(orderPayload));
  if (!orderOk) { _queueOrder(orderPayload); console.warn('[BCM] Order queued (network issue)'); }

  // Cập nhật điểm tích lũy — retry 3 lần, fail thì queue
  if (earnPoints && orderData.userPhone) {
    const newSpent = (user.totalSpent || 0) + spentDelta;
    const newTier  = getTier(newSpent).key;
    const orderCount = (user.orders?.length || 0) + 1;
    const { ok: ptOk } = await sbRetry(() =>
      _sb.from('users').update({ total_spent: newSpent, tier: newTier, order_count: orderCount })
        .eq('phone', orderData.userPhone)
    );
    if (!ptOk) { _queuePoints(orderData.userPhone, newSpent, newTier, orderCount); console.warn('[BCM] Points queued (network issue)'); }
  }
}

// ===== HEADER USER DISPLAY =====
function updateHeaderUser() {
  const user = getCurrentUser();
  const loginBtn  = document.getElementById('loginBtn');
  const userMenu  = document.getElementById('userMenu');
  if (!user) {
    loginBtn.style.display = '';
    userMenu.style.display = 'none';
    if (typeof getFiltered === 'function') renderProducts(getFiltered());
    return;
  }
  loginBtn.style.display = 'none';
  userMenu.style.display = '';
  const isWholesale = user.customerType === 'wholesale';
  const tier = isWholesale ? null : getTier(user.totalSpent);
  const tierBg = isWholesale
    ? 'linear-gradient(135deg,#4a7c59,#6db98a)'
    : tier.bg;
  const tierLabel = isWholesale ? '📦 Khách Sỉ' : (tier.icon + ' ' + tier.name);
  const initials = user.name.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase();
  document.getElementById('userAvatar').textContent = initials;
  document.getElementById('userAvatar').style.background = tierBg;
  document.getElementById('userMenuName').textContent = user.name.split(' ').pop();
  const pill = document.getElementById('userMenuTier');
  pill.textContent = tierLabel;
  pill.style.background = tierBg;
  // Re-render sản phẩm vì giá hiển thị phụ thuộc vào loại tài khoản
  if (typeof getFiltered === 'function') renderProducts(getFiltered());
}

// ===== AUTH MODAL =====
function openAuthModal(tab = 'login') {
  document.getElementById('authOverlay').classList.add('active');
  document.getElementById('authModal').classList.add('open');
  switchAuthTab(tab);
  document.body.style.overflow = 'hidden';
}
function closeAuthModal() {
  document.getElementById('authOverlay').classList.remove('active');
  document.getElementById('authModal').classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('authError').textContent = '';
}
function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(b => b.classList.remove('active'));
  const activeTab = document.querySelector(`.auth-tab[data-tab="${tab}"]`);
  if (activeTab) activeTab.classList.add('active');
  document.getElementById('loginForm').style.display    = tab === 'login'    ? '' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? '' : 'none';
  document.getElementById('forgotForm').style.display   = tab === 'forgot'   ? '' : 'none';
  document.getElementById('authError').textContent = '';
  // Ẩn tabs khi vào forgot
  document.querySelector('.auth-tabs').style.display = tab === 'forgot' ? 'none' : '';
}
function validatePhone(phone) {
  return /^[0-9]{10}$/.test(phone);
}

async function submitLogin(e) {
  e.preventDefault();
  const btn      = e.submitter || e.target.querySelector('button[type="submit"]');
  const origHTML = btn ? btn.innerHTML : '';
  const errEl    = document.getElementById('authError');

  const phone = document.getElementById('loginPhone').value.trim();
  const pass  = document.getElementById('loginPass').value;
  if (!validatePhone(phone)) {
    errEl.textContent = 'Số điện thoại phải đúng 10 chữ số!';
    return;
  }

  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Đang xử lý…'; }
  const res = await authLogin(phone, pass);
  if (btn) { btn.disabled = false; btn.innerHTML = origHTML; }

  if (!res.ok) { errEl.textContent = res.msg; return; }
  closeAuthModal();
  updateHeaderUser();
  showToast('👋 Chào mừng trở lại!');
}

async function submitRegister(e) {
  e.preventDefault();
  const btn      = e.submitter || e.target.querySelector('button[type="submit"]');
  const origHTML = btn ? btn.innerHTML : '';
  const errEl    = document.getElementById('authError');

  const name         = document.getElementById('regName').value.trim();
  const phone        = document.getElementById('regPhone').value.trim();
  const email        = document.getElementById('regEmail').value.trim();
  const pass         = document.getElementById('regPass').value;
  const pass2        = document.getElementById('regPass2').value;
  const ctypeEl      = document.querySelector('input[name="regCtype"]:checked');
  const customerType = ctypeEl ? ctypeEl.value : 'retail';
  if (!validatePhone(phone)) { errEl.textContent = 'Số điện thoại phải đúng 10 chữ số!'; return; }
  if (!email)                { errEl.textContent = 'Vui lòng nhập email!'; return; }
  if (pass.length < 6)       { errEl.textContent = 'Mật khẩu ít nhất 6 ký tự!'; return; }
  if (pass !== pass2)        { errEl.textContent = 'Mật khẩu xác nhận không khớp!'; return; }

  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Đang đăng ký…'; }
  const res = await authRegister(name, phone, email, pass, customerType);
  if (btn) { btn.disabled = false; btn.innerHTML = origHTML; }

  if (!res.ok) { errEl.textContent = res.msg; return; }
  closeAuthModal();
  updateHeaderUser();
  showToast('🎉 Đăng ký thành công! Chào mừng bạn!');
}

// ===== FORGOT PASSWORD =====
async function submitForgotPassword(e) {
  e.preventDefault();
  const phone = document.getElementById('fpPhone').value.trim();
  const btn   = document.getElementById('fpBtn');
  if (!validatePhone(phone)) { showToast('⚠️ Số điện thoại phải đúng 10 chữ số!'); return; }

  btn.disabled = true;
  btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Đang gửi…';

  // Tìm email theo SĐT
  let email = null;
  if (_sb) {
    const { data } = await _sb.from('users').select('email').eq('phone', phone).maybeSingle();
    email = data?.email;
  } else {
    const users = getUsers();
    const id = 'u_' + phone.replace(/\D/g, '');
    email = users[id]?.email;
  }

  if (!email) {
    showToast('❌ Không tìm thấy tài khoản với số điện thoại này!');
    btn.disabled = false;
    btn.innerHTML = 'Gửi link đặt lại <i class="fa fa-paper-plane"></i>';
    return;
  }

  // Tạo reset token (ngẫu nhiên)
  const token  = Math.random().toString(36).slice(2) + Date.now().toString(36);
  const expiry = Date.now() + 30 * 60 * 1000; // hết hạn sau 30 phút
  const resetUrl = `${location.origin}/password-reset.html?phone=${phone}&token=${token}`;

  // Lưu token
  if (_sb) {
    await _sb.from('password_resets').upsert({ phone, token, expires_at: new Date(expiry).toISOString() });
  } else {
    localStorage.setItem('bcm_reset_' + phone, JSON.stringify({ token, expiry }));
  }

  // Gửi email qua Supabase Edge Function (Resend)
  if (_sb) {
    try {
      // Lấy tên user để ghi vào email
      const { data: u } = await _sb.from('users').select('name').eq('phone', phone).maybeSingle();
      const { error } = await _sb.functions.invoke('send-reset-email', {
        body: { to_email: email, to_name: u?.name ?? '', reset_url: resetUrl },
      });
      if (error) throw error;
    } catch (err) {
      console.warn('Send email error:', err);
      showToast('❌ Lỗi gửi email! Kiểm tra Supabase Edge Function.');
      btn.disabled = false;
      btn.innerHTML = 'Gửi link đặt lại <i class="fa fa-paper-plane"></i>';
      return;
    }
  } else {
    // Chưa kết nối Supabase — hiện link trong Console để test
    console.info('%c[DEV] Reset URL:', 'color:#FF6B2B;font-weight:bold', resetUrl);
    showToast('⚠️ Chưa kết nối Supabase — xem Console để lấy link reset');
  }

  // Hiện thành công
  document.querySelector('#forgotForm form').style.display = 'none';
  document.getElementById('fpSuccess').style.display = '';
}

// ===== PROFILE PANEL =====
function openProfilePanel() {
  renderProfilePanel();
  document.getElementById('profileOverlay').classList.add('active');
  document.getElementById('profilePanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProfilePanel() {
  document.getElementById('profileOverlay').classList.remove('active');
  document.getElementById('profilePanel').classList.remove('open');
  document.body.style.overflow = '';
}
function renderProfilePanel() {
  const user = getCurrentUser();
  if (!user) return;
  const isWholesale = user.customerType === 'wholesale';
  const wsBg = 'linear-gradient(135deg,#4a7c59,#6db98a)';

  document.getElementById('ppAvatar').textContent =
    user.name.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase();

  document.getElementById('ppName').textContent  = user.name;
  document.getElementById('ppPhone').textContent = user.phone;

  if (isWholesale) {
    // Khách sỉ — không có hệ thống hạng
    document.getElementById('ppAvatar').style.background = wsBg;
    const tierCard = document.getElementById('ppTierCard');
    tierCard.style.background = wsBg;
    document.getElementById('ppTierIcon').textContent = '📦';
    document.getElementById('ppTierName').textContent = 'Khách Sỉ';
    document.getElementById('ppDiscount').textContent = 'Áp dụng giá sỉ trên tất cả sản phẩm';
    document.getElementById('ppSpent').textContent = '—';
    document.getElementById('ppProgressWrap').innerHTML = `
      <div class="pp-prog-label">
        <span style="color:#2F6B3F;font-weight:700">📦 Tài khoản khách sỉ không tích điểm thành viên</span>
      </div>`;
    document.getElementById('ppBenefits').innerHTML = `
      <div class="pp-benefit-row active" style="border-color:#2F6B3F">
        <span>📦 Giá sỉ tất cả sản phẩm</span>
        <span style="color:#2F6B3F;font-weight:800">~−20%</span>
        <span style="color:var(--text-muted);font-size:0.78rem">Luôn áp dụng</span>
      </div>
      <div class="pp-benefit-row">
        <span>🚚 Miễn phí giao hàng</span>
        <span style="color:#2F6B3F;font-weight:800">0đ</span>
        <span style="color:var(--text-muted);font-size:0.78rem">Đơn ≥ 700k</span>
      </div>`;
  } else {
    // Khách lẻ — hệ thống tích điểm
    const tier     = getTier(user.totalSpent);
    const nextTier = getNextTier(user.totalSpent);
    const spent    = user.totalSpent || 0;
    const progress = nextTier
      ? Math.min(((spent - tier.min) / (nextTier.min - tier.min)) * 100, 100)
      : 100;

    document.getElementById('ppAvatar').style.background = tier.bg;
    const tierCard = document.getElementById('ppTierCard');
    tierCard.style.background = tier.bg;
    document.getElementById('ppTierIcon').textContent = tier.icon;
    document.getElementById('ppTierName').textContent = tier.name;
    document.getElementById('ppDiscount').textContent =
      tier.discount > 0 ? `Giảm ${tier.discount * 100}% mỗi đơn` : 'Tích lũy để nhận ưu đãi';
    document.getElementById('ppSpent').textContent = formatPrice(spent);

    const progWrap = document.getElementById('ppProgressWrap');
    if (nextTier) {
      const remain = nextTier.min - spent;
      progWrap.innerHTML = `
        <div class="pp-prog-label">
          <span>Đến hạng <strong>${nextTier.icon} ${nextTier.name}</strong></span>
          <span>Còn <strong style="color:var(--amber)">${formatPrice(remain)}</strong></span>
        </div>
        <div class="pp-prog-bar"><div class="pp-prog-fill" style="width:${progress}%;background:${nextTier.bg}"></div></div>`;
    } else {
      progWrap.innerHTML = `<div class="pp-prog-label"><span>🏅 Bạn đã đạt hạng cao nhất!</span></div>`;
    }

    document.getElementById('ppBenefits').innerHTML = TIERS.filter(t => t.key !== 'member').map(t => `
      <div class="pp-benefit-row ${t.key === tier.key ? 'active' : ''}" style="${t.key === tier.key ? 'border-color:'+t.color : ''}">
        <span>${t.icon} ${t.name}</span>
        <span style="color:${t.color};font-weight:800">${t.discount > 0 ? '-' + (t.discount*100) + '%' : '0%'}</span>
        <span style="color:var(--text-muted);font-size:0.78rem">&gt; ${formatPrice(t.min)}</span>
      </div>`).join('');
  }

  loadOrderHistory();
}

// ===== STATE =====
let cart = [];
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'default';
let wishlist = new Set();

// ===== LOAD SẢN PHẨM TỪ SUPABASE =====
async function loadProducts() {
  if (!_sb) { renderProducts(products); return; }
  const { data, error } = await _sb.from('products').select('*').eq('active', true).order('id');
  if (error || !data?.length) { renderProducts(products); return; } // fallback hardcode
  // Map cột Supabase → định dạng hiện tại
  products = data.map(p => ({
    id:              p.id,
    name:            p.name,
    emoji:           p.emoji || '🍱',
    img:             p.image || p.img || null,
    category:        p.category || 'other',
    price:           Number(p.price),
    wholesale_price: p.wholesale_price ? Number(p.wholesale_price) : Math.round(Number(p.price) * 0.8),
    badge:           p.badge || null,
    badge_type:      p.badge_type || '',
    origin:          p.origin || '',
    rating:          Number(p.rating) || 5.0,
    reviews:         Number(p.reviews) || 0,
  }));
  renderProducts(products);
}

// ===== RENDER PRODUCTS =====
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < full; i++) stars += '<i class="fa fa-star"></i>';
  if (half) stars += '<i class="fa fa-star-half-alt"></i>';
  return stars;
}

function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="emoji">😢</div>
        <p>Không tìm thấy sản phẩm nào...</p>
      </div>`;
    return;
  }

  const wholesale = isWholesaleUser();

  grid.innerHTML = list.map((p, i) => {
    const wsPrice = p.wholesale_price || Math.round(p.price * 0.8);

    const priceSection = wholesale ? `
      <div class="price-grid">
        <div class="pg-col retail" style="opacity:.5;text-decoration:line-through">
          <span class="pg-lbl">Lẻ</span>
          <span class="pg-price">${formatPrice(p.price)}</span>
          <span class="pg-cond">—</span>
        </div>
        <div class="pg-col si5" style="flex:1.6;background:rgba(47,107,63,.12);border-radius:8px">
          <span class="pg-lbl" style="color:#2F6B3F;font-weight:800">📦 Sỉ</span>
          <span class="pg-price" style="color:#2F6B3F;font-size:1rem">${formatPrice(wsPrice)}</span>
          <span class="pg-cond" style="color:#2F6B3F">Giá của bạn</span>
        </div>
      </div>` : `
      <div class="price-grid">
        <div class="pg-col retail">
          <span class="pg-lbl">Lẻ</span>
          <span class="pg-price">${formatPrice(p.price)}</span>
          <span class="pg-cond">—</span>
        </div>
        <div class="pg-col si5">
          <span class="pg-lbl">Sỉ</span>
          <span class="pg-price">${formatPrice(wsPrice)}</span>
          <span class="pg-cond">TK sỉ</span>
        </div>
        <div class="pg-col si10">
          <span class="pg-lbl">Thành viên</span>
          <span class="pg-price" style="font-size:.72rem">Đến −20%</span>
          <span class="pg-cond">Tích điểm</span>
        </div>
      </div>`;

    return `
    <div class="product-card" style="animation-delay:${i * 0.07}s" onclick="openProductDetail(${p.id})">
      ${p.badge ? `<div class="product-badge badge-${p.badge_type}">${p.badge}</div>` : ''}
      <button class="wishlist-btn ${wishlist.has(p.id) ? 'active' : ''}"
        onclick="event.stopPropagation(); toggleWishlist(${p.id}, this)">
        <i class="${wishlist.has(p.id) ? 'fa' : 'far'} fa-heart"></i>
      </button>

      <div class="product-img-wrap">
        ${p.img
          ? `<img src="${p.img}" alt="${p.name}"/>`
          : `<div class="emoji-img">${p.emoji}</div>`}
      </div>

      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="rating-count">${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-footer">
          ${priceSection}
          <div class="pg-buy-section">
            <span class="pg-buy-label">MUA</span>
            <div class="pg-btn-row">
              <button class="pg-add-btn" onclick="event.stopPropagation();addToCartQty(${p.id},1)">+ 1 hộp</button>
              <button class="pg-add-btn si5-add" onclick="event.stopPropagation();addToCartQty(${p.id},5)">+ 5 hộp</button>
              <button class="pg-add-btn si10-add" onclick="event.stopPropagation();addToCartQty(${p.id},10)">+ 10 hộp</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function getFiltered() {
  let list = products.filter(p => {
    const matchCat    = currentCategory === 'all' || p.category === currentCategory;
    const matchSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCat && matchSearch;
  });
  switch (currentSort) {
    case 'price-asc':  return [...list].sort((a, b) => a.price - b.price);
    case 'price-desc': return [...list].sort((a, b) => b.price - a.price);
    case 'rating':     return [...list].sort((a, b) => b.rating - a.rating);
    case 'popular':    return [...list].sort((a, b) => b.reviews - a.reviews);
    default:           return list;
  }
}

function filterCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(getFiltered());
}

function sortProducts(val) {
  currentSort = val;
  renderProducts(getFiltered());
}

// ===== WISHLIST =====
function toggleWishlist(id, btn) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.classList.remove('active');
    btn.innerHTML = '<i class="far fa-heart"></i>';
    showToast('💔 Đã xoá khỏi yêu thích');
  } else {
    wishlist.add(id);
    btn.classList.add('active');
    btn.innerHTML = '<i class="fa fa-heart"></i>';
    showToast('❤️ Đã thêm vào yêu thích!');
  }
}

// ===== CART =====
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast(`✅ Đã thêm "${product.name}" vào giỏ!`);

  // Bounce animation on cart button
  const cartBtn = document.querySelector('.cart-btn');
  cartBtn.style.transform = 'scale(1.3)';
  setTimeout(() => cartBtn.style.transform = '', 250);
}

function addToCartQty(id, qty) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  updateCartUI();
  const inCart = cart.find(i => i.id === id);
  const disc = !isWholesaleUser() && inCart ? getSkuDiscount(inCart.qty) : 0;
  const discNote = disc > 0 ? ` 🎉 đang giảm −${disc * 100}%!` : '';
  showToast(`✅ Đã thêm ${qty} "${product.name}" vào giỏ!${discNote}`);
  const cartBtn = document.querySelector('.cart-btn');
  cartBtn.style.transform = 'scale(1.3)';
  setTimeout(() => cartBtn.style.transform = '', 250);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = total;

  const itemsEl = document.getElementById('cartItems');
  if (!cart.length) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="empty-emoji">🛒</div>
        <p>Giỏ hàng đang trống</p>
      </div>`;
  } else {
    const wholesale = isWholesaleUser();
    itemsEl.innerHTML = cart.map(item => {
      const effPrice  = getItemPrice(item);
      const skuD      = !wholesale && getSkuDiscount(item.qty);
      const isDisc    = (wholesale && item.wholesale_price && item.wholesale_price < item.price) || skuD > 0;
      const badge     = wholesale
        ? `<span class="sku-disc-badge">Giá sỉ</span>`
        : skuD > 0 ? `<span class="sku-disc-badge">−${skuD * 100}%</span>` : '';
      return `
      <div class="cart-item">
        <div class="ci-img">${item.img ? `<img src="${item.img}" style="width:100%;height:100%;object-fit:cover;border-radius:10px"/>` : item.emoji}</div>
        <div class="ci-body">
          <div class="ci-name">${item.name} ${badge}</div>
          <div class="ci-price">
            ${formatPrice(effPrice * item.qty)}
            ${isDisc ? `<span class="ci-price-orig">${formatPrice(item.price * item.qty)}</span>` : ''}
          </div>
          <div class="ci-controls">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Xoá">
          <i class="fa fa-trash"></i>
        </button>
      </div>`;
    }).join('');
  }

  const subTotal = cart.reduce((s, i) => s + getItemPrice(i) * i.qty, 0);
  const freeShip = subTotal >= 700000;
  const shipFee = freeShip ? 0 : 30000;
  const grandTotal = subTotal + shipFee;

  const shippingEl = document.getElementById('cartShipping');
  if (shippingEl) {
    shippingEl.innerHTML = freeShip
      ? `<span style="color:#22c55e;font-weight:700">✅ Miễn phí ship toàn quốc</span>`
      : `<div style="display:flex;justify-content:space-between;margin-bottom:6px">
           <span>Phí ship toàn quốc</span>
           <span style="font-weight:700">30.000đ</span>
         </div>
         <div style="font-size:0.78rem;color:var(--text-muted)">
           Mua thêm <strong style="color:var(--g-dark)">${formatPrice(700000 - subTotal)}</strong> để miễn phí ship
         </div>`;
  }
  document.getElementById('cartTotal').textContent = formatPrice(grandTotal);
}

// ===== CART TOGGLE =====
function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('active');
}

// ===== CHECKOUT MODAL =====
function checkout() {
  if (!cart.length) { showToast('🛒 Giỏ hàng đang trống!'); return; }
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
  renderCheckoutSummary();
  // Tự điền thông tin nếu đã đăng nhập
  const user = getCurrentUser();
  if (user) {
    const nameEl  = document.getElementById('co-name');
    const phoneEl = document.getElementById('co-phone');
    if (nameEl  && !nameEl.value)  nameEl.value  = user.name;
    if (phoneEl && !phoneEl.value) phoneEl.value = user.phone;
  }
  document.getElementById('checkoutModal').classList.add('open');
  document.getElementById('checkoutOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.getElementById('checkoutOverlay').classList.remove('active');
  document.body.style.overflow = '';
  // Xóa success nếu có
  const s = document.querySelector('.co-success');
  if (s) s.remove();
}

function renderCheckoutSummary() {
  const wholesale  = isWholesaleUser();
  const user       = getCurrentUser();
  const tier       = (!wholesale && user) ? getTier(user.totalSpent) : null;
  const tierDisc   = tier ? tier.discount : 0;

  const retailTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const baseTotal   = cart.reduce((s, i) => s + getItemPrice(i) * i.qty, 0);
  const wholeSave   = wholesale ? retailTotal - baseTotal : 0;
  const skuSaveAmt  = !wholesale ? retailTotal - baseTotal : 0;
  const tierAmt     = Math.round(baseTotal * tierDisc);
  const afterDisc   = baseTotal - tierAmt;
  const freeShip    = baseTotal >= 700000;
  const shipFee     = freeShip ? 0 : 30000;
  const grand       = afterDisc + shipFee;

  document.getElementById('coOrderItems').innerHTML = cart.map(item => {
    const effP  = getItemPrice(item);
    const skuD  = !wholesale && getSkuDiscount(item.qty);
    const badge = wholesale && item.wholesale_price && item.wholesale_price < item.price
      ? ` <span class="sku-disc-badge">Giá sỉ</span>`
      : skuD > 0 ? ` <span class="sku-disc-badge">−${skuD * 100}%</span>` : '';
    return `
    <div class="co-order-item">
      <div class="co-item-emoji">${item.img ? `<img src="${item.img}" style="width:44px;height:44px;object-fit:cover;border-radius:8px"/>` : item.emoji}</div>
      <div class="co-item-body">
        <div class="co-item-name">${item.name}${badge}</div>
        <div class="co-item-qty">x${item.qty} × ${formatPrice(effP)}</div>
      </div>
      <div class="co-item-price">${formatPrice(effP * item.qty)}</div>
    </div>`;
  }).join('');

  const discRows = [];
  if (wholesale && wholeSave > 0)
    discRows.push(`<div class="co-summary-row" style="color:#2F6B3F;font-weight:700">
      <span>📦 Giảm giá sỉ</span><span>-${formatPrice(wholeSave)}</span></div>`);
  if (!wholesale && skuSaveAmt > 0)
    discRows.push(`<div class="co-summary-row" style="color:var(--orange);font-weight:700">
      <span>📦 Giảm giá số lượng</span><span>-${formatPrice(skuSaveAmt)}</span></div>`);
  if (!wholesale && tier && tierDisc > 0)
    discRows.push(`<div class="co-summary-row" style="color:var(--green);font-weight:700">
      <span>${tier.icon} Ưu đãi ${tier.name} (${tierDisc*100}%)</span><span>-${formatPrice(tierAmt)}</span></div>`);
  const discRow = discRows.join('');

  const wholesaleNotice = wholesale ? `
    <div style="background:#fff3cd;border:1.5px solid #ffc107;border-radius:8px;padding:9px 12px;font-size:.8rem;color:#856404;margin:0 0 8px">
      📦 <strong>Tài khoản khách sỉ:</strong> áp dụng giá sỉ, không tích điểm thành viên
    </div>` : '';

  const loginHint = (!user && !wholesale) ? `
    <div class="co-login-hint">
      <i class="fa fa-tag"></i>
      <span><a href="#" onclick="event.preventDefault();closeCheckout();openAuthModal('login')">Đăng nhập</a> để dùng ưu đãi thành viên</span>
    </div>` : '';

  document.getElementById('coOrderSummary').innerHTML = `
    ${wholesaleNotice}${loginHint}
    <div class="co-summary-row">
      <span>Tạm tính (${cart.reduce((s,i)=>s+i.qty,0)} món)</span>
      <span>${formatPrice(wholesale ? retailTotal : baseTotal)}</span>
    </div>
    ${discRow}
    <div class="co-summary-row ${freeShip ? 'free-ship' : ''}">
      <span>Phí giao hàng</span>
      <span>${freeShip ? '✅ Miễn phí' : formatPrice(shipFee)}</span>
    </div>
    <div class="co-summary-row total">
      <span>Tổng thanh toán</span>
      <span>${formatPrice(grand)}</span>
    </div>
  `;
}

function updatePaymentInfo() {
  const val = document.getElementById('co-payment').value;
  const map = {
    transfer: `<div class="payment-box">
      🏦 <strong>TPBank</strong> · TK: <strong>0410 0396 001</strong> · CTK: <strong>ĐẶNG BẢO NGỌC</strong><br/>
      <span style="font-size:0.8rem;color:var(--text-muted)">Nội dung: [Tên] + [SĐT] + Bếp Của Mẹ</span>
      <div style="margin-top:10px;text-align:center">
        <img src="images/qr-tpbank.png" alt="QR" style="max-width:150px;border-radius:10px;border:2px solid #F7D080" onerror="this.style.display='none'"/>
      </div>
    </div>`,
    momo:   `<div class="payment-box" style="color:#a259f7">💜 <strong>MoMo</strong> — Bạn sẽ được chuyển sang trang thanh toán MoMo sau khi xác nhận đơn.</div>`,
    vnpay:  `<div class="payment-box" style="color:#1a6de0">🏧 <strong>VNPay</strong> — Bạn sẽ được chuyển sang cổng VNPay (ATM / Thẻ ngân hàng / QR).</div>`,
    cod:    `<div class="payment-box">💵 <strong>COD</strong> – Thanh toán khi nhận hàng, không cần chuyển khoản trước.</div>`,
  };
  const el = document.getElementById('co-payment-info');
  if (el) el.innerHTML = map[val] || '';
}

// Gọi Supabase Edge Function để tạo link thanh toán
async function createPaymentUrl(method, orderCode, amount) {
  if (!_sb) return null;
  try {
    const fnName = method === 'momo' ? 'momo-pay' : 'vnpay-pay';
    const { data, error } = await _sb.functions.invoke(fnName, {
      body: { orderCode, amount, orderInfo: `Bep Cua Me - ${orderCode}` },
    });
    if (error || !data?.ok) return null;
    return data.payUrl;
  } catch { return null; }
}

async function submitCheckout(e) {
  e.preventDefault();
  const name    = document.getElementById('co-name').value.trim();
  const phone   = document.getElementById('co-phone').value.trim();
  const address = document.getElementById('co-address').value.trim();
  const city    = document.getElementById('co-city').value;
  const payment = document.getElementById('co-payment').value;
  const note    = (document.getElementById('co-note') || {}).value?.trim() || '';
  if (!validatePhone(phone)) {
    document.getElementById('co-phone').focus();
    showToast('⚠️ Số điện thoại phải đúng 10 chữ số!');
    return;
  }

  // Tạo mã đơn hàng ngẫu nhiên
  const orderCode    = 'BCM' + Date.now().toString().slice(-6);
  const wholesale    = isWholesaleUser();
  const user         = getCurrentUser();
  const tier         = (!wholesale && user) ? getTier(user.totalSpent) : null;
  const tierDisc     = tier ? tier.discount : 0;
  const retailTotal  = cart.reduce((s,i) => s+i.price*i.qty, 0);
  const baseTotal    = cart.reduce((s,i) => s+getItemPrice(i)*i.qty, 0);
  const wholeSave    = wholesale
    ? cart.reduce((s,i) => s+(i.price-(i.wholesale_price||i.price))*i.qty, 0)
    : 0;
  const tierAmt      = Math.round(baseTotal * tierDisc);
  const discAmt      = wholeSave + tierAmt;
  const afterDisc    = baseTotal - tierAmt;
  const subTotal     = wholesale ? retailTotal : baseTotal;
  // Free ship tính trên baseTotal (trước tier discount), đồng bộ cart sidebar
  const shipFee      = baseTotal >= 700000 ? 0 : 30000;
  const grandTotal   = afterDisc + shipFee;
  const paymentLabel = { cod: 'COD', transfer: 'Chuyển khoản', momo: 'MoMo', vnpay: 'VNPay' }[payment] || payment;
  const itemsStr     = cart.map(i => `${i.name} x${i.qty}`).join(', ');

  // Lưu đơn hàng
  addOrderToUser({
    orderCode, name, phone, address, city,
    items: itemsStr, subTotal, discAmt, shipFee, grandTotal,
    payment, note,
    userPhone: user ? user.phone : '',
    tierName:  tier ? tier.name : '',
    isWholesale: wholesale,
    rawTotal:    baseTotal,   // Bug 3 fix: dùng baseTotal (giá đã áp sỉ) không phải grandTotal
  });
  updateHeaderUser();

  // MoMo / VNPay → redirect sang cổng thanh toán
  if (payment === 'momo' || payment === 'vnpay') {
    const btn = document.querySelector('#checkoutForm button[type="submit"]');
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Đang kết nối…'; }
    const payUrl = await createPaymentUrl(payment, orderCode, grandTotal);
    if (payUrl) {
      cart = [];
      updateCartUI();
      window.location.href = payUrl;
      return;
    }
    // Nếu chưa cấu hình Edge Function — thông báo và tiếp tục như COD
    showToast('⚠️ Cổng thanh toán chưa được kích hoạt. Đơn vẫn được ghi nhận.');
    if (btn) { btn.disabled = false; btn.innerHTML = 'Xác nhận đặt hàng <i class="fa fa-check"></i>'; }
  }

  cart = [];
  updateCartUI();

  // Hiện màn hình thành công (COD / Chuyển khoản)
  const modal = document.getElementById('checkoutModal');
  const success = document.createElement('div');
  success.className = 'co-success';
  success.innerHTML = `
    <div class="success-icon"><i class="fa fa-check"></i></div>
    <h3>Đặt hàng thành công! 🎉</h3>
    <p>Cảm ơn <strong>${name}</strong>! Đơn hàng của bạn đang được xử lý.<br/>
       Chúng tôi sẽ gọi <strong>${phone}</strong> để xác nhận trong vòng <strong>15 phút</strong>.</p>
    <div class="order-code">${orderCode}</div>
    <div style="font-size:0.82rem;color:var(--text-muted);text-align:center;line-height:1.8">
      Giao đến: ${address}, ${city}<br/>
      Tổng tiền: <strong style="color:var(--red)">${formatPrice(grandTotal)}</strong> · ${paymentLabel}
      ${discAmt > 0 ? `<br/><span style="color:var(--green)">✅ Đã tiết kiệm ${formatPrice(discAmt)}${wholeSave > 0 ? ` (giá sỉ: ${formatPrice(wholeSave)}${tierAmt > 0 ? ` + ${tier.name}: ${formatPrice(tierAmt)}` : ''})` : tierAmt > 0 ? ` (ưu đãi ${tier?.name})` : ''}</span>` : ''}
      ${wholesale ? `<br/><span style="color:#856404">📦 Đơn khách sỉ — không tích điểm</span>` : ''}
    </div>
    ${(user && !wholesale) ? (() => {
      const newUser  = getCurrentUser();
      const oldTier  = tier || getTier(0);
      const newTier  = getTier(newUser.totalSpent);
      // Bug 2 fix: find the actual tier step we jumped to (handle multi-tier skips)
      const upgraded = newTier.key !== oldTier.key;
      return upgraded
        ? `<div style="background:${newTier.bg};color:#fff;border-radius:12px;padding:12px 20px;text-align:center;font-weight:700">
             🎉 Chúc mừng! Bạn vừa lên hạng <strong>${newTier.icon} ${newTier.name}</strong>!
           </div>`
        : '';
    })() : ''}
    <button class="btn-primary" onclick="closeCheckout()" style="margin-top:8px">
      Về trang chủ <i class="fa fa-home"></i>
    </button>
  `;
  modal.style.position = 'relative';
  modal.appendChild(success);
}

// ===== CONTACT FORM =====
async function submitForm(e) {
  e.preventDefault();
  const form = e.target;
  const inputs = form.querySelectorAll('input, textarea, select');
  const name = inputs[0]?.value?.trim() || '';
  const phone = inputs[1]?.value?.trim() || '';
  const address = inputs[2]?.value?.trim() || '';
  const message = inputs[3]?.value?.trim() || '';
  const payment = inputs[4]?.value || '';

  const btn = form.querySelector('button[type="submit"]');
  const origHTML = btn ? btn.innerHTML : '';

  if (_sb) {
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Đang gửi…'; }
    const { error } = await _sb.from('contacts').insert({ name, phone, address, message, payment });
    if (btn) { btn.disabled = false; btn.innerHTML = origHTML; }
    if (error) {
      console.warn('Contact form error:', error);
      showToast('❌ Lỗi gửi tin nhắn, vui lòng thử lại!');
      return;
    }
  }

  showToast('📨 Đã gửi! Chúng tôi sẽ liên hệ trong 15 phút.');
  form.reset();
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== UTILS =====
function formatPrice(n) {
  return n.toLocaleString('vi-VN') + 'đ';
}

// ===== PAYMENT INFO =====
document.addEventListener('change', function(e) {
  if (!e.target.matches('select')) return;
  const info = document.getElementById('payment-info');
  if (!info) return;
  const val = e.target.value;
  const map = {
    transfer: `<div class="payment-box">
      🏦 <strong>Chuyển khoản ngân hàng – TPBank</strong><br/>
      Số TK: <strong>0410 0396 001</strong><br/>
      Chủ TK: <strong>ĐẶNG BẢO NGỌC</strong><br/>
      <span style="font-size:0.8rem;color:var(--text-muted)">Nội dung CK: [Tên] + [SĐT] + Bếp Của Mẹ</span>
      <div style="margin-top:12px;text-align:center">
        <img src="images/qr-tpbank.png" alt="QR TPBank" style="max-width:180px;border-radius:12px;border:2px solid #F7D080"
          onerror="this.style.display='none'"/>
      </div>
    </div>`,
    momo:     `<div class="payment-box">💜 <strong>Ví Momo</strong><br/>SĐT: <strong>0937 895 520</strong><br/>Tên: <strong>Đặng Bảo Ngọc</strong><br/><span style="font-size:0.8rem;color:var(--text-muted)">Nội dung: [Tên] + [SĐT] + Bếp Của Mẹ</span></div>`,
    cod:      `<div class="payment-box">💵 <strong>COD</strong> – Thanh toán trực tiếp khi nhận hàng. Không cần chuyển khoản trước.</div>`,
  };
  info.innerHTML = map[val] || '';
});

// ===== MOBILE NAV =====
function toggleMobileNav() {
  const open = document.getElementById('mnavDrawer').classList.toggle('open');
  document.getElementById('mnavOverlay').classList.toggle('active', open);
  document.getElementById('hamburger').classList.toggle('active', open);
  document.body.style.overflow = open ? 'hidden' : '';
  // Ẩn nút login nếu đã đăng nhập
  const user = getCurrentUser();
  const footer = document.getElementById('mnavFooter');
  if (footer) footer.style.display = user ? 'none' : '';
}
function closeMobileNav() {
  document.getElementById('mnavDrawer').classList.remove('open');
  document.getElementById('mnavOverlay').classList.remove('active');
  document.getElementById('hamburger').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== INIT =====
loadProducts();
updateCartUI();
updateHeaderUser();

// ===== SCROLL REVEAL =====
function initReveal() {
  // Auto-tag elements for reveal
  const tags = [
    { sel: '.section-header',   cls: 'reveal' },
    { sel: '.cat-filters',      cls: 'reveal' },
    { sel: '.promo-content',    cls: 'reveal-left' },
    { sel: '.promo-visual',     cls: 'reveal-right' },
    { sel: '.about-visual',     cls: 'reveal-left' },
    { sel: '.about-text',       cls: 'reveal-right' },
    { sel: '.contact-info-wrap',cls: 'reveal-left' },
    { sel: '.contact-form-wrap',cls: 'reveal-right' },
    { sel: '.footer-brand',     cls: 'reveal' },
    { sel: '.footer-col',       cls: 'reveal' },
  ];
  tags.forEach(({ sel, cls }) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add(cls);
      if (i > 0) el.classList.add('d' + Math.min(i, 6));
    });
  });

  // Feature list items stagger
  document.querySelectorAll('.features-list li').forEach((el, i) => {
    el.classList.add('reveal', 'd' + Math.min(i + 1, 6));
  });

  // Contact cards stagger
  document.querySelectorAll('.contact-card').forEach((el, i) => {
    el.classList.add('reveal', 'd' + Math.min(i + 1, 6));
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.10 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}

// ===== HERO PARTICLES =====
function createHeroParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const types = ['type-orange', 'type-purple', 'type-white', ''];
  const count = 22;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    const size = Math.random() * 5 + 2;
    const opacity = (Math.random() * 0.35 + 0.1).toFixed(2);
    p.className = 'hero-particle ' + types[Math.floor(Math.random() * types.length)];
    p.style.cssText = `
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      width:${size}px; height:${size}px;
      --p-opacity:${opacity};
      animation-delay:${(Math.random() * 8).toFixed(2)}s;
      animation-duration:${(Math.random() * 8 + 5).toFixed(2)}s;
    `;
    hero.appendChild(p);
  }
}

// ===== ANIMATED COUNTER for hero stats =====
function animateCounter(el, end, suffix, duration = 1600) {
  const startTime = performance.now();
  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value = Math.floor(ease * end);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = end + suffix;
  }
  requestAnimationFrame(tick);
}

function initStatCounters() {
  const stats = [
    { sel: '.hero-stat:nth-child(1) strong', end: 200, suffix: '+' },
    { sel: '.hero-stat:nth-child(2) strong', end: 5,   suffix: 'K+' },
  ];
  stats.forEach(({ sel, end, suffix }) => {
    const el = document.querySelector(sel);
    if (!el) return;
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animateCounter(el, end, suffix);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
  });
}

// ===== MAGNETIC BUTTON EFFECT =====
function initMagneticBtns() {
  document.querySelectorAll('.btn-primary, .add-btn, .cart-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px) scale(1.06)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ===== RUN ALL =====
document.addEventListener('DOMContentLoaded', () => {
  createHeroParticles();
  initStatCounters();
  initReveal();
  initScrollTop();
  initNavScroll();
  // Flush điểm/đơn hàng còn tồn đọng từ lần trước (nếu mạng yếu khi đặt hàng)
  setTimeout(() => { flushPendingPoints(); flushPendingOrders(); }, 3000);
  setTimeout(initMagneticBtns, 500);
  setTimeout(initLiveNotif, 4000);
});

// ===== PRODUCT DETAIL DRAWER =====
function openProductDetail(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;
  const wsUser  = isWholesaleUser();
  const wsPrice = p.wholesale_price || Math.round(p.price * 0.8);
  const priceGrid = wsUser ? `
    <div class="pd-price-grid" style="grid-template-columns:1fr 1fr">
      <div class="pd-pc retail" style="opacity:.5">
        <div class="pd-pc-lbl">Giá lẻ</div>
        <div class="pd-pc-price" style="text-decoration:line-through">${formatPrice(p.price)}</div>
        <div class="pd-pc-cond">—</div>
      </div>
      <div class="pd-pc si5" style="background:rgba(47,107,63,.12)">
        <div class="pd-pc-lbl" style="color:#2F6B3F;background:rgba(47,107,63,.18)">📦 Giá sỉ</div>
        <div class="pd-pc-price" style="color:#2F6B3F">${formatPrice(wsPrice)}</div>
        <div class="pd-pc-cond" style="color:#2F6B3F">Của bạn</div>
      </div>
    </div>` : `
    <div class="pd-price-grid">
      <div class="pd-pc retail">
        <div class="pd-pc-lbl">Lẻ</div>
        <div class="pd-pc-price">${formatPrice(p.price)}</div>
        <div class="pd-pc-cond">—</div>
      </div>
      <div class="pd-pc si5">
        <div class="pd-pc-lbl">−5%</div>
        <div class="pd-pc-price">${formatPrice(Math.round(p.price * 0.95))}</div>
        <div class="pd-pc-cond">≥10 hộp</div>
      </div>
      <div class="pd-pc si10">
        <div class="pd-pc-lbl">−10%</div>
        <div class="pd-pc-price">${formatPrice(Math.round(p.price * 0.90))}</div>
        <div class="pd-pc-cond">≥30 hộp</div>
      </div>
    </div>`;
  const buyBtns = wsUser ? `
    <button class="pd-buy-btn" onclick="addToCartQty(${p.id},1);closeProductDetail()">+ 1 hộp · ${formatPrice(wsPrice)}</button>
    <button class="pd-buy-btn si5" onclick="addToCartQty(${p.id},10);closeProductDetail()">+ 10 hộp · ${formatPrice(wsPrice)} <span>Giá sỉ</span></button>
    <button class="pd-buy-btn si10" onclick="addToCartQty(${p.id},30);closeProductDetail()">+ 30 hộp · ${formatPrice(wsPrice)} <span>Giá sỉ</span></button>
  ` : `
    <button class="pd-buy-btn" onclick="addToCartQty(${p.id},1);closeProductDetail()">+ 1 hộp · ${formatPrice(p.price)}</button>
    <button class="pd-buy-btn si5" onclick="addToCartQty(${p.id},10);closeProductDetail()">+ 10 hộp · ${formatPrice(Math.round(p.price*0.95))} <span>−5%</span></button>
    <button class="pd-buy-btn si10" onclick="addToCartQty(${p.id},30);closeProductDetail()">+ 30 hộp · ${formatPrice(Math.round(p.price*0.90))} <span>−10%</span></button>
  `;
  document.getElementById('pdContent').innerHTML = `
    <div class="pd-hero">
      ${p.img ? `<img src="${p.img}" alt="${p.name}" class="pd-img"/>` : `<div class="pd-emoji">${p.emoji}</div>`}
    </div>
    <div class="pd-info">
      <div class="pd-tag">${p.origin}</div>
      <h2 class="pd-name">${p.name}</h2>
      <div class="pd-rating">
        <span class="stars">${renderStars(p.rating)}</span>
        <span class="rating-count">${p.rating} · ${p.reviews} đánh giá</span>
      </div>
      ${p.badge ? `<span class="product-badge badge-${p.badge_type}" style="position:static;display:inline-block;margin-bottom:10px">${p.badge}</span>` : ''}
      ${priceGrid}
      ${p.description ? `<p class="pd-desc">${p.description}</p>` : ''}
      <div class="pd-buy-section">
        <span class="pd-buy-lbl">MUA HÀNG</span>
        <div class="pd-buy-btns">${buyBtns}</div>
      </div>
    </div>
  `;
  document.getElementById('pdOverlay').classList.add('active');
  document.getElementById('pdDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProductDetail() {
  document.getElementById('pdOverlay').classList.remove('active');
  document.getElementById('pdDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== SEARCH AUTOCOMPLETE =====
function filterProducts() {
  currentSearch = document.getElementById('searchInput').value;
  renderProducts(getFiltered());
  renderSearchSuggestions();
}
function renderSearchSuggestions() {
  const q   = (document.getElementById('searchInput').value || '').trim().toLowerCase();
  const el  = document.getElementById('searchSuggestions');
  if (!el) return;
  if (!q) { el.classList.remove('active'); return; }
  const hits = products.filter(p => p.name.toLowerCase().includes(q)).slice(0, 7);
  if (!hits.length) { el.classList.remove('active'); return; }
  el.innerHTML = hits.map(p => {
    const hi = p.name.replace(new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi'), '<mark>$1</mark>');
    return `<div class="ss-item" onmousedown="selectSuggestion(${p.id})">
      <span class="ss-emoji">${p.emoji || '🍱'}</span>
      <span class="ss-name">${hi}</span>
      <span class="ss-price">${formatPrice(p.price)}</span>
    </div>`;
  }).join('');
  el.classList.add('active');
}
function hideSearchSuggestions() {
  setTimeout(() => document.getElementById('searchSuggestions')?.classList.remove('active'), 150);
}
function selectSuggestion(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;
  document.getElementById('searchInput').value = p.name;
  currentSearch = p.name;
  renderProducts(getFiltered());
  document.getElementById('searchSuggestions')?.classList.remove('active');
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== ORDER HISTORY =====
async function loadOrderHistory() {
  const el = document.getElementById('ppOrders');
  if (!el) return;
  const user = getCurrentUser();
  if (!user) return;
  el.innerHTML = '<div style="padding:12px;color:var(--text-muted);font-size:.85rem"><i class="fa fa-spinner fa-spin"></i> Đang tải...</div>';
  if (_sb) {
    const { data } = await _sb.from('orders').select('*')
      .eq('phone', user.phone).order('created_at', { ascending: false }).limit(20);
    if (data?.length) { renderOrderList(el, data); return; }
  }
  const local = JSON.parse(localStorage.getItem('bcm_orders') || '[]')
    .filter(o => o.phone === user.phone).reverse().slice(0, 20);
  local.length ? renderOrderList(el, local)
    : (el.innerHTML = '<p class="pp-empty">Chưa có đơn hàng nào.</p>');
}
function renderOrderList(el, orders) {
  const statusMap = {
    pending:   ['badge-pending',   'Chờ XN'],
    confirmed: ['badge-confirmed', 'Đã XN'],
    shipping:  ['badge-shipping',  'Đang giao'],
    done:      ['badge-done',      'Hoàn thành'],
    cancelled: ['badge-cancelled', 'Đã huỷ'],
  };
  el.innerHTML = orders.map(o => {
    const [cls, lbl] = statusMap[o.status] || ['badge-pending', o.status || '—'];
    const date  = o.created_at ? new Date(o.created_at).toLocaleDateString('vi-VN') : '';
    const total = o.grand_total || o.grandTotal || 0;
    const code  = o.order_code || String(o.id || '').slice(-6).toUpperCase();
    return `<div class="pp-order-item">
      <div class="pp-order-row">
        <span class="pp-order-code">#${code}</span>
        <span class="badge ${cls}">${lbl}</span>
      </div>
      <div class="pp-order-row pp-order-meta">
        <span>${date}</span>
        <strong>${formatPrice(total)}</strong>
      </div>
    </div>`;
  }).join('');
}

// ===== SCROLL TO TOP =====
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 320);
  }, { passive: true });
}

// ===== NAV ACTIVE ON SCROLL =====
function initNavScroll() {
  const sections = ['home', 'products', 'about', 'loyalty', 'contact'];
  const navLinks = document.querySelectorAll('#desktopNav a');
  if (!navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(a => {
        a.classList.toggle('nav-active', a.getAttribute('href') === '#' + id);
      });
    });
  }, { threshold: 0.3, rootMargin: '-60px 0px -60px 0px' });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ===== LIVE PURCHASE NOTIFICATION =====
function initLiveNotif() {
  const names = [
    'Nguyễn Thị H.', 'Trần Văn M.', 'Lê Thị T.', 'Phạm Minh K.',
    'Hoàng Thị L.', 'Đặng Văn N.', 'Bùi Thị P.', 'Vũ Thị A.',
    'Đinh Văn S.', 'Phan Thị B.', 'Lý Văn C.', 'Đỗ Thị D.',
    'Hồ Văn E.', 'Ngô Thị F.', 'Tăng Văn G.', 'Dương Thị I.',
    'Trương Văn J.', 'Mai Thị Q.', 'Lưu Văn R.', 'Cao Thị U.',
    'Thái Văn W.', 'Đinh Thị X.', 'Quách Văn Y.', 'Từ Thị Z.',
  ];
  const times = [
    'vừa xong', '1 phút trước', '2 phút trước', '3 phút trước',
    '5 phút trước', '7 phút trước', '10 phút trước',
  ];
  const emojis = ['🛒','✅','🎉','🔥','💚'];
  const quantities = [1, 2, 3, 5, 10, 20, 30];

  const el    = document.getElementById('live-notif');
  const elName = document.getElementById('ln-name');
  const elMsg  = document.getElementById('ln-msg');
  const elTime = document.getElementById('ln-time');
  const elIcon = document.getElementById('ln-icon');

  function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function show() {
    const product = rand(products);
    const qty     = rand(quantities);
    elName.textContent = rand(names);
    elMsg.textContent  = `vừa mua ${qty} hộp ${product.name}`;
    elTime.textContent = rand(times);
    elIcon.textContent = rand(emojis);

    el.classList.add('ln-show');

    setTimeout(() => {
      el.classList.remove('ln-show');
    }, 4500);
  }

  show();
  setInterval(show, 8000);
}
