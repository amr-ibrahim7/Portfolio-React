import React from 'react';
import ContactPage from '../components/ContactPage';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Nav from '../components/Nav';
import ScrollToTop from '../components/ScrollToTop';

const Contact = () => (
  <>
    <ScrollToTop />
    <Nav />
    <ContactPage />
    <Map />
    <Footer />
  </>
);

export default Contact;
