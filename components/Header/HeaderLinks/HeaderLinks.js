import { Button, NavigationLink } from '../../UIKit';

export default function HeaderLinks() {
  return (
    <>
      <NavigationLink href='/portfolio'>Portfolio</NavigationLink>
      <NavigationLink href='/aboutme'>About Me</NavigationLink>
      <NavigationLink href='/blog'>Blog</NavigationLink>
      <Button variant='secondary' href='mailto:angelCL0@outlook.com'>
        Get Template
      </Button>
    </>
  );
}
