import { Resend } from 'resend';

export const config = {
  runtime: 'edge',
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const data = await req.json();
    const { name, email, phone, org, message, _botcheck } = data;

    // Honeypot check
    if (_botcheck) {
      return new Response(JSON.stringify({ message: 'Success' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const host = req.headers.get('host') || '';
    const isLocalhost = host.includes('localhost');
    const targetEmail = isLocalhost ? 'devdivise@gmail.com' : 'dilip@diviseconsultancy.com';

    const { error } = await resend.emails.send({
      from: 'Contact Form <contact@diviseconsultancy.com>',
      to: targetEmail,
      replyTo: email,
      subject: `New Inquiry from ${name} via Website`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f7f6; padding: 40px 20px; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <div style="background-color: #0b1120; padding: 25px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">DiViSe Consultancy</h1>
            </div>
            <div style="padding: 35px;">
              <h2 style="color: #1e293b; margin-top: 0; font-size: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 15px;">New Website Inquiry</h2>
              <p style="font-size: 16px; line-height: 1.6; color: #475569;">You have received a new message from the contact form on your website.</p>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 25px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 130px;"><strong style="color: #0f172a;">Name:</strong></td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #0f172a;">Email:</strong></td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #0f172a;">Phone:</strong></td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">${phone || '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><strong style="color: #0f172a;">Organization:</strong></td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">${org || '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}</td>
                </tr>
              </table>

              <div style="margin-top: 35px; background-color: #f8fafc; padding: 25px; border-left: 4px solid #3b82f6; border-radius: 4px;">
                <h3 style="margin-top: 0; color: #0f172a; font-size: 16px; text-transform: uppercase; letter-spacing: 0.5px;">Message</h3>
                <p style="margin-bottom: 0; white-space: pre-wrap; color: #334155; line-height: 1.6; font-size: 15px;">${message}</p>
              </div>
            </div>
            <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0;">This email was sent automatically from the DiViSe website contact form.</p>
              <p style="margin: 5px 0 0 0;">Environment: <strong>${isLocalhost ? 'Local Testing' : 'Production'}</strong></p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
