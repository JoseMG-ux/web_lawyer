'use client';

import { Card, CardBody, CardHeader } from '@heroui/react';

const CardComponent = ({
  body,
  color,
  className,
  headerContent,
}: {
  body: React.ReactNode;
  color?: string;
  className?: string;
  headerContent?: React.ReactNode;
}) => {
  return (
    <Card
      isBlurred
      className={`w-auto overflow-hidden rounded-xl shadow-sm ${color ?? 'bg-[#1b273b0d]'} ${className}`}
    >
      {headerContent && (
        <CardHeader className='justify-between'>{headerContent}</CardHeader>
      )}
      <CardBody>{body}</CardBody>
    </Card>
  );
};

export default CardComponent;
