import styled from 'styled-components';

const AnchorLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #818388;
  transition: all 0.3s linear;

  :hover {
    cursor: pointer;
    color: white;
  }
`;

export default function Link(props) {
  const { children, ...rest } = props; // Spread attributes

  return <AnchorLink {...rest}>{children}</AnchorLink>;
}
