import React from 'react';
import Reveal from './Reveal';
import { Palette, BookOpen, Users, Sprout, Heart, GraduationCap, Sparkles, ArrowRight, Smile, Laugh, Handshake } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const chips = [
    { icon: <Palette size={18} />, text: 'Creativity First', bg: '#FFF0F8', textCol: '#D63384' },
    { icon: <BookOpen size={18} />, text: 'Play-Based Learning', bg: '#FFF8E6', textCol: '#B8860B' },
    { icon: <Users size={18} />, text: 'Social Skills', bg: '#F0FFF4', textCol: '#198754' },
    { icon: <Sprout size={18} />, text: 'Holistic Growth', bg: '#F0F7FF', textCol: '#0D6EFD' },
    { icon: <Heart size={18} />, text: 'Loving Environment', bg: '#FFF5EB', textCol: '#FD7E14' }
  ];
  const cards = [
    { icon: <Smile size={32} className="text-pink" />, title: 'Creativity', desc: 'Art, craft & self-expression spark imagination daily.', color: '#FFF3F3' },
    { icon: <Laugh size={32} className="text-yellow-600" />, title: 'Learning', desc: 'Fun, activity-based lessons make knowledge stick.', color: '#FFFBEA' },
    { icon: <Handshake size={32} className="text-green" />, title: 'Social Skills', desc: 'Children learn to share, care, and grow together.', color: '#F0FFF3', margin: true },
    { icon: <Sparkles size={32} className="text-blue" />, title: 'Confidence', desc: 'Every child celebrated and encouraged every day.', color: '#EFF5FF', margin: true },
  ];

  return (
    <section id="about" className="bg-white py-[90px] px-[5vw] relative overflow-hidden">
      <FloatingShapes />
      
      <div className="inner max-w-[1100px] mx-auto relative z-10">
        <div className="about-layout flex gap-15 items-center flex-wrap lg:flex-nowrap">
          <div className="about-text flex-1 min-w-[260px]">
            <Reveal>
              <div className="sec-label inline-flex items-center gap-1.5 rounded-full px-4 py-1.1 text-[0.8rem] font-extrabold tracking-wider mb-2.8 bg-[#FFE8E8] text-pink">
                <GraduationCap size={16} /> About Us
              </div>
              <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-black leading-tight mb-5">
                Where Little Minds<br /><span className="text-pink">Grow Big Dreams</span>
              </h2>
              <p className="text-mid leading-relaxed text-[1.05rem] mb-5">
                American Junior International School is a nurturing haven for young learners aged 2–6. We believe that childhood is precious, and every single day is an opportunity for a child to discover something wonderful.
              </p>
              <p className="text-mid leading-relaxed text-[1.05rem] mb-8">
                Our approach combines <strong>play-based learning</strong>, creative exploration, and social-emotional development — giving every child the strong foundation they deserve.
              </p>
              
              <Link to="/about" className="inline-flex items-center gap-2 bg-pink text-white px-8 py-3.5 rounded-full font-display font-black shadow-md hover:shadow-xl transition-all hover:-translate-y-1 mb-10 no-underline">
                Learn More About Us <ArrowRight size={20} />
              </Link>

              <div className="about-chips flex flex-wrap gap-3.5 mt-8">
                {chips.map((chip, idx) => (
                  <motion.div 
                    key={chip.text} 
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="about-chip inline-flex items-center gap-2.5 rounded-full px-6 py-2.8 text-[0.92rem] font-extrabold border-2 border-transparent transition-all duration-300 cursor-default shadow-sm"
                    style={{ 
                      backgroundColor: chip.bg, 
                      color: chip.textCol,
                      borderColor: `${chip.textCol}20` 
                    }}
                  >
                    <span className="flex items-center justify-center">{chip.icon}</span>
                    {chip.text}
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="about-visual flex-1 min-w-[260px]">
            <Reveal>
              <div className="about-cards-stack grid grid-cols-2 gap-4">
                {cards.map((card, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ y: -10, rotate: idx % 2 === 0 ? -2 : 2 }}
                    className={`acard rounded-md p-[1.6rem_1.2rem] text-center shadow-sm transition-all duration-300 hover:shadow-xl ${card.margin ? 'mt-6' : ''}`}
                    style={{ backgroundColor: card.color }}
                  >
                    <div className="ai flex justify-center mb-2.8">{card.icon}</div>
                    <h4 className="font-display text-base font-extrabold mb-1.5">{card.title}</h4>
                    <p className="text-[0.85rem] text-mid leading-relaxed">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
