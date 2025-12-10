import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Collections from '../components/Collections';
import SchoolLeaversPromo from '../components/SchoolLeaversPromo';
import CauseSection from '../components/CauseSection';
import TestimonialSlider from '../components/TestimonialSlider';
import TrustBadges from '../components/TrustBadges';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Highlights />
      <Collections />
      <SchoolLeaversPromo />
      <CauseSection />
      <TestimonialSlider />
      <TrustBadges />
    </div>
  );
};

export default Home;