import { variant } from 'styled-system';
import styled from 'styled-components';

const Text = styled('div')(
  variant({
    prop: 'size',
    variants: {
      hero: {
        color: 'white',
        fontSize: [44, 72],
        fontWeight: 800,
      },
      heading: {
        color: 'dark',
        fontSize: [38, 48],
        fontWeight: 'bold',
      },
      heading2: {
        color: 'dark',
        fontSize: [32, 30],
        fontWeight: 'bold',
      },
      body: {
        color: 'aluminium',
        fontSize: [16, 24],
        lineHeight: ['24px', '32px'],
        fontWeight: 300,
      },
      bodyBold: {
        color: 'dark',
        fontSize: [24],
        fontWeight: 500,
      },
      caption: {
        color: 'gray',
        fontSize: [20, 22],
        fontWeight: 400,
      },
      caption2: {
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
