import React from 'react';
import Reveal from './Reveal';
import { ShieldCheck, GraduationCap, Target, Monitor, Sparkles, Heart, Lightbulb } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <ShieldCheck size={24} className="text-pink" />, title: 'Safe & Friendly', desc: 'A secure, loving environment where children feel safe to explore and grow.', class: 'wi1' },
    { icon: <GraduationCap size={24} className="text-blue" />, title: 'Experienced Teachers', desc: 'Passionate, qualified educators dedicated to early childhood development.', class: 'wi2' },
    { icon: <Target size={24} className="text-green" />, title: 'Activity Based Learning', desc: 'Hands-on experiences that make knowledge stick for life.', class: 'wi3' },
    { icon: <Monitor size={24} className="text-yellow-600" />, title: 'Smart Classrooms', desc: 'Modern technology woven into fun, engaging learning sessions.', class: 'wi4' },
    { icon: <Sparkles size={24} className="text-purple" />, title: 'Overall Development', desc: 'Nurturing intellectual, emotional, social, and physical growth equally.', class: 'wi5' },
    { icon: <Heart size={24} className="text-orange" />, title: 'Loving Community', desc: 'A family-like culture where every child is seen and celebrated.', class: 'wi6' },
  ];

  return (
    <section id="why" className="bg-gradient-to-br from-[#FFF0F8] to-[#EFF5FF] py-[90px] px-[5vw] relative overflow-hidden">
      <FloatingShapes />
      
      <div className="inner max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-14">
          <Reveal>
            <div className="sec-label inline-flex items-center gap-1.5 rounded-full px-4 py-1.1 text-[0.8rem] font-extrabold tracking-wider mb-2.8 bg-[#F0E8FF] text-purple">
              <Lightbulb size={16} /> Why Choose Us
            </div>
            <h2 className="section-title font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black text-center mb-2 leading-tight">
              Why Parents <span className="text-purple">Love AJIS</span>
            </h2>
            <p className="section-sub text-center text-mid text-[1.05rem] mb-14">
              We go the extra mile for every child, every single day
            </p>
          </Reveal>
        </div>

        <div className="why-grid grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 max-w-[1000px] mx-auto">
          {reasons.map((reason, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                className={`why-card group hover:border-l-4 h-full ${idx === 0 ? 'hover:border-pink' : idx === 1 ? 'hover:border-blue' : idx === 2 ? 'hover:border-green' : idx === 3 ? 'hover:border-yellow' : idx === 4 ? 'hover:border-purple' : 'hover:border-orange'}`}
              >
                <div className={`why-icon-wrap w-13 h-13 rounded-sm shrink-0 grid place-items-center ${reason.class}`}>
                  {reason.icon}
                </div>
                <div>
                  <h4 className="font-display text-[1.05rem] font-extrabold mb-1.5">{reason.title}</h4>
                  <p className="text-[0.88rem] text-mid leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .wi1{background:#FFF0F0;} .wi2{background:#EBF3FF;} .wi3{background:#EDFFF0;}
        .wi4{background:#FFFAE0;} .wi5{background:#F3EEFF;} .wi6{background:#FFF0E6;}
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
