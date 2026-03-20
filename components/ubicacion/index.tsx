const Mapa = () => {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <iframe
        src={
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.5!2d-74.8088173!3d11.0081898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42da24fe517ad%3A0x912837c534048938!2sEl%20Golf%2C%20Barranquilla!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco'
        }
        title='maps'
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        className='w-full h-96'
        tabIndex={-1}
      />
    </div>
  );
};

export default Mapa;
