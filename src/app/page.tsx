import ExperienceSection from '@/components/Molecules/ExperienceSection';
import HeroSection from '@/components/HeroSection/HeroSetion';
import React from 'react'

export default function Home() {
  return (
    <div className="font-sans">
      <HeroSection />
      <ExperienceSection />
    </div>
  );
}

