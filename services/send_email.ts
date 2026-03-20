import { EmailRequest } from '@/types/request';
import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

export const sendContactEmail = async (requestEmail: EmailRequest) => {
  const templateParams = {
    from_name: requestEmail.name,
    reply_to: requestEmail.email,
    subject: requestEmail.subject,
    message: requestEmail.message,
  };

  return await emailjs
    .send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY,
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        return response;
      },
      (error) => {
        console.log('FAILED...', error);
        return error;
      },
    );
};
