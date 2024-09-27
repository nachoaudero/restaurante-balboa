import emailjs from 'emailjs-com';

export const sendEmailVerificationCode = async (email, code, full_name) => {
    const templateParams = {
        email: email,
        verification_code: code,
        full_name: full_name
    };

    try {
        const response = await emailjs.send('service_sq840xu', 'template_hyal9ro', templateParams, 'P3Vqg453DF6JUBClT');
        console.log('Correo enviado exitosamente:', response.status, response.text);
    } catch (err) {
        console.error('Error al enviar el correo:', err);
    }
};