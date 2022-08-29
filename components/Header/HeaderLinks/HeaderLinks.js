import Link from 'next/link';
import { Button, NavigationLink } from '../../UIKit';

export default function HeaderLinks() {
  return (
    <>
      <NavigationLink href='/portfolio'>Portfolio</NavigationLink>
      <NavigationLink href='/aboutme'>About Me</NavigationLink>
      <NavigationLink href='/blog'>Blog</NavigationLink>
      <Link href="/contact">
        <Button variant='secondary'>
          Get In Touch
        </Button>
      </Link>
    </>
  );
}
