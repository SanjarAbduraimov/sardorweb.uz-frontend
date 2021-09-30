import { Container, Section, Text } from '../../../components/UIKit';
import Fact from './Fact';

const facts = [
  {
    title: '50+',
  },
  {
    title: '90%',
  },
  {
    title: '12k',
  },
];

export default function Facts() {
  return (
    <Section py={[45, 80, 100]} px={[32, 60, 90]}>
      <Container
        display={['grid']}
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
        gridGap={[32]}
      >
        {facts.map((item, index) => (
          <Fact key={index} title={item.title} />
        ))}
      </Container>
    </Section>
  );
}
