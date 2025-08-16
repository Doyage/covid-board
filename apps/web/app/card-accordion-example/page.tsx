'use client';

import { CardAccordion } from '../src/components/organisms/CardAccordion';

export default function CardAccordionPage() {
  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-2xl font-bold mb-4">Card Accordion Example</h1>

      <CardAccordion defaultOpenId="card-1">
        <CardAccordion.Item>
          <CardAccordion.Header id="card-1">카드의 헤더</CardAccordion.Header>
          <CardAccordion.Body id="card-1">카드 컨텐츠</CardAccordion.Body>
        </CardAccordion.Item>

        <CardAccordion.Item>
          <CardAccordion.Header id="card-2">
            두 번째 카드 헤더
          </CardAccordion.Header>
          <CardAccordion.Body id="card-2">
            두 번째 카드 컨텐츠입니다.
          </CardAccordion.Body>
        </CardAccordion.Item>
      </CardAccordion>
    </div>
  );
}
