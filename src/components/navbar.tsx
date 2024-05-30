'use client';

import { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useAppContext } from '@/context/app.context';
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar';

import { siteConfig } from '@/config/site';

import { Logo } from './logo';
import { StyledButton } from './ui/styled-button';

interface NavLinkItemProps {
  label: string;
  href: any;
}

export const navLinkItems: NavLinkItemProps[] = [
  {
    label: 'About',
    href: '#About',
  },
  {
    label: 'Web 3.0 Marketing',
    href: '#Web3',
  },
  {
    label: 'D-app Building',
    href: '#Dapp',
  },
  {
    label: 'GameFi Building',
    href: '#GameFi',
  },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setActiveNav, activeNav } = useAppContext();

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    setActiveNav(id);

    setTimeout(() => {
      const el = document.querySelector(id)!;
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }, 100);
  };

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
      <Image
        src="/images/nav_lighting.webp"
        alt=""
        width={1440}
        height={270}
        className="inset-x-center pointer-events-none top-0 z-[-1] hidden group-data-[hidden=true]:invisible lg:block"
      />

      <NavbarBrand>
        <NextLink href="/">
          <Logo className="w-[145px] min-w-0 lg:w-[185.5px] lg:min-w-[185.5px]" />
        </NextLink>
      </NavbarBrand>

      <NavbarContent
        className="shadow-navbar gradient-border-2 gradient-border-gradient-nav relative hidden h-fit gap-8 rounded-3xl bg-[rgba(3,1,21,0.01)] px-8 py-4 backdrop-blur-md lg:flex"
        justify="center"
      >
        {navLinkItems.map((item) => (
          <NavbarItem
            isActive={item.href === activeNav}
            className="text-_6 font-semibold transition-colors hover:text-white"
            onClick={() => handleNavClick(item.href)}
            key={item.label}
          >
            {item.label}
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="basis-1" justify="end">
        <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer">
          <StyledButton>Contact</StyledButton>
        </a>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="text-white lg:hidden " />
      </NavbarContent>

      <NavbarMenu className="h-fit bg-[#00061899] backdrop-blur-md">
        {navLinkItems.map((item) => (
          <NavbarMenuItem
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.href);
            }}
            isActive={item.href === activeNav}
            key={item.label}
            className="text-_6 font-semibold transition-colors hover:text-white"
          >
            {item.label}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
