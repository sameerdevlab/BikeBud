import React from 'react';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import TestimonialsSection from '../sections/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;