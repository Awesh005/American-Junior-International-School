import React from 'react';
import { Home, BookOpen, Image, Phone, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const MobileBottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Programs', path: '/programs', icon: <BookOpen size={20} /> },
    { name: 'Admission', path: '/admission', icon: <Sparkles size={20} />, special: true },
    { name: 'Gallery', path: '/gallery', icon: <Image size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={20} /> },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[1000] bg-white/90 backdrop-blur-xl border-t border-pink/10 px-4 py-2 pb-5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex justify-between items-center max-w-md mx-auto relative">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          if (item.special) {
            return (
              <Link 
                key={item.name}
                to={item.path}
                className="relative -top-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-gradient-to-br from-pink to-orange rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white"
                >
                  {item.icon}
                </motion.div>
                <span className={`text-[0.65rem] font-black text-center block mt-1 ${isActive ? 'text-pink' : 'text-mid'}`}>
                  {item.name}
                </span>
              </Link>
            );
          }

          return (
            <Link 
              key={item.name}
              to={item.path}
              className="flex flex-col items-center gap-1 px-3 py-1 group"
            >
              <motion.div 
                whileTap={{ scale: 0.8 }}
                className={`transition-colors duration-200 ${isActive ? 'text-pink' : 'text-mid group-hover:text-pink'}`}
              >
                {item.icon}
              </motion.div>
              <span className={`text-[0.65rem] font-bold transition-colors duration-200 ${isActive ? 'text-pink' : 'text-mid group-hover:text-pink'}`}>
                {item.name}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="bottom-nav-dot"
                  className="w-1 h-1 bg-pink rounded-full absolute -bottom-1"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
