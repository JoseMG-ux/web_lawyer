import clsx from 'clsx';
import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import { siteConfig } from '@/config/site';

const Inicio = () => {
  return (
    <>
      <section
        id='home'
        className='relative flex flex-col min-h-[85vh] items-center justify-center gap-4 py-8 md:py-10 bg-[#1b273bd9] overflow-hidden'
      >
        {/* <span className='absolute select-none pointer-events-none font-black text-white/[0.03] text-[6rem] md:text-[20rem] whitespace-nowrap leading-none tracking-widest z-0 watermark-drift'>
          SCHULZ & ERASMO
        </span> */}
        <div className='relative z-10 max-w-4xl text-center space-y-4'>
          <span className='block text-lg md:text-xl font-light tracking-[0.2em] uppercase text-slate-300 mb-4'>
            Schulz &amp; Erasmo Abogados
          </span>
          <h2 className='text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tight'>
            Excelencia Legal <br />
            <span className='text-slate-300'>a su Alcance</span>
          </h2>
          <br />
          <p className='text-slate-200 text-lg md:text-xl max-w-2.5xl mx-auto font-light leading-relaxed'>
            Servicios legales profesionales con un enfoque en la integridad, la
            confianza y la experiencia para resolver sus asuntos jurídicos con
            la mayor diligencia.
          </p>
        </div>
        <div className='pt-4 relative z-10'>
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
      </section>
    </>
  );
};

export default Inicio;
