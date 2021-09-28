import {
  Button,
  Container,
  Section,
  Text,
  Wrapper,
} from '../../../components/UIKit';
import Item from './Item';

const items = [
  {
    icon: 'M11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V4H5V1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5V4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H4V10H1.5C1.22386 10 1 10.2239 1 10.5C1 10.7761 1.22386 11 1.5 11H4V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V11H10V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H11V5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H11V1.5ZM10 10V5H5V10H10Z',
    title: 'UI-UX Design',
    description:
      ' The time that leads to mastery is dependent on the intensity of our focus.',
  },
  {
    icon: 'M11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V4H5V1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5V4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H4V10H1.5C1.22386 10 1 10.2239 1 10.5C1 10.7761 1.22386 11 1.5 11H4V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V11H10V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H11V5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H11V1.5ZM10 10V5H5V10H10Z',
    title: 'Product Design',
    description:
      ' The time that leads to mastery is dependent on the intensity of our focus.',
  },
  {
    icon: 'M11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V4H5V1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5V4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H4V10H1.5C1.22386 10 1 10.2239 1 10.5C1 10.7761 1.22386 11 1.5 11H4V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V11H10V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H11V5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H11V1.5ZM10 10V5H5V10H10Z',
    title: 'Writing',
    description:
      ' The time that leads to mastery is dependent on the intensity of our focus.',
  },
];

export default function Hero() {
  return (
    <Section py={[90, 100, 120]} px={[32, 90, 90]}>
      <Container>
        <Wrapper
          display={['grid']}
          justifyItems={['flex-start']}
          gridGap={[24]}
        >
          <Wrapper
            display={['grid']}
            justifyItems={['stretch', 'flex-start']}
            gridGap={[16]}
          >
            <Text size={['hero']}>
              Digital <span style={{ color: '#88888D' }}>Product</span> Designer
              <span style={{ color: '#57EFB4' }}>.</span>
            </Text>
            <Text size='body'>
              I am Portier, experienced Digital Product Designer based on
              Florida. I am here to help you build your amazing product.
            </Text>
          </Wrapper>
          <Button variant='primary'>Hire Me</Button>
        </Wrapper>
        <Container
          mt={[48]}
          display={['grid']}
          gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
          gridGap={[32]}
        >
          {items.map((item, index) => (
            <Item
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </Container>
      </Container>
    </Section>
  );
}
