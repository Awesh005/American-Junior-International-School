import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import Reveal from '../components/Reveal';
import FloatingShapes from '../components/FloatingShapes';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Music, 
  BookOpen, 
  Bike, 
  Brain, 
  Sprout, 
  Dumbbell, 
  Puzzle, 
  Target, 
  Clock, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Lightbulb,
  ArrowUp,
  Star,
  Rocket
} from 'lucide-react';

const ActivitiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activities = [
    {
      id: 'art',
      icon: <Palette size={42} />,
      title: 'Art & Craft Studio',
      desc: 'Our Art & Craft sessions are the heartbeat of AJIS. Children paint, sculpt, collage, and create freely — developing fine motor skills, spatial awareness, and confidence.',
      tag: 'Activity 1',
      color: 'pink',
      bg: 'bg-[#FFF0F0]',
      benefits: ['Fine Motor Skills', 'Creative Thinking', 'Self Expression', 'Hand-Eye Coordination'],
      schedule: [
        { day: 'Mon', activity: 'Finger Painting', color: '#FF6B6B' },
        { day: 'Tue', activity: 'Clay Modelling', color: '#FFD93D' },
        { day: 'Wed', activity: 'Paper Crafts', color: '#4D96FF' },
        { day: 'Thu/Fri', activity: 'Free Projects', color: '#6BCB77' }
      ]
    },
    {
      id: 'music',
      icon: <Music size={42} />,
      title: 'Music & Dance',
      desc: 'Rhythm is the language every child is born speaking. We use songs, instruments, and free movement to develop coordination, memory, and emotional intelligence.',
      tag: 'Activity 2',
      color: 'orange',
      bg: 'bg-[#FFFAE0]',
      benefits: ['Rhythm & Timing', 'Body Awareness', 'Coordination', 'Emotional Expression'],
      schedule: [
        { day: 'Mon', activity: 'Action Songs', color: '#FFD93D' },
        { day: 'Wed', activity: 'Instruments', color: '#FF9F43' },
        { day: 'Fri', activity: 'Free Dance', color: '#FF6B6B' }
      ]
    },
    {
      id: 'story',
      icon: <BookOpen size={42} />,
      title: 'Storytelling & Reading',
      desc: 'Interactive storytelling sessions using puppets, big colourful books, and dramatic voices to captivate young listeners — building vocabulary and comprehension.',
      tag: 'Activity 3',
      color: 'blue',
      bg: 'bg-[#EBF3FF]',
      benefits: ['Vocabulary Growth', 'Active Listening', 'Imagination', 'Early Literacy'],
      schedule: [
        { day: 'Daily', activity: 'Read Aloud', color: '#4D96FF' },
        { day: 'Tue/Thu', activity: 'Puppet Theatre', color: '#C77DFF' },
        { day: 'Friday', activity: 'Child Narrations', color: '#6BCB77' }
      ]
    },
    {
      id: 'outdoor',
      icon: <Bike size={42} />,
      title: 'Outdoor Play & Sports',
      desc: 'Fresh air and sunshine are essential. Our spacious play area is equipped with slides, swings, and climbing frames for running, laughing, and exploring together.',
      tag: 'Activity 4',
      color: 'green',
      bg: 'bg-[#EDFFF0]',
      benefits: ['Physical Strength', 'Balance', 'Teamwork', 'Stress Relief'],
      schedule: [
        { day: 'Daily AM', activity: 'Free Play', color: '#6BCB77' },
        { day: 'Daily PM', activity: 'Group Games', color: '#4D96FF' },
        { day: 'Thu/Fri', activity: 'Sports Intro', color: '#FFD93D' }
      ]
    },
    {
      id: 'brain',
      icon: <Brain size={42} />,
      title: 'Brain Development Games',
      desc: 'Sharp, happy minds need the right challenges. We use puzzles, memory games, and logic challenges perfectly calibrated to each age group.',
      tag: 'Activity 5',
      color: 'purple',
      bg: 'bg-[#F3EEFF]',
      benefits: ['Problem Solving', 'Cognitive Growth', 'Number Sense', 'Concentration'],
      schedule: [
        { day: 'Mon/Wed', activity: 'Sorting Games', color: '#C77DFF' },
        { day: 'Tue/Thu', activity: 'Memory Matching', color: '#4D96FF' },
        { day: 'Friday', activity: 'Logic Challenges', color: '#6BCB77' }
      ]
    }
  ];

  const moreActivities = [
    { icon: '🌱', title: 'Nature Exploration', desc: 'Guided walks, leaf observation, and mini gardening to build environmental awareness.', color: 'teal', bg: 'bg-[#EDFFF0]' },
    { icon: '🤸', title: 'Yoga & Mindfulness', desc: 'Playful poses named after animals teach children to breathe, focus, and find calm.', color: 'orange', bg: 'bg-[#FFF0E6]' },
    { icon: '🧩', title: 'Puzzle & Logic Play', desc: 'Building persistence and spatial thinking through age-appropriate puzzle challenges.', color: 'purple', bg: 'bg-[#F3EEFF]' }
  ];

  const timetable = [
    { time: '9:00–9:30', activities: ['🌅 Morning Circle', '🌅 Morning Circle', '🌅 Morning Circle', '🌅 Morning Circle', '🌅 Morning Circle'] },
    { time: '9:30–10:15', activities: ['🎨 Art & Craft', '🔢 Brain Games', '🎵 Music & Dance', '📚 Storytelling', '🧩 Puzzle Play'] },
    { time: '10:15–10:45', activities: ['🍎 Snack Break', '🍎 Snack Break', '🍎 Snack Break', '🍎 Snack Break', '🍎 Snack Break'] },
    { time: '10:45–11:30', activities: ['📖 Literacy', '🎨 Art & Craft', '🔢 Maths Play', '🌱 Nature Explore', '🎵 Music & Dance'] },
    { time: '11:30–12:15', activities: ['🏃 Outdoor Play', '🏃 Outdoor Play', '🏃 Outdoor Play', '🏃 Outdoor Play', '🏃 Outdoor Play'] },
    { time: '12:15–1:00', activities: ['🍱 Lunch & Rest', '🍱 Lunch & Rest', '🍱 Lunch & Rest', '🍱 Lunch & Rest', '🍱 Lunch & Rest'] },
    { time: '1:00–1:45', activities: ['🧠 Brain Games', '📚 Story Time', '🤸 Yoga', '🎨 Free Art', '🌟 Show & Tell'] },
    { time: '1:45–2:00', activities: ['👋 Goodbye', '👋 Goodbye', '👋 Goodbye', '👋 Goodbye', '👋 Goodbye'] },
  ];

  return (
    <div className="antialiased selection:bg-pink selection:text-white bg-bg min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 px-[5vw] overflow-hidden text-center min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#FFF4D0] via-[#FFE8F8] to-[#E6F8FF]">
        <FloatingShapes />
        
        {/* Orbiting Icons Decoration */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-[500px] h-[500px] border-2 border-dashed border-pink/30 rounded-full relative"
          >
            {['🎨', '🎵', '📚', '🏃', '🧠', '🌱', '🤸', '🧩'].map((emoji, i) => (
              <div 
                key={i}
                className="absolute text-3xl"
                style={{ 
                  top: '50%', 
                  left: '50%', 
                  transform: `rotate(${i * 45}deg) translate(250px) rotate(-${i * 45}deg)` 
                }}
              >
                {emoji}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-[800px] relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-[0.85rem] font-bold text-mid shadow-sm mb-6">
              <Link to="/" className="text-blue hover:text-pink transition-colors">Home</Link>
              <span className="opacity-40">›</span>
              <span>Activities</span>
            </div>
            <h1 className="font-display text-[clamp(2.4rem,7vw,4.5rem)] font-black leading-tight mb-6">
              Every Day is a<br />
              <span className="text-pink">New</span> <span className="text-blue">Adventure</span> <span className="text-green">Here!</span>
            </h1>
            <p className="text-lg text-mid leading-relaxed max-w-[600px] mx-auto mb-8">
              8 enriching activities carefully designed to spark creativity, build skills, and fill every school day with joy, laughter, and discovery.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['🎨 Art', '🎵 Music', '📚 Stories', '🏃 Play', '🧠 Games', '🌱 Nature', '🤸 Yoga'].map(tag => (
                <span key={tag} className="bg-white border border-black/5 rounded-full px-4 py-1.5 text-[0.85rem] font-black shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Wave Transition */}
      <div className="w-full overflow-hidden leading-[0] bg-white">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-20 fill-white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* Detailed Activities */}
      {activities.map((act, idx) => (
        <section key={act.id} id={act.id} className={`py-24 px-[5vw] relative overflow-hidden ${idx % 2 === 0 ? 'bg-white' : 'bg-bg'}`}>
          <div className={`max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full">
              <Reveal className={idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}>
                <div className="relative group">
                  <div className={`absolute -inset-4 bg-${act.color} opacity-10 blur-2xl rounded-lg transition-all group-hover:opacity-20`}></div>
                  <div className="bg-white rounded-lg p-6 shadow-xl relative border-2 border-white overflow-hidden">
                    <div className={`aspect-[4/3] rounded-md flex items-center justify-center text-9xl ${act.bg}`}>
                      {act.id === 'art' ? '🎨' : act.id === 'music' ? '🎵' : act.id === 'story' ? '📚' : act.id === 'outdoor' ? '🏃' : '🧠'}
                    </div>
                    <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md rounded-full px-5 py-2 font-display font-black text-[0.85rem] shadow-sm flex items-center gap-2">
                      {act.title}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="flex-1">
              <Reveal className={idx % 2 === 0 ? 'reveal-right' : 'reveal-left'}>
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-[0.8rem] font-extrabold tracking-wider mb-4 ${act.bg} text-${act.color}`}>
                  {act.tag}
                </div>
                <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-black leading-tight mb-6">
                  {act.title.split(' ')[0]} <span className={`text-${act.color}`}>{act.title.split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="text-mid text-[1.05rem] leading-relaxed mb-8">{act.desc}</p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {act.benefits.map(ben => (
                    <span key={ben} className="bg-white border border-black/5 rounded-full px-4 py-2 text-[0.85rem] font-bold shadow-sm flex items-center gap-2">
                      <Check size={14} className={`text-${act.color}`} /> {ben}
                    </span>
                  ))}
                </div>

                <div className="bg-white rounded-md p-6 shadow-sm mb-10 border border-black/5">
                  <h4 className="font-display font-black text-[1rem] mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-mid" /> Activity Highlights
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {act.schedule.map(s => (
                      <div key={s.day} className="flex-1 min-w-[100px] rounded-lg p-3 text-center bg-bg">
                        <div className="font-black text-[0.8rem] mb-1 uppercase" style={{ color: s.color }}>{s.day}</div>
                        <div className="text-[0.75rem] font-bold text-mid">{s.activity}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* More Activities Grid */}
      <section className="py-24 px-[5vw] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 bg-[#E0FBF8] text-teal text-[0.8rem] font-extrabold tracking-wider mb-3">
                <Star size={16} /> Even More
              </div>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black mb-2">
                More to <span className="text-teal">Love</span>
              </h2>
              <p className="text-mid text-lg">Three more enriching activities that round out every child's day</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moreActivities.map((act, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className={`${act.bg} p-10 rounded-lg shadow-md h-full text-center flex flex-col items-center`}
                >
                  <div className="text-6xl mb-6 animate-wobble">{act.icon}</div>
                  <h3 className="font-display text-xl font-black mb-4">{act.title}</h3>
                  <p className="text-[0.95rem] text-mid leading-relaxed">{act.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Timetable */}
      <section id="timetable" className="py-24 px-[5vw] bg-bg">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 bg-[#E8F4FF] text-blue text-[0.8rem] font-extrabold tracking-wider mb-3">
                <Clock size={16} /> Weekly Schedule
              </div>
              <h2 className="font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black mb-2">
                A <span className="text-blue">Typical Week</span> at AJIS
              </h2>
              <p className="text-mid text-lg">Every day is packed with fun, learning, and growth</p>
            </Reveal>
          </div>

          <Reveal>
            <div className="overflow-x-auto rounded-lg shadow-xl border border-black/5">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-gradient-to-r from-blue to-purple text-white">
                    <th className="p-6 text-left font-display font-black text-lg">Time</th>
                    <th className="p-6 text-center font-display font-black text-lg">Mon</th>
                    <th className="p-6 text-center font-display font-black text-lg">Tue</th>
                    <th className="p-6 text-center font-display font-black text-lg">Wed</th>
                    <th className="p-6 text-center font-display font-black text-lg">Thu</th>
                    <th className="p-6 text-center font-display font-black text-lg">Fri</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {timetable.map((row, idx) => (
                    <tr key={idx} className="border-b border-black/5 hover:bg-blue/5 transition-colors">
                      <td className="p-5 font-bold text-dark bg-bg/50">{row.time}</td>
                      {row.activities.map((act, aidx) => (
                        <td key={aidx} className="p-5 text-center text-[0.85rem] font-bold text-mid">
                          {act}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-mid text-[0.85rem] mt-6 italic">
              * Schedule shown for LKG/UKG. Play Group and Nursery have shorter, adapted timetables.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Parent Tips */}
      <section className="py-24 px-[5vw] bg-gradient-to-br from-green via-teal to-blue relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-10%] left-[-5%] w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-[1000px] mx-auto relative z-10">
          <Reveal>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-black text-center mb-4">💡 Tips for Parents</h2>
            <p className="text-white/80 text-lg text-center mb-16">Simple ways to extend the learning magic at home</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🗣️', title: 'Talk About Their Day', desc: 'Ask "What was the most fun thing today?" — open-ended questions spark rich conversations.' },
              { icon: '🎨', title: 'Provide Art Supplies', desc: 'Keep crayons and paper at home. Let your child create freely without instructions.' },
              { icon: '📚', title: 'Read Together Daily', desc: 'Even 10 minutes of bedtime reading makes a profound difference to vocabulary.' },
              { icon: '🌱', title: 'Explore Nature', desc: 'Weekend walks and garden time extend the nature learning from school into everyday life.' },
            ].map((tip, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-8 h-full text-center">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h4 className="font-display text-lg font-black mb-3">{tip.title}</h4>
                  <p className="text-[0.88rem] text-white/90 leading-relaxed">{tip.desc}</p>
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
              Give Your Child a Day <span className="text-pink">Full of Wonder!</span> 🌈
            </h2>
            <p className="text-mid text-lg mb-10">Admissions are open for 2026–27. Book a school visit and see the activities in action!</p>
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

export default ActivitiesPage;
