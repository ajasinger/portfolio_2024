import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const body = await request.json();

    console.log('Email:', process.env.NODEMAILER_EMAIL); 
  console.log('Email Pass:', process.env.NODEMAILER_PASSWORD); 
  console.log('body', body)

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PASSWORD,
            },
        });
    
        const mailOptions: Mail.Options = {
            from: process.env.NODEMAILER_EMAIL,
            to: process.env.NODEMAILER_EMAIL,
            subject: `Message from ${body.name} (${body.email})`,
            text: body.message,
        };


    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
            if (!err) {
                resolve('Email sent');
            } else {
                console.log('error sending email', err);
                reject(err.message);
            }
        });
    });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}