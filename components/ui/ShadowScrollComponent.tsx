'use client';
import { ScrollShadow } from '@heroui/react';

const ShadowScrollComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollShadow
      hideScrollBar
      className='w-1xl lg:w-2xl'
    >
      {children}
    </ScrollShadow>
  );
};

export default ShadowScrollComponent;
