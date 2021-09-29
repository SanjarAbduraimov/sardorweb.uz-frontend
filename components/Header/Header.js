import { NavBox, Hamburger } from './style';
import HeaderLinks from './HeaderLinks';
import { useState } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import { Container, Frame } from '../UIKit';

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Container
      height={['10vh', '15vh']}
      display={['flex']}
      alignItems='center'
      justifyContent='space-between'
      id='navbar'
      px={[32, 60, 90]}
      position={['sticky', 'sticky']}
      top={0}
      right={0}
      left={0}
      zIndex={99}
      bg={['#12121C']}
    >
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>

      <Frame
        display={['flex', 'none']}
        alignItems='center'
        justifyContent='center'
        height='100%'
        cursor='pointer'
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Frame>

      {navbarOpen ? (
        <NavBox>
          <HeaderLinks />
        </NavBox>
      ) : (
        <NavBox open>
          <HeaderLinks />
        </NavBox>
      )}
    </Container>
  );
}
