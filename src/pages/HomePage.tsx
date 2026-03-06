import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsStrip from '../components/StatsStrip';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Programs from '../components/Programs';
import Activities from '../components/Activities';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import AdmissionCTA from '../components/AdmissionCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const HomePage = () => {
  return (
    <div className="antialiased selection:bg-pink selection:text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <StatsStrip />
      <About />
      <WhyChooseUs />
      <Programs />
      <Activities />
      <Testimonials />
      <Gallery />
      <AdmissionCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
