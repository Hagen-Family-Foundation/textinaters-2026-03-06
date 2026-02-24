import React from 'react';
import { Scan, Shield, AlertTriangle, Zap, Lock, Eye } from 'lucide-react';

const features = [
  {
    icon: Scan,
    title: 'Real-Time Scanning',
    description: 'Our Textinater bots continuously scan incoming messages, identifying threats before you even see them.',
    highlight: true
  },
  {
    icon: AlertTriangle,
    title: 'Danger Marking',
    description: 'Suspicious messages are marked with a red dot indicator, clearly showing which texts to avoid opening.',
    highlight: false
  },
  {
    icon: Shield,
    title: 'Family Protection',
    description: 'Shield children from inappropriate content and protect grandparents from purchase-triggering scam texts.',
    highlight: false
  },
  {
    icon: Zap,
    title: 'Instant Alerts',
    description: 'Get notified immediately when a dangerous message is detected on any protected device.',
    highlight: false
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your messages stay private. We only scan for threats without reading or storing your personal conversations.',
    highlight: false
  },
  {
    icon: Eye,
    title: 'Threat Intelligence',
    description: 'Powered by constantly updated threat databases that know the latest scam patterns and phishing tactics.',
    highlight: false
  }
];

const FeaturesSection = () => {
  return (
    <section 
      id="features" 
      className="relative py-24 sm:py-32 bg-cyber-black"
      data-testid="features-section"
    >
      {/* Section Divider */}
      <div className="section-divider mb-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-cyber-yellow uppercase tracking-widest" data-testid="features-label">
            [ CORE CAPABILITIES ]
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tighter mt-4 mb-6" data-testid="features-title">
            Your Digital <span className="text-cyber-yellow">Bodyguards</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto" data-testid="features-description">
            Textinater bots patrol your messages 24/7, hunting down scams, phishing attempts, 
            and malicious links before they can cause harm.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="features-grid">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <div 
      className={`glass-card feature-card p-6 sm:p-8 relative ${
        feature.highlight ? 'border-cyber-yellow' : ''
      }`}
      data-testid={`feature-card-${index}`}
    >
      {/* Highlight Badge */}
      {feature.highlight && (
        <div className="absolute -top-3 left-6 px-3 py-1 bg-cyber-yellow">
          <span className="font-mono text-xs text-black uppercase tracking-wider">Core Feature</span>
        </div>
      )}

      {/* Icon */}
      <div className={`w-12 h-12 flex items-center justify-center mb-6 ${
        feature.highlight ? 'bg-cyber-yellow' : 'bg-zinc-900 border border-zinc-800'
      }`}>
        <Icon className={`w-6 h-6 ${feature.highlight ? 'text-black' : 'text-cyber-yellow'}`} />
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-xl text-white uppercase tracking-tight mb-3" data-testid={`feature-title-${index}`}>
        {feature.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-zinc-400 leading-relaxed" data-testid={`feature-description-${index}`}>
        {feature.description}
      </p>

      {/* Tracing beam effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px tracing-beam"></div>
    </div>
  );
};

export default FeaturesSection;
