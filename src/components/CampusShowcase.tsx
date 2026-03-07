import React from 'react';
import Reveal from './Reveal';
import { School, MapPin, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const CampusShowcase = () => {
  return (
    <section className="py-24 px-[5vw] bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="flex-1 relative">
            <Reveal>
              <div className="relative z-10">
                {/* Main Image with Premium Frame */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white relative"
                >
                  <img 
                    src="/school.png" 
                    alt="American Junior International School Campus" 
                    className="w-full h-auto object-cover min-h-[400px]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={18} className="text-yellow" />
                      <span className="font-bold text-sm uppercase tracking-widest">Ranchi, Jharkhand</span>
                    </div>
                    <h3 className="font-display text-2xl font-black">Our Beautiful Campus</h3>
                  </div>
                </motion.div>

                {/* Floating Badge 1 */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-pink/10"
                >
                  <div className="w-12 h-12 bg-pink/10 rounded-xl flex items-center justify-center text-pink">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <div className="text-[0.7rem] font-black text-mid uppercase tracking-widest">Safety First</div>
                    <div className="font-display text-lg font-black text-dark">Secure Campus</div>
                  </div>
                </motion.div>

                {/* Floating Badge 2 */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 bg-white p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-blue/10 hidden md:flex"
                >
                  <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center text-blue">
                    <Sparkles size={28} />
                  </div>
                  <div>
                    <div className="text-[0.7rem] font-black text-mid uppercase tracking-widest">Environment</div>
                    <div className="font-display text-lg font-black text-dark">Modern Facilities</div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Background Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-pink/5 via-blue/5 to-yellow/5 rounded-full blur-3xl -z-10"></div>
            </Reveal>
          </div>

          {/* Content Side */}
          <div className="flex-1">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-blue/10 text-blue rounded-full px-4 py-1.5 text-[0.85rem] font-black uppercase tracking-widest mb-6">
                <Building2 size={16} /> Premium Infrastructure
              </div>
              <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-black leading-tight mb-8">
                A World-Class <span className="text-blue">Learning Environment</span>
              </h2>
              <p className="text-lg text-mid leading-relaxed mb-10">
                Our campus is more than just a building; it's a carefully designed ecosystem that inspires creativity, ensures safety, and promotes holistic development for every child.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Smart Classrooms', desc: 'Equipped with interactive digital boards.', icon: '🖥️' },
                  { title: 'Safe Play Zones', desc: 'Rubberized flooring for worry-free play.', icon: '🏃' },
                  { title: 'Art & Music Studio', desc: 'Dedicated spaces for creative expression.', icon: '🎨' },
                  { title: 'Hygienic Dining', desc: 'Clean and supervised meal areas.', icon: '🍎' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h4 className="font-display text-lg font-black text-dark mb-1">{item.title}</h4>
                      <p className="text-sm text-mid leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-bg rounded-2xl border-2 border-dashed border-blue/20 flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm shrink-0">
                  🏫
                </div>
                <div>
                  <div className="font-display text-xl font-black text-dark mb-1">Visit Our Campus</div>
                  <p className="text-sm text-mid">Experience the AJIS difference in person. Book a school tour today!</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusShowcase;
