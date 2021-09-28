import styled from 'styled-components';
import { variant } from 'styled-system';

const Button = styled('a')(
  {
    appearance: 'none',
    fontFamily: 'inherit',
  },

  variant({
    variants: {
      primary: {
        textAlign: 'center',
        color: 'white',
        background: '#006ADA',
        px: 24,
        py: 16,
        borderRadius: 8,
        fontSize: 16,
        cursor: 'pointer',
        fontWeight: 'bold',
        width: ['100%', 'inherit'],

        '&:hover': {
          background: 'transparent',
          color: '#161616',
          boxShadow: '0 0 0 2px #e3e5e5 inset',
        },
      },
      secondary: {
        textAlign: 'center',
        color: '#161616',
        background: 'transparent',
        boxShadow: '0 0 0 2px #e3e5e5 inset',
        px: 60,
        py: 20,
        borderRadius: 18,
        fontSize: 16,
        cursor: 'pointer',

        '&:hover': {
          background: '#161616',
          color: 'white',
          boxShadow: 'none',
        },
      },
    },
  })
);

export default Button;
