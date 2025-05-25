import React from 'react';
import Title from '../Title';
import Link from 'next/link';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <div className="home-mobile-bg md:home-tablet-bg lg:home-desktop-bg min-h-screen w-screen text-brand-white flex pt-10 px-10 items-center flex-col md:items-start gap-5 md:gap-8">
      <Title as="h1" size="md" className="text-center md:text-left">
        Shop the top brand electronic
      </Title>
      <p className="text-center md:text-left max-w-50 md:max-w-70 lg:max-w-full">
        Get more of your money with every purchase!
      </p>
      <Button>
        <Link href="/products">Shop Now</Link>
      </Button>
    </div>
  );
};

export default Hero;
