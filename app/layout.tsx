import '@/styles/globals.css';
import { Metadata } from 'next';
import { Link } from '@heroui/link';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang='en'
    >
      <head />
      <body
        className={clsx(
          'min-h-screen text-foreground bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class' }}>
          <div className='relative flex flex-col min-h-screen'>
            <Navbar />
            <main className='container mx-auto max-w-full flex-grow'>
              {children}
            </main>
            <footer className='py-3 bg-[#1b273b]'>
              <div className='max-w-7xl mx-auto w-full px-4 pt-8 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-12'>
                  <div className='col-span-2 space-y-6'>
                    <div className='flex items-center gap-3'>
                      <h2 className='text-2xl font-bold text-white'>Nombre</h2>
                    </div>
                    <p className='text-slate-400 max-w-sm'>
                      Excelencia legal y ética profesional dedicada a proteger
                      sus derechos y ofrecer tranquilidad jurídica en cada etapa
                      del proceso.
                    </p>
                  </div>
                  <div className='gap-4 space-y-4'>
                    <h2 className='text-xl font-bold text-white'>Navegación</h2>
                    <ul className='space-y-2 text-slate-400'>
                      <li>
                        <a
                          className='hover:text-white transition-colors'
                          href='#home'
                        >
                          Inicio
                        </a>
                      </li>
                      <li>
                        <a
                          className='hover:text-white transition-colors'
                          href='#nosotros'
                        >
                          Nosotros
                        </a>
                      </li>
                      <li>
                        <a
                          className='hover:text-white transition-colors'
                          href='#areas-practica'
                        >
                          Áreas
                        </a>
                      </li>
                      <li>
                        <a
                          className='hover:text-white transition-colors'
                          href='#contacto'
                        >
                          Contacto
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='gap-4 space-y-4'>
                    <h2 className='text-xl font-bold text-white'>Siguenos</h2>
                    <div className='flex gap-4'>
                      <p className='text-white hover:scale-110 transition-transform'>
                        Icono de red
                      </p>
                      <p className='text-white hover:scale-110 transition-transform'>
                        Icono de red
                      </p>
                    </div>
                  </div>
                </div>
                <div className='py-8 mt-8 border-t border-white/10 text-center text-slate-500 text-sm'>
                  <p>© 2026 (Nombre). Todos los derechos reservados.</p>
                </div>
                <Link
                  isExternal
                  className='flex items-center justify-center gap-1 text-current py-4'
                  href='https://github.com/JoseMG-ux'
                  title='GitHub'
                >
                  <span className='text-default-600'>Desarrollado por</span>
                  <p className='text-default'>JoseMorenoGomez</p>
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
