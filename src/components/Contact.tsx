import React from 'react';
import Reveal from './Reveal';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: <Phone size={20} />, title: 'Call Us', value: '+91 9263064058', sub: 'Mon-Sat, 8am-4pm', class: 'ci1' },
    { icon: <Mail size={20} />, title: 'Email Us', value: 'edgenie2025@gmail.com', sub: 'We reply within 24h', class: 'ci2' },
    { icon: <MapPin size={20} />, title: 'Visit Us', value: 'Argora - Kathal More Road', sub: 'Near SAI Apartment, Pundag, Ranchi', class: 'ci3' },
    { icon: <Clock size={20} />, title: 'Office Hours', value: '8:00 AM - 4:00 PM', sub: 'Sunday Closed', class: 'ci4' },
  ];

  return (
    <section id="contact" className="py-[90px] px-[5vw] bg-[#F9FAFB]">
      <div className="inner max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <Reveal>
            <div className="sec-label inline-flex items-center gap-1.5 rounded-full px-4 py-1.1 text-[0.8rem] font-extrabold tracking-wider mb-2.8 bg-[#EBF3FF] text-blue">
              👋 Contact Us
            </div>
            <h2 className="section-title font-display text-[clamp(1.7rem,4vw,2.6rem)] font-black text-center mb-2 leading-tight">
              Get in <span className="text-blue">Touch</span>
            </h2>
            <p className="section-sub text-center text-mid text-[1.05rem] mb-14">
              Have questions? We'd love to hear from you!
            </p>
          </Reveal>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="contact-info-cards grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contactInfo.map((info, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="contact-card p-6 bg-white rounded-2xl soft-shadow border border-black/5 hover:border-blue/20 transition-all">
                  <div className={`contact-icon w-11 h-11 rounded-xl grid place-items-center mb-4 ${info.class}`}>
                    {info.icon}
                  </div>
                  <h4 className="font-display text-[0.9rem] font-extrabold text-mid mb-1 uppercase tracking-wider">{info.title}</h4>
                  <div className="font-bold text-[1.05rem] mb-1">{info.value}</div>
                  <div className="text-[0.82rem] text-mid">{info.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="map-wrap h-full min-h-[350px] bg-white rounded-[30px] p-4 soft-shadow border border-black/5 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.687443653457!2d72.6144863!3d22.9617342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e870026e64987%3A0x4ytgnQWh14a6Niga8!2sAmerican%20Junior%20International%20School!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full rounded-[20px] border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AJIS Location"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        .ci1{background:#FFE8E8;color:#FF4D4D;} .ci2{background:#E8F3FF;color:#4D9FFF;}
        .ci3{background:#E8FFF0;color:#4DFF88;} .ci4{background:#FFF8E8;color:#FFB84D;}
      `}</style>
    </section>
  );
};

export default Contact;
