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

  &:hover {
    background-color: #222233;
  }
`;

export default function Testimonial(props) {
  return (
    <Container>
      <Frame
        position='relative'
        overflow='hidden'
        height={[44, 44]}
        width={[44, 44, 44]}
        borderRadius={['50%']}
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
      <Wrapper display={['grid']} gridGap={[24]} maxWidth={[300]}>
        <Text size='caption'>
          “In fact, whenever you must learn a new skill or alter your career
          path later in life, you reconnect with that youthful, adventurous part
          of yourself.”
        </Text>
        <Wrapper display={['grid']} gridGap={[2]}>
          <Text size='bodyBold'>{props.name}</Text>
          <Text size='caption2'>{props.position}</Text>
        </Wrapper>
      </Wrapper>
    </Container>
  );
}
