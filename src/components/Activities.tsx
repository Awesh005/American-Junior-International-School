import React from 'react';
import Reveal from './Reveal';
import { Palette, Music, BookOpen, Bike, Brain, Sprout, Dumbbell, Puzzle, Target, ArrowRight, Gamepad2, Trophy, Medal, Smile } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Activities = () => {
  const activities = [
    { icon: <Palette size={32} className="text-pink" />, title: 'Art & Craft', desc: 'Painting, clay, collage — creativity has no limits here.', class: 'ben1' },
    { icon: <Music size={32} className="text-blue" />, title: 'Music & Dance', desc: 'Rhythm, movement, and pure joy!', class: 'ben2' },
    { icon: <BookOpen size={32} className="text-green" />, title: 'Storytelling', desc: 'Imagination soars with every tale.', class: 'ben3' },
    { icon: <Bike size={32} className="text-orange" />, title: 'Outdoor Play', desc: 'Fresh air and active bodies.', class: 'ben4' },
    { icon: <Brain size={32} className="text-purple" />, title: 'Brain Games', desc: 'Logic puzzles and creative thinking.', class: 'ben5' },
    { icon: <Sprout size={32} className="text-green-600" />, title: 'Nature Exploration', desc: 'Discovering the wonder of the natural world through hands-on activities.', class: 'ben6' },
    { icon: <Gamepad2 size={32} className="text-blue-600" />, title: 'Fun Games', desc: 'Interactive play that builds teamwork.', class: 'ben7' },
    { icon: <Trophy size={32} className="text-yellow-600" />, title: 'Achievements', desc: 'Celebrating every small win.', class: 'ben8' },
  ];

  return (
    <section id="activities" className="bg-white py-[90px] px-[5vw] relative overflow-hidden">
      <FloatingShapes />
      
      <div className="inner max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-14">
          <Reveal>
            <div className="sec-label inline-flex items-center gap-1.5 rounded-full px-4 py-1.1 text-[0.8rem] font-extrabold tracking-wider mb-2.8 bg-[#F0FFF3] text-green">
              <Target size={16} /> Activities
            </div>
            <h2 className="section-title font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black text-center mb-2 leading-tight">
              Fun Learning <span className="text-green">Activities</span>
            </h2>
            <p className="section-sub text-center text-mid text-[1.05rem] mb-14">
              Every day brings a brand-new adventure at AJIS!
            </p>
          </Reveal>
        </div>

        <div className="bento grid grid-cols-2 md:grid-cols-4 gap-5 max-w-[960px] mx-auto mb-14">
          {activities.map((act, idx) => (
            <Reveal key={idx} delay={idx * 50} className={act.class === 'ben1' || act.class === 'ben6' ? 'col-span-2' : ''}>
              <motion.div 
                whileHover={{ scale: 1.03, y: -5 }}
                className={`bento-cell h-full ${act.class} hover:shadow-xl`}
              >
                <div className="be mb-3">{act.icon}</div>
                <h4 className="font-display text-base font-extrabold">{act.title}</h4>
                <p className="text-[0.82rem] text-mid leading-relaxed">{act.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="text-center">
          <Reveal>
            <motion.div whileHover={{ scale: 1.05, y: -4 }}>
              <Link to="/activities" className="btn-prog px-10 py-4 rounded-full bg-green text-white font-display font-black text-[1rem] shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2">
                Explore All Activities <ArrowRight size={20} />
              </Link>
            </motion.div>
          </Reveal>
        </div>
      </div>
      <style>{`
        .ben1 { background: #FFF0F8; }
        .ben2 { background: #FFF8DC; }
        .ben3 { background: #EDFFF0; }
        .ben4 { background: #EBF3FF; }
        .ben5 { background: #F3EEFF; }
        .ben6 { background: #FFF0E6; }
        .ben7 { background: #E6FFF8; }
        .ben8 { background: #FFF5E6; }
      `}</style>
    </section>
  );
};

export default Activities;
