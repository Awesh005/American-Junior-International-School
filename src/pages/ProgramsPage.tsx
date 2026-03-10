import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import Reveal from '../components/Reveal';
import FloatingShapes from '../components/FloatingShapes';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  MessageCircle, 
  ArrowUp, 
  Check, 
  Minus, 
  ChevronDown,
  GraduationCap,
  Sparkles,
  BookOpen,
  Palette,
  Music,
  Bike,
  Utensils,
  Target,
  Brain,
  Users,
  ShieldCheck,
  Languages,
  Binary,
  Microscope,
  Award,
  Clock
} from 'lucide-react';

const ProgramsPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const sections = ['overview', 'playgroup', 'nursery', 'lkg', 'ukg', 'compare', 'faq'];
      let current = 'overview';
      
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 160) {
          current = id;
        }
      }
      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const programs = [
    {
      id: 'playgroup',
      emoji: '🧸',
      title: 'Play Group',
      age: '2 – 3 years',
      desc: 'Our gentlest introduction to school life. Pure play, sensory joy, and the first friendships.',
      tags: ['Sensory Play', 'Motor Skills', 'Social Intro'],
      color: 'pink',
      theme: 'from-[#FF8E8E] to-[#FF5252]',
      bg: 'bg-[#FFF0F0]',
      features: [
        { icon: '🎭', title: 'Sensory Play', desc: 'Sand, water, clay, and textures — exploring the world through all five senses.' },
        { icon: '🏃', title: 'Gross Motor Development', desc: 'Climbing, crawling, jumping — building strong bodies through joyful movement.' },
        { icon: '🗣️', title: 'Language & Communication', desc: 'Songs, rhymes, and storytime to spark early language skills naturally.' },
        { icon: '🤝', title: 'Social Introduction', desc: 'First friendships, sharing, and learning to be part of a caring group.' }
      ],
      schedule: [
        { day: 'Mon', activity: 'Sensory Play', bg: '#FFE8E8', text: '#FF6B6B' },
        { day: 'Tue', activity: 'Art & Craft', bg: '#FFF8DC', text: '#B8860B' },
        { day: 'Wed', activity: 'Music Time', bg: '#EDFFF0', text: '#2E8B57' },
        { day: 'Thu', activity: 'Outdoor Play', bg: '#EBF3FF', text: '#4D96FF' },
        { day: 'Fri', activity: 'Story Time', bg: '#F3EEFF', text: '#C77DFF' }
      ]
    },
    {
      id: 'nursery',
      emoji: '🌻',
      title: 'Nursery',
      age: '3 – 4 years',
      desc: 'Language blooms, numbers come alive, and curiosity leads the way every single day.',
      tags: ['Language', 'Numbers', 'Creativity'],
      color: 'orange',
      theme: 'from-[#FFE060] to-[#FFC300]',
      bg: 'bg-[#FFFAE0]',
      features: [
        { icon: '📖', title: 'Early Literacy', desc: 'Letter recognition, phonics fun, and a passion for picture books and storytelling.' },
        { icon: '🔢', title: 'Number Sense', desc: 'Counting, sorting, and pattern-making through games, songs, and colourful manipulatives.' },
        { icon: '🎨', title: 'Creative Expression', desc: 'Painting, drawing, and crafting to build fine motor skills and artistic confidence.' },
        { icon: '🌍', title: 'World Awareness', desc: 'Nature, animals, seasons, and community — building a curious, caring world view.' }
      ],
      schedule: [
        { day: 'Mon', activity: 'Phonics', bg: '#FFF8DC', text: '#B8860B' },
        { day: 'Tue', activity: 'Art Studio', bg: '#FFE8E8', text: '#FF6B6B' },
        { day: 'Wed', activity: 'Math Play', bg: '#EDFFF0', text: '#2E8B57' },
        { day: 'Thu', activity: 'Nature Walk', bg: '#EBF3FF', text: '#4D96FF' },
        { day: 'Fri', activity: 'Show & Tell', bg: '#F3EEFF', text: '#C77DFF' }
      ]
    },
    {
      id: 'lkg',
      emoji: '🚀',
      title: 'LKG',
      age: '4 – 5 years',
      desc: 'Reading readiness, number sense, and growing independence through hands-on projects.',
      tags: ['Reading Ready', 'Math Concepts', 'Independence'],
      color: 'green',
      theme: 'from-[#80D88C] to-[#3DB854]',
      bg: 'bg-[#EDFFF0]',
      features: [
        { icon: '📝', title: 'Reading Readiness', desc: 'Simple words, phonics, and the pure joy of reading their first sentence independently.' },
        { icon: '🔢', title: 'Early Mathematics', desc: 'Addition, subtraction with objects, shapes, measurement — maths made magical.' },
        { icon: '🧪', title: 'Science Exploration', desc: 'Simple experiments, nature journaling, and asking "Why?" about everything around them.' },
        { icon: '💪', title: 'Growing Independence', desc: 'Self-care routines, decision-making, and confidence to try new things.' }
      ],
      schedule: [
        { day: 'Mon', activity: 'Reading', bg: '#EDFFF0', text: '#2E8B57' },
        { day: 'Tue', activity: 'Math Lab', bg: '#EBF3FF', text: '#4D96FF' },
        { day: 'Wed', activity: 'Science Fun', bg: '#FFE8E8', text: '#FF6B6B' },
        { day: 'Thu', activity: 'Art & Craft', bg: '#FFF8DC', text: '#B8860B' },
        { day: 'Fri', activity: 'Group Project', bg: '#F3EEFF', text: '#C77DFF' }
      ]
    },
    {
      id: 'ukg',
      emoji: '⭐',
      title: 'UKG',
      age: '5 – 6 years',
      desc: 'School-readiness, critical thinking, and the confidence to take on big school with a smile.',
      tags: ['School Ready', 'Critical Thinking', 'Leadership'],
      color: 'blue',
      theme: 'from-[#70AAFF] to-[#2070E8]',
      bg: 'bg-[#EBF3FF]',
      features: [
        { icon: '📚', title: 'Full Literacy Foundation', desc: 'Reading sentences, writing words, and expressing ideas clearly and confidently.' },
        { icon: '🧮', title: 'Advanced Math Skills', desc: 'Two-digit numbers, simple sums, measurement, and mathematical thinking patterns.' },
        { icon: '🧠', title: 'Critical Thinking', desc: 'Problem-solving challenges, debates, and project-based learning to build sharp minds.' },
        { icon: '👑', title: 'Leadership & Confidence', desc: 'Class presentations, team leadership, and building the self-assurance to shine.' }
      ],
      schedule: [
        { day: 'Mon', activity: 'Literacy', bg: '#EBF3FF', text: '#4D96FF' },
        { day: 'Tue', activity: 'Maths', bg: '#EDFFF0', text: '#2E8B57' },
        { day: 'Wed', activity: 'Critical Thinking', bg: '#F3EEFF', text: '#C77DFF' },
        { day: 'Thu', activity: 'Presentation', bg: '#FFE8E8', text: '#FF6B6B' },
        { day: 'Fri', activity: 'Celebration', bg: '#FFF8DC', text: '#B8860B' }
      ]
    }
  ];

  const faqs = [
    { q: 'How do I know which program is right for my child?', a: 'Age is the primary guide — Play Group for 2–3 year olds, Nursery for 3–4, LKG for 4–5, and UKG for 5–6. That said, our team is happy to assess your child\'s readiness individually. Book a school visit and we\'ll help you decide together.' },
    { q: 'What are the school timings?', a: 'Play Group runs from 9:00 AM to 12:00 PM. Nursery is 9:00 AM to 1:00 PM. LKG and UKG run from 8:30 AM to 2:00 PM. Extended care options are available — please ask at the office.' },
    { q: 'Is there a trial period or orientation?', a: 'Yes! We offer a 3-day orientation for new children, especially for Play Group and Nursery. Parents are welcome to stay during the first two days to help their child settle in comfortably.' },
    { q: 'How do you communicate with parents?', a: 'We use a daily communication diary, WhatsApp updates for key moments, monthly newsletters, and formal parent-teacher meetings every term. You\'ll always know how your child is doing.' },
    { q: 'What is the student-to-teacher ratio?', a: 'We maintain a low ratio of 8:1 for Play Group, 10:1 for Nursery, and 12:1 for LKG and UKG. Each class also has a dedicated teaching assistant, ensuring every child gets personalised attention.' },
    { q: 'Are meals provided at school?', a: 'Children bring a healthy home-packed snack and lunch. We provide filtered water and a mid-morning healthy snack for all children. Our dining area is clean, supervised, and cheerful!' }
  ];

  return (
    <div className="antialiased selection:bg-pink selection:text-white bg-bg min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 px-[5vw] overflow-hidden text-center min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#FFF4D6] via-[#E6F0FF] to-[#F0FFE8]">
        <FloatingShapes />
        <div className="max-w-[800px] relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-[0.85rem] font-bold text-mid shadow-sm mb-6">
              <Link to="/" className="text-blue hover:text-pink transition-colors">Home</Link>
              <span className="opacity-40">›</span>
              <span>Programs</span>
            </div>
            <h1 className="font-display text-[clamp(2.2rem,6vw,4rem)] font-black leading-tight mb-6">
              Our <span className="text-pink">Learning</span> <span className="text-green">Programs</span>
            </h1>
            <p className="text-lg text-mid leading-relaxed max-w-[600px] mx-auto">
              Four carefully crafted programs for children aged 2–6, each designed to nurture the whole child — mind, heart, and body.
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

      {/* Sticky Tabs */}
      <div className="sticky top-[72px] z-[800] bg-white border-b-2 border-black/5 shadow-sm overflow-x-auto scrollbar-hide">
        <div className="max-w-[1100px] mx-auto flex">
          {[
            { id: 'overview', label: 'Overview', icon: '📋', color: '#FF6B6B' },
            { id: 'playgroup', label: 'Play Group', icon: '🧸', color: '#FF6B6B' },
            { id: 'nursery', label: 'Nursery', icon: '🌻', color: '#FF9F43' },
            { id: 'lkg', label: 'LKG', icon: '🚀', color: '#6BCB77' },
            { id: 'ukg', label: 'UKG', icon: '⭐', color: '#4D96FF' },
            { id: 'compare', label: 'Compare', icon: '⚖️', color: '#C77DFF' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`flex items-center gap-2 px-8 py-4.5 font-display font-black text-[1rem] whitespace-nowrap transition-all border-b-4 ${activeTab === tab.id ? 'border-current' : 'border-transparent opacity-60 hover:opacity-100'}`}
              style={{ color: activeTab === tab.id ? tab.color : '#5A5A7A' }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <section id="overview" className="py-24 px-[5vw] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 bg-[#FFE8E8] text-pink text-[0.8rem] font-extrabold tracking-wider mb-3">
                <BookOpen size={16} /> All Programs
              </div>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black mb-2">
                Choose the <span className="text-pink">Right Program</span>
              </h2>
              <p className="text-mid text-lg">Every program is play-based, activity-driven, and filled with love</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((prog, idx) => (
              <Reveal key={prog.id} delay={idx * 100}>
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => scrollToSection(prog.id)}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer h-full flex flex-col"
                >
                  <div className={`p-10 text-center relative overflow-hidden bg-gradient-to-br ${prog.theme}`}>
                    <div className="text-6xl mb-4 animate-wobble inline-block">{prog.emoji}</div>
                    <h3 className="font-display text-2xl font-black text-white mb-2">{prog.title}</h3>
                    <span className="bg-white/30 backdrop-blur-md border border-white/40 rounded-full px-4 py-1 text-[0.8rem] font-black text-white">
                      Age {prog.age}
                    </span>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-[0.95rem] text-mid leading-relaxed mb-6">{prog.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {prog.tags.map(tag => (
                        <span key={tag} className={`rounded-full px-3 py-1 text-[0.75rem] font-black ${prog.bg} ${prog.id === 'playgroup' ? 'text-pink' : prog.id === 'nursery' ? 'text-orange' : prog.id === 'lkg' ? 'text-green' : 'text-blue'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className={`mt-auto w-full py-3 rounded-full font-display font-black text-white text-[0.9rem] shadow-sm hover:shadow-md transition-all ${prog.id === 'playgroup' ? 'bg-pink' : prog.id === 'nursery' ? 'bg-orange' : prog.id === 'lkg' ? 'bg-green' : 'bg-blue'}`}>
                      Explore →
                    </button>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program Sections */}
      {programs.map((prog, idx) => (
        <section key={prog.id} id={prog.id} className={`py-24 px-[5vw] relative overflow-hidden ${idx % 2 === 0 ? 'bg-bg' : 'bg-white'}`}>
          <div className={`max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full">
              <Reveal className={idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}>
                <div className="relative group">
                  <div className={`absolute -inset-4 bg-gradient-to-br ${prog.theme} opacity-20 blur-2xl rounded-lg transition-all group-hover:opacity-30`}></div>
                  <div className="bg-white rounded-lg p-4 shadow-xl relative border-2 border-white overflow-hidden">
                    <div className={`aspect-[4/3] rounded-md flex items-center justify-center text-8xl bg-gradient-to-br ${prog.theme} bg-opacity-10`}>
                      {prog.emoji}
                    </div>
                    <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md rounded-full px-5 py-2 font-display font-black text-[0.85rem] shadow-sm flex items-center gap-2">
                      {prog.emoji} {prog.title} · Age {prog.age.split(' ')[0]}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="flex-1">
              <Reveal className={idx % 2 === 0 ? 'reveal-right' : 'reveal-left'}>
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-[0.8rem] font-extrabold tracking-wider mb-4 ${prog.bg} ${prog.id === 'playgroup' ? 'text-pink' : prog.id === 'nursery' ? 'text-orange' : prog.id === 'lkg' ? 'text-green' : 'text-blue'}`}>
                  {prog.emoji} {prog.title}
                </div>
                <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-tight mb-4">
                  {prog.id === 'playgroup' ? <>A Gentle First <span className="text-pink">Hello</span> to School</> : 
                   prog.id === 'nursery' ? <>Where <span className="text-orange">Language</span> & Numbers <span className="text-yellow-600">Bloom</span></> :
                   prog.id === 'lkg' ? <>Ready for <span className="text-green">Bigger</span> Adventures</> :
                   <>Ready to <span className="text-blue">Conquer</span> Big School!</>}
                </h2>
                <span className={`inline-block rounded-full px-4 py-1.5 text-[0.88rem] font-black mb-6 ${prog.bg} ${prog.id === 'playgroup' ? 'text-pink' : prog.id === 'nursery' ? 'text-orange' : prog.id === 'lkg' ? 'text-green' : 'text-blue'}`}>
                  {prog.id === 'playgroup' ? '👶' : prog.id === 'nursery' ? '🌱' : prog.id === 'lkg' ? '🚀' : '🎓'} Age {prog.age}
                </span>
                <p className="text-mid text-[1.05rem] leading-relaxed mb-8">{prog.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {prog.features.map((feat, fidx) => (
                    <motion.div 
                      key={fidx}
                      whileHover={{ x: 5 }}
                      className="bg-white p-5 rounded-md shadow-sm border border-black/5 flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-bg flex items-center justify-center text-xl shrink-0">
                        {feat.icon}
                      </div>
                      <div>
                        <h5 className="font-display font-black text-[0.95rem] mb-1">{feat.title}</h5>
                        <p className="text-[0.82rem] text-mid leading-tight">{feat.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-white rounded-md p-6 shadow-sm mb-10 border border-black/5">
                  <h4 className="font-display font-black text-[1rem] mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-mid" /> Daily Schedule Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {prog.schedule.map(s => (
                      <div key={s.day} className="flex-1 min-w-[80px] rounded-lg p-3 text-center" style={{ backgroundColor: s.bg }}>
                        <div className="font-black text-[0.8rem] mb-1 uppercase" style={{ color: s.text }}>{s.day}</div>
                        <div className="text-[0.7rem] font-bold opacity-80" style={{ color: s.text }}>{s.activity}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <motion.a 
                    href="#admission" 
                    whileHover={{ scale: 1.05, y: -3 }}
                    className={`btn-prog px-8 py-3.5 rounded-full font-display font-black text-white shadow-md hover:shadow-lg transition-all ${prog.id === 'playgroup' ? 'bg-pink' : prog.id === 'nursery' ? 'bg-orange' : prog.id === 'lkg' ? 'bg-green' : 'bg-blue'}`}
                  >
                    ✏️ Enroll Now
                  </motion.a>
                  <motion.a 
                    href="#contact" 
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="px-8 py-3.5 rounded-full border-[2.5px] border-dark font-display font-black text-dark hover:bg-dark hover:text-white transition-all"
                  >
                    📞 Ask a Question
                  </motion.a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Comparison Table */}
      <section id="compare" className="py-24 px-[5vw] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 bg-[#F3EEFF] text-purple text-[0.8rem] font-extrabold tracking-wider mb-3">
                <Award size={16} /> Compare Programs
              </div>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black mb-2">
                Find the <span className="text-purple">Perfect Fit</span>
              </h2>
              <p className="text-mid text-lg">Not sure which program? This comparison helps you choose</p>
            </Reveal>
          </div>

          <Reveal>
            <div className="overflow-x-auto rounded-lg shadow-lg border border-black/5">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-gradient-to-r from-pink to-orange text-white">
                    <th className="p-6 text-left font-display font-black text-lg">Feature</th>
                    <th className="p-6 text-center font-display font-black text-lg">🧸 Play Group</th>
                    <th className="p-6 text-center font-display font-black text-lg">🌻 Nursery</th>
                    <th className="p-6 text-center font-display font-black text-lg">🚀 LKG</th>
                    <th className="p-6 text-center font-display font-black text-lg">⭐ UKG</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    { f: '👶 Age Group', v: ['2–3 yrs', '3–4 yrs', '4–5 yrs', '5–6 yrs'] },
                    { f: '⏰ Daily Hours', v: ['3 hrs', '4 hrs', '5 hrs', '6 hrs'] },
                    { f: '🎭 Sensory Play', v: [true, true, true, true] },
                    { f: '📖 Early Literacy', v: [false, true, true, true] },
                    { f: '🔢 Math Concepts', v: [false, 'Basic', true, 'Advanced'] },
                    { f: '🧪 Science Activities', v: [false, false, true, true] },
                    { f: '🖥️ Smart Board Use', v: [false, 'Intro', true, true] },
                    { f: '🎨 Art & Craft', v: [true, true, true, true] },
                    { f: '🏃 Outdoor Play', v: [true, true, true, true] },
                    { f: '🧠 Critical Thinking', v: [false, false, 'Basic', true] },
                    { f: '📊 Progress Reports', v: ['Monthly', 'Monthly', 'Fortnightly', 'Weekly'] },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-black/5 hover:bg-pink/5 transition-colors">
                      <td className="p-5 font-bold text-dark">{row.f}</td>
                      {row.v.map((val, vidx) => (
                        <td key={vidx} className="p-5 text-center font-bold text-mid">
                          {val === true ? <Check className="text-green mx-auto" /> : 
                           val === false ? <Minus className="text-black/20 mx-auto" /> : 
                           val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-[5vw] bg-gradient-to-br from-[#FFF8E0] to-[#EEF5FF]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 bg-[#E8F4FF] text-blue text-[0.8rem] font-extrabold tracking-wider mb-3">
                <MessageCircle size={16} /> FAQ
              </div>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black mb-2">
                Parents <span className="text-blue">Ask</span>
              </h2>
              <p className="text-mid text-lg">Answers to the most common questions about our programs</p>
            </Reveal>
          </div>

          <div className="max-w-[760px] mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className={`bg-white rounded-md overflow-hidden shadow-sm border border-black/5 transition-all ${openFaq === idx ? 'shadow-md' : ''}`}>
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 font-display font-black text-[1.05rem] text-dark"
                  >
                    {faq.q}
                    <ChevronDown className={`shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-mid leading-relaxed text-[0.95rem]">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-[5vw] bg-white text-center border-t-2 border-dashed border-pink/20">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-black mb-4">
              Ready to Find Your Child's <span className="text-pink">Perfect Program?</span> 🎉
            </h2>
            <p className="text-mid text-lg mb-10">Limited seats available for 2026–27. Enquire today and secure your child's spot!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a 
                href="#admission" 
                whileHover={{ scale: 1.05, y: -4 }}
                className="btn-primary"
              >
                <Rocket size={20} /> Apply Now
              </motion.a>
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05, y: -4 }}
                className="btn-ghost"
              >
                <MessageCircle size={20} /> Book a School Tour
              </motion.a>
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
          href="https://wa.me/919263064058" 
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

export default ProgramsPage;
