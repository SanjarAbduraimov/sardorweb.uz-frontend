import {
  Container,
  Frame,
  Section,
  Text,
  Wrapper,
} from '../../../components/UIKit';
import Image from 'next/image';

export default function Information() {
  return (
    <Section py={[45, 80, 100]} px={[32, 60, 90]}>
      <Container
        display={['row', 'row', 'flex']}
        alignItems={['center']}
        justifyContent={['space-between']}
        width={[1]}
      >
        <Wrapper maxWidth={[500]} display={['grid']} gridGap={[16]}>
          <Text size={['heading4', 'heading2', 'heading2']}>
            I build products for companies & startups.
          </Text>
          <Text size='caption'>
            Everything in nature has a structure, a way that the parts relate to
            one another, which is generally fluid and not so easy to
            conceptualize.
          </Text>
          <Text size='caption'>
            Everything in nature has a structure, a way that the parts relate to
            one another, which is generally fluid and not so easy to
            conceptualize.
          </Text>
        </Wrapper>
        <Frame
          position='relative'
          overflow='hidden'
          height={[420, 500]}
          width={[1, 1, 500]}
          mt={[48, 48, 0]}
          borderRadius={[8]}
        >
          <Image
            alt=''
            src='/images/05.jpg'
            layout='fill'
            placeholder='blur'
            objectFit='cover'
            blurDataURL='/images/05.jpg'
            onLoadingComplete=''
          />
        </Frame>
      </Container>
    </Section>
  );
}
