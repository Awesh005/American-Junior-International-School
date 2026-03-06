import React from 'react';
import Reveal from './Reveal';
import FloatingShapes from './FloatingShapes';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: 'My daughter absolutely loves coming to school every morning. The teachers are so warm and caring — it truly feels like a second home for her.',
      name: 'Priya Sharma',
      role: 'Mother of Ananya, Nursery',
      emoji: '👩',
      class: 'ta1'
    },
    {
      text: 'The activity-based approach is fantastic. My son has developed so much confidence and his communication skills have improved dramatically.',
      name: 'Rohit Gupta',
      role: 'Father of Arjun, LKG',
      emoji: '👨',
      class: 'ta2'
    },
    {
      text: 'Safe, colourful, and full of life! AJIS is everything I hoped for. The staff communicates regularly and my child is thriving.',
      name: 'Meena Verma',
      role: 'Mother of Riya, UKG',
      emoji: '👩',
      class: 'ta3'
    }
  ];

  return (
    <section id="testimonials" className="bg-white py-[90px] px-[5vw] relative overflow-hidden">
      <FloatingShapes />
      
      <div className="inner max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-14">
          <Reveal>
            <div className="sec-label inline-flex items-center gap-1.5 rounded-full px-4 py-1.1 text-[0.8rem] font-extrabold tracking-wider mb-2.8 bg-[#FFF8DC] text-orange">
              <MessageCircle size={16} /> Parents Say
            </div>
            <h2 className="section-title font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black text-center mb-2 leading-tight">
              Loved by <span className="text-orange">Families</span>
            </h2>
            <p className="section-sub text-center text-mid text-[1.05rem] mb-14">
              Hear from the parents who trust us with their little ones
            </p>
          </Reveal>
        </div>

        <div className="testi-grid grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6 max-w-[960px] mx-auto">
          {testimonials.map((testi, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                className="testi-card h-full hover:shadow-2xl"
              >
                <div className="quote-mark text-[3rem] leading-none text-pink opacity-30 font-serif">"</div>
                <div className="stars text-yellow text-[0.95rem] mb-3.2">★★★★★</div>
                <p className="testi-text text-[0.96rem] text-mid leading-relaxed mb-5.5 italic">{testi.text}</p>
                <div className="testi-author flex items-center gap-3.5">
                  <div className={`testi-avatar w-11.5 h-11.5 rounded-full shrink-0 grid place-items-center text-[1.4rem] ${testi.class}`}>
                    {testi.emoji}
                  </div>
                  <div>
                    <div className="testi-name font-extrabold text-[0.93rem]">{testi.name}</div>
                    <div className="testi-role text-[0.78rem] text-mid">{testi.role}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .ta1{background:#FFE0E0;} .ta2{background:#E0F4E0;} .ta3{background:#E0EAFF;}
      `}</style>
    </section>
  );
};

export default Testimonials;
