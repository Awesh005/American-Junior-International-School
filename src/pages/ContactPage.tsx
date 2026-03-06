import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import Reveal from '../components/Reveal';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  User, 
  AtSign, 
  PhoneCall,
  CheckCircle2,
  Sparkles,
  Smile,
  Heart,
  PartyPopper,
  Handshake
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <PhoneCall className="text-pink" />,
      title: 'Call Us',
      details: ['+91 97592 42134'],
      color: 'bg-pink/10'
    },
    {
      icon: <Mail className="text-blue" />,
      title: 'Email Us',
      details: ['edgenie2025@gmail.com'],
      color: 'bg-blue/10'
    },
    {
      icon: <MapPin className="text-green" />,
      title: 'Visit Us',
      details: ['Argora-Kathal More Road, Near Sai Apartment.'],
      color: 'bg-green/10'
    },
    {
      icon: <Clock className="text-purple" />,
      title: 'Office Hours',
      details: ['Mon - Fri: 8:00 AM - 4:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
      color: 'bg-purple/10'
    }
  ];

  return (
    <div className="antialiased selection:bg-pink selection:text-white bg-bg min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-[120px] pb-14 px-[5vw] text-center relative overflow-hidden bg-gradient-to-br from-[#FFF8E0] via-[#E6F4FF] to-[#FFE8F8]">
        {/* Floating Elements */}
        <div className="absolute top-[15%] left-[10%] text-3xl animate-bounce">📞</div>
        <div className="absolute top-[20%] right-[12%] text-3xl animate-pulse">✉️</div>
        <div className="absolute bottom-[25%] left-[8%] text-3xl animate-bounce delay-300">📍</div>
        <div className="absolute bottom-[20%] right-[10%] text-3xl animate-pulse delay-500">👋</div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm font-bold text-mid shadow-sm mb-6">
            <Link to="/" className="text-blue hover:text-pink transition-colors">Home</Link>
            <span className="text-gray-300">›</span>
            <span>Contact</span>
          </div>
          
          <Reveal>
            <h1 className="font-display text-[clamp(2.2rem,6vw,3.8rem)] font-black leading-tight mb-4">
              Get in <span className="text-blue">Touch</span> 👋
            </h1>
            <p className="text-mid text-lg max-w-lg mx-auto leading-relaxed">
              Have questions? We're here to help! Reach out to us for admissions, tours, or general inquiries.
            </p>
          </Reveal>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full leading-[0]">
          <svg viewBox="0 0 1440 52" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
            <path d="M0,26 C480,52 960,0 1440,26 L1440,52 L0,52 Z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-[5vw] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Contact Info & Map */}
            <div className="space-y-12">
              <Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-2xl border border-gray-100 bg-bg/50 hover:bg-white hover:shadow-xl transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4`}>
                        {info.icon}
                      </div>
                      <h3 className="font-display font-black text-dark text-lg mb-2">{info.title}</h3>
                      {info.details.map((line, i) => (
                        <p key={i} className="text-mid text-sm leading-relaxed">{line}</p>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </Reveal>

              {/* Map Placeholder */}
              <Reveal delay={200}>
                <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white h-[350px] relative group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.123456789!2d78.0123456789!3d30.3123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzQ0LjQiTiA3OMKwMDAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="School Location"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold shadow-md flex items-center gap-2">
                    <MapPin size={14} className="text-pink" /> Find us in Ranchi
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Contact Form */}
            <Reveal delay={300}>
              <div className="bg-bg rounded-[2rem] p-8 md:p-12 shadow-inner border border-white relative overflow-hidden">
                {/* Decorative Shapes */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="mb-8">
                    <h2 className="font-display text-3xl font-black mb-2">Send a <span className="text-pink">Message</span> 💌</h2>
                    <p className="text-mid">Fill out the form below and our team will get back to you within 24 hours.</p>
                  </div>

                  {formState === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green/10 text-green rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="font-display text-2xl font-black mb-2">Message Sent!</h3>
                      <p className="text-mid mb-8">Thank you for reaching out. We'll be in touch soon.</p>
                      <button 
                        onClick={() => setFormState('idle')}
                        className="btn-primary"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-dark ml-1 flex items-center gap-2">
                            <User size={14} className="text-blue" /> Your Name
                          </label>
                          <input 
                            required
                            type="text" 
                            placeholder="John Doe"
                            className="w-full bg-white border-2 border-transparent focus:border-blue/30 rounded-2xl px-5 py-4 outline-none transition-all shadow-sm"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-dark ml-1 flex items-center gap-2">
                            <AtSign size={14} className="text-pink" /> Email Address
                          </label>
                          <input 
                            required
                            type="email" 
                            placeholder="john@example.com"
                            className="w-full bg-white border-2 border-transparent focus:border-pink/30 rounded-2xl px-5 py-4 outline-none transition-all shadow-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-dark ml-1 flex items-center gap-2">
                          <PhoneCall size={14} className="text-green" /> Phone Number
                        </label>
                        <input 
                          required
                          type="tel" 
                          placeholder="+91 98765 43210"
                          className="w-full bg-white border-2 border-transparent focus:border-green/30 rounded-2xl px-5 py-4 outline-none transition-all shadow-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-dark ml-1 flex items-center gap-2">
                          <MessageSquare size={14} className="text-purple" /> Your Message
                        </label>
                        <textarea 
                          required
                          rows={4}
                          placeholder="How can we help you today?"
                          className="w-full bg-white border-2 border-transparent focus:border-purple/30 rounded-2xl px-5 py-4 outline-none transition-all shadow-sm resize-none"
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={formState === 'submitting'}
                        className="w-full btn-primary justify-center py-5 text-lg group"
                      >
                        {formState === 'submitting' ? (
                          <span className="flex items-center gap-2">
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Preview or Quick Links */}
      <section className="py-20 px-[5vw] bg-bg">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-blue/10 text-blue rounded-full px-4 py-1.5 text-xs font-bold mb-6">
              <Sparkles size={14} /> Quick Help
            </div>
            <h2 className="font-display text-3xl font-black mb-10">Common Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                { q: 'What are the school timings?', a: 'Our school runs from 8:30 AM to 1:30 PM for Junior KG and up to 12:30 PM for Nursery.' },
                { q: 'Is transportation available?', a: 'Yes, we provide safe and GPS-tracked bus facilities across major routes in the city.' },
                { q: 'What is the teacher-student ratio?', a: 'We maintain a healthy 1:15 ratio to ensure personalized attention for every child.' },
                { q: 'Do you offer a trial class?', a: 'Absolutely! We encourage parents to book a trial session to see our teaching methods in action.' }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
                  <h4 className="font-bold text-dark mb-2">{faq.q}</h4>
                  <p className="text-mid text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
