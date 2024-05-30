'use client';

import { useState } from 'react';
import NextLink from 'next/link';
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar';

import { StyledButton } from './ui/styled-button';

interface NavLinkItemProps {
  label: string;
  href: any;
}

export const navLinkItems: NavLinkItemProps[] = [
  {
    label: 'About',
    href: '#',
  },
  {
    label: 'News',
    href: '#',
  },
  {
    label: 'Blog',
    href: '#Dapp',
  },
  {
    label: 'Service',
    href: '#',
  },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="group"
      classNames={{
        base: 'bg-transparent -mb-20',
        wrapper: 'px-4 lg:px-6',
        item: ['flex', 'relative', 'cursor-pointer', 'h-full', 'w-fit', 'items-center', 'group'],
      }}
      height="5rem"
      isBlurred={false}
      maxWidth="2xl"
      position="sticky"
    >
      <NavbarBrand>
        <NextLink href="/">LOGO</NextLink>
      </NavbarBrand>

      <NavbarContent
        className="shadow-navbar gradient-border-2 gradient-border-gradient-nav relative hidden h-fit gap-8 rounded-3xl bg-[rgba(3,1,21,0.01)] px-8 py-4 backdrop-blur-md lg:flex"
        justify="center"
      >
        {navLinkItems.map((item) => (
          <NavbarItem key={item.label}>{item.label}</NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="basis-1" justify="end">
        <StyledButton>Contact</StyledButton>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="lg:hidden " />
      </NavbarContent>

      <NavbarMenu className="h-fit bg-[#00061899] backdrop-blur-md">
        {navLinkItems.map((item) => (
          <NavbarMenuItem key={item.label}>{item.label}</NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
