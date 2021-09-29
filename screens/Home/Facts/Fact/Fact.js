import { Text, Wrapper } from '../../../../components/UIKit';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;

  &:hover {
    background-color: #222233;
  }
`;

export default function Fact(props) {
  return (
    <Container>
      <Wrapper display={['grid']} gridGap={[16]}>
        <Text size='heading3'>{props.title}</Text>
        <Text size='caption'>{props.description}</Text>
      </Wrapper>
    </Container>
  );
}
