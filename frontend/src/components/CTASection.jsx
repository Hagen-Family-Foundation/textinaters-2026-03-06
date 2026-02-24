import React from 'react';
import { Shield, ArrowRight, AlertTriangle } from 'lucide-react';

const CTASection = () => {
  const handleCTAClick = () => {
    window.open('https://NoMoreScamCalls.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      className="relative py-24 sm:py-32 overflow-hidden"
      data-testid="cta-section"
    >
      {/* Hazard Stripe Background */}
      <div className="absolute inset-0 hazard-stripe opacity-10"></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-cyber-black/90"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Warning Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-danger/20 border border-cyber-danger mb-8" data-testid="cta-warning-badge">
          <AlertTriangle className="w-4 h-4 text-cyber-danger" />
          <span className="font-mono text-xs text-cyber-danger uppercase tracking-wider">
            Your Family May Be At Risk
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6" data-testid="cta-title">
          Don't Wait Until<br />
          <span className="text-cyber-yellow">It's Too Late</span>
        </h2>

        {/* Description */}
        <p className="font-body text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10" data-testid="cta-description">
          Every day, millions of scam texts are sent. One wrong tap could cost you 
          thousands or expose your family to dangerous content. Get protected now.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleCTAClick}
          className="cta-primary pulse-danger px-10 py-5 font-heading text-lg sm:text-xl uppercase tracking-wide inline-flex items-center gap-3 group"
          data-testid="cta-main-button"
        >
          <Shield className="w-6 h-6" />
          Get Protected Now
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12" data-testid="trust-indicators">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="font-body text-sm text-zinc-500">No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="font-body text-sm text-zinc-500">Setup in 2 Minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="font-body text-sm text-zinc-500">Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
