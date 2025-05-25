'use client';

import { Button } from '@/components/ui/button';
import {
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/nextjs';

export default function Home() {
  const { user } = useUser();

  return (
    <>
      Hello Next!
      <Button>Hi</Button>
      <div className="border py-10">
        <ClerkLoaded>
          <SignedIn>
            <div>Welcome, {user?.fullName || 'User'}!</div>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <div>Please sign in or sign up</div>
            <SignInButton mode="modal">
              <Button className="mr-2">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="outline">Sign Up</Button>
            </SignUpButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </>
  );
}
