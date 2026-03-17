import Inicio from '../components/home';
import Nosotros from '../components/nosotros';
import AreasPractica from '../components/areas_practica';
import PreguntasFrecuentes from '../components/faq';
import Contacto from '../components/contacto';
import Mapa from '@/components/ubicacion/mapa';

export default function Home() {
  return (
    <>
      <Inicio />
      <Nosotros />
      <AreasPractica />
      <PreguntasFrecuentes />
      <Contacto />
      <Mapa />
      {/* <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10 border'></section> */}
    </>
  );
}
