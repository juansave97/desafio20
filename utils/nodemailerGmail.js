const { createTransport } = require(`nodemailer`);
const dotenv = require(`dotenv`);
dotenv.config();

const EMAIL = process.env.EMAIL;
const PASS = process.env.PASS_EMAIL_API;


const transporter = createTransport({
    host: `smtp.gmail.com`,
    port: 465,
    auth: {
        user: EMAIL,
        pass: PASS
    }
});

const sendEmail = async (options) => {
    
console.log('email', EMAIL)
console.log('password', PASS)

    try {
        const response = await transporter.sendMail(options);
        console.log('email response', response);

    } catch (e) {
        console.log('error al enviar el mail')
        console.error(e);
    }
}

module.exports = sendEmail;