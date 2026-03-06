import React, { useEffect, useState, useRef } from 'react';
import Reveal from './Reveal';
import { Users, Calendar, GraduationCap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface CounterProps {
  target: number;
  label: string;
  suffix?: string;
  borderColor: string;
  numColor: string;
  icon: React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ target, label, suffix = '+', borderColor, numColor, icon }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, 28);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <motion.div 
      ref={ref}
      whileHover={{ y: -10, scale: 1.05 }}
      className={`stat-card bg-white rounded-md p-5.5 text-center flex-1 min-w-[140px] max-w-[200px] shadow-md border-t-4 transition-shadow duration-250 hover:shadow-xl`}
      style={{ borderTopColor: borderColor }}
    >
      <div className="flex justify-center mb-3 opacity-60" style={{ color: numColor }}>
        {icon}
      </div>
      <div className={`stat-num font-display text-3xl font-black leading-none`} style={{ color: numColor }}>
        {count}{suffix}
      </div>
      <div className="stat-label text-[0.82rem] font-bold text-mid mt-1.2">{label}</div>
    </motion.div>
  );
};

const StatsStrip = () => {
  const stats = [
    { target: 500, label: 'Happy Students', borderColor: '#FF6B6B', numColor: '#FF6B6B', icon: <Users size={24} /> },
    { target: 15, label: 'Years of Excellence', borderColor: '#FFD93D', numColor: '#FF9F43', icon: <Calendar size={24} /> },
    { target: 30, label: 'Qualified Teachers', borderColor: '#6BCB77', numColor: '#6BCB77', icon: <GraduationCap size={24} /> },
    { target: 98, label: '% Parent Satisfaction', suffix: '%', borderColor: '#4D96FF', numColor: '#4D96FF', icon: <Heart size={24} /> },
  ];

  return (
    <div className="stats-strip relative z-20 flex justify-center flex-wrap gap-6 -mt-8 px-[5vw]">
      {stats.map((stat, idx) => (
        <Reveal key={idx} delay={idx * 100}>
          <Counter {...stat} />
        </Reveal>
      ))}
    </div>
  );
};

export default StatsStrip;
