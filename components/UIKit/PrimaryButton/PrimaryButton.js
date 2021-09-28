import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography,
  border,
  background,
  shadow,
} from 'styled-system';

const ContactButton = styled.button`
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${border}
  ${background}
  ${shadow}

  cursor: pointer;

  &:hover {
    color: #161616;
    background: transparent;
    box-shadow: 0 0 0 2px #e3e5e5 inset;
  }
`;

export default ContactButton;
