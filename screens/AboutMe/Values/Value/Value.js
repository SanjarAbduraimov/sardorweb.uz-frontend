import { Frame, Text, Wrapper } from '../../../../components/UIKit';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) linear;

  svg {
    fill: white;
  }

  &:hover {
    background-color: #222233;
    #icon {
      background-color: #57efb4;
    }

    svg {
      fill: #222233;
    }

    #text {
      color: white;
    }
  }
`;

export default function Value(props) {
  return (
    <Container p={[20]} borderRadius={[8]}>
      <Wrapper display={['grid']} justifyItems={['flex-start']} gridGap={[24]}>
        <Frame
          id='icon'
          bg={['steelGray']}
          p={[20]}
          borderRadius={8}
          display={['flex']}
        >
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path fill-rule='evenodd' clip-rule='evenodd' d={props.icon} />
          </svg>
        </Frame>
        <Wrapper
          display={['grid']}
          justifyItems={['flex-start']}
          gridGap={[16]}
        >
          <Text size='bodyBold'>{props.title}</Text>
          <Text id='text' size='caption'>
            {props.description}
          </Text>
        </Wrapper>
      </Wrapper>
    </Container>
  );
}
