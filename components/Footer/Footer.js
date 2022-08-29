import React from "react";
import Logo from "../Logo";
import { FiFacebook, FiLinkedin, FiInstagram, FiDribbble } from "react-icons/fi";
import { FaTelegram, FaBehance } from "react-icons/fa";
import {
  Container,
  Text,
  Wrapper,
  Link,
  Frame,
  NavigationLink,
} from "../UIKit";
import Social from "./Social";

const social = [
  {
    icon: <FiInstagram />,
    link: "http://instagram.com/abduraimovsardorjon",
  },
  {
    icon: <FaBehance />,
    link: "http://behance.com/sardorabdurahimov",
  },
  {
    icon: <FiFacebook />,
    link: "http://facebook.com/AbdurahimovSardorbek",
  },
  {
    icon: <FiLinkedin />,
    link: "http://Linkedin.com/sardorabduraimov",
  },
  {
    icon: <FiDribbble />,
    link: "https://dribbble.com/sardorabdurahimov",
  },
  {
    icon: <FaTelegram />,
    link: "http://t.me/sardorabduraimov",
  },
];

const links = [
  {
    title: "Portfolio",
    url: "portfolio",
  },
  {
    title: "About Me",
    url: "aboutme",
  },
  {
    title: "Blog",
    url: "blog",
  },
  {
    title: "Contact",
    url: "contact",
  },
];

export default function Footer() {
  const date = new Date();

  return (
    <Container py={[40, 50]} px={[20, 60]} bg={["steelGray"]}>
      <Frame display={["grid"]} gridGap={34}>
        <Logo />
        <Wrapper
          display={["flex"]}
          gridGap={[2]}
          mb={48}
        >
          {links.map((item, index) => (
            <Wrapper mr={5} key={index}>
              <NavigationLink href={item.url}>{item.title}</NavigationLink>
            </Wrapper>
          ))}
        </Wrapper>
      </Frame>
      <Wrapper
        display={["flex"]}
        gridGap={20}
        flexDirection={["column", "row"]}
        justifyItems="center"
        alignItems="center"
        justifyContent="space-between"
      >
        <Wrapper textAlign={["center", "left"]}>
          <Text size="caption2">
            Copyright © {date.getFullYear()} - All rights reserved - Made by{" "}
            <a
              href="https://sanjarbek.dev"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#3b71fe", fontWeight: "bold" }}
            >
              Sanjar Abduraimov
            </a>
          </Text>
        </Wrapper>

        <Wrapper
          display={["flex"]}
          justifyItems={["center", "flex-end"]}
          gridGap={20}
        >
          {social.map((item, index) => (
            <Link key={index} href={item.link}>
              <Social icon={item.icon} />
            </Link>
          ))}
        </Wrapper>
      </Wrapper>
    </Container>
  );
}
