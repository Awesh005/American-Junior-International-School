import React from 'react';
import Reveal from './Reveal';
import { Baby, Sun, Rocket, Star, ClipboardList, Sparkles, Smile, Heart } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    { id: 'daycare', icon: <Heart size={48} />, title: 'Day Care', age: '1.5 – 2.5 Years', desc: 'A safe, loving home away from home with engaging activities.', class: 'pc1', ageColor: '#FF6B6B' },
    { id: 'foundation', icon: <Smile size={48} />, title: 'Foundation Years', age: '2.5 – 5.5 Years', desc: 'Nursery, PP1, and PP2 programs focusing on holistic development.', class: 'pc2', ageColor: '#B8860B' },
    { id: 'primary', icon: <Sparkles size={48} />, title: 'Primary Education', age: '5.5 – 9.5 Years', desc: 'Classes 1 to 4 with a focus on academic excellence and character building.', class: 'pc3', ageColor: '#6BCB77' },
  ];

  return (
    <section id="programs" className="bg-gradient-to-br from-[#FFF8E0] to-[#E8F4FF] py-[90px] px-[5vw] relative overflow-hidden">
      <FloatingShapes />
      
      <div className="inner max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-14">
          <Reveal>
            <div className="sec-label inline-flex items-center gap-1.5 rounded-full px-4 py-1.1 text-[0.8rem] font-extrabold tracking-wider mb-2.8 bg-[#E8F4FF] text-blue">
              <ClipboardList size={16} /> Our Programs
            </div>
            <h2 className="section-title font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black text-center mb-2 leading-tight">
              Programs for <span className="text-blue">Every Age</span>
            </h2>
            <p className="section-sub text-center text-mid text-[1.05rem] mb-14">
              Specially crafted learning journeys from age 2 to 6
            </p>
          </Reveal>
        </div>

        <div className="programs-grid grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-6.5 max-w-[960px] mx-auto">
          {programs.map((prog, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <Link to={`/programs#${prog.id}`} className="no-underline block h-full">
                <motion.div 
                  whileHover={{ y: -15, scale: 1.02 }}
                  className={`prog-card h-full ${prog.class} hover:shadow-2xl`}
                >
                  <div className="prog-icon flex justify-center mb-4 animate-wobble text-dark/80">
                    {prog.icon}
                  </div>
                  <h3 className="font-display text-[1.4rem] font-black mb-1.5 text-dark">{prog.title}</h3>
                  <div className="age-badge inline-block rounded-full px-3.5 py-0.8 text-[0.82rem] font-extrabold bg-white/70 mb-3.2" style={{ color: prog.ageColor }}>
                    {prog.age}
                  </div>
                  <p className="prog-desc text-[0.88rem] text-mid leading-relaxed">{prog.desc}</p>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .pc1 { background: linear-gradient(145deg, #FFF0F0, #FFD6D6); border: 2px solid #FFB0B0; }
        .pc2 { background: linear-gradient(145deg, #FFFAE0, #FFE87A); border: 2px solid #FFD700; }
        .pc3 { background: linear-gradient(145deg, #EDFFF0, #C3F7CE); border: 2px solid #90DDA0; }
        .pc4 { background: linear-gradient(145deg, #EBF3FF, #C3D9FF); border: 2px solid #90B8FF; }
      `}</style>
    </section>
  );
};

export default Programs;
