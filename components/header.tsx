'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="ICanPitch"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ICanPitch
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/learn/"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Learn
            </Link>
            <Link
              href="/blog/"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              // X icon
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/learn/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Learn
            </Link>
            <Link
              href="/blog/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
