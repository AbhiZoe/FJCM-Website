import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validation'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactFormSchema.parse(body)

    // Log the contact form submission (in production, send email here)
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message.substring(0, 50) + '...',
    })

    // In production, integrate with email service (Resend, Nodemailer, etc.)
    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Invalid form data' },
      { status: 400 }
    )
  }
}
