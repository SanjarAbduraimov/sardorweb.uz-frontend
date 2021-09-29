import { Button, Container, Section, Text, Wrapper } from '../UIKit';

export default function Cta() {
  return (
    <Section py={[45, 100, 120]} px={[32, 90, 90]}>
      <Container
        display={['row', 'row', 'flex']}
        alignItems={['center']}
        justifyContent={['space-between']}
        width={[1]}
      >
        <Wrapper
          display={['grid']}
          justifyItems={['flex-start']}
          gridGap={[24]}
          maxWidth={[500]}
        >
          <Text size='caption'>
            If we keep practicing, we gain fluency; basic skills are mastered,
            allowing us to take on newer and more exciting challenges.
          </Text>
          <Button variant='primary'>Get In Touch</Button>
        </Wrapper>
        <Wrapper maxWidth={[500]} mt={[48, 0, 0]}>
          <Text size={['heading4', 'heading2', 'heading2']}>
            How about we make something awesome together?
          </Text>
        </Wrapper>
      </Container>
    </Section>
  );
}
