import { SanityLive } from '@/sanity/lib/live';
import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <main>
        {children} <SanityLive />
      </main>
    </ClerkProvider>
  );
}
