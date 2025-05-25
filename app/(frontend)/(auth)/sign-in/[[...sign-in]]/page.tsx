import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';

const SignInPage = () => {
  return (
    <div className="h-screen w-full flex items-center flex-col relative">
      <div className="relative">
        <SignIn />
        <Link href="/" className="absolute right-5 top-2 ">
          <IoClose />
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
