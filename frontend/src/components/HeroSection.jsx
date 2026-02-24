import React from 'react';
import { Shield, AlertTriangle, Scan } from 'lucide-react';

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open('https://NoMoreScamCalls.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/30820142/pexels-photo-30820142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`
        }}
      >
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Hazard Stripe Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 hazard-stripe"></div>

      {/* Scanning Line Effect */}
      <div className="scan-line"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-paper/80 border border-zinc-800 mb-8 fade-in-up" data-testid="hero-badge">
            <div className="danger-dot"></div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
              Active Threat Detection
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title font-heading font-extrabold text-white tracking-tight leading-tight mb-6 fade-in-up-delay-1" data-testid="hero-title">
            <span className="block">Stop Dangerous</span>
            <span className="block text-cyber-yellow">Text Messages</span>
            <span className="block">Before They Strike</span>
          </h1>

          {/* Tagline */}
          <p className="font-heading text-lg sm:text-xl text-cyber-danger font-semibold tracking-wide mb-6 fade-in-up-delay-2" data-testid="hero-tagline">
            <AlertTriangle className="inline w-5 h-5 mr-2" />
            Danger – Open At Own Risk!
          </p>

          {/* Description */}
          <p className="font-body text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 fade-in-up-delay-3" data-testid="hero-description">
            Textinaters marks suspicious text messages before you accidentally open them. 
            Protect your family from scams, phishing, and malicious links.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up-delay-4" data-testid="hero-cta-group">
            <button
              onClick={handleCTAClick}
              className="cta-primary pulse-danger px-8 py-4 font-heading text-base sm:text-lg uppercase tracking-wide flex items-center gap-2"
              data-testid="hero-cta-primary"
            >
              <Shield className="w-5 h-5" />
              Get Protected Now
            </button>
            <a
              href="#how-it-works"
              className="cta-secondary px-8 py-4 font-heading text-base sm:text-lg uppercase tracking-wide flex items-center gap-2"
              data-testid="hero-cta-secondary"
            >
              <Scan className="w-5 h-5" />
              See How It Works
            </a>
          </div>

          {/* Floating Message Bubbles - only on 2xl+ screens to avoid text overlap */}
          <div className="hidden 2xl:block absolute top-32 left-8 float" style={{ animationDelay: '0s' }}>
            <MessageBubble danger text="Your bank account has been compromised! Click here immediately..." />
          </div>
          <div className="hidden 2xl:block absolute top-48 right-8 float" style={{ animationDelay: '1s' }}>
            <MessageBubble danger text="You've won $10,000! Claim now before it expires..." />
          </div>
          <div className="hidden 2xl:block absolute bottom-48 left-12 float" style={{ animationDelay: '2s' }}>
            <MessageBubble safe text="Mom: Dinner at 7pm tonight?" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-black to-transparent"></div>
    </section>
  );
};

const MessageBubble = ({ danger, text }) => (
  <div className={`message-bubble ${danger ? 'danger' : 'safe'}`} data-testid={`message-bubble-${danger ? 'danger' : 'safe'}`}>
    {danger && (
      <div className="absolute -top-1 -right-1 danger-dot"></div>
    )}
    <p className="font-body text-sm text-zinc-300 line-clamp-2">{text}</p>
  </div>
);

export default HeroSection;
