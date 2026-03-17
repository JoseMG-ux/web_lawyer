import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';

import { siteConfig } from '@/config/site';
import clsx from 'clsx';

const Inicio = () => {
  return (
    <>
      <section
        id='home'
        className='flex flex-col min-h-[85vh] items-center justify-center gap-4 py-8 md:py-10 bg-[#1b273bd9]'
      >
        <div className='max-w-4xl text-center space-y-4'>
          <h2 className='text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tight'>
            Excelencia Legal <br />
            <span className='text-slate-300'>a su Alcance</span>
          </h2>
          <br />
          <p className='text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed'>
            Servicios legales profesionales con un enfoque en la integridad, la
            confianza y la experiencia para resolver sus asuntos jurídicos con
            la mayor diligencia.
          </p>
        </div>
        <div className='pt-4'>
          <Link
            isExternal
            className={clsx(
              buttonStyles({
                variant: 'solid',
                radius: 'md',
                size: 'lg',
              }),
              'bg-[#ffffff] font-bold hover:scale-110 transition-transform',
            )}
            href={siteConfig.links.github}
          >
            Consultar Ahora
          </Link>
        </div>
        {/* 
        <div className='max-w-4xl text-center space-y-8'>
          <h2 className='text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tight'>
            Excelencia Legal <br />
            <span className='text-slate-300'>a su Alcance</span>
          </h2>
          <p className='text-slate-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed'>
            Servicios legales profesionales con un enfoque en la integridad, la
            confianza y la experiencia para resolver sus asuntos jurídicos con
            la mayor diligencia.
          </p>
          <div className='pt-4'>
            <button className='bg-white text-black px-10 py-4 rounded-xl text-base font-bold hover:bg-slate-100 transition-all shadow-xl'>
              Consultar Ahora
            </button>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Inicio;
