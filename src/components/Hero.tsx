import React, { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { Sparkles, Pencil, Calendar, Star, PartyPopper, Flower2, Palette, ArrowRight, Rocket, Smile, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingShapes from './FloatingShapes';

const Hero = () => {
  const [confetti, setConfetti] = useState<{ id: number; size: number; color: string; left: string; top: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF', '#FF9F43'];
    const newConfetti = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      size: 6 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${4 + Math.random() * 5}s`,
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-[#FFF8E0] via-[#E6F1FF] to-[#FFE8F8] flex items-center justify-center px-[5vw] pt-[110px] pb-[70px] relative overflow-hidden">
      <FloatingShapes />

      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="confetti animate-blob-float"
          style={{
            width: c.size,
            height: c.size,
            backgroundColor: c.color,
            left: c.left,
            top: c.top,
            opacity: 0.4,
            animationDelay: c.delay,
            animationDuration: c.duration,
          }}
        />
      ))}

      <div className="hero-inner flex items-center gap-15 max-w-[1140px] w-full z-10 flex-wrap lg:flex-nowrap">
        {/* Text */}
        <div className="hero-text flex-1 min-w-[300px] text-center lg:text-left">
          <Reveal>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badge inline-flex items-center gap-2 bg-white border-2 border-yellow rounded-full px-4.5 py-1.5 text-[0.82rem] font-extrabold text-dark mb-5 shadow-[0_3px_12px_rgba(255,217,61,0.25)]"
            >
              <Smile className="text-yellow" size={16} />
              Admissions Open for 2026–27
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-black leading-[1.1] mb-5"
            >
              Where <span className="text-pink">Little</span> Minds<br />
              Start <span className="text-blue">Big</span> <span className="text-green">Dreams!</span> <Sparkles className="inline-block text-yellow" size={32} />
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-mid leading-relaxed max-w-[460px] mb-9 mx-auto lg:mx-0"
            >
              A joyful, safe, and colourful place where children aged 2–6 learn through play,
              grow with confidence, and make friendships that last a lifetime.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-btns flex gap-4 flex-wrap justify-center lg:justify-start"
            >
              <a href="/admission" className="btn-primary group flex items-center gap-2">
                <Rocket size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Enroll Now
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/contact" className="btn-ghost flex items-center gap-2 hover-lift">
                <Calendar size={20} /> Book a Visit
              </a>
            </motion.div>
          </Reveal>
        </div>

        {/* Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-scene flex-1 min-w-[280px] max-w-[520px] relative mx-auto"
        >
          <div className="sticker stk1 absolute animate-sticker-float drop-shadow-md top-[5%] -left-[8%] text-yellow">
            <Star size={40} fill="currentColor" />
          </div>
          <div className="sticker stk2 absolute animate-sticker-float drop-shadow-md top-[10%] -right-[6%] [animation-delay:1.2s] text-pink">
            <Heart size={40} fill="currentColor" />
          </div>
          <div className="sticker stk3 absolute animate-sticker-float drop-shadow-md bottom-[18%] -left-[5%] [animation-delay:2.4s] text-purple">
            <Flower2 size={40} />
          </div>
          <div className="sticker stk4 absolute animate-sticker-float drop-shadow-md bottom-[8%] -right-[4%] [animation-delay:0.8s] text-blue">
            <Palette size={40} />
          </div>
          
          <svg viewBox="0 0 520 430" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,107,107,0.12)]">
            {/* Sky / ground */}
            <ellipse cx="260" cy="390" rx="230" ry="45" fill="#FFE8CC" opacity=".5"/>
            <rect x="0" y="360" width="520" height="70" rx="0" fill="#E8F4FF" opacity=".6"/>

            {/* Sun */}
            <circle cx="68" cy="68" r="38" fill="#FFD93D"/>
            <circle cx="68" cy="68" r="30" fill="#FFE87A"/>
            <line x1="68" y1="18" x2="68" y2="6"   stroke="#FFD93D" strokeWidth="4" strokeLinecap="round"/>
            <line x1="68" y1="118" x2="68" y2="130" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round"/>
            <line x1="18" y1="68" x2="6"  y2="68"   stroke="#FFD93D" strokeWidth="4" strokeLinecap="round"/>
            <line x1="118" y1="68" x2="130" y2="68" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round"/>
            <line x1="30" y1="30" x2="22"  y2="22"  stroke="#FFD93D" strokeWidth="4" strokeLinecap="round"/>
            <line x1="106" y1="106" x2="114" y2="114" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round"/>
            <line x1="30" y1="106" x2="22"  y2="114" stroke="#FFD93D" strokeWidth="4" strokeLinecap="round"/>
            <line x1="106" y1="30" x2="114" y2="22"  stroke="#FFD93D" strokeWidth="4" strokeLinecap="round"/>

            {/* Clouds */}
            <ellipse cx="380" cy="55" rx="55" ry="24" fill="#fff" opacity=".95"/>
            <ellipse cx="408" cy="45" rx="34" ry="22" fill="#fff" opacity=".95"/>
            <ellipse cx="350" cy="48" rx="30" ry="20" fill="#fff" opacity=".95"/>
            <ellipse cx="170" cy="38" rx="40" ry="18" fill="#fff" opacity=".8"/>
            <ellipse cx="195" cy="30" rx="24" ry="16" fill="#fff" opacity=".8"/>

            {/* Tree right */}
            <rect x="440" y="295" width="16" height="80" rx="7" fill="#A0522D"/>
            <ellipse cx="448" cy="272" rx="42" ry="46" fill="#6BCB77"/>
            <ellipse cx="428" cy="290" rx="25" ry="28" fill="#5BC56A"/>
            <ellipse cx="468" cy="290" rx="25" ry="28" fill="#5BC56A"/>
            {/* Tree left */}
            <rect x="55" y="310" width="12" height="60" rx="6" fill="#A0522D"/>
            <ellipse cx="61" cy="295" rx="30" ry="34" fill="#6BCB77"/>

            {/* Kid 1 */}
            <circle cx="205" cy="208" r="38" fill="#FFD5A8"/>
            <path d="M167 198 Q205 160 243 198" fill="#5C3A1E"/>
            <ellipse cx="205" cy="170" rx="38" ry="12" fill="#5C3A1E"/>
            <circle cx="192" cy="204" r="5.5" fill="#fff"/>
            <circle cx="218" cy="204" r="5.5" fill="#fff"/>
            <circle cx="193" cy="205" r="3.2" fill="#333"/>
            <circle cx="219" cy="205" r="3.2" fill="#333"/>
            <path d="M194 218 Q205 228 216 218" stroke="#CC6B47" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
            <rect x="176" y="244" width="58" height="66" rx="20" fill="#4D96FF"/>
            <rect x="146" y="250" width="32" height="15" rx="7.5" fill="#4D96FF"/>
            <rect x="232" y="250" width="32" height="15" rx="7.5" fill="#4D96FF"/>
            <circle cx="144" cy="257" r="11" fill="#FFD5A8"/>
            <circle cx="266" cy="257" r="11" fill="#FFD5A8"/>
            <rect x="183" y="306" width="18" height="44" rx="9" fill="#333"/>
            <rect x="209" y="306" width="18" height="44" rx="9" fill="#333"/>
            <ellipse cx="192" cy="351" rx="14" ry="9" fill="#FF6B6B"/>
            <ellipse cx="218" cy="351" rx="14" ry="9" fill="#FF6B6B"/>

            {/* Kid 2 */}
            <circle cx="328" cy="212" r="36" fill="#FDDCB0"/>
            <circle cx="298" cy="193" r="14" fill="#CC6B47"/>
            <circle cx="358" cy="193" r="14" fill="#CC6B47"/>
            <path d="M292 206 Q328 168 364 206" fill="#CC6B47"/>
            <circle cx="316" cy="208" r="5.5" fill="#fff"/>
            <circle cx="340" cy="208" r="5.5" fill="#fff"/>
            <circle cx="317" cy="209" r="3.2" fill="#333"/>
            <circle cx="341" cy="209" r="3.2" fill="#333"/>
            <path d="M319 222 Q328 231 337 222" stroke="#CC6B47" strokeWidth="2.8" fill="none" strokeLinecap="round"/>
            <path d="M298 247 Q328 240 358 247 L370 315 Q328 328 286 315 Z" fill="#FF6B6B"/>
            <rect x="264" y="253" width="36" height="14" rx="7" fill="#FF6B6B"/>
            <rect x="352" y="253" width="36" height="14" rx="7" fill="#FF6B6B"/>
            <circle cx="262" cy="260" r="11" fill="#FDDCB0"/>
            <circle cx="390" cy="260" r="11" fill="#FDDCB0"/>
            <rect x="310" y="314" width="17" height="42" rx="8.5" fill="#888"/>
            <rect x="333" y="314" width="17" height="42" rx="8.5" fill="#888"/>
            <ellipse cx="318" cy="358" rx="14" ry="9" fill="#FFD93D"/>
            <ellipse cx="342" cy="358" rx="14" ry="9" fill="#FFD93D"/>

            {/* School building elements */}
            <rect x="0"   y="358" width="130" height="72" rx="0" fill="#E8F4FF"/>
            <rect x="15"  y="325" width="70" height="55" rx="8" fill="#fff" stroke="#4D96FF" strokeWidth="2.5"/>
            <rect x="390" y="358" width="130" height="72" rx="0" fill="#FFEEF8"/>
            <rect x="420" y="318" width="80" height="62" rx="8" fill="#fff" stroke="#FF6B6B" strokeWidth="2.5"/>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
