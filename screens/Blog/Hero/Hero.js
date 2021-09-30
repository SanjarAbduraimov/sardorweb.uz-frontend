import { Container, Section, Text, Wrapper } from '../../../components/UIKit';

export default function Hero() {
  return (
    <Section pt={[90, 100, 120]} px={[32, 60, 90]} pb={[90, 100, 120]}>
      <Container
        display={['flex']}
        flexDirection={['column']}
        alignItems={['center']}
        justifyContent={['center']}
      >
        <Wrapper display={['grid']} gridGap={[16]} textAlign={['center']}>
          <Text size={['heading3', 'heading1', 'hero']}>
            Find tips about the best design practices.
          </Text>
          <Text size={['body2', 'body', 'body']}>
            Everything in nature has a structure, a way that the parts relate to
            one another, which is generally fluid and not so easy to
            conceptualize.
          </Text>
        </Wrapper>
      </Container>
    </Section>
  );
}
