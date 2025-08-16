import React from 'react';
import Heading from '../atoms/Heading';

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <Heading level={5} className="text-xl font-bold">
    {children}
  </Heading>
);
