import {
  Container,
  Section,
  Wrapper,
  Frame,
  Text,
  Link,
} from '../../../components/UIKit';
import Image from 'next/image';
const social = [
  {
    text: "Instagram",
    link: "http://instagram.com/abduraimovsardorjon",
  },
  {
    text: "Email",
    link: "mailto:sardorabdurahimov@gmail.com",
  },
  // {
  //   text: "Behance",
  //   link: "http://behance.com/sardorabdurahimov",
  // },
  {
    text: "Facebook",
    link: "http://facebook.com/AbdurahimovSardorbek",
  },
  // {
  //   text: "Linkedin",
  //   link: "http://Linkedin.com/sardorabduraimov",
  // },
  // {
  //   text: "Linkedin",
  //   link: "https://dribbble.com/sardorabdurahimov",
  // },
  {
    text: "Telegram",
    link: "http://t.me/sardorabduraimov",
  },
];
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
              I am Sardor a <span style={{ color: '#57EFB4' }}>UI/UX Designer</span>
              <span style={{ color: '#88888D' }}> based</span> in Tashkent
              <span style={{ color: '#57EFB4' }}>.</span>
            </Text>
            <Text size={['body2', 'body', 'body']}>
              Become who you are by learning who you are.
            </Text>
          </Wrapper>
          <Wrapper display={['grid']} gridGap={[2]} mt={[48, 0, 0]}>
            {social.map((item, index) => {
              return (<Link href={item.link}>
                <Text size='caption'>{item.text}</Text>
              </Link>)

            })}
            {/* <Text size='caption'>Facebook</Text>
            <Text size='caption'>Email</Text>
            <Text size='caption'>Instagram</Text> */}
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
