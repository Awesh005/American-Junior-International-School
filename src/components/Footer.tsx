import React from 'react';
import { 
  School, 
  Heart, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  Sparkles,
  Star,
  Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-white to-[#FFF5F8] pt-24 pb-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Floating Shapes */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[8%] text-pink/10 pointer-events-none"
      >
        <Star size={60} fill="currentColor" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-[12%] text-blue/10 pointer-events-none"
      >
        <Cloud size={80} fill="currentColor" />
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-[8%] text-yellow/10 pointer-events-none"
      >
        <Sparkles size={40} />
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-[5vw] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* School Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-22 h-22 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shrink-0">
                <img src="/logo.png" alt="AJIS Logo" className="w-full h-full object-contain" />
              </div>
              <div className="leading-tight">
                <span className="block font-display text-3xl font-black text-dark tracking-tight">AJIS</span>
                <span className="text-[0.65rem] font-black text-blue uppercase tracking-[0.2em]">American Junior</span>
              </div>
            </Link>
            <p className="text-mid text-[1rem] leading-relaxed font-medium">
              "Nurturing young minds with love, care, and quality education."
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 text-mid text-sm group">
                <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-pink shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <MapPin size={18} />
                </div>
                <span className="pt-2">Argora-Kathal More Road, Near Sai Apartment.</span>
              </div>
              <div className="flex items-center gap-4 text-mid text-sm group">
                <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-all">
                  <Phone size={18} />
                </div>
                <a href="tel:+919759242134" className="hover:text-blue transition-colors font-semibold">+91 9759242134</a>
              </div>
              <div className="flex items-center gap-4 text-mid text-sm group">
                <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-green shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <Mail size={18} />
                </div>
                <a href="mailto:edgenie2025@gmail.com" className="hover:text-green transition-colors font-semibold">edgenie2025@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-black text-dark mb-8 flex items-center gap-2">
              <span className="w-2 h-6 bg-pink rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Programs', path: '/programs' },
                { name: 'Activities', path: '/activities' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Admissions', path: '/admission' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-mid hover:text-pink flex items-center gap-2 group transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink/30 group-hover:bg-pink transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-xl font-black text-dark mb-8 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue rounded-full"></span>
              Support
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Contact Us', path: '/contact' },
                { name: 'Privacy Policy', path: '#' },
                { name: 'FAQ', path: '/programs#faq' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-mid hover:text-blue flex items-center gap-2 group transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue/30 group-hover:bg-blue transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
              <h5 className="font-bold text-dark mb-4 text-sm uppercase tracking-widest">Follow Us</h5>
              <div className="flex gap-3">
                {[
                  { icon: <Facebook size={20} />, color: 'hover:bg-[#1877F2]', label: 'Facebook' },
                  { icon: <Instagram size={20} />, color: 'hover:bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]', label: 'Instagram' },
                  { icon: <Youtube size={20} />, color: 'hover:bg-[#FF0000]', label: 'YouTube' }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href="#" 
                    className={`w-10 h-10 rounded-xl bg-bg flex items-center justify-center text-mid hover:text-white transition-all duration-300 shadow-sm ${social.color} hover:-translate-y-1`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-br from-pink/5 to-blue/5 p-8 rounded-[2rem] border border-white shadow-inner">
            <h4 className="font-display text-xl font-black text-dark mb-4">Stay Updated</h4>
            <p className="text-mid text-sm mb-6 leading-relaxed">
              Subscribe to our newsletter for latest updates and school events.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white border-2 border-transparent focus:border-pink/20 rounded-2xl px-5 py-3.5 text-sm outline-none transition-all shadow-sm"
                />
              </div>
              <button className="w-full bg-gradient-to-r from-pink to-orange text-white rounded-2xl py-3.5 text-sm font-black shadow-lg hover:shadow-pink/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group">
                Join Now <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          <p className="text-mid text-sm font-medium opacity-70">
            © {currentYear} American Junior International School. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-mid/70">
            <span>Designed & Developed with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} className="text-pink fill-pink" />
            </motion.div>
            <span>by <span className="font-black text-dark">BN INTELHUB PVT LTD</span> • STPI Ranchi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

