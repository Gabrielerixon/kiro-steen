'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Menyalternativ för både desktop och mobil
const navItems = [
  { name: 'Hem', path: '/' },
  { name: 'Om Oss', path: '/om-oss' },
  { name: 'Behandlingar', path: '/behandlingar-kunskap' },
  { name: 'Kontakt', path: '/hitta-oss-kontakt' },
  { name: 'Priser', path: '/priser' },
  { name: 'Länkar', path: '/lankar' },
];

// Separata mobila menyalternativ
const mobileNavItems = [
  { name: 'Hem', path: '/' },
  { name: 'Om Oss', path: '/om-oss' },
  { name: 'Behandlingar & Kunskap', path: '/behandlingar-kunskap' },
  { name: 'Hitta Oss & Kontakt', path: '/hitta-oss-kontakt' },
  { name: 'Priser', path: '/priser' },
  { name: 'Länkar', path: '/lankar' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-teal-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              {/* Kortare namn på små och mellanstora skärmar */}
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold truncate">
                <span className="block lg:hidden">Kiropraktorerna</span>
                <span className="hidden lg:block">Kiropraktorerna i Jönköping</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop navigation - ändrat från md: till lg: för senare brytpunkt */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-2 xl:px-3 py-2 rounded-md text-sm font-medium hover:bg-teal-700 transition-colors whitespace-nowrap ${
                  pathname === item.path ? 'bg-teal-700' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/hitta-oss-kontakt"
              className="ml-2 px-3 py-2 rounded-md text-sm font-medium bg-white text-teal-600 hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Boka Tid
            </Link>
          </div>
          
          {/* Mobile menu button - ändrat från md:hidden till lg:hidden */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-teal-700 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Öppna huvudmenyn</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - ändrat från md:hidden till lg:hidden */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {mobileNavItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-700 transition-colors ${
                pathname === item.path ? 'bg-teal-700' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/hitta-oss-kontakt"
            className="block mt-4 px-3 py-2 rounded-md text-center text-base font-medium bg-white text-teal-600 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Boka Tid
          </Link>
        </div>
      </div>
    </nav>
  );
}