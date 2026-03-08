import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
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
      <HowItWorksSection />
      <ProtectionSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default LandingPage;
