import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'ea468586fb13ce',
    pass: '353bd4d43a7b5a'
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <support@feedget.com>',
      to: 'Darllinson Azevedo <azevedo.darllinson@gmail.com>',
      subject,
      html: body
    })
  }
}
