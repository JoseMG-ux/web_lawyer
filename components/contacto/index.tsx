import FormContact from '@/components/contacto/components/ContactForm';
import { MailIcon, PhoneIcon, UbicationIcon } from '@/components/icons';
import CardComponent from '@/components/ui/CardComponent';

const Contacto = () => {
  return (
    <>
      <section
        className='py-24 bg-[#f6f7f7]'
        id='contacto'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <div className='space-y-6'>
              <div className='gap-4 flex flex-col'>
                <h2 className='text-4xl font-bold text-black'>Contáctenos</h2>
              </div>

              <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
                Estamos aquí para ayudarle. Complete el formulario y nos
                pondremos en contacto con usted en un plazo máximo de 24 horas
                laborables.
              </p>

              <div className='gap-4 flex flex-col'>
                <div className='flex items-center gap-2'>
                  <MailIcon />
                  <p className='text-slate-600 text-md leading-relaxed justify-between'>
                    correo@gmail.com
                  </p>
                </div>

                <div className='flex items-center gap-2'>
                  <PhoneIcon />
                  <p className='text-slate-600 dark:text-slate-400 text-md leading-relaxed'>
                    +57 000 0000000
                  </p>
                </div>

                <div className='flex items-center gap-2'>
                  <UbicationIcon />
                  <p className='text-slate-600 dark:text-slate-400 text-md leading-relaxed'>
                    El Golf, Barranquilla, Atlantico
                  </p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              <CardComponent
                color='bg-white'
                body={<FormContact />}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacto;
