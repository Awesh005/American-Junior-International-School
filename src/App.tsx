import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import AdmissionPage from './pages/AdmissionPage';
import NotFoundPage from './pages/NotFoundPage';
import MobileBottomNav from './components/MobileBottomNav';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow pb-20 lg:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <MobileBottomNav />
      </div>
    </Router>
  );
};

export default App;

