import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import Reveal from '../components/Reveal';
import FloatingShapes from '../components/FloatingShapes';
import { ArrowLeft, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="antialiased selection:bg-pink selection:text-white bg-bg min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 px-[5vw] relative overflow-hidden">
        <FloatingShapes />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <Reveal>
            <div className="text-[10rem] md:text-[15rem] font-display font-black text-pink/10 leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
              404
            </div>
            <div className="text-8xl mb-8 animate-bounce">🎈</div>
            <h1 className="font-display text-4xl md:text-6xl font-black mb-6 text-dark leading-tight">
              Oh no! This page <br /> <span className="text-pink">floated away!</span>
            </h1>
            <p className="text-mid text-lg mb-12 max-w-md mx-auto leading-relaxed">
              We couldn't find the page you were looking for. Maybe it's playing hide and seek?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="btn-primary flex items-center gap-2">
                <Home size={20} /> Back to Home
              </Link>
              <button onClick={() => window.history.back()} className="btn-ghost flex items-center gap-2">
                <ArrowLeft size={20} /> Go Back
              </button>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
