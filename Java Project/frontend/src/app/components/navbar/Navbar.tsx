"use client"
import React, { useState } from 'react';
import Image from 'next/image'; // For optimized images
import Link from 'next/link'; // For Next.js navigation

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/'); // Default active link is '/'
  
  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Handle active link change
  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Set the clicked link as the active one
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md sticky top-0 z-50 px-4 sm:p-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={() => handleLinkClick('/')}>
            <Image
              src="/logo.png"
              alt="Flowbite Logo"
              width={140} // Set appropriate width
              height={40} // Set appropriate height
            />
          </Link>
          <button
            onClick={toggleMobileMenu} // Add the toggle function to the button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen ? 'true' : 'false'} // Update aria-expanded to reflect state
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`} // Toggle mobile menu visibility
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  onClick={() => handleLinkClick('/')}
                  className={`block py-2 px-3 hover:text-blue-600 rounded-sm md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 ${
                    activeLink === '/' ? 'text-blue-700 bg-blue-100' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  onClick={() => handleLinkClick('/donate')}
                  className={`block py-2 px-3 hover:text-blue-600 rounded-sm md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 ${
                    activeLink === '/donate' ? 'text-blue-700 bg-blue-100' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent'
                  }`}
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  onClick={() => handleLinkClick('/stories')}
                  className={`block py-2 px-3 hover:text-blue-600 rounded-sm md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 ${
                    activeLink === '/stories' ? 'text-blue-700 bg-blue-100' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent'
                  }`}
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/GetInvolved"
                  onClick={() => handleLinkClick('/GetInvolved')}
                  className={`block py-2 px-3 hover:text-blue-600 rounded-sm md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 ${
                    activeLink === '/GetInvolved' ? 'text-blue-700 bg-blue-100' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent'
                  }`}
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  onClick={() => handleLinkClick('/results')}
                  className={`block py-2 px-3 hover:text-blue-600 rounded-sm md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 ${
                    activeLink === '/results' ? 'text-blue-700 bg-blue-100' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent'
                  }`}
                >
                  Result and Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => handleLinkClick('/about')}
                  className={`block py-2 px-3 hover:text-blue-600 rounded-sm md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 ${
                    activeLink === '/about' ? 'text-blue-700 bg-blue-100' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent'
                  }`}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
