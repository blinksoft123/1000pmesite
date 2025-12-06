import React from 'react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import BackgroundAnimation from './components/BackgroundAnimation';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <ScrollToTop />
      <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden">
        {/* Global Background Animation */}
        <BackgroundAnimation />
        
        {/* Main Content Wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/process" element={<Process />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </MemoryRouter>
  );
};

export default App;