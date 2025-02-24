import { useEffect, useState } from 'react';
import logoFile from './svgs/logo.png';
import logoBlackFile from './svgs/logo_black.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const textWhite = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full py-2 lg:px-24 z-50 font-extralight text-lg uppercase transition-all duration-300
    ${scrolled
      ? 'bg-white/40 backdrop-blur-sm'
      : textWhite ? 'bg-transparent text-white' : 'bg-transparent'
    }`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 items-center">
            <a href="/"><img src={textWhite & !scrolled ? logoFile : logoBlackFile } alt="Artisan Studio" width="150px" /></a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 drop-shadow-xl">
            <Link to="/products">
              <i className="bi bi-easel2-fill"></i>&nbsp;&nbsp;Уран бүтээл
            </Link>
            <Link to="/artists">
              <i className="bi bi-person-bounding-box"></i>&nbsp;&nbsp;Уран бүтээлчид
            </Link>
            <Link to="/atelier">
              <i className="bi bi-palette-fill"></i>&nbsp;&nbsp;Сургалт
            </Link>
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
                href="/products"
                className="block px-3 py-2 rounded-md text-white"
              >
                <i className="bi bi-easel2-fill"></i>&nbsp;&nbsp;Уран бүтээл
              </a>
              <a
                href="/artists"
                className="block px-3 py-2 rounded-md text-white"
              >
                <i className="bi bi-person-bounding-box"></i>&nbsp;&nbsp;Уран бүтээлч
              </a>
              <a
                href="/about"
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