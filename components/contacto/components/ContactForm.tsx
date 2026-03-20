'use client';
import { Button, Input, Textarea, Form } from '@heroui/react';
import { addToast } from '@heroui/toast';

import clsx from 'clsx';
import { button as buttonStyles } from '@heroui/theme';
import { useFormik } from 'formik';
import { sendContactEmail } from '@/services/send_email';
import { EmailRequest } from '@/types/request';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required('El nombre es requerido'),
  email: yup.string().required('El correo es requerido'),
  message: yup.string().required('El mensaje es requerido'),
});

const ContactForm = () => {
  const formik = useFormik<EmailRequest>({
    initialValues: {
      name: '',
      email: '',
      subject: 'DEMANDA',
      message: '',
    },
    validationSchema,
    onSubmit: async (values: EmailRequest, { resetForm }) => {
      try {
        const response = await sendContactEmail(values);

        if (response.status === 200) {
          addToast({
            title: '¡Exitoso!',
            description: 'El correo fue enviado exitosamente.',
            variant: 'bordered',
            color: 'foreground',
          });
        }
        resetForm();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form
      className='w-auto justify-center items-center space-y-4'
      validationErrors={formik.errors}
      onSubmit={formik.handleSubmit}
    >
      <div className='w-full py-12 flex flex-col gap-8 max-w-md'>
        <Input
          isRequired
          label='Nombre completo'
          labelPlacement='outside'
          id='name'
          {...formik.getFieldProps('name')}
          placeholder='Introduzca su nombre'
          type='text'
          isInvalid={Boolean(formik.touched.name && formik.errors.name)}
          errorMessage={formik.touched.name && formik.errors.name}
        />

        <Input
          isRequired
          label='Correo electrónico'
          labelPlacement='outside'
          id='email'
          {...formik.getFieldProps('email')}
          placeholder='Introduce tu correo electrónico'
          type='email'
          isInvalid={Boolean(formik.touched.email && formik.errors.email)}
          errorMessage={formik.touched.email && formik.errors.email}
        />

        <Textarea
          isRequired
          className='col-span-12 md:col-span-6 mb-6 md:mb-0'
          label='Mensaje'
          labelPlacement='outside'
          id='message'
          {...formik.getFieldProps('message')}
          placeholder='Introduce una descripción'
          type='text'
          isInvalid={Boolean(formik.touched.message && formik.errors.message)}
          errorMessage={formik.touched.message && formik.errors.message}
        />

        <div className='flex gap-4'>
          <Button
            disabled={formik.status === 'loading' || formik.isSubmitting}
            className={clsx(
              buttonStyles({
                radius: 'md',
                size: 'lg',
              }),
              'bg-black text-white w-full font-bold hover:text-black hover:bg-white hover:shadow-xl',
            )}
            type='submit'
          >
            {formik.status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default ContactForm;
