import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import Reveal from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 0,
      src: '/g1.jpg',
      alt: 'Children learning together with world maps and globes',
      category: 'class',
      categoryLabel: 'Classroom',
      title: 'Collaborative Learning',
      description: 'Maps, globes & laptops — exploring the world together'
    },
    {
      id: 1,
      src: '/g2.jpg',
      alt: 'Teacher at chalkboard with children in class',
      category: 'learn',
      categoryLabel: 'Learning',
      title: 'Interactive Teaching',
      description: 'Every lesson bright, engaging & memorable'
    },
    {
      id: 2,
      src: '/g3.jpg',
      alt: 'Kids playing with alphabet blocks and books',
      category: 'play',
      categoryLabel: 'Play Time',
      title: 'Alphabet Play',
      description: 'Learning letters through colourful blocks & fun'
    },
    {
      id: 3,
      src: '/g4.jpg',
      alt: 'Smart classroom children at desks with technology',
      category: 'smart',
      categoryLabel: 'Smart Class',
      title: 'Smart Classrooms',
      description: 'Tech-enabled learning for the 21st century'
    },
    {
      id: 4,
      src: '/g5.jpg',
      alt: 'Energetic classroom full of curious children raising hands',
      category: 'learn',
      categoryLabel: 'Learning',
      title: 'Curious Minds',
      description: 'Hands raised, hearts open — always eager to learn'
    }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  const stats = [
    { n: 500, l: 'Happy Graduates', suffix: '+' },
    { n: 15, l: 'Years of Excellence', suffix: '+' },
    { n: 30, l: 'Qualified Teachers', suffix: '+' },
    { n: 98, l: '% Parent Satisfaction', suffix: '%' }
  ];

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedImage]);

  return (
    <div className="antialiased selection:bg-pink selection:text-white bg-bg min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-[120px] pb-14 px-[5vw] text-center relative overflow-hidden bg-gradient-to-br from-[#FFF8E0] via-[#FFE8F8] to-[#E6F4FF]">
        {/* Floating Emojis */}
        <div className="absolute top-[18%] left-[6%] text-3xl animate-bounce delay-0">📸</div>
        <div className="absolute top-[14%] right-[8%] text-3xl animate-bounce delay-150">🌟</div>
        <div className="absolute bottom-[22%] left-[9%] text-3xl animate-bounce delay-300">🎨</div>
        <div className="absolute bottom-[18%] right-[6%] text-3xl animate-bounce delay-500">💛</div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm font-bold text-mid shadow-sm mb-6">
            <Link to="/" className="text-blue hover:text-pink transition-colors">Home</Link>
            <span className="text-gray-300">›</span>
            <span>Gallery</span>
          </div>
          
          <Reveal>
            <h1 className="font-display text-[clamp(2.2rem,6vw,3.8rem)] font-black leading-tight mb-4">
              Life at <span className="text-pink">AJIS</span> 📸
            </h1>
            <p className="text-mid text-lg max-w-lg mx-auto leading-relaxed">
              Glimpses of joy, learning, and the everyday magic that fills our classrooms.
            </p>
          </Reveal>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg viewBox="0 0 1440 52" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
            <path d="M0,26 C480,52 960,0 1440,26 L1440,52 L0,52 Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[72px] z-[800] bg-white border-b border-black/5 shadow-sm py-5 px-[5vw]">
        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {[
            { id: 'all', label: '✨ All Photos', color: 'bg-gradient-to-r from-pink to-orange' },
            { id: 'class', label: '🏫 Classroom', color: 'bg-blue' },
            { id: 'learn', label: '📚 Learning', color: 'bg-green' },
            { id: 'play', label: '🎮 Play Time', color: 'bg-yellow text-dark' },
            { id: 'smart', label: '🖥️ Smart Class', color: 'bg-purple' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2 rounded-full font-display font-bold text-sm transition-all duration-300 border-2 ${
                filter === btn.id 
                  ? `${btn.color} border-transparent text-white shadow-md scale-105` 
                  : 'bg-bg border-[#e8e0f0] text-mid hover:border-pink hover:text-pink'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 px-[5vw] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, index) => {
                // Custom grid spans for bento effect
                let gridClass = "col-span-12 sm:col-span-6 md:col-span-4";
                if (index === 0) gridClass = "col-span-12 md:col-span-7 row-span-2";
                else if (index === 1) gridClass = "col-span-12 md:col-span-5 row-span-1";
                else if (index === 2) gridClass = "col-span-12 md:col-span-5 row-span-1";
                else if (index === 3) gridClass = "col-span-12 md:col-span-6 row-span-1";
                else if (index === 4) gridClass = "col-span-12 md:col-span-6 row-span-1";

                return (
                  <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`${gridClass} group relative rounded-3xl overflow-hidden shadow-md cursor-zoom-in hover:shadow-2xl transition-all duration-500`}
                    onClick={() => setSelectedImage(img.id)}
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Category Chip */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[0.7rem] font-black shadow-sm z-10">
                      <span className={
                        img.category === 'class' ? 'text-blue' :
                        img.category === 'learn' ? 'text-green' :
                        img.category === 'play' ? 'text-yellow-600' :
                        'text-purple'
                      }>
                        {img.categoryLabel}
                      </span>
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-dark opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                      <Maximize2 size={16} />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h4 className="font-display text-white text-lg font-black mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {img.title}
                      </h4>
                      <p className="text-white/80 text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {img.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-[5vw] bg-gradient-to-r from-pink via-orange to-purple">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12 md:gap-20">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.n}{stat.suffix}
                </div>
                <div className="text-white/80 font-bold text-sm uppercase tracking-wider">
                  {stat.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-[5vw] text-center bg-bg border-t-2 border-dashed border-pink/10">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-black mb-4">
            Want to See More? <span className="text-pink">Visit Us!</span> 🎉
          </h2>
          <p className="text-mid text-lg mb-10 max-w-2xl mx-auto">
            Book a school tour and experience the AJIS magic in person. We'd love to show you around!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#admission" className="btn-primary">
              <Sparkles size={20} /> Enroll Now
            </Link>
            <Link to="/#contact" className="btn-ghost">
              📅 Book a Visit
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-pink text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            <button 
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors z-50"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors z-50"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative max-w-5xl w-full flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedImage].src} 
                alt={images[selectedImage].alt}
                className="max-h-[75vh] w-auto rounded-2xl shadow-2xl object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="text-center text-white">
                <h3 className="font-display text-2xl font-black mb-1">{images[selectedImage].title}</h3>
                <p className="text-white/60">{images[selectedImage].description}</p>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-4">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      selectedImage === i ? 'bg-white scale-125' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-[850] flex flex-col gap-3 items-end">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-white text-dark shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          ↑
        </button>
        <a 
          href="https://wa.me/919759242134" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform text-2xl"
        >
          💬
        </a>
      </div>
    </div>
  );
};

export default GalleryPage;
