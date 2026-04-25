const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// POST /api/bookings
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, weddingDate, package, message } = req.body;

    // Validate required fields
    if (!name || !phone || !weddingDate || !package || !message) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
    }

    // Configure Nodemailer transporter
    // For this to work, set SMTP_HOST, SMTP_PORT, EMAIL_USER, and EMAIL_PASS in your .env file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    const ownerEmail = process.env.OWNER_EMAIL || process.env.EMAIL_USER;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.warn("WARNING: Email credentials not configured in .env. Form submission recorded but email not sent.");
        // If no credentials, just simulate success for the frontend during development
        return res.status(200).json({ success: true, message: 'Booking received (email sending bypassed due to missing credentials).' });
    }

    // Setup email data
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // sender address
      to: ownerEmail, // list of receivers
      replyTo: email || undefined,
      subject: `New Booking Inquiry from ${name}`, // Subject line
      text: `
      You have a new booking inquiry!

      Name: ${name}
      Phone: ${phone}
      Email: ${email || 'N/A'}
      Wedding Date: ${weddingDate}
      Package: ${package}
      
      Message:
      ${message}
      `, // plain text body
      html: `
      <h2>New Booking Inquiry!</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Wedding Date:</strong> ${weddingDate}</p>
      <p><strong>Package:</strong> ${package}</p>
      <hr />
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      `, // html body
    };

    // Send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    res.status(200).json({ success: true, message: 'Booking received and email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Server error while sending email.' });
  }
});

module.exports = router;
