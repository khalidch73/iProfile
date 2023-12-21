// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/images/logo.png'; 
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="text-white w-full z-10 py-4">
      <nav>
        <div className="flex flex-col items-start justify-start px-4 lg:flex-row lg:justify-between lg:items-center lg:py-0 lg:px-4">
          {/* Logo and Brand */}
          <div className='mb-4'>
            <Link href="/">
              <div className="flex flex-col items-center">
                <Image src={Logo} alt="Logo" width={80} height={80} className="rounded-full" />
                <span className="lg:text-base text-xs font-semibold lg:ml-2">Khalid Nawaz</span>
              </div>
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="lg:mt-0">
            <div className="flex flex-row gap-2 lg:items-center lg:flex-row lg:space-y-2 lg:space-x-2">
              <Link href="/">
                <span className="block lg:inline-block text-sm lg:text-base mb-2 lg:mb-0">Home</span>
              </Link>
              <Link href="/about">
                <span className="block lg:inline-block text-sm lg:text-base mb-2 lg:mb-0">About</span>
              </Link>
              <Link href="/facts">
                <span className="block lg:inline-block text-sm lg:text-base mb-2 lg:mb-0">Facts</span>
              </Link>
              <Link href="/portfolio">
                <span className="block lg:inline-block text-sm lg:text-base mb-2 lg:mb-0">Portfolio</span>
              </Link>
              <Link href="/skills">
                <span className="block lg:inline-block text-sm lg:text-base mb-2 lg:mb-0">Skills</span>
              </Link>
              <Link href="/services">
                <span className="block lg:inline-block text-sm lg:text-base mb-2 lg:mb-0">Services</span>
              </Link>
              <Link href="/contact">
                <span className="block lg:inline-block text-sm lg:text-base mb-2 lg:mb-0">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
