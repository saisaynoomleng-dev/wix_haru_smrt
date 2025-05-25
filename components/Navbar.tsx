'use client';

import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { ClerkLoaded, useUser } from '@clerk/nextjs';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from '@clerk/clerk-react';
import Image from 'next/image';
import SearchForm from './SearchForm';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { Button } from './ui/button';

const NAV_LINKS = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Mobile & Wearable Tech',
    url: '/products/mobile-and-wearable-tech',
  },
  {
    title: 'Drones & Cameras',
    url: '/products/drones-and-cameras',
  },
  {
    title: 'Headphones & Speakers',
    url: '/products/headphones-and-speakers',
  },
  {
    title: 'Computers',
    url: '/products/computers',
  },
  {
    title: 'Tablets',
    url: '/products/tablets',
  },
  {
    title: 'TV & Home Cinema',
    url: '/products/tv-and-home-cinema',
  },
];

const Navbar = () => {
  const { user } = useUser();
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
  }, [navOpen]);

  return (
    <header className="flex flex-col gap-2 space-y-2 px-2 py-3 md:px-5 md:py-5 lg:px-0 lg:max-w-[97%] lg:mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Link href="/" className="font-bold text-fs-500 md:text-fs-600">
            H
          </Link>
          <ThemeSwitch />
        </div>

        <div className="flex items-center justify-between gap-5 md:gap-8">
          <div className="flex items-center justify-between gap-3">
            <Link href="/wishlist">
              <CiHeart />
            </Link>
            <Link href="/cart">
              <CiShoppingCart />
            </Link>
          </div>

          <ClerkLoaded>
            <SignedIn>
              <Link href="/profile" className="flex items-center gap-3">
                <Image
                  src={user?.imageUrl || 'U'}
                  width={50}
                  height={50}
                  className="w-[30px] rounded-full"
                  alt={`${user?.fullName}'s photo`}
                  priority
                />
                <SignOutButton />
              </Link>
            </SignedIn>

            <SignedOut>
              <Button className="bg-transparent border">
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>

      <hr className="w-80 sm:w-full h-[1px] mx-auto bg-brand-black-100/50" />

      <div className="flex justify-between items-center">
        <button
          className={clsx(
            'hidden max-md:block max-md:relative max-md:z-50',
            navOpen && 'text-brand-white',
          )}
          onClick={() => setNavOpen((prevOpen) => !prevOpen)}
          aria-expanded={navOpen}
          aria-label="Navbar Toggle Button"
          aria-controls="#navbar"
        >
          {navOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>

        <nav
          id="navbar"
          role="navigation"
          className={clsx(
            'flex justify-around gap-3',
            'max-md:fixed max-md:inset-0 max-md:flex-col max-md:bg-brand-blue max-md:text-brand-white max-md:justify-center max-md:items-center max-md:transition-transform max-md:duration-300',
            navOpen ? 'max-md:translate-y-0' : 'max-md:-translate-y-full',
          )}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={clsx(
                '',
                pathname === link.url && 'text-black-200 underline',
              )}
              onClick={() => setNavOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <SearchForm />
      </div>
    </header>
  );
};

export default Navbar;
