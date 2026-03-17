import {
  SecurityIcon,
  EthicIcon,
  ExperienceIcon,
  DilegenceIcon,
} from '@/components/icons';
import CardComponent from '@/components/ui/CardComponent';

const arrayCards = [
  {
    id: 1,
    title: 'Confianza',
    icon: <SecurityIcon />,
  },
  {
    id: 2,
    title: 'Experiencia',
    icon: <ExperienceIcon />,
  },
  {
    id: 3,
    title: 'Ética',
    icon: <EthicIcon />,
  },
  {
    id: 4,
    title: 'Diligencia',
    icon: <DilegenceIcon />,
  },
];

const Nosotros = () => {
  return (
    <>
      <section
        className='py-24 bg-white dark:bg-background-dark/50'
        id='nosotros'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            <div className='space-y-6'>
              <div className='gap-4 flex flex-col'>
                <span className='text-black font-bold tracking-widest text-sm uppercase'>
                  Nuestra Misión
                </span>
                <h2 className='text-4xl font-bold text-black'>
                  Compromiso con la Justicia y la Confianza
                </h2>
              </div>

              <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
                En (nombre), nos dedicamos a ofrecer soluciones legales de alta
                calidad basadas en la confianza y sla experiencia. Nuestra firma
                se distingue por un trato personalizado y un compromiso
                inquebrantable con la justicia.
              </p>
              <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
                Entendemos que cada caso es único. Por ello, aplicamos una
                metodología rigurosa y ética para garantizar que cada cliente
                reciba la mejor representación posible en un entorno de
                transparencia absoluta.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {arrayCards.map((item) => (
                <CardComponent
                  key={item.id}
                  body={
                    <div className='p-6 flex flex-col items-center gap-6 md:gap-8'>
                      {item.icon}
                      <div className='flex flex-col gap-2 items-center '>
                        <span className='text-[#181111] font-bold leading-tight text-lg'>
                          {item.title}
                        </span>
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nosotros;
