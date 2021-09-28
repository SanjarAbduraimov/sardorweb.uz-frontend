import { variant } from 'styled-system';
import styled from 'styled-components';

const Text = styled('div')(
  variant({
    prop: 'size',
    variants: {
      Orange: {
        color: 'dark',
        fontSize: [44, 72],
        fontWeight: 'bold',
      },
      H1: {
        color: 'dark',
        fontSize: [44, 72],

        fontWeight: 'bold',
      },
      H2: {
        color: 'dark',
        fontSize: [38, 48],
        fontWeight: 'bold',
      },
      H3: {
        color: 'dark',
        fontSize: [32, 30],
        fontWeight: 'bold',
      },
      Headline2: {
        color: 'dark',
        fontSize: [24],
        fontWeight: 500,
      },
      BodyIntro: {
        color: 'dark',
        fontSize: [22],
        fontWeight: 500,
      },
      BodyMain: {
        color: 'gray',
        fontSize: [20, 22],
        fontWeight: 400,
      },
      MediumText: {
        color: 'gray',
        fontSize: [17, 18],
        lineHeight: '26px',
        fontWeight: 400,
      },
      Caption: {
        color: 'gray',
        fontSize: [15, 16],
        fontWeight: 400,
      },
      Caption2: {
        color: 'gray',
        fontSize: [15, 16],
        fontWeight: 400,
      },
      SmallText: {
        color: 'gray',
        fontSize: [13, 14],
        fontWeight: 400,
      },
      SmallText2: {
        color: 'gray',
        fontSize: [13, 14],
        fontWeight: 400,
      },
    },
  })
);

export default Text;
