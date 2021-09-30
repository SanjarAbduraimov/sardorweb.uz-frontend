import { Wrapper, Text, Frame } from '../UIKit';
import Image from 'next/image';
import styled from 'styled-components';

const Button = styled.a`
  color: #006ada;
  font-size: 14px;
  font-weight: bold;
  margin-right: 6px;
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    fill: #006ada;
  }

  &:hover {
    #icon {
      background-color: #29c83f;
    }

    ${Button} {
      color: #29c83f;
    }

    svg {
      fill: #29c83f;
    }
  }
`;

export default function BlogCard(props) {
  return (
    <Container>
      <Wrapper display={['flex']} flexDirection={['column', 'row', 'row']}>
        <Frame
          position={['relative']}
          overflow='hidden'
          height={[316, 316]}
          width={[1, 1, 560]}
          borderRadius={[8]}
        >
          <Image
            alt=''
            src={props.image}
            layout='fill'
            placeholder='blur'
            objectFit='cover'
            blurDataURL={props.image}
            onLoadingComplete=''
          />
        </Frame>
        <Frame>
          <Wrapper
            py={[40, 40, 40]}
            px={[0, 20, 40]}
            display={['grid']}
            gridGap={[24]}
          >
            <Wrapper display={['grid']} gridGap={[16]}>
              <Text size='heading4'>{props.title}</Text>
              <Text size='caption'>
                You must engrave deeply in your mind and never forget: your
                emotional commitment to what you are doing will be translated
                into your work.
              </Text>
            </Wrapper>

            <Wrapper display={['flex']} alignItems={['center']}>
              <Button>Read Full Post</Button>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                  fillRule='evenodd'
                  clipRule='evenodd'
                ></path>
              </svg>
            </Wrapper>
          </Wrapper>
        </Frame>
      </Wrapper>
    </Container>
  );
}
