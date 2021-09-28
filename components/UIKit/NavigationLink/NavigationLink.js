import Link from 'next/link';
import styled from 'styled-components';

const AnchorLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #84868b;
  transition: all 0.3s linear;
  width: 100%;

  :hover {
    cursor: pointer;
    color: white;
  }
`;

export default function NavigationLink(props) {
  const { href } = props;

  return (
    <Link href={href}>
      <AnchorLink>{props.children}</AnchorLink>
    </Link>
  );
}
