import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validera att alla fält finns
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Alla fält måste vara ifyllda' },
        { status: 400 }
      );
    }

    // Skicka email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Kontaktformulär <onboarding@resend.dev>', // Du kommer byta till din egen domän senare
      to: ['gabrielerixon@gmail.com'], // Steens email
      replyTo: email, // Så Steen kan svara direkt till kunden
      subject: `Nytt meddelande från ${name}`,
      html: `
        <h2>Nytt kontaktformulär från webbplatsen</h2>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Detta meddelande skickades från kontaktformuläret på kiro-jkpg.se
        </p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Kunde inte skicka meddelandet' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Ett oväntat fel uppstod' },
      { status: 500 }
    );
  }
}