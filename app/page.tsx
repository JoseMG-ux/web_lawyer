import Inicio from '@/components/home';
import Nosotros from '@/components/nosotros';
import AreasPractica from '@/components/areas_practica';
import PreguntasFrecuentes from '@/components/faq';
import Contacto from '@/components/contacto';
import Mapa from '@/components/ubicacion';

export default function Home() {
  return (
    <>
      <Inicio />
      <Nosotros />
      <AreasPractica />
      <PreguntasFrecuentes />
      <Contacto />
      <Mapa />
    </>
  );
}
