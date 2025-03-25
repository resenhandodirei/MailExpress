import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

transporter.verify(function (error, success) {
    if (error) {
      console.log('Erro no transporter:', error);
    } else {
      console.log('Servidor de e-mail pronto para enviar! ✅');
    }
  });
  

export default transporter;
