import clsx from 'clsx';
import { subtitle } from '@/components/primitives';
import { Divider } from '@heroui/react';
import {
  BusinessIcon,
  AdminIcon,
  FamilyIcon,
  HomeIcon,
  PolicyIcon,
  WorkIcon,
} from '@/components/icons';
import CardComponent from '@/components/ui/CardComponent';

const arrayAreasPractica = [
  {
    id: 1,
    title: 'Derecho Civil',
    description:
      'Contratos, propiedad, herencias y sucesiones. Protegemos sus intereses privados con rigor legal.',
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: 'Derecho Penal',
    description:
      'Defensa técnica especializada y representación en procesos judiciales complejos.',
    icon: <PolicyIcon />,
  },
  {
    id: 3,
    title: 'Derecho Laboral',
    description:
      'Relaciones laborales, despidos, contratos y asesoría integral para empresas y trabajadores.',
    icon: <WorkIcon />,
  },
  {
    id: 4,
    title: 'Derecho Familiar',
    description:
      'Divorcios, custodias y mediación familiar con un enfoque humano y profesional.',
    icon: <FamilyIcon />,
  },
  {
    id: 5,
    title: 'Derecho Corporativo',
    description:
      'Asesoría jurídica para empresas, constitución de sociedades y cumplimiento normativo.',
    icon: <BusinessIcon />,
  },
  {
    id: 6,
    title: 'Derecho Administrativo',
    description:
      'Gestión de recursos ante la administración pública y litigios contenciosos.',
    icon: <AdminIcon />,
  },
];

const AreasPractica = () => {
  return (
    <section
      id='areas-practica'
      className='flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-[#f6f7f7]'
    >
      <div className='inline-block max-w-xl text-center justify-center w-full max-w-2xl mx-auto'>
        <h2 className='text-4xl font-bold text-black'>Areas de practica</h2>
      </div>
      <Divider className='h-1 w-24 rounded-full bg-black' />
      <div className='inline-block max-w-3xl text-center justify-center w-full'>
        <div
          className={clsx(
            subtitle({ size: 'md' }),
            'text-slate-600 font-light',
          )}
        >
          Ofrecemos asesoría especializada en diversas ramas del derecho,
          adaptándonos a las necesidades específicas de cada situación jurídica.
        </div>
      </div>
      <div className='flex flex-wrap gap-4 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {arrayAreasPractica.map((item) => (
            <CardComponent
              key={item.id}
              color='bg-white'
              body={
                <div className='p-6 gap-8 flex flex-col gap-6 md:gap-8'>
                  <div className='flex flex-col gap-4 items-start'>
                    <div className='flex justify-center items-center rounded-xl p-2 bg-[#1b273b1a] focus-within:shadow-lg hover:bg-black hover:text-white hover:scale-110 transition-transform'>
                      {item.icon}
                    </div>
                    <span className='text-[#181111] font-extrabold leading-tight text-lg'>
                      {item.title}
                    </span>
                    <p className='text-start text-[#475569] font-light text-sm leading-normal max-w-[600px]'>
                      {item.description}
                    </p>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasPractica;
