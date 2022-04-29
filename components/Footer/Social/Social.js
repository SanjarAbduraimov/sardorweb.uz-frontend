import styled from "styled-components";

const Container = styled.div`
  padding: 12px;
  background-color: #12121c;
  display: flex;
  border-radius: 50%;

  svg {
    fill: white;
  }

  &:hover {
    background-color: #57efb4;

    svg {
      fill: #12121c;
    }
  }
`;

export default function Social(props) {
  return <Container>{props.icon}</Container>;
}
