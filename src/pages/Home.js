import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactBan from '../components/ContactBan';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Nav from '../components/Nav';
import ProjectsSection from '../components/ProjectsSection';
import ScrollToTop from '../components/ScrollToTop';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home = () => (
  <div>
    <ScrollToTop />
    <Nav />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <TestimonialsSection />
    <ContactBan />
    <Footer />
  </div>
);

export default Home;
