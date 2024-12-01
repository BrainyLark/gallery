import { useState, useEffect } from 'react';
import logoFile from './svgs/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full lg:px-24 py-3 z-50 font-light text-base text-white bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 items-center">
            <a href="/"><img src={logoFile} alt="Artisan Studio" width="150px" /></a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 drop-shadow-xl">
            <a href="/" className="flex hover:-translate-y-2 duration-200 transition-transform">
              <i class="bi bi-easel2-fill"></i>&nbsp;&nbsp;БҮТЭЭГДЭХҮҮН
            </a>
            <a href="/" className="flex hover:-translate-y-2 duration-200 transition-transform">
              <i class="bi bi-person-bounding-box"></i>&nbsp;&nbsp;БҮТЭЭЛЧ
            </a>
            <a href="/" className="flex hover:-translate-y-2 duration-200 transition-transform">
              <i class="bi bi-palette-fill"></i>&nbsp;&nbsp;СУРГАЛТ
            </a>
            <a href="/" className="flex hover:-translate-y-2 duration-200 transition-transform">
              <i class="bi bi-info-circle-fill"></i>&nbsp;&nbsp;ТУХАЙ
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8 drop-shadow-xl">
            <a href="/" className="flex hover:text-gray-600 drop-shadow-xl">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="/" className="flex hover:text-gray-600 drop-shadow-xl">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="/" className="flex hover:text-gray-600 drop-shadow-xl">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                About
              </a>
              <a
                href="/services"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Services
              </a>
              <a
                href="/portfolio"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Portfolio
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;