'use client';
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from '@heroui/navbar';

import { button as buttonStyles } from '@heroui/theme';
import { Link } from '@heroui/link';
import { link as linkStyles } from '@heroui/theme';
import NextLink from 'next/link';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { LogoIcon } from '@/components/icons';

export const Navbar = () => {
  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <HeroUINavbar
      maxWidth='xl'
      isBordered
      position='sticky'
      className='py-4 top-0 z-50'
    >
      <NavbarContent
        className='max-w-7xl px-4 flex items-center justify-between'
        justify='start'
      >
        <NavbarBrand
          as='li'
          className='gap-3 max-w-fit'
        >
          <NextLink
            className='flex justify-start items-center gap-4'
            href='/'
          >
            <LogoIcon />
            <p className='font-extrabold text-inherit'>
              NOMBRE{/* Schulz & Erasmo Abogados */}
            </p>
          </NextLink>
        </NavbarBrand>

        <div className='justify-end flex flex-1 gap-5'>
          <div className='hidden mr-8 lg:flex gap-12 justify-start items-center ml-2'>
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.id}>
                <Link
                  className={clsx(
                    linkStyles({ color: 'foreground' }),
                    'font-normal data-[active=true]:text-primary data-[active=true]:font-medium',
                  )}
                  color='foreground'
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </div>
          <div className=''>
            <Link
              className={clsx(
                buttonStyles({
                  variant: 'solid',
                  radius: 'md',
                  size: 'md',
                }),
                'bg-black text-white font-bold',
              )}
              href={'#contacto'}
            >
              Consultar Ahora
            </Link>
          </div>
        </div>
      </NavbarContent>

      {/* <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === siteConfig.navMenuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href='#'
                size='lg'
              >
                asd
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu> */}
    </HeroUINavbar>
  );
};
