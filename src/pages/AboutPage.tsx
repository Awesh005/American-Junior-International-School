import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import Reveal from '../components/Reveal';
import FloatingShapes from '../components/FloatingShapes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  History, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Palette, 
  Users, 
  GraduationCap, 
  Monitor, 
  School, 
  BookOpen, 
  Music, 
  Bike, 
  Utensils,
  Rocket,
  MessageCircle,
  ArrowUp
} from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timeline = [
    { year: '2010', title: 'The Seed is Planted', desc: 'AJIS began as a small playgroup with just 12 children and 2 dedicated teachers, driven by the belief that every child deserves a joyful start.', icon: '🌱', color: 'from-pink to-orange' },
    { year: '2013', title: 'New Campus Opens', desc: 'Moved to our current, purpose-built campus on Argora-Kathal More Road with dedicated classrooms, an activity room, and outdoor play area.', icon: '🏫', color: 'from-blue to-purple' },
    { year: '2016', title: 'Nursery & KG Programs Added', desc: 'Expanded our curriculum to include Nursery, LKG and UKG, serving children from age 2 all the way to school readiness at age 6.', icon: '🎓', color: 'from-green to-teal' },
    { year: '2019', title: 'Smart Classrooms Installed', desc: 'Introduced interactive digital boards and tech-aided learning stations, blending the best of traditional and modern education.', icon: '🖥️', color: 'from-yellow to-orange' },
    { year: '2022', title: '500+ Happy Graduates', desc: 'Celebrated our 500th graduate milestone — children who went on to excel in primary schools across the city, carrying the AJIS spirit with them.', icon: '🌟', color: 'from-purple to-pink' },
    { year: '2026', title: 'Today & Beyond', desc: 'Admissions open for 2026-27! Growing stronger with new activities, upgraded facilities, and an ever-growing family of happy learners.', icon: '🚀', color: 'from-pink to-yellow' },
  ];

  const values = [
    { icon: <Heart className="text-pink" />, title: 'Love & Care', desc: 'Every interaction is rooted in warmth, kindness, and genuine affection for each child.', class: 'bg-[#FFF0F8] border-pink' },
    { icon: <Sparkles className="text-yellow-600" />, title: 'Curiosity', desc: 'We encourage children to ask questions, explore freely, and wonder about the world.', class: 'bg-[#FFFAE0] border-yellow' },
    { icon: <Target className="text-green" />, title: 'Growth', desc: 'We believe every child can grow — intellectually, emotionally, socially, and physically.', class: 'bg-[#EDFFF0] border-green' },
    { icon: <ShieldCheck className="text-blue" />, title: 'Safety', desc: 'A secure environment where children feel safe enough to take chances and learn from them.', class: 'bg-[#EBF3FF] border-blue' },
    { icon: <Palette className="text-purple" />, title: 'Creativity', desc: 'Art, music, movement — we give children space to express who they truly are.', class: 'bg-[#F3EEFF] border-purple' },
    { icon: <Users className="text-orange" />, title: 'Community', desc: 'Families, teachers, and children together — one big, loving school family.', class: 'bg-[#FFF0E6] border-orange' },
  ];

  const team = [
    { name: 'Mrs. Priya Mishra', role: 'Principal & Founder', desc: '15+ years in early childhood education. Her warmth and vision shaped everything AJIS stands for today.', icon: '👩‍💼', badge: '⭐', bg: 'from-[#FFE0F0] to-[#FFB0CC]', roleClass: 'bg-[#FFE8F0] text-pink' },
    { name: 'Ms. Anita Sharma', role: 'Head of Nursery & LKG', desc: 'A B.Ed specialist in early years, Anita brings creativity and boundless energy to every classroom session.', icon: '👩‍🏫', badge: '🎨', bg: 'from-[#E0F4FF] to-[#A8D8FF]', roleClass: 'bg-[#E8F0FF] text-blue' },
    { name: 'Mr. Rahul Kumar', role: 'Music & Movement Teacher', desc: 'Trained musician and movement therapist who believes rhythm and dance unlock a child\'s full potential.', icon: '👨‍🏫', badge: '🎵', bg: 'from-[#E0FFE8] to-[#A8F0B8]', roleClass: 'bg-[#E8FFE8] text-green' },
    { name: 'Ms. Sunita Devi', role: 'UKG & School Readiness', desc: 'Specialist in school-readiness programs, Sunita ensures every UKG child transitions to primary school with confidence.', icon: '👩‍🏫', badge: '🌱', bg: 'from-[#F0E0FF] to-[#D0A8FF]', roleClass: 'bg-[#F0E8FF] text-purple' },
  ];

  const infra = [
    { icon: <Monitor size={42} />, title: 'Smart Classrooms', desc: 'Interactive digital boards and tech-aided stations for engaging, modern learning.', bg: 'from-[#FFF0F0] to-[#FFD6D6]' },
    { icon: <Palette size={42} />, title: 'Art & Craft Studio', desc: 'A dedicated space for painting, sculpting, and all forms of creative expression.', bg: 'from-[#FFF8DC] to-[#FFE880]' },
    { icon: <Bike size={42} />, title: 'Outdoor Play Area', desc: 'Safe, shaded outdoor space with age-appropriate play equipment and activity zones.', bg: 'from-[#EDFFF0] to-[#C4F0CC]' },
    { icon: <BookOpen size={42} />, title: 'Mini Library', desc: 'Hundreds of colourful books, picture stories, and reading nooks for little bookworms.', bg: 'from-[#EBF3FF] to-[#C4D8FF]' },
    { icon: <Music size={42} />, title: 'Music Room', desc: 'Instruments, audio systems, and open space for music, dance, and rhythm activities.', bg: 'from-[#F3EEFF] to-[#D8BFFF]' },
    { icon: <Utensils size={42} />, title: 'Dining & Rest Area', desc: 'Clean, hygienic dining space and a cosy rest corner for afternoon nap time.', bg: 'from-[#FFF0E6] to-[#FFD4B0]' },
  ];

  return (
    <div className="antialiased selection:bg-pink selection:text-white bg-bg min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 px-[5vw] overflow-hidden text-center min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#FFF4D6] via-[#E6F0FF] to-[#FFE8F8]">
        <FloatingShapes />
        <div className="max-w-[800px] relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-[0.85rem] font-bold text-mid shadow-sm mb-6">
              <span className="text-blue">Home</span>
              <span className="opacity-40">›</span>
              <span>About Us</span>
            </div>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4rem)] font-black leading-tight mb-6">
              About <span className="text-pink">American</span> Junior <span className="text-blue">International</span> School
            </h1>
            <p className="text-lg text-mid leading-relaxed max-w-[600px] mx-auto">
              A nurturing haven where curious young minds discover the joy of learning, build lifelong friendships, and grow into confident, creative individuals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Wave Transition */}
      <div className="w-full overflow-hidden leading-[0] bg-white">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-20 fill-white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* Mission & Vision */}
      <section id="mission" className="py-24 px-[5vw] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 bg-[#FFE8E8] text-pink text-[0.8rem] font-extrabold tracking-wider mb-3">
                <Target size={16} /> Our Purpose
              </div>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black mb-2">
                Our <span className="text-pink">Mission</span> & <span className="text-blue">Vision</span>
              </h2>
              <p className="text-mid text-lg">The guiding principles behind everything we do</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
            <Reveal>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#FFF0F8] to-[#FFD6E8] border-2 border-[#FFB0CC] rounded-lg p-10 relative overflow-hidden h-full"
              >
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="font-display text-2xl font-black text-pink mb-4">Our Mission</h3>
                <p className="text-mid leading-relaxed mb-6">
                  To provide a joyful, safe, and stimulating environment where every child aged 2–6 can explore, discover, and develop at their own pace.
                </p>
                <ul className="space-y-3">
                  {['Nurture creativity and natural curiosity', 'Build social-emotional intelligence', 'Foster a lifelong love of learning', 'Celebrate every child\'s unique strengths'].map(item => (
                    <li key={item} className="flex gap-3 text-[0.95rem] text-mid">
                      <span className="text-pink">✦</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>

            <Reveal delay={200}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#EBF3FF] to-[#C8DEFF] border-2 border-[#90B4FF] rounded-lg p-10 relative overflow-hidden h-full"
              >
                <div className="text-5xl mb-6">🔭</div>
                <h3 className="font-display text-2xl font-black text-blue mb-4">Our Vision</h3>
                <p className="text-mid leading-relaxed mb-6">
                  To be the most loved early childhood school in the region — where families trust us completely and children thrive with joy every single day.
                </p>
                <ul className="space-y-3">
                  {['World-class early childhood education', 'Deeply rooted in care and compassion', 'Bridging play and academic readiness', 'A community where every family belongs'].map(item => (
                    <li key={item} className="flex gap-3 text-[0.95rem] text-mid">
                      <span className="text-blue">✦</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section id="story" className="py-24 px-[5vw] bg-gradient-to-br from-[#FFF8E0] to-[#EEF5FF]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 bg-[#E8F4FF] text-blue text-[0.8rem] font-extrabold tracking-wider mb-3">
                <History size={16} /> Our Story
              </div>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black mb-2">
                How We <span className="text-blue">Grew</span>
              </h2>
              <p className="text-mid text-lg">From a small dream to a beloved school community</p>
            </Reveal>
          </div>

          <div className="relative max-w-[800px] mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink via-blue to-green rounded-full hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 w-full">
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className={`bg-white p-8 rounded-md shadow-sm border-l-4 ${idx % 2 === 0 ? 'border-pink' : 'border-blue md:border-l-0 md:border-r-4'} relative`}
                      >
                        <div className={`text-[0.8rem] font-black uppercase tracking-widest mb-2 ${idx % 2 === 0 ? 'text-pink' : 'text-blue'}`}>
                          {item.year}
                        </div>
                        <h4 className="font-display text-xl font-black mb-3">{item.title}</h4>
                        <p className="text-[0.9rem] text-mid leading-relaxed">{item.desc}</p>
                      </motion.div>
                    </div>
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg z-10 shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-24 px-[5vw] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 bg-[#F0FFF3] text-green text-[0.8rem] font-extrabold tracking-wider mb-3">
                <Sparkles size={16} /> Core Values
              </div>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black mb-2">
                What We <span className="text-green">Stand For</span>
              </h2>
              <p className="text-mid text-lg">The values we live and breathe every day at AJIS</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            {values.map((val, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className={`${val.class} p-8 rounded-md text-center border-b-4 transition-all duration-300 h-full`}
                >
                  <div className="text-4xl mb-4 flex justify-center">{val.icon}</div>
                  <h4 className="font-display text-lg font-black mb-3">{val.title}</h4>
                  <p className="text-[0.9rem] text-mid leading-relaxed">{val.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-24 px-[5vw] bg-gradient-to-br from-pink via-orange to-purple relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-10%] left-[-5%] w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-[900px] mx-auto relative z-10">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-black mb-4">🏆 Our Achievements</h2>
            <p className="text-white/80 text-lg mb-16">Numbers that tell our story of love and dedication</p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { num: '500+', label: 'Happy Graduates' },
              { num: '15+', label: 'Years of Excellence' },
              { num: '30+', label: 'Qualified Teachers' },
              { num: '98%', label: 'Parent Satisfaction' },
              { num: '8', label: 'Learning Activities' },
            ].map((stat, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-md p-6 h-full flex flex-col justify-center">
                  <div className="font-display text-4xl font-black mb-2">{stat.num}</div>
                  <div className="text-[0.85rem] font-bold text-white/90">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-24 px-[5vw] bg-bg">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 w-full">
              <Reveal>
                <div className="bg-gradient-to-br from-[#FFF8E0] to-[#E8F4FF] rounded-lg p-8 shadow-md border-2 border-white overflow-hidden">
                  <div className="aspect-[4/3] bg-white/50 rounded-md flex items-center justify-center text-8xl">
                    🎨
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="flex-1">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 bg-[#FFF8DC] text-orange text-[0.8rem] font-extrabold tracking-wider mb-4">
                  <GraduationCap size={16} /> Our Approach
                </div>
                <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.3rem)] font-black leading-tight mb-8">
                  How We <span className="text-orange">Teach</span> & <span className="text-green">Nurture</span>
                </h2>
                
                <div className="space-y-6">
                  {[
                    { num: '1', title: 'Play-Based Learning', desc: 'Children learn best when they\'re having fun. Every lesson is designed as an adventure — from sensory exploration to creative play.', color: 'bg-pink' },
                    { num: '2', title: 'Child-Centred Pace', desc: 'No two children are alike. Our teachers observe each child closely and adapt activities to match their unique development stage.', color: 'bg-blue' },
                    { num: '3', title: 'Social-Emotional First', desc: 'Before ABCs, we build empathy, resilience, and confidence. A happy child is a ready learner — that\'s our foundational belief.', color: 'bg-green' },
                    { num: '4', title: 'Parent Partnership', desc: 'We work hand-in-hand with families. Regular updates, open communication, and shared goals make the difference.', color: 'bg-orange' },
                  ].map((step, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex gap-6 bg-white p-6 rounded-md shadow-sm border border-black/5"
                    >
                      <div className={`${step.color} w-12 h-12 rounded-xl flex items-center justify-center text-white font-display text-xl font-black shrink-0`}>
                        {step.num}
                      </div>
                      <div>
                        <h5 className="font-display text-lg font-black mb-1">{step.title}</h5>
                        <p className="text-[0.88rem] text-mid leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" className="py-24 px-[5vw] bg-gradient-to-br from-[#FFF0F8] to-[#EEF5FF]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 bg-[#F0E8FF] text-purple text-[0.8rem] font-extrabold tracking-wider mb-3">
                <Users size={16} /> Our Team
              </div>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black mb-2">
                Meet the <span className="text-purple">Amazing Team</span>
              </h2>
              <p className="text-mid text-lg">Passionate educators who love what they do every single day</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1000px] mx-auto">
            {team.map((member, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 text-center h-full"
                >
                  <div className={`h-44 flex items-center justify-center text-7xl relative bg-gradient-to-br ${member.bg}`}>
                    {member.icon}
                    <div className={`absolute bottom-3 right-3 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm shadow-sm ${member.roleClass.split(' ')[0]}`}>
                      {member.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-lg font-black mb-2">{member.name}</h4>
                    <span className={`inline-block px-3 py-1 rounded-full text-[0.75rem] font-black mb-4 ${member.roleClass}`}>
                      {member.role}
                    </span>
                    <p className="text-[0.85rem] text-mid leading-relaxed">{member.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section id="infra" className="py-24 px-[5vw] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 bg-[#E8F3FF] text-blue text-[0.8rem] font-extrabold tracking-wider mb-3">
                <School size={16} /> Infrastructure
              </div>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black mb-2">
                World-Class <span className="text-blue">Facilities</span>
              </h2>
              <p className="text-mid text-lg">Spaces designed with children's safety, comfort, and joy in mind</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            {infra.map((item, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-gradient-to-br ${item.bg} p-10 rounded-md text-center shadow-sm hover:shadow-md transition-all h-full`}
                >
                  <div className="text-blue/70 mb-4 flex justify-center">{item.icon}</div>
                  <h4 className="font-display text-lg font-black mb-3">{item.title}</h4>
                  <p className="text-[0.85rem] text-mid leading-relaxed">{item.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 px-[5vw] bg-white text-center border-t-2 border-dashed border-pink/20">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-black mb-4">
              Ready to Join the <span className="text-pink">AJIS Family?</span> 🎉
            </h2>
            <p className="text-mid text-lg mb-10">Admissions are open for 2026–27. Limited seats — register your child today!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05, y: -4 }}>
                <Link 
                  to="/#admission" 
                  className="btn-primary"
                >
                  <Rocket size={20} /> Apply Now
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -4 }}>
                <Link 
                  to="/#contact" 
                  className="btn-ghost"
                >
                  <MessageCircle size={20} /> Book a School Visit
                </Link>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />

      {/* Float Buttons */}
      <div className="fixed bottom-8 right-8 z-[800] flex flex-col gap-4 items-end">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-13 h-13 rounded-full bg-white text-dark shadow-lg flex items-center justify-center border border-black/5"
        >
          <ArrowUp size={20} />
        </motion.button>
        <motion.a 
          href="https://wa.me/919759242134" 
          target="_blank"
          whileHover={{ scale: 1.1 }}
          className="w-13 h-13 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </motion.a>
      </div>
    </div>
  );
};

export default AboutPage;
