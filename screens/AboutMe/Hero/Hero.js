import {
  Container,
  Section,
  Wrapper,
  Frame,
  Text,
} from '../../../components/UIKit';
import Image from 'next/image';

export default function Hero() {
  return (
    <Section pt={[90, 100, 120]} px={[32, 60, 90]} pb={[90, 100, 120]}>
      <Container
        display={['flex']}
        flexDirection={['column']}
        alignItems={['center']}
        justifyContent={['center']}
      >
        <Wrapper
          mt={[0, 90, 90]}
          display={['flex']}
          flexDirection={['column', 'row', 'row']}
          alignItems={['flex-start', 'flex-end', 'flex-end']}
          justifyContent={['space-between']}
          width={['100%']}
        >
          <Wrapper
            display={['grid']}
            justifyItems={['stretch', 'flex-start']}
            gridGap={[16]}
            zIndex={[12]}
            maxWidth={[600]}
          >
            <Text size={['heading3', 'heading1', 'hero']}>
              I am Portier a UI-UX Designer
              <span style={{ color: '#88888D' }}> based</span> in Florida
              <span style={{ color: '#57EFB4' }}>.</span>
            </Text>
            <Text size={['body2', 'body', 'body']}>
              Become who you are by learning who you are.
            </Text>
          </Wrapper>
          <Wrapper display={['grid']} gridGap={[2]} mt={[48, 0, 0]}>
            <Text size='caption'>Twitter</Text>
            <Text size='caption'>Facebook</Text>
            <Text size='caption'>Email</Text>
            <Text size='caption'>Instagram</Text>
          </Wrapper>
        </Wrapper>
        <Frame
          position={['relative', 'absolute', 'absolute']}
          bottom={[48]}
          overflow='hidden'
          height={[320, 440, 440]}
          width={[350, 420, 760]}
          maxWidth={[760]}
          borderRadius={[8]}
          zIndex={[9]}
          opacity={[0.3]}
        >
          <Image
            alt=''
            src='/images/06.jpg'
            layout='fill'
            placeholder='blur'
            objectFit='cover'
            blurDataURL='/images/06.jpg'
            onLoadingComplete=''
          />
        </Frame>
      </Container>
    </Section>
  );
}
