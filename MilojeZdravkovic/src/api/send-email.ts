import nodemailer from 'nodemailer'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: 'milojez@gmail.com',
      subject: `New Contact Message from ${name}`,
      text: message,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    return res.status(500).json({ error: 'Email failed' })
  }
}
