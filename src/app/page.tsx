import ExperienceSection from '@/components/Molecules/ExperienceSection';
import HeroSection from '@/components/HeroSection/HeroSetion';
import React from 'react'
import TestimonalSection from '@/components/Molecules/TestimonalSection';

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <ExperienceSection />
      <TestimonalSection />
    </div>
  );
}

