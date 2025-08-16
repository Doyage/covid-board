'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Card } from './Card';

interface AccordionContextType {
  openItemId: string | null;
  toggleItem: (id: string) => void;
}
const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
);
const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      'useAccordion must be used within a CardAccordion provider',
    );
  }
  return context;
};

const CardAccordionItem = ({ children }: { children: ReactNode }) => {
  return <Card>{children}</Card>;
};

const CardAccordionHeader = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  const { toggleItem } = useAccordion();
  return (
    <Card.Header>
      <button
        type="button"
        className="p-0 w-full text-left bg-transparent border-none font-semibold"
        onClick={() => toggleItem(id)}
      >
        {children}
      </button>
    </Card.Header>
  );
};

const CardAccordionBody = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  const { openItemId } = useAccordion();
  const isOpen = openItemId === id;

  return (
    <div
      className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
    >
      <div className="overflow-hidden">
        <Card.Body>{children}</Card.Body>
      </div>
    </div>
  );
};

interface CardAccordionProps {
  Item: typeof CardAccordionItem;
  Header: typeof CardAccordionHeader;
  Body: typeof CardAccordionBody;
}

export const CardAccordion: React.FC<{
  defaultOpenId?: string | null;
  children: ReactNode;
}> &
  CardAccordionProps = ({ children, defaultOpenId = null }) => {
  const [openItemId, setOpenItemId] = useState<string | null>(defaultOpenId);

  const toggleItem = (id: string) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <AccordionContext.Provider value={{ openItemId, toggleItem }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
};

CardAccordion.Item = CardAccordionItem;
CardAccordion.Header = CardAccordionHeader;
CardAccordion.Body = CardAccordionBody;
