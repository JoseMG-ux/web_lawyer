import CardComponent from '@/components/ui/CardComponent';
import AccordionComponent from '@/components/ui/AccordionComponent';
import ShadowScroll from '@/components/ui/ShadowScrollComponent';

const frecuentlyQuestion = [
  {
    id: 1,
    title: '¿Cuáles son las áreas de práctica que ofrecen?',
    description:
      'Iniciamos con una consulta preliminar para entender su situación. Luego realizamos un diagnóstico jurídico y le presentamos una propuesta de servicios detallada.',
  },
  {
    id: 2,
    title: '¿Cuáles son los costos de los honorarios?',
    description:
      'Nuestros honorarios se ajustan a la complejidad del caso y el tiempo requerido. Ofrecemos diferentes modalidades de pago y transparencia total desde el primer momento.',
  },
  {
    id: 3,
    title: '¿Ofrecen servicios de consultoría online?',
    description:
      'Sí, disponemos de canales digitales para realizar consultas virtuales, asegurando la misma calidad y confidencialidad que en una cita presencial.',
  },
];

const PreguntasFrecuentes = () => {
  return (
    <section
      id='preguntas-frecuentes'
      className='flex flex-col items-center justify-center gap-12 py-24 md:py bg-white'
    >
      <div className='inline-block max-w-xl text-center justify-center w-full max-w-2xl mx-auto'>
        <h2 className='text-4xl font-bold text-black'>Preguntas frecuentes</h2>
      </div>
      <div className='gap-4 max-w-7xl px-4 sm:px-6 lg:px-8 '>
        <div className='grid grid-cols-1 gap-4 '>
          {frecuentlyQuestion.map((item) => (
            <CardComponent
              key={item.id}
              body={
                <ShadowScroll>
                  <AccordionComponent
                    key={item.id}
                    title={
                      <span className='text-[#181111] font-extrabold leading-tight text-lg'>
                        {item.title}
                      </span>
                    }
                    defaultContent={
                      <div className='py-2 gap-8 flex flex-col md:gap-8'>
                        <p className='text-start text-[#475569] font-normal text-sm leading-normal'>
                          {item.description}
                        </p>
                      </div>
                    }
                  />
                </ShadowScroll>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
