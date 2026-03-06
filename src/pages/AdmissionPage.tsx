import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import Reveal from '../components/Reveal';
import FloatingShapes from '../components/FloatingShapes';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardList, 
  Phone, 
  School, 
  FileText, 
  PartyPopper, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Baby,
  Sun,
  Rocket,
  Star,
  ArrowRight,
  Info,
  Heart,
  Smile,
  GraduationCap,
  CalendarDays,
  PhoneCall
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const steps = [
    { id: 'child', label: 'Child Info', icon: <Baby size={18} /> },
    { id: 'parent', label: 'Parent Info', icon: <Heart size={18} /> },
    { id: 'docs', label: 'Documents', icon: <FileText size={18} /> },
    { id: 'review', label: 'Review', icon: <ClipboardList size={18} /> }
  ];

  const programs = [
    { id: 'playgroup', title: 'Play Group', age: '2-3 Years', emoji: '🧸', color: 'bg-pink/10 text-pink' },
    { id: 'nursery', title: 'Nursery', age: '3-4 Years', emoji: '🌻', color: 'bg-yellow/10 text-yellow-600' },
    { id: 'lkg', title: 'LKG', age: '4-5 Years', emoji: '🚀', color: 'bg-green/10 text-green' },
    { id: 'ukg', title: 'UKG', age: '5-6 Years', emoji: '⭐', color: 'bg-blue/10 text-blue' }
  ];

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 0));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="antialiased selection:bg-pink selection:text-white bg-bg min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-[120px] pb-14 px-[5vw] text-center relative overflow-hidden bg-gradient-to-br from-[#FFF8E0] via-[#FFE0F8] to-[#E6F4FF]">
        <FloatingShapes />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm font-bold text-mid shadow-sm mb-6">
            <Link to="/" className="text-blue hover:text-pink transition-colors">Home</Link>
            <span className="text-gray-300">›</span>
            <span>Admissions</span>
          </div>
          
          <Reveal>
            <h1 className="font-display text-[clamp(2.2rem,6vw,3.8rem)] font-black leading-tight mb-4">
              Admissions <span className="text-pink">2026-27</span> <br /> are Now <span className="text-green">Open!</span> 🎉
            </h1>
            <p className="text-mid text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Begin your child's most joyful journey yet. Secure a spot in our nurturing environment where every day is a new adventure.
            </p>
            <div className="inline-flex items-center gap-3 bg-pink text-white px-6 py-2 rounded-full font-bold text-sm animate-bounce shadow-lg">
              <Sparkles size={18} /> Limited Seats Available!
            </div>
          </Reveal>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg viewBox="0 0 1440 52" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
            <path d="M0,26 C480,52 960,0 1440,26 L1440,52 L0,52 Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 px-[5vw] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-pink/10 text-pink rounded-full px-4 py-1.5 text-xs font-bold mb-4">
                <ClipboardList size={14} /> How to Apply
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black mb-4">Simple <span className="text-pink">5-Step</span> Process</h2>
              <p className="text-mid max-w-xl mx-auto">From enquiry to the first day of school, we make the transition smooth for both parents and children.</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-pink via-blue to-green rounded-full opacity-20"></div>
            
            {[
              { icon: <ClipboardList />, title: 'Enquiry', desc: 'Fill the online form', color: 'bg-pink' },
              { icon: <PhoneCall />, title: 'Call', desc: 'We\'ll call you back', color: 'bg-yellow' },
              { icon: <School />, title: 'Visit', desc: 'Tour our campus', color: 'bg-blue' },
              { icon: <GraduationCap />, title: 'Register', desc: 'Submit documents', color: 'bg-green' },
              { icon: <PartyPopper />, title: 'Confirmed', desc: 'Welcome to AJIS!', color: 'bg-purple' }
            ].map((step, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="text-center relative z-10">
                  <div className={`w-20 h-20 ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform hover:scale-110`}>
                    {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-dark text-white rounded-full border-4 border-white flex items-center justify-center font-black text-xs">
                      {idx + 1}
                    </div>
                  </div>
                  <h4 className="font-display font-black text-dark mb-2">{step.title}</h4>
                  <p className="text-mid text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure & Eligibility */}
      <section className="py-20 px-[5vw] bg-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Fees */}
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 bg-blue/10 text-blue rounded-full px-4 py-1.5 text-xs font-bold mb-4">
                  <Sparkles size={14} /> Fee Structure
                </div>
                <h2 className="font-display text-3xl font-black mb-8">Transparent <span className="text-blue">Pricing</span></h2>
                
                <div className="space-y-4">
                  {programs.map((prog, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{prog.emoji}</span>
                        <div>
                          <h4 className="font-bold text-dark">{prog.title}</h4>
                          <p className="text-xs text-mid">{prog.age}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-mid uppercase font-bold tracking-wider">Starting from</p>
                        <p className="text-xl font-black text-blue">₹25,900<span className="text-xs font-normal text-mid">/yr</span></p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-mid italic flex items-start gap-2">
                  <CalendarDays size={16} className="shrink-0 mt-0.5" />
                  Note: Fees include registration, annual charges, and monthly tuition. Sibling discounts available.
                </p>
              </Reveal>
            </div>

            {/* Eligibility */}
            <div>
              <Reveal delay={200}>
                <div className="inline-flex items-center gap-2 bg-green/10 text-green rounded-full px-4 py-1.5 text-xs font-bold mb-4">
                  <CheckCircle2 size={14} /> Eligibility
                </div>
                <h2 className="font-display text-3xl font-black mb-8">Who Can <span className="text-green">Apply?</span></h2>
                
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                  <ul className="space-y-6">
                    {[
                      { title: 'Age Criteria', desc: 'Child should be 2+ years for Playgroup as of June 1st, 2026.' },
                      { title: 'Documents', desc: 'Birth certificate, Aadhar card, and 4 passport size photos are required.' },
                      { title: 'Interaction', desc: 'A friendly informal interaction with the child and parents.' },
                      { title: 'Health', desc: 'Updated vaccination records must be submitted at the time of joining.' }
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-green/10 text-green flex items-center justify-center shrink-0">
                          <CheckCircle2 size={18} />
                        </div>
                        <div>
                          <h4 className="font-bold text-dark mb-1">{item.title}</h4>
                          <p className="text-mid text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-10 btn-primary w-full justify-center">
                    Ask a Question <ArrowRight size={20} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section id="admission-form" className="py-20 px-[5vw] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-black mb-4">Admission <span className="text-pink">Enquiry</span></h2>
              <p className="text-mid">Fill the details below and we'll get back to you within 24 hours.</p>
            </Reveal>
          </div>

          <div className="bg-bg rounded-[2.5rem] p-8 md:p-12 shadow-inner border border-white">
            {/* Step Indicator */}
            {!formSubmitted && (
              <div className="flex items-center justify-between mb-12 max-w-md mx-auto">
                {steps.map((step, idx) => (
                  <div key={step.id} className="flex flex-col items-center gap-2 relative">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 z-10 ${
                      currentStep === idx ? 'bg-pink text-white scale-110 shadow-lg' : 
                      currentStep > idx ? 'bg-green text-white' : 'bg-white text-mid border-2 border-gray-200'
                    }`}>
                      {currentStep > idx ? <CheckCircle2 size={18} /> : step.icon}
                    </div>
                    <span className={`text-[0.65rem] font-black uppercase tracking-wider ${currentStep === idx ? 'text-pink' : 'text-mid opacity-60'}`}>
                      {step.label}
                    </span>
                    {idx < steps.length - 1 && (
                      <div className={`absolute top-5 left-full w-full h-0.5 -translate-x-2 ${currentStep > idx ? 'bg-green' : 'bg-gray-200'}`}></div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-24 h-24 bg-green/10 text-green rounded-full flex items-center justify-center mx-auto mb-8">
                    <PartyPopper size={48} />
                  </div>
                  <h3 className="font-display text-3xl font-black mb-4">Application Received!</h3>
                  <p className="text-mid text-lg mb-10 max-w-md mx-auto">
                    Thank you for choosing AJIS. Our admissions team will call you within 24 hours to schedule a campus visit.
                  </p>
                  <button onClick={() => setFormSubmitted(false)} className="btn-ghost">
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {currentStep === 0 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="field">
                          <label className="text-sm font-bold text-dark mb-2 block">Child's Full Name</label>
                          <input type="text" placeholder="e.g. Aryan Sharma" className="w-full bg-white rounded-2xl px-5 py-4 outline-none border-2 border-transparent focus:border-pink/30 shadow-sm transition-all" required />
                        </div>
                        <div className="field">
                          <label className="text-sm font-bold text-dark mb-2 block">Date of Birth</label>
                          <input type="date" className="w-full bg-white rounded-2xl px-5 py-4 outline-none border-2 border-transparent focus:border-pink/30 shadow-sm transition-all" required />
                        </div>
                      </div>
                      <div className="field">
                        <label className="text-sm font-bold text-dark mb-2 block">Select Program</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {programs.map(p => (
                            <button key={p.id} type="button" className="p-4 rounded-2xl bg-white border-2 border-transparent hover:border-pink/30 transition-all text-center group">
                              <span className="text-2xl block mb-1">{p.emoji}</span>
                              <span className="text-[0.65rem] font-black uppercase tracking-wider block">{p.title}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="field">
                          <label className="text-sm font-bold text-dark mb-2 block">Parent's Name</label>
                          <input type="text" placeholder="e.g. Rajesh Sharma" className="w-full bg-white rounded-2xl px-5 py-4 outline-none border-2 border-transparent focus:border-blue/30 shadow-sm transition-all" required />
                        </div>
                        <div className="field">
                          <label className="text-sm font-bold text-dark mb-2 block">Mobile Number</label>
                          <input type="tel" placeholder="+91 98765 43210" className="w-full bg-white rounded-2xl px-5 py-4 outline-none border-2 border-transparent focus:border-blue/30 shadow-sm transition-all" required />
                        </div>
                      </div>
                      <div className="field">
                        <label className="text-sm font-bold text-dark mb-2 block">Email Address</label>
                        <input type="email" placeholder="parent@example.com" className="w-full bg-white rounded-2xl px-5 py-4 outline-none border-2 border-transparent focus:border-blue/30 shadow-sm transition-all" required />
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <p className="text-sm text-mid mb-4">Please confirm you have the following documents ready for the campus visit:</p>
                      {[
                        'Birth Certificate (Original + Copy)',
                        'Child\'s Aadhar Card',
                        '4 Passport Size Photos',
                        'Parent\'s ID Proof'
                      ].map((doc, idx) => (
                        <label key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl cursor-pointer hover:bg-green/5 transition-colors">
                          <input type="checkbox" className="w-5 h-5 accent-green" />
                          <span className="text-sm font-bold text-dark">{doc}</span>
                        </label>
                      ))}
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-gray-200">
                        <h4 className="font-bold text-dark mb-4 flex items-center gap-2">
                          <Info size={18} className="text-blue" /> Summary
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <p className="text-mid">Child Name:</p><p className="font-bold text-dark">Aryan Sharma</p>
                          <p className="text-mid">Program:</p><p className="font-bold text-dark">Nursery</p>
                          <p className="text-mid">Parent Name:</p><p className="font-bold text-dark">Rajesh Sharma</p>
                        </div>
                      </div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" className="mt-1 w-5 h-5 accent-pink" required />
                        <span className="text-xs text-mid leading-relaxed">
                          I confirm that the information provided is correct and I agree to be contacted by the AJIS admissions team.
                        </span>
                      </label>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <button 
                      type="button" 
                      onClick={handleBack}
                      className={`flex items-center gap-2 font-bold text-mid hover:text-dark transition-colors ${currentStep === 0 ? 'invisible' : ''}`}
                    >
                      <ChevronLeft size={20} /> Back
                    </button>
                    
                    {currentStep === steps.length - 1 ? (
                      <button type="submit" className="btn-primary">
                        Submit Application <PartyPopper size={20} />
                      </button>
                    ) : (
                      <button type="button" onClick={handleNext} className="btn-primary">
                        Next Step <ChevronRight size={20} />
                      </button>
                    )}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdmissionPage;
