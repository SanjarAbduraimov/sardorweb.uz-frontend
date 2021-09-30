import { Container, Text } from '../../../../components/UIKit';

export default function Fact(props) {
  return (
    <Container textAlign={['center']} display={['grid']} gridGap={[16]}>
      <Text size={['heading3']}>{props.title}</Text>
      <Text size='caption'>
        The game you want to play is different: to instead find a niche in the
        ecology that you can dominate.
      </Text>
    </Container>
  );
}
