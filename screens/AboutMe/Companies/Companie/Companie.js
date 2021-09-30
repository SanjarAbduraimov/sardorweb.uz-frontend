import { Frame, Text, Wrapper } from '../../../../components/UIKit';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 44px auto;
  justify-items: flex-start;
  align-items: flex-start;
  grid-gap: 24px;
  padding: 20px;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) linear;

  svg {
    fill: white;
  }

  ${Frame} {
    background: #222233;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: #222233;

    ${Frame} {
      background-color: #57efb4;
    }

    svg {
      fill: #222233;
    }
  }
`;

export default function Companie(props) {
  return (
    <Container>
      <Frame
        position='relative'
        overflow='hidden'
        height={[44, 44]}
        width={[44, 44, 44]}
        borderRadius={['50%']}
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
      <Wrapper display={['grid']} gridGap={[2]}>
        <Text size='bodyBold'>{props.name}</Text>
        <Text size='caption2'>{props.position}</Text>
      </Wrapper>
    </Container>
  );
}
