import React from 'react';
import { MessageSquare, Scan, AlertCircle, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Message Arrives',
    description: 'A new text message arrives on your protected device.'
  },
  {
    number: '02',
    icon: Scan,
    title: 'Bot Scans',
    description: 'Textinater bots instantly analyze the message content, links, and sender patterns.'
  },
  {
    number: '03',
    icon: AlertCircle,
    title: 'Threat Detected',
    description: 'If suspicious, the message gets marked with a red dot so you know to avoid it.'
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'You Stay Safe',
    description: 'You know exactly which messages are risky and can avoid opening them.'
  }
];

const HowItWorksSection = () => {
  return (
    <section 
      id="how-it-works" 
      className="relative py-24 sm:py-32 bg-cyber-paper"
      data-testid="how-it-works-section"
    >
      {/* Hazard stripe decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 hazard-stripe-dark"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-cyber-yellow uppercase tracking-widest" data-testid="how-it-works-label">
            [ THE PROCESS ]
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-4 mb-6" data-testid="how-it-works-title">
            How <span className="text-cyber-yellow">Textinaters</span> Work
          </h2>
          <p className="font-body text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto" data-testid="how-it-works-description">
            Our automated protection runs silently in the background, keeping you safe without any effort on your part.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-zinc-800 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="steps-grid">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Visual Demo */}
        <div className="mt-20 relative" data-testid="demo-container">
          <div className="glass-card p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Phone Mockup */}
              <div className="relative w-64 sm:w-72">
                <div className="bg-zinc-900 rounded-3xl p-4 border border-zinc-800">
                  {/* Screen */}
                  <div className="bg-cyber-black rounded-2xl p-4 space-y-3">
                    {/* Safe Message */}
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                      <p className="font-body text-xs text-zinc-500 mb-1">Mom</p>
                      <p className="font-body text-sm text-zinc-300">See you at dinner tonight!</p>
                    </div>
                    
                    {/* Danger Message */}
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 relative">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-body text-xs text-zinc-500">Unknown</p>
                        <div className="danger-dot" style={{ width: '8px', height: '8px' }}></div>
                      </div>
                      <p className="font-body text-sm text-zinc-300">URGENT: Your account has been...</p>
                    </div>

                    {/* Safe Message */}
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                      <p className="font-body text-xs text-zinc-500 mb-1">Work</p>
                      <p className="font-body text-sm text-zinc-300">Meeting moved to 3pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="font-heading font-bold text-2xl text-white tracking-tight mb-4">
                  Clear Visual Warnings
                </h3>
                <p className="font-body text-base text-zinc-400 mb-6">
                  Dangerous messages are instantly marked with a red dot indicator. 
                  You'll know at a glance which texts are safe and which ones to avoid.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                    <span className="font-body text-sm text-zinc-400">Safe Message</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="danger-dot" style={{ width: '12px', height: '12px' }}></div>
                    <span className="font-body text-sm text-cyber-danger">Danger Detected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index }) => {
  const Icon = step.icon;
  
  return (
    <div className="relative text-center" data-testid={`step-card-${index}`}>
      {/* Step Number */}
      <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-cyber-black border border-zinc-800 flex items-center justify-center">
        <span className="font-mono text-xs text-cyber-yellow">{step.number}</span>
        {/* Icon Circle */}
        <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-cyber-yellow flex items-center justify-center">
          <Icon className="w-5 h-5 text-black" />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-lg text-white tracking-tight mb-2" data-testid={`step-title-${index}`}>
        {step.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-zinc-400" data-testid={`step-description-${index}`}>
        {step.description}
      </p>
    </div>
  );
};

export default HowItWorksSection;
