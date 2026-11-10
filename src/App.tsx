import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/common/CustomCursor';
import { GeometricGrid } from './components/common/GeometricGrid';
import { TextMarquee } from './components/common/TextMarquee';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ApproachSection } from './components/sections/ApproachSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'portfolio', 'approach', 'why-us', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-dark text-white selection:bg-brand-neon selection:text-black overflow-x-hidden">
      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Dynamic Background Perspective Grid & Lights */}
      <GeometricGrid />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Website Sections */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />

        {/* Dynamic Editorial Ticker Marquee */}
        <TextMarquee direction="left" speed={30} />

        <AboutSection />
        <ServicesSection />
        <PortfolioSection />

        {/* Reverse Marquee Accent */}
        <TextMarquee
          direction="right"
          speed={35}
          items={[
            'CREATIVE STRATEGY',
            'PREMIUM BRANDING',
            'POWERFUL IDEAS',
            'UNCOMPROMISING AESTHETICS',
            'INSIGHT COMPANY',
          ]}
        />

        <ApproachSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

