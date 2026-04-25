import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;

// Quick check to ensure .env is loading correctly
console.log("[ENV CHECK] Email User Loaded:", process.env.EMAIL_USER ? "Yes" : "No");

// Middleware
app.use(cors());
app.use(express.json());

// Reusable Transporter Setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

// Verify the connection string immediately on server start
transporter.verify((error, success) => {
  if (error) {
    console.error("[MAIL ERROR] Transporter failed to connect:", error);
  } else {
    console.log("[MAIL SUCCESS] Server is connected to Gmail and ready to send emails");
  }
});

app.post('/api/bookings', async (req, res) => {
  try {
    const { name, phone, email, weddingDate, package: pkg, message } = req.body;

    // Validation (Make sure your frontend sends the key exactly as "package")
    if (!name || !phone || !weddingDate || !pkg || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields.' 
      });
    }

    const ownerEmail = process.env.OWNER_EMAIL || process.env.EMAIL_USER;

    // Failsafe for missing credentials during development
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.warn("WARNING: Email credentials not configured in .env. Form submission recorded but email not sent.");
      return res.status(200).json({ 
        success: true, 
        message: 'Booking received (email sending bypassed due to missing credentials).' 
      });
    }

    // Clean text version (for email clients that don't support HTML)
    const textMessage = `
      APEX PHOTO CLUB - NEW COMMISSION INQUIRY
      -----------------------------------------
      Name: ${name}
      Phone: ${phone}
      Email: ${email || 'Not Provided'}
      Wedding Date: ${weddingDate}
      Selected Collection: ${pkg}
      
      Client Message:
      ${message}
    `;

    // Premium Editorial HTML Email Template
    const htmlMessage = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #050505; font-family: 'Montserrat', Arial, sans-serif; -webkit-font-smoothing: antialiased;">
        
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #050505; padding: 40px 20px;">
          <tr>
            <td align="center">
              
              <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #111111; border: 1px solid #222222; border-top: 4px solid #d4af37;">
                
                <tr>
                  <td align="center" style="padding: 40px 30px; border-bottom: 1px solid #222222;">
                    <h1 style="margin: 0; font-family: 'Playfair Display', Georgia, serif; font-size: 28px; font-weight: 400; color: #f8f8f8; letter-spacing: 2px; text-transform: uppercase;">
                      Apex <span style="color: #d4af37; font-style: italic; text-transform: lowercase;">photo club</span>
                    </h1>
                    <p style="margin: 15px 0 0 0; font-size: 11px; color: #d4af37; letter-spacing: 3px; text-transform: uppercase; font-weight: 500;">
                      New Commission Inquiry
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 40px 40px 20px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom: 15px;">
                          <p style="margin: 0; font-size: 10px; color: #888888; text-transform: uppercase; letter-spacing: 2px;">Client Name</p>
                          <p style="margin: 5px 0 0 0; font-size: 16px; color: #f8f8f8;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 15px;">
                          <p style="margin: 0; font-size: 10px; color: #888888; text-transform: uppercase; letter-spacing: 2px;">Contact Info</p>
                          <p style="margin: 5px 0 0 0; font-size: 15px; color: #f8f8f8;">
                            <a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a><br>
                            <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email || 'Not Provided'}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 15px;">
                          <p style="margin: 0; font-size: 10px; color: #888888; text-transform: uppercase; letter-spacing: 2px;">Event Date</p>
                          <p style="margin: 5px 0 0 0; font-size: 16px; color: #f8f8f8;">${weddingDate}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 15px;">
                          <p style="margin: 0; font-size: 10px; color: #888888; text-transform: uppercase; letter-spacing: 2px;">Selected Collection</p>
                          <p style="margin: 5px 0 0 0; font-size: 16px; color: #d4af37; font-weight: 500;">${pkg}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 0 40px 40px 40px;">
                    <div style="background-color: #1a1a1a; border-left: 2px solid #d4af37; padding: 25px;">
                      <p style="margin: 0; font-size: 10px; color: #888888; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;">Message & Vision</p>
                      <p style="margin: 0; font-size: 14px; color: #cccccc; line-height: 1.8; font-weight: 300;">
                        ${message.replace(/\n/g, '<br>')}
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td align="center" style="padding: 20px; background-color: #0a0a0a; border-top: 1px solid #222222;">
                    <p style="margin: 0; font-size: 10px; color: #666666; letter-spacing: 1px; text-transform: uppercase;">
                      Automated dispatch from Apex Photo Club Portfolio
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"${name} (Website Inquiry)" <${process.env.EMAIL_USER}>`,
      to: ownerEmail,
      replyTo: email || undefined,
      subject: `New Commission Request: ${name} | ${weddingDate}`,
      text: textMessage,
      html: htmlMessage,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`[SUCCESS] Email sent to ${ownerEmail} (ID: ${info.messageId})`);

    res.status(200).json({ 
      success: true, 
      message: 'Booking received and email sent successfully.' 
    });

  } catch (error) {
    console.error('[ERROR] Failed to send email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while processing your inquiry.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`[READY] Apex Backend server running on http://localhost:${PORT}`);
});