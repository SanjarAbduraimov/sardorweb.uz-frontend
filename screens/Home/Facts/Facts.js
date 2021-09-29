import { Container, Section, Text, Wrapper } from '../../../components/UIKit';
import Fact from './Fact';

const facts = [
  {
    title: '50%',
    description:
      'I’ve worked with more than 200 companies & startups around the world.',
  },
  {
    title: '90%',
    description:
      'I’ve worked with more than 200 companies & startups around the world.',
  },
];

export default function Facts() {
  return (
    <Section py={[45, 80, 100]} px={[32, 60, 90]}>
      <Container
        display={['grid']}
        gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
        alignItems={['center']}
        gridGap={[32]}
      >
        <Wrapper maxWidth={[500]}>
          <Text size={['heading4', 'heading2', 'heading2']}>
            I’ve worked with more than 200 companies & startups around the
            world.
          </Text>
        </Wrapper>

        <Wrapper
          display={['grid']}
          gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
          gridGap={[32]}
        >
          {facts.map((item, index) => (
            <Fact
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
}
