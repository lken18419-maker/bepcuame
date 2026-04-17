import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') ?? '';
const FROM_EMAIL     = Deno.env.get('FROM_EMAIL')     ?? 'Bếp Của Mẹ <noreply@bepcuame.com>';

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });

  const { to_email, to_name, reset_url } = await req.json();

  const html = `<!DOCTYPE html><html lang="vi"><head><meta charset="UTF-8"/>
<style>
  body{font-family:Arial,sans-serif;background:#f5f5f5;margin:0;padding:20px}
  .wrap{max-width:520px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.10)}
  .top{background:linear-gradient(135deg,#12101F,#1F1040);padding:28px 32px;text-align:center}
  .top h1{color:#FFD60A;font-size:22px;margin:0 0 4px}
  .top p{color:rgba(255,255,255,.55);font-size:13px;margin:0}
  .body{padding:32px}
  .body p{font-size:15px;color:#333;line-height:1.7;margin:0 0 16px}
  .btn{display:inline-block;background:linear-gradient(135deg,#FF6B2B,#FF8C00);color:#fff;
    font-weight:800;padding:14px 32px;border-radius:12px;text-decoration:none;font-size:15px}
  .note{font-size:12px;color:#999;margin-top:20px}
  .footer{background:#F7F6FF;padding:16px 32px;text-align:center;font-size:12px;color:#999}
</style></head><body>
<div class="wrap">
  <div class="top"><h1>🍱 Bếp Của Mẹ</h1><p>Yêu cầu đặt lại mật khẩu</p></div>
  <div class="body">
    <p>Xin chào <strong>${to_name ?? 'bạn'}</strong>,</p>
    <p>Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn.<br/>
       Nhấn nút bên dưới để tiến hành — link có hiệu lực trong <strong>30 phút</strong>.</p>
    <div style="text-align:center;margin:28px 0">
      <a href="${reset_url}" class="btn">Đặt lại mật khẩu</a>
    </div>
    <p class="note">Nếu bạn không yêu cầu điều này, hãy bỏ qua email này. Mật khẩu sẽ không thay đổi.</p>
  </div>
  <div class="footer">Bếp Của Mẹ © 2026 · bepcuame.vercel.app</div>
</div></body></html>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from:    FROM_EMAIL,
      to:      [to_email],
      subject: '🔑 Đặt lại mật khẩu — Bếp Của Mẹ',
      html,
    }),
  });

  const data = await res.json();
  return new Response(JSON.stringify({ ok: res.ok, data }), {
    status: res.ok ? 200 : 500,
    headers: { ...CORS, 'Content-Type': 'application/json' },
  });
});
