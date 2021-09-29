import { Button, NavigationLink } from '../../UIKit';

export default function HeaderLinks() {
  return (
    <>
      <NavigationLink href='/portfolio'>Portfolio</NavigationLink>
      <NavigationLink href='/guides'>About Me</NavigationLink>
      <NavigationLink href='/guides'>Blog</NavigationLink>
      <Button variant='secondary' href='mailto:angelCL0@outlook.com'>
        Get Template
      </Button>
    </>
  );
}
