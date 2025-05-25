import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  children,
  className,
  as: Comp = 'section',
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        'px-2 py-3 md:px-5 lg:px-0 lg:max-w-[97%] lg:mx-auto space-y-5 md:space-y-10',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
