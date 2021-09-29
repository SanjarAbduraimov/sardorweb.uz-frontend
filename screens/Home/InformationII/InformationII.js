import {
  Container,
  Frame,
  Section,
  Text,
  Wrapper,
} from '../../../components/UIKit';
import Image from 'next/image';

export default function InformationII() {
  return (
    <Section py={[45, 80, 100]} px={[32, 60, 90]}>
      <Container
        display={['row', 'row', 'flex']}
        alignItems={['center']}
        justifyContent={['space-between']}
        width={[1]}
      >
        <Frame
          position='relative'
          overflow='hidden'
          height={[420, 500]}
          width={[1, 1, 500]}
          mb={[48, 48, 0]}
          borderRadius={[8]}
        >
          <Image
            alt=''
            src='/images/08.jpg'
            layout='fill'
            placeholder='blur'
            objectFit='cover'
            blurDataURL='/images/08.jpg'
            onLoadingComplete=''
          />
        </Frame>

        <Wrapper maxWidth={[500]} display={['grid']} gridGap={[16]}>
          <Text size={['heading4', 'heading2', 'heading2']}>
            My main goal is too keep my customers satisfied.
          </Text>
          <Text size='caption'>
            Even with skills that are primarily mental, such as computer
            programming or speaking a foreign language.
          </Text>
          <Text size='caption'>
            it remains the case that we learn best through practice and
            repetition the natural learning process.
          </Text>
        </Wrapper>
      </Container>
    </Section>
  );
}
