'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { IoSunnyOutline } from 'react-icons/io5';
import { FiMoon } from 'react-icons/fi';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button variant="switch" onClick={switchTheme}>
      {theme === 'light' ? <FiMoon /> : <IoSunnyOutline />}
    </Button>
  );
};

export default ThemeSwitch;
