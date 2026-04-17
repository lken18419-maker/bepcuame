// ===== PRODUCT DATA =====
// Để thêm ảnh: đặt file vào images/products/ rồi điền đường dẫn vào trường img
// Ví dụ: img: "images/products/pringles.jpg"
// Nếu img để null → tự dùng emoji làm placeholder
// Để đổi giá: sửa price (giá hiện tại) và oldPrice (giá gạch, để null nếu không có)
const products = [
  {
    id: 1,  name: "Pringles Original",
    img: null,              // ← đặt ảnh: "images/products/pringles.jpg"
    emoji: "🥔",
    category: "chips",
    price: 45000,           // ← giá bán
    oldPrice: 55000,        // ← giá gốc (gạch ngang), null nếu không có
    badge: "Hot", badge_type: "",
    origin: "🇺🇸 Mỹ", rating: 4.9, reviews: 320,
  },
  {
    id: 2,  name: "Lotte Pepero Chocolate",
    img: null,              // ← "images/products/pepero.jpg"
    emoji: "🍫",
    category: "chocolate",
    price: 32000, oldPrice: 38000,
    badge: "Sale", badge_type: "sale",
    origin: "🇰🇷 Hàn Quốc", rating: 4.8, reviews: 210,
  },
  {
    id: 3,  name: "Oreo Double Cream",
    img: null,              // ← "images/products/oreo.jpg"
    emoji: "🍪",
    category: "biscuit",
    price: 28000, oldPrice: 35000,
    badge: "Sale", badge_type: "sale",
    origin: "🇺🇸 Mỹ", rating: 4.7, reviews: 185,
  },
  {
    id: 4,  name: "Nước Tăng Lực Monster",
    img: null,              // ← "images/products/monster.jpg"
    emoji: "🧃",
    category: "drink",
    price: 30000, oldPrice: null,
    badge: null, badge_type: "",
    origin: "🇺🇸 Mỹ", rating: 4.5, reviews: 290,
  },
  {
    id: 5,  name: "Haribo Gummy Bears",
    img: null,              // ← "images/products/haribo.jpg"
    emoji: "🍬",
    category: "candy",
    price: 38000, oldPrice: 45000,
    badge: "Yêu thích", badge_type: "",
    origin: "🇩🇪 Đức", rating: 4.9, reviews: 410,
  },
  {
    id: 6,  name: "Doritos Nacho Cheese",
    img: null,              // ← "images/products/doritos.jpg"
    emoji: "🌽",
    category: "chips",
    price: 42000, oldPrice: 50000,
    badge: "Hot", badge_type: "",
    origin: "🇺🇸 Mỹ", rating: 4.8, reviews: 275,
  },
  {
    id: 7,  name: "Kit Kat Matcha",
    img: null,              // ← "images/products/kitkat-matcha.jpg"
    emoji: "🍵",
    category: "chocolate",
    price: 55000, oldPrice: 65000,
    badge: "Mới", badge_type: "new",
    origin: "🇯🇵 Nhật", rating: 4.9, reviews: 198,
  },
  {
    id: 8,  name: "Twisties Phô Mai",
    img: null,              // ← "images/products/twisties.jpg"
    emoji: "🧀",
    category: "chips",
    price: 25000, oldPrice: null,
    badge: null, badge_type: "",
    origin: "🇹🇭 Thái Lan", rating: 4.4, reviews: 160,
  },
  {
    id: 9,  name: "Pocky Dâu Tây",
    img: null,              // ← "images/products/pocky-dau.jpg"
    emoji: "🍓",
    category: "biscuit",
    price: 35000, oldPrice: 40000,
    badge: "Sale", badge_type: "sale",
    origin: "🇯🇵 Nhật", rating: 4.9, reviews: 330,
  },
  {
    id: 10, name: "Pepsi Không Đường",
    img: null,              // ← "images/products/pepsi.jpg"
    emoji: "🥤",
    category: "drink",
    price: 15000, oldPrice: null,
    badge: null, badge_type: "",
    origin: "🇺🇸 Mỹ", rating: 4.3, reviews: 500,
  },
  {
    id: 11, name: "M&Ms Peanut",
    img: null,              // ← "images/products/mms.jpg"
    emoji: "🟤",
    category: "chocolate",
    price: 48000, oldPrice: 58000,
    badge: "Hot", badge_type: "",
    origin: "🇺🇸 Mỹ", rating: 4.9, reviews: 260,
  },
  {
    id: 12, name: "Mentos Trái Cây",
    img: null,              // ← "images/products/mentos.jpg"
    emoji: "🍭",
    category: "candy",
    price: 18000, oldPrice: null,
    badge: null, badge_type: "",
    origin: "🇳🇱 Hà Lan", rating: 4.2, reviews: 145,
  },
  {
    id: 13, name: "Pretz Bơ Muối",
    img: null,              // ← "images/products/pretz.jpg"
    emoji: "🥨",
    category: "biscuit",
    price: 30000, oldPrice: 36000,
    badge: "Mới", badge_type: "new",
    origin: "🇯🇵 Nhật", rating: 4.6, reviews: 112,
  },
  {
    id: 14, name: "Aloe Vera Drink",
    img: null,              // ← "images/products/aloe-vera.jpg"
    emoji: "🌿",
    category: "drink",
    price: 22000, oldPrice: null,
    badge: "Healthy", badge_type: "sale",
    origin: "🇰🇷 Hàn Quốc", rating: 4.8, reviews: 380,
  },
  {
    id: 15, name: "Snickers Bar",
    img: null,              // ← "images/products/snickers.jpg"
    emoji: "🍫",
    category: "chocolate",
    price: 25000, oldPrice: 30000,
    badge: null, badge_type: "",
    origin: "🇺🇸 Mỹ", rating: 4.4, reviews: 220,
  },
  {
    id: 16, name: "Lay's Thai Basil",
    img: null,              // ← "images/products/lays-thai.jpg"
    emoji: "🌿",
    category: "chips",
    price: 28000, oldPrice: 35000,
    badge: "Hot", badge_type: "",
    origin: "🇹🇭 Thái Lan", rating: 4.9, reviews: 190,
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

// ===== SUPABASE BACKEND =====
// Tạo project tại supabase.com → Settings → API → dán vào đây
const SUPABASE_URL      = ''; // ← 'https://xxxx.supabase.co'
const SUPABASE_ANON_KEY = ''; // ← 'eyJhbGciOiJIUzI1NiIs...'

const _sb = (SUPABASE_URL && SUPABASE_ANON_KEY)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

// ===== STRIPE PAYMENT =====
const STRIPE_PUB_KEY = ''; // ← 'pk_live_...' hoặc 'pk_test_...'
const _stripe = STRIPE_PUB_KEY ? window.Stripe(STRIPE_PUB_KEY) : null;

// ===== EMAILJS (gửi email quên mật khẩu) =====
// Đăng ký tại emailjs.com → lấy 3 giá trị bên dưới
const EMAILJS_PUBLIC_KEY  = ''; // ← Account → API Keys → Public Key
const EMAILJS_SERVICE_ID  = ''; // ← Email Services → Service ID
const EMAILJS_TEMPLATE_ID = ''; // ← Email Templates → Template ID
if (EMAILJS_PUBLIC_KEY) window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

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

async function authRegister(name, phone, email, password) {
  const hash = simpleHash(password);
  const id   = 'u_' + phone.replace(/\D/g, '');

  // 1. Supabase
  if (_sb) {
    const { data: existing } = await _sb.from('users').select('id').eq('phone', phone).maybeSingle();
    if (existing) return { ok: false, msg: 'Số điện thoại đã được đăng ký!' };
    const { error } = await _sb.from('users').insert({
      id, name, phone, email, password_hash: hash,
      total_spent: 0, tier: 'member', order_count: 0,
    });
    if (error) return { ok: false, msg: 'Lỗi đăng ký, thử lại!' };
  } else {
    // 2. Fallback: localStorage
    const users = getUsers();
    if (users[id]) return { ok: false, msg: 'Số điện thoại đã được đăng ký!' };
    users[id] = { id, name, phone, email, password: hash,
                  totalSpent: 0, orders: [], createdAt: new Date().toISOString() };
    saveUsers(users);
  }

  // Cache session
  const users = getUsers();
  users[id] = { id, name, phone, email, password: hash,
                totalSpent: 0, orders: [], createdAt: new Date().toISOString() };
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
      orders: users[u.id]?.orders || [],
    };
    saveUsers(users);
    setCurrentUser(u.id);
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

function addOrderToUser(orderData) {
  // Cập nhật localStorage ngay lập tức
  const user = getCurrentUser();
  if (user) {
    const users = getUsers();
    users[user.id].totalSpent = (users[user.id].totalSpent || 0) + orderData.grandTotal;
    if (!users[user.id].orders) users[user.id].orders = [];
    users[user.id].orders.unshift({
      code: orderData.orderCode, date: new Date().toISOString(),
      items: orderData.items, total: orderData.grandTotal,
      address: orderData.address + ', ' + orderData.city,
    });
    saveUsers(users);
  }

  // Gửi lên Supabase (fire-and-forget)
  if (_sb) {
    _sb.from('orders').insert({
      order_code:  orderData.orderCode,
      user_phone:  orderData.userPhone || null,
      name:        orderData.name,
      phone:       orderData.phone,
      address:     orderData.address,
      city:        orderData.city,
      items:       orderData.items,
      sub_total:   orderData.subTotal,
      disc_amt:    orderData.discAmt,
      ship_fee:    orderData.shipFee,
      grand_total: orderData.grandTotal,
      payment:     orderData.payment,
      note:        orderData.note || '',
      tier_name:   orderData.tierName || '',
    }).then(({ error }) => { if (error) console.warn('Supabase order error:', error); });

    // Cập nhật điểm tích lũy người dùng
    if (orderData.userPhone && user) {
      const newSpent = (user.totalSpent || 0) + orderData.grandTotal;
      const newTier  = getTier(newSpent).key;
      _sb.from('users').update({
        total_spent: newSpent,
        tier: newTier,
        order_count: (user.orders?.length || 0) + 1,
      }).eq('phone', orderData.userPhone)
        .then(({ error }) => { if (error) console.warn('Supabase user update error:', error); });
    }
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
    return;
  }
  loginBtn.style.display = 'none';
  userMenu.style.display = '';
  const tier = getTier(user.totalSpent);
  const initials = user.name.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase();
  document.getElementById('userAvatar').textContent = initials;
  document.getElementById('userAvatar').style.background = tier.bg;
  document.getElementById('userMenuName').textContent = user.name.split(' ').pop();
  const pill = document.getElementById('userMenuTier');
  pill.textContent = tier.icon + ' ' + tier.name;
  pill.style.background = tier.bg;
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

  const name  = document.getElementById('regName').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass  = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;
  if (!validatePhone(phone)) { errEl.textContent = 'Số điện thoại phải đúng 10 chữ số!'; return; }
  if (!email)                { errEl.textContent = 'Vui lòng nhập email!'; return; }
  if (pass.length < 6)       { errEl.textContent = 'Mật khẩu ít nhất 6 ký tự!'; return; }
  if (pass !== pass2)        { errEl.textContent = 'Mật khẩu xác nhận không khớp!'; return; }

  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Đang đăng ký…'; }
  const res = await authRegister(name, phone, email, pass);
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

  // Gửi email qua EmailJS
  if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email:  email,
        to_phone:  phone,
        reset_url: resetUrl,
        shop_name: 'Bếp Của Mẹ',
      });
    } catch (err) {
      console.warn('EmailJS error:', err);
      showToast('❌ Lỗi gửi email, kiểm tra lại cấu hình EmailJS!');
      btn.disabled = false;
      btn.innerHTML = 'Gửi link đặt lại <i class="fa fa-paper-plane"></i>';
      return;
    }
  } else {
    // Chưa cấu hình EmailJS — log ra console để test
    console.info('Reset URL (dev):', resetUrl);
    showToast('⚠️ EmailJS chưa cấu hình — xem Console để lấy link reset');
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
  const tier     = getTier(user.totalSpent);
  const nextTier = getNextTier(user.totalSpent);
  const spent    = user.totalSpent || 0;
  const progress = nextTier
    ? Math.min(((spent - tier.min) / (nextTier.min - tier.min)) * 100, 100)
    : 100;

  document.getElementById('ppAvatar').textContent =
    user.name.split(' ').map(w => w[0]).slice(-2).join('').toUpperCase();
  document.getElementById('ppAvatar').style.background = tier.bg;
  document.getElementById('ppName').textContent  = user.name;
  document.getElementById('ppPhone').textContent = user.phone;

  const tierCard = document.getElementById('ppTierCard');
  tierCard.style.background = tier.bg;
  document.getElementById('ppTierIcon').textContent = tier.icon;
  document.getElementById('ppTierName').textContent = tier.name;
  document.getElementById('ppDiscount').textContent =
    tier.discount > 0 ? `Giảm ${tier.discount * 100}% mỗi đơn` : 'Tích lũy để nhận ưu đãi';
  document.getElementById('ppSpent').textContent = formatPrice(spent);

  // Progress bar
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

  // Tier benefits table
  document.getElementById('ppBenefits').innerHTML = TIERS.filter(t => t.key !== 'member').map(t => `
    <div class="pp-benefit-row ${t.key === tier.key ? 'active' : ''}" style="${t.key === tier.key ? 'border-color:'+t.color : ''}">
      <span>${t.icon} ${t.name}</span>
      <span style="color:${t.color};font-weight:800">${t.discount > 0 ? '-' + (t.discount*100) + '%' : '0%'}</span>
      <span style="color:var(--text-muted);font-size:0.78rem">&gt; ${formatPrice(t.min)}</span>
    </div>`).join('');

  // Order history
  const orders = user.orders || [];
  document.getElementById('ppOrders').innerHTML = orders.length
    ? orders.slice(0, 10).map(o => `
        <div class="pp-order-item">
          <div class="pp-order-code">${o.code}</div>
          <div class="pp-order-info">
            <div class="pp-order-items">${o.items}</div>
            <div class="pp-order-addr">${o.address || ''}</div>
          </div>
          <div class="pp-order-total">${formatPrice(o.total)}</div>
        </div>`).join('')
    : `<div class="pp-empty">Chưa có đơn hàng nào 🛒</div>`;
}

// ===== STATE =====
let cart = [];
let currentCategory = 'all';
let currentSearch = '';
let wishlist = new Set();

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

  grid.innerHTML = list.map((p, i) => `
    <div class="product-card" onclick="addToCart(${p.id})" style="animation-delay:${i * 0.07}s">
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
        <div class="product-tag">${p.origin}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${renderStars(p.rating)}</span>
          <span class="rating-count">${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="price-wrap">
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="product-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
          </div>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart(${p.id})" title="Thêm vào giỏ">
            <i class="fa fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function getFiltered() {
  return products.filter(p => {
    const matchCat = currentCategory === 'all' || p.category === currentCategory;
    const matchSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCat && matchSearch;
  });
}

function filterCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(getFiltered());
}

function filterProducts() {
  currentSearch = document.getElementById('searchInput').value;
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
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="ci-img">${item.img ? `<img src="${item.img}" style="width:100%;height:100%;object-fit:cover;border-radius:10px"/>` : item.emoji}</div>
        <div class="ci-body">
          <div class="ci-name">${item.name}</div>
          <div class="ci-price">${formatPrice(item.price * item.qty)}</div>
          <div class="ci-controls">
            <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})" title="Xoá">
          <i class="fa fa-trash"></i>
        </button>
      </div>
    `).join('');
  }

  const subTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
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
           Mua thêm <strong style="color:var(--p1)">${formatPrice(700000 - subTotal)}</strong> để miễn phí ship
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
  // Đóng cart sidebar
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
  // Render order summary
  renderCheckoutSummary();
  // Mở modal
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
  const user      = getCurrentUser();
  const tier      = user ? getTier(user.totalSpent) : null;
  const discount  = tier ? tier.discount : 0;
  const subTotal  = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const discAmt   = Math.round(subTotal * discount);
  const afterDisc = subTotal - discAmt;
  const freeShip  = afterDisc >= 700000;
  const shipFee   = freeShip ? 0 : 30000;
  const grand     = afterDisc + shipFee;

  document.getElementById('coOrderItems').innerHTML = cart.map(item => `
    <div class="co-order-item">
      <div class="co-item-emoji">${item.emoji}</div>
      <div class="co-item-body">
        <div class="co-item-name">${item.name}</div>
        <div class="co-item-qty">x${item.qty}</div>
      </div>
      <div class="co-item-price">${formatPrice(item.price * item.qty)}</div>
    </div>
  `).join('');

  const tierRow = (tier && discount > 0) ? `
    <div class="co-summary-row" style="color:var(--green);font-weight:700">
      <span>${tier.icon} Ưu đãi ${tier.name} (${discount*100}%)</span>
      <span>-${formatPrice(discAmt)}</span>
    </div>` : '';

  const loginHint = !user ? `
    <div class="co-login-hint">
      <i class="fa fa-tag"></i>
      <span><a href="#" onclick="event.preventDefault();closeCheckout();openAuthModal('login')">Đăng nhập</a> để dùng ưu đãi thành viên</span>
    </div>` : '';

  document.getElementById('coOrderSummary').innerHTML = `
    ${loginHint}
    <div class="co-summary-row">
      <span>Tạm tính (${cart.reduce((s,i)=>s+i.qty,0)} món)</span>
      <span>${formatPrice(subTotal)}</span>
    </div>
    ${tierRow}
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
  const user         = getCurrentUser();
  const tier         = user ? getTier(user.totalSpent) : null;
  const discount     = tier ? tier.discount : 0;
  const subTotal     = cart.reduce((s,i) => s+i.price*i.qty, 0);
  const discAmt      = Math.round(subTotal * discount);
  const afterDisc    = subTotal - discAmt;
  const shipFee      = afterDisc >= 700000 ? 0 : 30000;
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
      ${discAmt > 0 ? `<br/><span style="color:var(--green)">✅ Đã tiết kiệm ${formatPrice(discAmt)} (ưu đãi ${tier.name})</span>` : ''}
    </div>
    ${user ? (() => {
      const newUser = getCurrentUser();
      const newTier = getTier(newUser.totalSpent);
      const upgraded = tier && newTier.key !== tier.key;
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
function submitForm(e) {
  e.preventDefault();
  showToast('📨 Đã gửi! Chúng tôi sẽ liên hệ trong 15 phút.');
  e.target.reset();
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
renderProducts(products);
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
  setTimeout(initMagneticBtns, 500);
});
