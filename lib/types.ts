// bounded type
export type BoundedProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export type TitleProps = {
  children: React.ReactNode;
  className?: string;
  as: 'h1' | 'h2' | 'h3';
  size: 'sm' | 'md' | 'lg';
};
