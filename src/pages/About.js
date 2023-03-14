import React from 'react';
import AboutPage from '../components/AboutPage';
import ContactBan from '../components/ContactBan';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ScrollToTop from '../components/ScrollToTop';

const About = () => (
  <>
    <ScrollToTop />
    <Nav />
    <AboutPage />
    <ContactBan />
    <Footer />
  </>
);

export default About;
