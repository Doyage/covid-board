import { Card } from '../src/components/organisms/Card';

export default function CardPage() {
  return (
    <div className="container mx-auto p-4 pt-6">
      <Card>
        <Card.Header>카드의 헤더</Card.Header>
        <Card.Body>
          <Card.Title>카드의 타이틀</Card.Title>
          <Card.Subtitle>카드의 서브타이틀</Card.Subtitle>
          <Card.Text>카드의 텍스트</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
