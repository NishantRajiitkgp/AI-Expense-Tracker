'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
  
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/40 backdrop-blur-2xl shadow-2xl' 
        : 'bg-black/20 backdrop-blur-lg'
    }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo Section */}
          <div className='flex items-center'>
            <Link
              href='/'
              className='flex items-center gap-2 flex-shrink-0 group transition-all duration-300 hover:scale-105'
              onClick={closeMobileMenu}
            >
              <Image src="/costpilot.png" alt="CostPilot" width={32} height={32} />
              <span className='text-xl font-bold text-white'>
                CostPilot
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className='text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium'
            >
              Home
            </Link>
            <Link
              href='/about'
              className='text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium'
            >
              About
            </Link>
            <Link
              href='/contact'
              className='text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium'
            >
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className='flex items-center space-x-4'>
            {/* Authentication - Desktop */}
            <div className='hidden sm:flex items-center space-x-4'>
              <SignedOut>
                <SignInButton>
                  <button className='text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium'>
                    Login
                  </button>
                </SignInButton>
                <SignInButton>
                  <button className='bg-white/90 hover:bg-white text-black px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm'>
                    Sign up
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'w-8 h-8 hover:scale-110 transition-transform duration-200',
                      userButtonBox: 'flex items-center justify-center',
                    },
                  }}
                />
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className='md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-200'
              style={{ color: 'var(--text-primary)' }}
              aria-label='Toggle mobile menu'
            >
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'max-h-96 opacity-100 pb-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className='px-2 pt-2 pb-3 space-y-1 border-t border-white/10 mt-2'>
            {/* Mobile Navigation Links */}
            <Link
              href='/'
              className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-sm font-medium transition-all duration-200 active:scale-95 text-gray-300 hover:text-white'
              onClick={closeMobileMenu}
            >
              <span className='text-base'>🏠</span>
              <span>Home</span>
            </Link>
            <Link
              href='/about'
              className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-sm font-medium transition-all duration-200 active:scale-95 text-gray-300 hover:text-white'
              onClick={closeMobileMenu}
            >
              <span className='text-base'>ℹ️</span>
              <span>About</span>
            </Link>
            <Link
              href='/contact'
              className='flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-sm font-medium transition-all duration-200 active:scale-95 text-gray-300 hover:text-white'
              onClick={closeMobileMenu}
            >
              <span className='text-base'>📞</span>
              <span>Contact</span>
            </Link>

            {/* Mobile Authentication */}
            <div className='pt-3 border-t border-white/10'>
              <SignedOut>
                <div className='space-y-2'>
                  <SignInButton>
                    <button
                      className='w-full text-left px-3 py-2.5 text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium'
                      onClick={closeMobileMenu}
                    >
                      Login
                    </button>
                  </SignInButton>
                  <SignInButton>
                    <button
                      className='w-full bg-white/90 hover:bg-white text-black px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200'
                      onClick={closeMobileMenu}
                    >
                      Sign up
                    </button>
                  </SignInButton>
                </div>
              </SignedOut>

              <SignedIn>
                <div className='flex items-center justify-center p-3'>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: 'w-8 h-8 hover:scale-110 transition-transform duration-200',
                        userButtonBox: 'flex items-center justify-center',
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}