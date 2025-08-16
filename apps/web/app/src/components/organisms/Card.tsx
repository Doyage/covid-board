import React from 'react';
import { CardBody } from '../molecules/CardBody';
import { CardHeader } from '../molecules/CardHeader';
import { CardSubtitle } from '../molecules/CardSubtitle';
import { CardText } from '../molecules/CardText';
import { CardTitle } from '../molecules/CardTitle';

interface CardComposition {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Title: typeof CardTitle;
  Subtitle: typeof CardSubtitle;
  Text: typeof CardText;
}

interface CardComponentProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardComponentProps> & CardComposition = ({
  children,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Text = CardText;
