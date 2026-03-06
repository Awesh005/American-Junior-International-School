import React from 'react';
import Reveal from './Reveal';
import { Rocket, School, Sparkles, Heart } from 'lucide-react';
import FloatingShapes from './FloatingShapes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AdmissionCTA = () => {
  return (
    <section id="admission" className="py-[100px] px-[5vw] bg-white relative overflow-hidden">
      <FloatingShapes />
      
      <div className="inner max-w-[1000px] mx-auto relative z-10">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="cta-box bg-gradient-to-br from-pink to-purple rounded-[40px] p-[60px_40px] text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative floating elements */}
          <div className="abs-shape w-20 h-20 bg-white/10 rounded-full -top-10 -left-10 animate-pulse"></div>
          <div className="abs-shape w-32 h-32 bg-white/10 rounded-full -bottom-16 -right-16 animate-bounce"></div>
          
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,5vw,3rem)] font-black mb-6 leading-tight">
              Ready to Start Your Child's <br className="hidden md:block" />
              <span className="text-yellow">Magical Journey?</span>
            </h2>
            <p className="text-[1.1rem] opacity-90 mb-10 max-w-[600px] mx-auto leading-relaxed">
              Admissions are now open for the upcoming academic session. Join the AJIS family and give your child the best foundation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05, rotate: -2 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/admission" 
                  className="btn-cta bg-white text-purple hover:bg-yellow hover:text-dark flex items-center gap-2 no-underline"
                >
                  Apply Now <Rocket size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/admission" 
                  className="btn-cta border-2 border-white/30 hover:bg-white/10 flex items-center gap-2 no-underline"
                >
                  Visit Campus <Heart size={20} />
                </Link>
              </motion.div>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionCTA;
