import { Wrapper, Text, Frame } from '../UIKit';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    fill: white;
  }

  &:hover {
    #icon {
      background-color: #29c83f;
    }

    svg {
      fill: #222233;
    }
  }
`;

export default function WorkCard(props) {
  return (
    <a>
      <Container>
        <Frame
          position={['relative']}
          overflow='hidden'
          height={[420, 560]}
          width={['100%']}
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

        <Wrapper
          position={['absolute']}
          p={[10, 20]}
          bottom={[0]}
          display={['flex']}
          alignItems={['center']}
          justifyContent={['space-between']}
          width={['100%']}
        >
          <Wrapper px={[16]} py={[16]} bg={['white']} borderRadius={[8]}>
            <Text size='captionBold'>{props.title}</Text>
          </Wrapper>
          <Wrapper pl={[10, 0, 0]}>
            <Frame
              id='icon'
              bg={['steelGray']}
              p={[20]}
              borderRadius={[8]}
              display={['flex']}
            >
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z'
                  fillRule='evenodd'
                  clipRule='evenodd'
                ></path>
              </svg>
            </Frame>
          </Wrapper>
        </Wrapper>
      </Container>
    </a>
  );
}
