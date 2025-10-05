import { NextResponse } from "next/server";
import { Resend } from "resend";

// Ensure this route is always dynamic (never statically optimized)
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    // Basic env guard
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "Missing RESEND_API_KEY. Add it to .env.local and restart the server." },
        { status: 500 }
      );
    }

    // Instantiate Resend only after env check
    const resend = new Resend(process.env.RESEND_API_KEY!);

    // Parse JSON body safely
    let data: any = {};
    try {
      data = await req.json();
    } catch (e: any) {
      return NextResponse.json(
        { success: false, error: "Invalid or empty JSON body." },
        { status: 400 }
      );
    }

    const {
      firstName = "",
      lastName = "",
      email = "",
      phone = "",
      company = "",
      message = "",
    } = data || {};

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: firstName, lastName, email, message." },
        { status: 400 }
      );
    }

    const toAddress = process.env.CONTACT_TO_EMAIL || "contact@abncapital.com";
    // Pull a verified sender from env (either full "Name <email>" or just email)
    const fromEnv = process.env.FROM_EMAIL || "onboarding@resend.dev";
    // Extract the bare email if FROM_EMAIL is in "Name <email>" form
    const fromVerifiedEmail = fromEnv.match(/<\s*([^>]+)\s*>/)?.[1] || fromEnv.trim();
    // Build a friendly display name that includes the actual user email
    const from = `ABN Contact (${firstName} ${lastName} • ${email}) <${fromVerifiedEmail}>`;

    const subject = `New Inquiry from ${firstName} ${lastName}`;
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #f7f9fb;
      color: #333;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .header {
      background-color: #0a2540;
      color: #fff;
      text-align: center;
      padding: 24px 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
    }
    .content {
      padding: 24px 32px;
    }
    .content h2 {
      color: #0a2540;
      margin-bottom: 12px;
      font-size: 18px;
    }
    .content p {
      margin: 8px 0;
      line-height: 1.6;
    }
    .label {
      font-weight: 600;
      color: #555;
    }
    .footer {
      background-color: #f1f3f5;
      text-align: center;
      font-size: 13px;
      color: #777;
      padding: 16px 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📩 New Contact Form Submission</h1>
    </div>
    <div class="content">
      <h2>Contact Details</h2>
      <p><span class="label">Name:</span> ${firstName} ${lastName}</p>
      <p><span class="label">Email:</span> ${email}</p>
      <p><span class="label">Phone:</span> ${phone || "-"}</p>
      <p><span class="label">Company:</span> ${company || "-"}</p>
      <h2>Message</h2>
      <p>${(message || "").replace(/\\n/g, "<br/>")}</p>
    </div>
    <div class="footer">
      This message was sent from your website contact form.<br />
      © ${new Date().getFullYear()} ABN Capital. All rights reserved.
    </div>
  </div>
</body>
</html>
`;

    // Resend v2 returns { data, error }
    const { data: sent, error } = await resend.emails.send({
      from: from,
      to: [toAddress],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message || "Resend failed to send email." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, id: sent?.id || null }, { status: 200 });
  } catch (err: any) {
    console.error("[send-email] Unhandled error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Unknown server error" },
      { status: 500 }
    );
  }
}

// Allow preflight if any CORS happens
export async function OPTIONS() {
  return new Response(null, { status: 204 });
}
