import React, { ReactNode } from 'react';
import Heading from '../atoms/Heading';

interface SlideProps {
  children: ReactNode;
  title: string;
  className?: string;
}

const Slide: React.FC<SlideProps> = ({ children, title }) => {
  return (
    <div className="text-center border-t border-gray-400 pt-10 pb-16">
      <Heading level={2}>{title}</Heading>
      <div>{children}</div>
    </div>
  );
};

export default Slide;
