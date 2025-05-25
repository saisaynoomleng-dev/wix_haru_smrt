import { TitleProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Title = ({ children, className, as: Comp = 'h1', size }: TitleProps) => {
  return (
    <Comp
      className={clsx(
        'text-balance ',
        size == 'sm' && 'text-fs-500 md:text-fs-600 lg:text-fs-700',
        size == 'md' && 'text-fs-600 md:text-fs-700 lg:text-fs-800',
        size == 'lg' && 'text-fs-700 md:text-fs-800 lg:text-fs-900',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Title;
