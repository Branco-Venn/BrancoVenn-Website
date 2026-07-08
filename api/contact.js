// Vercel Serverless Function — /api/contact
// Secrets (RESEND_API_KEY, FROM_EMAIL, TO_EMAIL) are stored in
// Vercel's Environment Variables dashboard, NOT in the repo.

import { Resend } from 'resend';

// Simple in-memory rate limit: max 5 requests per IP per 15 minutes.
// For production scale, swap this with an edge KV store.
const ipMap = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const record = ipMap.get(ip);
  if (!record || now - record.start > WINDOW_MS) {
    ipMap.set(ip, { start: now, count: 1 });
    return false;
  }
  record.count++;
  return record.count > MAX_REQUESTS;
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  // CORS — allow your production domain and local dev
  const allowedOrigins = [
    'https://brancovenn.com',
    'https://www.brancovenn.com',
    'http://localhost:5173',
    'http://localhost:3000',
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Rate limiting
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    'unknown';

  if (isRateLimited(ip)) {
    return res.status(429).json({
      success: false,
      error: 'Too many messages sent. Please try again after 15 minutes.',
    });
  }

  // Parse body
  const { name, email, message } = req.body || {};

  // Validate
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Please enter a valid email address' });
  }

  // Sanitize
  const safeName    = name.trim().substring(0, 100);
  const safeEmail   = email.trim().substring(0, 255);
  const safeMessage = message.trim().substring(0, 2000);

  // Guard: ensure secrets are configured
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ success: false, error: 'Server configuration error' });
  }

  const resend    = new Resend(process.env.RESEND_API_KEY);
  const fromEmail = process.env.FROM_EMAIL  || 'onboarding@resend.dev';
  const toEmail   = process.env.TO_EMAIL    || 'contact@brancovenn.com';

  try {
    // Send notification to Branco Venn team
    await resend.emails.send({
      from: fromEmail,
      to:   toEmail,
      replyTo: safeEmail,
      subject: `New Contact Form Message from ${safeName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f8f9fa;">
          <div style="background:#fff;padding:30px;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,.1);">
            <h2 style="color:#333;border-bottom:2px solid #007bff;padding-bottom:10px;">
              New Contact Form Submission
            </h2>
            <p><strong>From:</strong> ${safeName} &lt;${safeEmail}&gt;</p>
            <p><strong>Message:</strong></p>
            <div style="background:#f8f9fa;padding:15px;border-radius:5px;white-space:pre-wrap;color:#333;">
              ${safeMessage}
            </div>
            <p style="font-size:12px;color:#888;margin-top:20px;">
              Sent on: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation to the user
    try {
      await resend.emails.send({
        from:    fromEmail,
        to:      safeEmail,
        subject: 'Thank you for contacting Branco Venn',
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;background:#f8f9fa;">
            <div style="background:#fff;padding:30px;border-radius:10px;box-shadow:0 2px 10px rgba(0,0,0,.1);">
              <h2 style="color:#333;">Thank You for Contacting Us!</h2>
              <p style="color:#555;line-height:1.6;">
                Dear ${safeName},<br><br>
                We've received your message and will get back to you as soon as possible.
                We appreciate your interest in Branco Venn and our SimGamepad product.
              </p>
              <div style="margin:20px 0;padding:15px;background:#f8f9fa;border-radius:5px;">
                <h3 style="color:#333;margin-top:0;">Your Message:</h3>
                <p style="color:#555;white-space:pre-wrap;">${safeMessage}</p>
              </div>
              <p style="color:#555;">Best regards,<br>The Branco Venn Team</p>
              <p style="font-size:12px;color:#888;margin-top:20px;">
                This is an automated confirmation. Please do not reply to this email.
              </p>
            </div>
          </div>
        `,
      });
    } catch (confirmErr) {
      // Confirmation failing is non-fatal
      console.warn('Confirmation email failed:', confirmErr);
    }

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
    });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.',
    });
  }
};
