import React from "react";
import Logo from "../Logo";
import { FiFacebook, FiTwitter, FiInstagram, FiDribbble } from "react-icons/fi";
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
    link: "https://www.instagram.com/",
  },
  // {
  //   icon: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
  //   link: "https://www.linkedin.com/in/sardorabduraimov/",
  // },
  {
    icon: <FiFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FiTwitter />,
    link: "https://www.twitter.com/",
  },
  {
    icon: <FiDribbble />,
    link: "https://dribbble.com/",
  },
];

const links = [
  {
    title: "About Me",
    url: "aboutme",
  },
  {
    title: "Pricing",
    url: "pricing",
  },
  {
    title: "Handbook",
    url: "aboutme",
  },
  {
    title: "Contact",
    url: "contact",
  },
  {
    title: "Products",
    url: "products",
  },
  {
    title: "Request demo",
    url: "contact",
  },
  {
    title: "Blog",
    url: "blog",
  },
];

export default function Footer() {
  const date = new Date();

  return (
    <Container py={[40, 50]} px={[20, 60]} bg={["steelGray"]}>
      <Frame display={["grid"]} gridGap={34}>
        <Logo />
        <Wrapper
          display={["grid"]}
          gridTemplateColumns={["1fr 1fr", "1fr 1fr 1fr 1fr"]}
          gridGap={[2]}
          mb={48}
        >
          {links.map((item, index) => (
            <Wrapper key={index}>
              <NavigationLink href={item.url}>{item.title}</NavigationLink>
            </Wrapper>
          ))}
        </Wrapper>
      </Frame>
      <Wrapper
        display={["grid", "flex"]}
        gridGap={20}
        justifyItems="center"
        alignItems="center"
        justifyContent="space-between"
      >
        <Wrapper textAlign={["center", "left"]}>
          <Text size="caption2">
            Copyright © {date.getFullYear()} - All rights reserved - Made by{" "}
            <a
              href="https://sanjarweb.uz"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#3b71fe", fontWeight: "bold" }}
            >
              Sanjar Abduraimov
            </a>
          </Text>
        </Wrapper>

        <Wrapper
          display={["grid"]}
          gridTemplateColumns={"1fr 1fr 1fr 1fr"}
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
