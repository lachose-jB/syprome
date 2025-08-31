import React from 'react';
import Hero from '../components/Home/Hero';
import Stats from '../components/Home/Stats';
import ServicesPreview from '../components/Home/ServicesPreview';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <ServicesPreview />
    </div>
  );
};

export default Home;