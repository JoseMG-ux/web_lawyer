import { EmailRequest } from '@/types/request';
import emailjs from '@emailjs/browser';

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

export const sendContactEmail = async (requestEmail: EmailRequest) => {
  return await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: requestEmail.name,
      reply_to: requestEmail.email,
      message: requestEmail.message,
    },
    { publicKey: EMAILJS_PUBLIC_KEY },
  );
};
