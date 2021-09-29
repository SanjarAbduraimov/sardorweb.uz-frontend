import { Container, Section } from '../../../components/UIKit';
import WorkCard from '../../../components/WorkCard';
import data from '../../../data.json';

export default function Works() {
  return (
    <Section py={[45, 80, 100]} px={[32, 80, 90]}>
      <Container display={['grid']} gridGap={[32]}>
        {data.items.map((item, index) => (
          <WorkCard key={index} image={item.image} title={item.title} />
        ))}
      </Container>
    </Section>
  );
}
