/**
 * BẾP CỦA MẸ — Google Apps Script (v2)
 * Xử lý: đăng ký, đăng nhập, lưu đơn hàng, cập nhật điểm tích lũy, gửi email
 *
 * HƯỚNG DẪN DEPLOY → xem file HUONG_DAN_DEPLOY.md
 */

// ─── CẤU HÌNH ───────────────────────────────────────────────────────────────
const OWNER_EMAIL  = 'your-email@gmail.com'; // ← Đổi thành email của bạn
const SHEET_USERS  = 'Tài khoản';
const SHEET_ORDERS = 'Đơn hàng';

// Hạng thành viên
const TIERS = [
  { key: 'diamond', min: 15_000_000, discount: 0.20 },
  { key: 'platinum',min: 10_000_000, discount: 0.15 },
  { key: 'gold',    min:  8_000_000, discount: 0.10 },
  { key: 'silver',  min:  5_000_000, discount: 0.05 },
  { key: 'bronze',  min:  3_000_000, discount: 0.03 },
  { key: 'member',  min:  0,         discount: 0    },
];

function getTierKey(totalSpent) {
  const t = TIERS.find(t => totalSpent >= t.min);
  return t ? t.key : 'member';
}

// ─── ROUTER ─────────────────────────────────────────────────────────────────

/** GET  ?action=register|login|getUser&... */
function doGet(e) {
  const action = e.parameter.action;
  let result;
  try {
    if      (action === 'register') result = handleRegister(e.parameter);
    else if (action === 'login')    result = handleLogin(e.parameter);
    else if (action === 'getUser')  result = handleGetUser(e.parameter);
    else result = { ok: false, msg: 'Action không hợp lệ' };
  } catch (err) {
    result = { ok: false, msg: err.message };
  }
  return jsonResponse(result);
}

/** POST body: { action: 'saveOrder', ...data } — Content-Type: text/plain */
function doPost(e) {
  let data, result;
  try {
    data = JSON.parse(e.postData.contents);
    if (data.action === 'saveOrder') result = handleSaveOrder(data);
    else result = { ok: false, msg: 'Action không hợp lệ' };
  } catch (err) {
    result = { ok: false, msg: err.message };
  }
  return jsonResponse(result);
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ─── USER SHEET ──────────────────────────────────────────────────────────────
// Cột: [0]ID [1]Tên [2]SĐT [3]PassHash [4]TổngChiTiêu [5]Hạng [6]SốĐơn [7]NgàyĐK

function getUserSheet() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  let sheet   = ss.getSheetByName(SHEET_USERS);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_USERS, 0);
    const header = ['ID','Họ tên','SĐT','Password Hash','Tổng chi tiêu','Hạng','Số đơn','Ngày đăng ký'];
    sheet.appendRow(header);
    sheet.getRange(1,1,1,header.length)
         .setBackground('#12101F').setFontColor('#FFD60A').setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 120);
    sheet.setColumnWidth(2, 160);
    sheet.setColumnWidth(5, 130);
  }
  return sheet;
}

function findUserRow(sheet, phone) {
  const values = sheet.getDataRange().getValues();
  for (let i = 1; i < values.length; i++) {
    if (String(values[i][2]).trim() === String(phone).trim()) {
      return { rowIndex: i + 1, data: values[i] }; // rowIndex = 1-based sheet row
    }
  }
  return null;
}

function handleRegister(p) {
  if (!p.name || !p.phone || !p.pass) return { ok: false, msg: 'Thiếu thông tin!' };

  const sheet   = getUserSheet();
  const existing = findUserRow(sheet, p.phone);
  if (existing) return { ok: false, msg: 'Số điện thoại đã được đăng ký!' };

  const id  = 'u_' + p.phone;
  const now = new Date();
  sheet.appendRow([id, p.name, p.phone, p.pass, 0, 'member', 0, now]);

  const lastRow = sheet.getLastRow();
  sheet.getRange(lastRow, 5).setNumberFormat('#,##0"đ"');

  return {
    ok: true,
    user: { id, name: p.name, phone: p.phone, totalSpent: 0, tier: 'member' }
  };
}

function handleLogin(p) {
  if (!p.phone || !p.pass) return { ok: false, msg: 'Thiếu thông tin!' };

  const sheet = getUserSheet();
  const found = findUserRow(sheet, p.phone);
  if (!found) return { ok: false, msg: 'Số điện thoại chưa đăng ký!' };

  const [id, name, phone, storedPass, totalSpent, tier] = found.data;
  if (String(storedPass).trim() !== String(p.pass).trim())
    return { ok: false, msg: 'Mật khẩu không đúng!' };

  return {
    ok: true,
    user: {
      id:         String(id),
      name:       String(name),
      phone:      String(phone),
      totalSpent: Number(totalSpent) || 0,
      tier:       String(tier) || 'member',
    }
  };
}

function handleGetUser(p) {
  if (!p.phone) return { ok: false, msg: 'Thiếu số điện thoại' };
  const sheet = getUserSheet();
  const found = findUserRow(sheet, p.phone);
  if (!found) return { ok: false, msg: 'Không tìm thấy tài khoản' };

  const [id, name, phone, , totalSpent, tier] = found.data;
  return {
    ok: true,
    user: { id: String(id), name: String(name), phone: String(phone),
            totalSpent: Number(totalSpent) || 0, tier: String(tier) }
  };
}

// ─── ORDER SHEET ─────────────────────────────────────────────────────────────
// Cột: [0]Thời gian [1]MãĐơn [2]TênKH [3]SĐT [4]ĐịaChỉ [5]Tỉnh
//      [6]SảnPhẩm [7]TạmTính [8]GiảmGiá [9]PhíShip [10]TổngTiền
//      [11]ThanhToán [12]GhiChú [13]TrạngThái

function getOrderSheet() {
  const ss    = SpreadsheetApp.getActiveSpreadsheet();
  let sheet   = ss.getSheetByName(SHEET_ORDERS);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_ORDERS);
    const header = ['Thời gian','Mã đơn','Tên KH','SĐT','Địa chỉ','Tỉnh/TP',
                    'Sản phẩm','Tạm tính','Giảm giá','Phí ship','Tổng tiền',
                    'Thanh toán','Ghi chú','Trạng thái'];
    sheet.appendRow(header);
    sheet.getRange(1,1,1,header.length)
         .setBackground('#12101F').setFontColor('#FFD60A').setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 150);
    sheet.setColumnWidth(7, 300);
  }
  return sheet;
}

function handleSaveOrder(data) {
  // 1. Lưu vào sheet đơn hàng
  const orderSheet = getOrderSheet();
  orderSheet.appendRow([
    new Date(),
    data.orderCode,
    data.name,
    data.phone,
    data.address,
    data.city,
    data.items,
    Number(data.subTotal)   || 0,
    Number(data.discAmt)    || 0,
    Number(data.shipFee)    || 0,
    Number(data.grandTotal) || 0,
    data.payment,
    data.note || '',
    'Mới'
  ]);

  const lastRow = orderSheet.getLastRow();
  orderSheet.getRange(lastRow, 8, 1, 4).setNumberFormat('#,##0"đ"');
  if (lastRow % 2 === 0)
    orderSheet.getRange(lastRow, 1, 1, 14).setBackground('#F7F6FF');

  // 2. Cập nhật điểm tích lũy nếu có tài khoản
  const tierBefore = '';
  let tierAfter = '';
  if (data.userPhone) {
    const userSheet = getUserSheet();
    const found     = findUserRow(userSheet, data.userPhone);
    if (found) {
      const currentSpent = Number(found.data[4]) || 0;
      const newSpent     = currentSpent + (Number(data.grandTotal) || 0);
      const currentOrders= Number(found.data[6]) || 0;
      tierAfter          = getTierKey(newSpent);

      userSheet.getRange(found.rowIndex, 5).setValue(newSpent);
      userSheet.getRange(found.rowIndex, 6).setValue(tierAfter);
      userSheet.getRange(found.rowIndex, 7).setValue(currentOrders + 1);
    }
  }

  // 3. Gửi email thông báo cho chủ shop
  sendOrderEmail(data);

  return { ok: true, tierAfter };
}

// ─── EMAIL ───────────────────────────────────────────────────────────────────

function sendOrderEmail(data) {
  const paymentLabel = { cod: '💵 COD', transfer: '🏦 Chuyển khoản', momo: '💜 Momo' }[data.payment] || data.payment;
  const discountRow  = data.discAmt > 0
    ? `<tr><td>Giảm giá (${data.tierName || 'thành viên'})</td><td style="color:#00D4A0">-${fmt(data.discAmt)}</td></tr>`
    : '';

  const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"/>
<style>
  body{font-family:Arial,sans-serif;background:#f5f5f5;margin:0;padding:20px}
  .wrap{max-width:560px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.10)}
  .top{background:linear-gradient(135deg,#12101F,#1F1040);padding:28px 32px;text-align:center}
  .top h1{color:#FFD60A;font-size:22px;margin:0 0 4px}
  .top p{color:rgba(255,255,255,.55);font-size:13px;margin:0}
  .body{padding:28px 32px}
  .badge{display:inline-block;background:#FFF1EB;color:#FF6B2B;border:1.5px solid #FFD0B0;
    border-radius:99px;padding:5px 18px;font-weight:700;font-size:13px;margin-bottom:22px}
  h3{font-size:12px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:.8px;margin:0 0 10px}
  table{width:100%;border-collapse:collapse}
  td{padding:7px 0;font-size:14px;vertical-align:top;border-bottom:1px solid #f0f0f0}
  td:first-child{color:#888;width:40%}
  td:last-child{font-weight:600;color:#12101F}
  .items{background:#F7F6FF;border-radius:10px;padding:14px 16px;font-size:14px;color:#333;line-height:1.8;margin:16px 0}
  .total-row{display:flex;justify-content:space-between;padding:12px 0;border-top:2px solid #f0f0f0;margin-top:8px}
  .total-row span:first-child{font-weight:700;font-size:15px;color:#12101F}
  .total-row span:last-child{font-weight:800;font-size:18px;color:#FF6B2B}
  .footer{background:#F7F6FF;padding:16px 32px;text-align:center;font-size:12px;color:#999}
</style></head><body>
<div class="wrap">
  <div class="top"><h1>🍱 Bếp Của Mẹ</h1><p>Bạn có đơn hàng mới!</p></div>
  <div class="body">
    <div class="badge">📦 ${data.orderCode}</div>
    <h3>👤 Khách hàng</h3>
    <table>
      <tr><td>Họ tên</td><td>${data.name}</td></tr>
      <tr><td>Điện thoại</td><td>${data.phone}</td></tr>
      <tr><td>Địa chỉ</td><td>${data.address}, ${data.city}</td></tr>
      <tr><td>Thanh toán</td><td>${paymentLabel}</td></tr>
      ${data.note ? `<tr><td>Ghi chú</td><td>${data.note}</td></tr>` : ''}
    </table>
    <h3 style="margin-top:20px">🛒 Sản phẩm</h3>
    <div class="items">${String(data.items).replace(/,\s*/g,'<br/>')}</div>
    <h3>💰 Thanh toán</h3>
    <table>
      <tr><td>Tạm tính</td><td>${fmt(data.subTotal)}</td></tr>
      ${discountRow}
      <tr><td>Phí ship</td><td>${data.shipFee == 0 ? '✅ Miễn phí' : fmt(data.shipFee)}</td></tr>
    </table>
    <div class="total-row"><span>Tổng thanh toán</span><span>${fmt(data.grandTotal)}</span></div>
  </div>
  <div class="footer">Đặt lúc ${new Date().toLocaleString('vi-VN')} · Bếp Của Mẹ © 2026</div>
</div></body></html>`;

  MailApp.sendEmail({
    to:       OWNER_EMAIL,
    subject:  `🍱 Đơn mới ${data.orderCode} — ${data.name} — ${fmt(data.grandTotal)}`,
    htmlBody: html,
  });
}

function fmt(n) {
  return Number(n).toLocaleString('vi-VN') + 'đ';
}
