import { CardAccordion } from '../src/components/organisms/CardAccordion';

export default function CardAccordionPage() {
  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-2xl font-bold mb-4">Card Accordion Example</h1>

      <CardAccordion defaultOpenIds={['card-1', 'card-2', 'card-3']}>
        <CardAccordion.Item>
          <CardAccordion.Header id="card-1">
            Card Header #1
          </CardAccordion.Header>
          <CardAccordion.Body id="card-1">
            This card is open by default. Clicking it will close it.
          </CardAccordion.Body>
        </CardAccordion.Item>

        <CardAccordion.Item>
          <CardAccordion.Header id="card-2">
            Card Header #2
          </CardAccordion.Header>
          <CardAccordion.Body id="card-2">
            This card is closed by default. Clicking another item will not
            affect this one.
          </CardAccordion.Body>
        </CardAccordion.Item>

        <CardAccordion.Item>
          <CardAccordion.Header id="card-3">
            Card Header #3
          </CardAccordion.Header>
          <CardAccordion.Body id="card-3">
            This card is also open by default, demonstrating the multi-open
            capability.
          </CardAccordion.Body>
        </CardAccordion.Item>
      </CardAccordion>
    </div>
  );
}
