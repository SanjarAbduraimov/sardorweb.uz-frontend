import {
  Button,
  Container,
  Section,
  Text,
  Wrapper,
} from '../../../components/UIKit';

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
      </Container>
    </Section>
  );
}
