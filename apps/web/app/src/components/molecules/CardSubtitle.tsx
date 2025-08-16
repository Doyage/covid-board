import React from 'react';
import Heading from '../atoms/Heading';

export const CardSubtitle = ({ children }: { children: React.ReactNode }) => (
  <Heading level={6} className="text-gray-500 mb-3">
    {children}
  </Heading>
);
