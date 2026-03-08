import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import NMSCTeaser from '../components/NMSCTeaser';
import HowItWorksSection from '../components/HowItWorksSection';
import ProtectionSection from '../components/ProtectionSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-cyber-black" data-testid="landing-page">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <NMSCTeaser />
      <HowItWorksSection />
      <ProtectionSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default LandingPage;
