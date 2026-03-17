'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@heroui/react';

const AccordionComponent = ({
  defaultContent,
  title,
  key,
}: {
  defaultContent: React.ReactNode;
  title: React.ReactNode;
  key: any;
}) => {
  return (
    <Accordion>
      <AccordionItem
        key={key}
        aria-label='Accordion 1'
        title={title}
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
