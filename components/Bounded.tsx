import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  children,
  className,
  as: Comp = 'section',
}: BoundedProps) => {
  return <Comp className={clsx('', className)}>{children}</Comp>;
};

export default Bounded;
