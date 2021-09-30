import styled from 'styled-components';

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
  return (
    <Container>
      <svg
        width='15'
        height='15'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d={props.icon} fillRule='evenodd' clipRule='evenodd'></path>
      </svg>
    </Container>
  );
}
