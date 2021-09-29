import { variant } from 'styled-system';
import styled from 'styled-components';

const Text = styled('div')(
  variant({
    prop: 'size',
    variants: {
      hero: {
        color: 'white',
        fontSize: [72],
        lineHeight: ['72px'],
        fontWeight: 800,
      },
      heading1: {
        color: 'white',
        fontSize: [64],
        lineHeight: ['64px'],
        fontWeight: 'bold',
      },
      heading2: {
        color: 'white',
        fontSize: [48],
        lineHeight: ['56px'],
        fontWeight: 'bold',
      },
      heading3: {
        color: 'white',
        fontSize: [40],
        lineHeight: ['48px'],
        fontWeight: 800,
      },
      heading4: {
        color: 'white',
        fontSize: [32, 32, 32],
        lineHeight: ['40px', '40px', '40px'],
        fontWeight: 'bold',
      },
      body: {
        color: 'aluminium',
        fontSize: [24],
        lineHeight: ['32px'],
        fontWeight: 300,
      },
      body2: {
        color: 'aluminium',
        fontSize: [16],
        lineHeight: ['24px'],
        fontWeight: 300,
      },
      bodyBold: {
        color: 'white',
        fontSize: [16, 24],
        lineHeight: ['24px', '32px'],
        fontWeight: 'bold',
      },
      body2Bold: {
        color: 'white',
        fontSize: [16, 16],
        lineHeight: ['24px', '24px'],
        fontWeight: 'bold',
      },
      caption: {
        color: 'aluminium',
        fontSize: [14],
        lineHeight: ['24px'],
        fontWeight: 400,
      },
      captionBold: {
        color: 'aluminium',
        fontSize: [12, 14],
        lineHeight: ['20px', '24px'],
        fontWeight: 'bold',
      },
      caption2: {
        color: 'aluminium',
        fontSize: [12],
        lineHeight: ['20px'],
        fontWeight: 400,
      },

      caption2Bold: {
        color: 'white',
        fontSize: [12, 12],
        lineHeight: ['20px', '20px'],
        fontWeight: 'bold',
      },
      Hairline: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: [16, 16],
        lineHeight: ['16px', '16px'],
        fontWeight: 'bold',
      },
      HairlineSmall: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: [12, 12],
        lineHeight: ['12px', '12px'],
        fontWeight: 'bold',
      },
    },
  })
);

export default Text;
