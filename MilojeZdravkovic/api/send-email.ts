import nodemailer from 'nodemailer'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Validate required fields
  if (!name || !email || !message) {
    console.warn('Missing required fields:', req.body)
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Create nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // must be set in Vercel env
      pass: process.env.EMAIL_PASS, // 16-character Gmail App Password
    },
  })

  try {
    // Send the email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // must match authenticated Gmail
      to: 'milojez@gmail.com',      // your inbox
      replyTo: email,               // allows replying to user
      subject: `New Contact Message from ${name}`,
      text: message,
    })

    console.log('Email sent successfully:', info)
    return res.status(200).json({ success: true, info })
  } catch (err: any) {
    // Log full error for debugging
    console.error('Nodemailer failed:', err)
    return res.status(500).json({ error: 'Email failed', message: err.message })
  }
}
