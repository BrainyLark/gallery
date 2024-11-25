import { useState, useEffect } from 'react';
import productIcon from './svgs/palette.svg';
import artistIcon from './svgs/artist.svg';
import bulbIcon from './svgs/bulb.svg';
import homeIcon from './svgs/home.svg';
import telegramIcon from './svgs/telegram.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // You can adjust this value based on when you want the transition to happen
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full bg-transparent z-50 font-sans font-extrabold text-xs 
        ${isScrolled 
          ? 'bg-slate-300/40 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
        }" transition-all duration-150`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-gray-800">
              Urlan.mn
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 drop-shadow-xl">
            <a href="/" className="flex hover:text-gray-600">
              <img src={homeIcon} className="w-4 h-4" alt="" />&nbsp;НҮҮР ХУУДАС
            </a>
            <a href="/" className="flex hover:text-blue-600">
              <img src={productIcon} className="w-4 h-4" alt="" />&nbsp;БҮТЭЭЛҮҮД
            </a>
            <a href="/" className="flex hover:text-gray-600">
              <img src={artistIcon} className="w-4 h-4" alt="" />&nbsp;УРАН БҮТЭЭЛЧИД
            </a>
            <a href="/" className="flex hover:text-gray-600">
              <img src={bulbIcon} className="w-4 h-4" alt="" />&nbsp;ЗАХИАЛАХ
            </a>
            <a href="/" className="flex hover:text-gray-600">
              <img src={telegramIcon} className="w-4 h-4" alt="" />&nbsp;ХОЛБОГДОХ
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