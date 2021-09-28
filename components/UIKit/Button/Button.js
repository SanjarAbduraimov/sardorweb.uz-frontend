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
        lineHeight: '18px',
        cursor: 'pointer',
        fontWeight: 'bold',
        width: ['100%', 'inherit'],

        '&:hover': {
          background: '#222233',
          color: 'white',
        },
      },
      secondary: {
        textAlign: 'center',
        color: 'white',
        background: '#222233',
        px: 24,
        py: 16,
        borderRadius: 8,
        fontSize: 14,
        lineHeight: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',

        '&:hover': {
          background: '#006ADA',
          color: '#fff',
          boxShadow: 'none',
        },
      },
    },
  })
);

export default Button;
