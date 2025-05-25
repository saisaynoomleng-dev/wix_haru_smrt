import type { Metadata } from 'next';
import '../globals.css';
import { helvetica_sans } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Haru SMRT',
    default: 'Haru SMRT',
  },
  description:
    'Haru SMRT is a web-based electronic e-commerce app, that sells all types of electronics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={helvetica_sans.variable}>{children}</body>
    </html>
  );
}
