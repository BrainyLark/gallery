import { useState } from 'react';
import logoFile from './svgs/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full lg:px-24 py-4 z-50 font-light text-base uppercase text-white bg-gradient-to-b from-black/50 to-transparent">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 items-center">
            <a href="/"><img src={logoFile} alt="Artisan Studio" width="200px" /></a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 drop-shadow-xl">
            <a href="/" className="flex hover:text-slate-300 transition-colors duration-200">
              <i className="bi bi-easel2-fill"></i>&nbsp;&nbsp;Бүтээгдэхүүн
            </a>
            <a href="/" className="flex hover:text-slate-300 transition-colors duration-200">
              <i className="bi bi-person-bounding-box"></i>&nbsp;&nbsp;Захиалга
            </a>
            <a href="/" className="flex hover:text-slate-300 transition-colors duration-200">
              <i className="bi bi-palette-fill"></i>&nbsp;&nbsp;Сургалт
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8 drop-shadow-xl">
            <a href="/" className="flex hover:text-gray-600 drop-shadow-xl">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="/" className="flex hover:text-gray-600 drop-shadow-xl">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="/" className="flex hover:text-gray-600 drop-shadow-xl">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-900"
            >
              {!isOpen ? (
                <svg
                  className="h-8 w-8"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-transparent">
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-white"
              >
                <i className="bi bi-house-fill"></i>&nbsp;&nbsp;Нүүр Хуудас
              </a>
              <a
                href="/about"
                className="block px-3 py-2 rounded-md text-white"
              >
                <i className="bi bi-easel2-fill"></i>&nbsp;&nbsp;Бүтээгдэхүүн
              </a>
              <a
                href="/services"
                className="block px-3 py-2 rounded-md text-white"
              >
                <i className="bi bi-person-bounding-box"></i>&nbsp;&nbsp;Уран бүтээлч
              </a>
              <a
                href="/portfolio"
                className="block px-3 py-2 rounded-md text-white"
              >
                <i className="bi bi-info-circle-fill"></i>&nbsp;&nbsp;Бидний тухай
              </a>

              <a href="/" className="block px-3 py-2 rounded-md text-white">
                <i className="bi bi-instagram"></i>&nbsp;&nbsp;Instagram
              </a>
              <a href="/" className="block px-3 py-2 rounded-md text-white">
                <i className="bi bi-facebook"></i>&nbsp;&nbsp;Facebook
              </a>
              <a href="/" className="block px-3 py-2 rounded-md text-white">
                <i className="bi bi-whatsapp"></i>&nbsp;&nbsp;Whatsapp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;