import styled from 'styled-components';
import Link from 'next/link';

const Button = styled.a`
  background-color: ${(props) => props.theme.lightBlue};
  padding: 18px 60px;
  color: white;
  font-size: 16px;
  border-radius: 30px;
  border: 1px solid transparent;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.1s linear;
  font-family: 'Space Grotesk', sans-serif;

  :hover {
    background-color: ${(props) => props.theme.darkBlue};
  }

  @media (max-width: 414px) {
    width: 100%;
  }
`;

export default function SecondaryButton(props) {
  const { href } = props;

  return (
    <Link href={href}>
      <Button>{props.children}</Button>
    </Link>
  );
}
