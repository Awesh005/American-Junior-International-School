import React, { useState, useEffect } from 'react';
import { Menu, X, School, Sparkles, Home, Info, BookOpen, Palette, Image, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={18} /> },
    { name: 'About', href: '/about', icon: <Info size={18} /> },
    { name: 'Programs', href: '/programs', icon: <BookOpen size={18} /> },
    { name: 'Activities', href: '/activities', icon: <Palette size={18} /> },
    { name: 'Gallery', href: '/gallery', icon: <Image size={18} /> },
    { name: 'Contact', href: '/contact', icon: <Phone size={18} /> },
  ];

  const isHomePage = location.pathname === '/';

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#') && isHomePage) {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav id="navbar" className={`fixed top-0 left-0 right-0 z-[900] flex items-center justify-between px-[5vw] py-3.2 bg-bg/94 backdrop-blur-md border-b border-pink/10 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <motion.div 
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/" className="logo flex items-center gap-3 no-underline">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center">
              <img src="/logo.png" alt="AJIS Logo" className="w-full h-full object-contain" />
            </div>
            <div className="logo-words leading-tight">
              <strong className="block font-display text-base font-black text-dark">American Junior</strong>
              <span className="text-[0.78rem] font-bold text-blue">International School</span>
            </div>
          </Link>
        </motion.div>


        <ul className="nav-links hidden lg:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.href.startsWith('/#') ? (
                <a 
                  href={link.href}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }
                  }}
                  className="no-underline text-mid font-bold text-[0.9rem] relative transition-colors duration-200 hover:text-pink after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2.5px] after:rounded-full after:bg-pink after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  to={link.href} 
                  className={`no-underline text-mid font-bold text-[0.9rem] relative transition-colors duration-200 hover:text-pink after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2.5px] after:rounded-full after:bg-pink after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${location.pathname === link.href ? 'text-pink after:scale-x-100' : ''}`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/admission" className="nav-cta hidden sm:inline-flex items-center gap-2">
              <Sparkles size={16} /> Admission Open
            </Link>
          </motion.div>
          <button 
            className="lg:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`w-6.5 h-[3px] bg-dark rounded-full transition-all duration-300 ${isOpen ? 'translate-y-[9px] rotate-45' : ''}`} />
            <div className={`w-6.5 h-[3px] bg-dark rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6.5 h-[3px] bg-dark rounded-full transition-all duration-300 ${isOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] left-0 right-0 z-[899] bg-bg/98 backdrop-blur-xl px-[5vw] py-6 flex flex-col gap-4 shadow-lg border-b border-pink/10 lg:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                {link.href.startsWith('/#') ? (
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      if (isHomePage) {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="font-bold text-dark no-underline text-lg py-2 border-b border-black/5 block"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.href} 
                    className={`font-bold text-dark no-underline text-lg py-3 border-b border-black/5 flex items-center gap-3 ${location.pathname === link.href ? 'text-pink' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-pink/60">{link.icon}</span>
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                to="/admission" 
                className="bg-gradient-to-br from-pink to-orange text-white rounded-full py-3 flex items-center justify-center gap-2 font-extrabold no-underline mt-2 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                <Sparkles size={18} /> Admission Open 2026
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
