import { Container, Section, Text, Wrapper } from '../../../components/UIKit';
import Testimonial from './Testimonial';

const testimonials = [
  {
    image: '/images/04.jpeg',
    name: 'Domingo Menenses',
    position: 'Cobrand - CEO',
  },
  {
    image: '/images/06.jpg',
    name: 'Angel Vazquez',
    position: 'Tinnie - CO-Founder',
  },
  {
    image: '/images/07.jpg',
    name: 'Brandon Arreguin',
    position: 'Adastrea - CEO',
  },
];

export default function Testimonials() {
  return (
    <Section py={[45, 80, 100]} px={[32, 60, 90]}>
      <Container
        display={['row', 'row', 'flex']}
        alignItems={['flex-start']}
        justifyContent={['space-between']}
        width={[1]}
      >
        <Wrapper display={['grid']} gridGap={[16]} maxWidth={[600]}>
          <Text size={['heading4', 'heading2', 'heading2']}>
            What people say about me
          </Text>
          <Text size='caption'>
            These steps are: Deep Observation (The Passive Mode), Skills
            Acquisition (The Practice Mode), and Experimentation (The Active
            Mode).
          </Text>

          <Text size='caption'>
            Empathy plays an enormous role in learning and knowledge.
          </Text>
        </Wrapper>
        <Wrapper display={['grid']} gridGap={[32]} mt={[48, 48, 0]}>
          {testimonials.map((item, index) => (
            <Testimonial
              key={index}
              image={item.image}
              name={item.name}
              position={item.position}
            />
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
}
