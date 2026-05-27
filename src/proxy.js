import { NextResponse } from "next/server";

export function proxy(request) {
  const host = request.headers.get("host") || "";

  if (host.includes("unitedpay4africa.com") && !host.includes("www.unitedpay4africa.com")) {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Access Suspended | UPA</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;800&display=swap" rel="stylesheet">
        <style>
          :root {
            --primary-navy: #0F172A;
            --primary-emerald: #10B981;
            --text-secondary: #475569;
            --bg-neutral: #F8FAFC;
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg-neutral);
            color: var(--primary-navy);
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 24px;
          }
          .block-container {
            max-width: 500px;
            width: 100%;
            background: #ffffff;
            border-radius: 24px;
            padding: 48px;
            text-align: center;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border: 1px solid rgba(226, 232, 240, 0.8);
            position: relative;
            overflow: hidden;
          }
          .block-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, #ef4444, #f97316);
          }
          .warning-icon {
            font-size: 64px;
            margin-bottom: 24px;
            display: inline-block;
            animation: pulse 2s infinite ease-in-out;
          }
          h1 {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 16px;
            color: #1e293b;
            letter-spacing: -0.02em;
          }
          p {
            font-size: 15px;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 32px;
          }
          .btn-primary {
            display: inline-block;
            background: #0f172a;
            color: #ffffff;
            font-weight: 600;
            font-size: 14px;
            text-decoration: none;
            padding: 12px 28px;
            border-radius: 12px;
            transition: all 0.2s ease;
            box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.15);
          }
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.2);
            background: #1e293b;
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        </style>
      </head>
      <body>
        <div class="block-container">
          <span class="warning-icon">🛡️</span>
          <h1>Access Suspended</h1>
          <p>
            You accessed this service using an unauthorized or deprecated domain name. For your security and to prevent phishing, access via <strong>unitedpay4africa.com</strong> is blocked.
          </p>
          <a href="https://upa.africa" class="btn-primary">Go to Official Website</a>
        </div>
      </body>
      </html>
    `;

    return new NextResponse(html, {
      status: 403,
      headers: {
        "Content-Type": "text/html",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
