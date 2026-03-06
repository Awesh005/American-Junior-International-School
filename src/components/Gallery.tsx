import React from 'react';
import Reveal from './Reveal';
import { Palette, School, Sprout, BookOpen, Music, Bike, Camera, ArrowRight } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const items = [
    { src: '/gi1.png', label: 'Art & Craft Session', class: 'gi1' },
    { src: '/gi2.png', label: 'Our Classrooms', class: 'gi2' },
    { src: '/gi3.png', label: 'Nature Corner', class: 'gi3' },
    { src: '/gi4.png', label: 'Story Time', class: 'gi4' },
    { src: '/gi5.png', label: 'Music & Dance', class: 'gi5' },
    { src: '/gi6.png', label: 'Outdoor Play', class: 'gi6' },
  ];

  return (
    <section id="gallery" className="bg-gradient-to-br from-[#FFF8E0] to-[#EEF5FF] py-[90px] px-[5vw] relative overflow-hidden">
      <FloatingShapes />
      
      <div className="inner max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-14">
          <Reveal>
            <div className="sec-label inline-flex items-center gap-1.5 rounded-full px-4 py-1.1 text-[0.8rem] font-extrabold tracking-wider mb-2.8 bg-[#FFF8DC] text-[#E6A020]">
              <Camera size={16} /> Gallery
            </div>
            <h2 className="section-title font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black text-center mb-2 leading-tight">
              Life at <span className="text-orange">AJIS</span>
            </h2>
            <p className="section-sub text-center text-mid text-[1.05rem] mb-14">
              Moments of joy, learning, and friendship
            </p>
          </Reveal>
        </div>

        <div className="gallery-masonry grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <motion.div 
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                className={`g-item ${item.class} hover:shadow-2xl overflow-hidden group`}
              >
                <img 
                  src={item.src} 
                  alt={item.label} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="g-label">{item.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={600}>
          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-primary">
              View All Photos <ArrowRight size={20} />
            </Link>
          </div>
        </Reveal>
      </div>
      <style>{`
        .gi1{aspect-ratio:1;}
        .gi2{aspect-ratio:.8;}
        .gi3{aspect-ratio:1;}
        .gi4{aspect-ratio:.8;}
        .gi5{aspect-ratio:1;}
        .gi6{aspect-ratio:1.2;}
      `}</style>
    </section>
  );
};

export default Gallery;
