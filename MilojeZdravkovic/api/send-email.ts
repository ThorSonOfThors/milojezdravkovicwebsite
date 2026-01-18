import nodemailer from 'nodemailer'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // DEBUG LOG
  console.log('Incoming request body:', req.body)

  const { name, email, message } = req.body

  // Validate required fields
  if (!name || !email || !message) {
    console.warn('Missing required fields:', { name, email, message })
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'milojez@gmail.com',
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      text: message,
    })

    console.log('Email sent successfully:', info)
    return res.status(200).json({ success: true })
  } catch (err: any) {
    console.error('Nodemailer error:', err)
    return res.status(500).json({
      error: 'Email failed',
      message: err.message
    })
  }
}