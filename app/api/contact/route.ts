import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, country, address, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const gmailUser = process.env.GMAIL_USER
    // Gmail shows app passwords as "abcd efgh ijkl mnop"; strip any spaces so a
    // pasted-with-spaces value still authenticates.
    const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "")

    if (!gmailUser || !gmailPass) {
      console.error("Contact form: missing GMAIL_USER or GMAIL_APP_PASSWORD env var")
      return NextResponse.json({ error: "Email is not configured on the server." }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    })

    await transporter.sendMail({
      from: `"SahajBooks Website" <${gmailUser}>`,
      to: "sahajbooks10@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name} via SahajBooks website`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f0; padding: 32px; border-radius: 12px;">
          <div style="background: #1a3318; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h2 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
            <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 13px;">SahajBooks Website</p>
          </div>
          <div style="background: white; padding: 24px; border-radius: 8px; border: 1px solid #e8e8e4;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #aaa; width: 140px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; font-weight: 600; color: #111;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #aaa;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; font-weight: 600; color: #111;"><a href="mailto:${email}" style="color: #6abf47;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #aaa;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; font-weight: 600; color: #111;">${phone ? `${country} ${phone}` : "Not provided"}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #aaa;">Address</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #111;">${address || "Not provided"}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #aaa;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #111;">${service || "Not specified"}</td></tr>
              <tr><td style="padding: 10px 0; font-size: 13px; color: #aaa; vertical-align: top;">Message</td><td style="padding: 10px 0; font-size: 14px; color: #111; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td></tr>
            </table>
          </div>
          <p style="font-size: 12px; color: #aaa; text-align: center; margin-top: 20px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
