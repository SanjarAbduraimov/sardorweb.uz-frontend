import {
  Container,
  Section,
  Text,
  Button,
  Wrapper,
  Frame,
} from '../../../components/UIKit';

export default function Hero() {
  return (
    <Section pt={[90, 100, 120]} px={[32, 60, 90]} pb={[32, 45, 0]}>
      <Container>
        <Text size={['heading3', 'heading1', 'hero']}>
          I love <span style={{ color: '#88888D' }}>what I do</span> and I make
          sure I do great work
          <span style={{ color: '#57EFB4' }}>.</span>
        </Text>
        <Frame bg={['steelGray']} width={[1]} height={[1]} my={[48]} />
        <Wrapper
          display={['flex']}
          flexDirection={['column', 'row', 'row']}
          alignItems={['center']}
          justifyContent={['space-between']}
        >
          <Button variant='primary'>Hire Me</Button>
          <Wrapper maxWidth={[600]} mt={[24, 0, 0]}>
            <Text size={['body2', 'body', 'body']}>
              I am Portier, experienced Digital Product Designer based on
              Florida. I am here to help you build your amazing product.
            </Text>
          </Wrapper>
        </Wrapper>
      </Container>
    </Section>
  );
}
