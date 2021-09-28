import styled from 'styled-components';

export const NavBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-content: flex-end;
  gap: 40px;
  height: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    align-content: flex-start;
    justify-content: center;
    padding: 40px 0;
    text-align: center;
    position: fixed;
    width: 90%;
    margin: 20px;
    height: 100%;
    transition: all 0.2s cubic-bezier(0.86, 0, 0.07, 1);
    background: #12121c;
    border: 1px solid #222233;
    box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.1);
    border-radius: 18px;
    top: 10vh;
    left: ${(props) => (props.open ? '-100%' : '0')};
    zindex: 99;
  }
`;

export const Hamburger = styled.div`
  background-color: #fff;
  border-radius: 3px;
  width: 30px;
  height: 3px;
  transition: all 0.2s cubic-bezier(0.86, 0, 0.07, 1);
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    border-radius: 3px;
    height: 3px;
    background-color: #fff;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`;
