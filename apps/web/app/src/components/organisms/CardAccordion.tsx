'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Card } from './Card';

interface AccordionContextType {
  openItemIds: string[];
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
  const { openItemIds } = useAccordion();
  const isOpen = openItemIds.includes(id);

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
  defaultOpenIds?: string[];
  children: ReactNode;
}> &
  CardAccordionProps = ({ children, defaultOpenIds = [] }) => {
  const [openItemIds, setOpenItemIds] = useState<string[]>(defaultOpenIds);

  const toggleItem = (id: string) => {
    setOpenItemIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((itemId) => itemId !== id)
        : [...currentIds, id],
    );
  };

  return (
    <AccordionContext.Provider value={{ openItemIds, toggleItem }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
};

CardAccordion.Item = CardAccordionItem;
CardAccordion.Header = CardAccordionHeader;
CardAccordion.Body = CardAccordionBody;
