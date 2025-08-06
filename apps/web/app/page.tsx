import Heading from './src/components/atoms/Heading';
import Slide from './src/components/organisms/Slide';

export default function Home() {
  return (
    <main>
      <Heading level={1}>코로나보드</Heading>
      <Slide title="국가별 현황">국가별 현황을 보여줍니다.</Slide>
      <Slide title="대한민국 지역별 현황">
        대한민국 지역별 현황을 보여줍니다.
      </Slide>
      <Slide title="예방 행동 수칙">예방 행동 수칙을 보여줍니다.</Slide>
    </main>
  );
}
