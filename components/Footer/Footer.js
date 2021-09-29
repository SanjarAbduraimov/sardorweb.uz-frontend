import React from 'react';
import Logo from '../Logo';
import { Container, Link, Text, Wrapper, Frame } from '../UIKit';

const social = [
  { link: 'https://twitter.com/rayocode', title: 'Twitter' },
  { link: 'https://github.com/vazurio', title: 'GitHub' },
  {
    link: 'https://www.linkedin.com/in/angel-vazquez-332a05192/',
    title: 'LinkedIn',
  },
  { link: 'https://dribbble.com/anyelos', title: 'Dribbble' },
];

const links = [
  {
    title: 'About Me',
  },
  {
    title: 'Pricing',
  },
  {
    title: 'Handbook',
  },
  {
    title: 'Contact',
  },
  {
    title: 'Products',
  },
  {
    title: 'Request demo',
  },
  {
    title: 'Blog',
  },
];

export default function Footer() {
  const date = new Date();

  return (
    <Container py={[40, 50]} px={[20, 60]} bg={['steelGray']}>
      <Frame display={['grid']} gridGap={34}>
        <Logo />
        <Wrapper
          display={['grid']}
          gridTemplateColumns={['1fr 1fr', '1fr 1fr 1fr 1fr']}
          gridGap={[2]}
          mb={48}
        >
          {links.map((item, index) => (
            <Wrapper key={index}>
              <Text size='caption'>{item.title}</Text>
            </Wrapper>
          ))}
        </Wrapper>
      </Frame>
      <Wrapper
        display={['grid', 'flex']}
        gridGap={20}
        justifyItems='center'
        alignItems='center'
        justifyContent='space-between'
      >
        <Wrapper textAlign={['center', 'left']}>
          <Text size='caption'>
            Copyright © {date.getFullYear()} - All rights reserved - Made by{' '}
            <a
              href='https://vazurio.co'
              target='_blank'
              rel='noreferrer'
              style={{ color: '#3b71fe', fontWeight: 'bold' }}
            >
              Vazurio
            </a>
          </Text>
        </Wrapper>

        <Wrapper
          display={['grid']}
          gridTemplateColumns={'1fr 1fr 1fr 1fr'}
          gridGap={20}
        >
          {social.map((item, index) => (
            <Link key={index} href={item.link} target='_'>
              {item.title}
            </Link>
          ))}
        </Wrapper>
      </Wrapper>
    </Container>
  );
}
