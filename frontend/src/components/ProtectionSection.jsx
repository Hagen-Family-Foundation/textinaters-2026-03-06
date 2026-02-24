import React from 'react';
import { Baby, Users, Heart, ShieldCheck } from 'lucide-react';

const protectionTargets = [
  {
    icon: Baby,
    title: 'Protect Your Children',
    subtitle: 'Like Little Janet',
    description: 'Shield young ones from inappropriate content, predatory messages, and harmful links that could expose them to adult material or scammers.',
    color: 'yellow'
  },
  {
    icon: Users,
    title: 'Protect Your Parents',
    subtitle: 'Grandma & Grandpa',
    description: 'Prevent elderly family members from falling victim to "urgent" bank scams, fake lottery wins, and messages designed to trigger instant purchases.',
    color: 'yellow'
  },
  {
    icon: Heart,
    title: 'Protect Yourself',
    subtitle: 'Peace of Mind',
    description: 'Stop worrying about accidentally clicking a malicious link. Know exactly which messages are safe before you even open them.',
    color: 'yellow'
  }
];

const ProtectionSection = () => {
  return (
    <section 
      id="protection" 
      className="relative py-24 sm:py-32 bg-cyber-black overflow-hidden"
      data-testid="protection-section"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/34247733/pexels-photo-34247733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-cyber-yellow uppercase tracking-widest" data-testid="protection-label">
            [ WHO WE PROTECT ]
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mt-4 mb-6" data-testid="protection-title">
            Protecting <span className="text-cyber-yellow">Your Entire Family</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto" data-testid="protection-description">
            From the youngest to the oldest, Textinaters stands guard between your loved ones 
            and the toxic world of modern messaging.
          </p>
        </div>

        {/* Protection Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" data-testid="protection-grid">
          {protectionTargets.map((target, index) => (
            <ProtectionCard key={index} target={target} index={index} />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="glass-card p-8" data-testid="stats-bar">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem value="2M+" label="Messages Scanned Daily" />
            <StatItem value="99.7%" label="Threat Detection Rate" />
            <StatItem value="50K+" label="Families Protected" />
            <StatItem value="24/7" label="Active Monitoring" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProtectionCard = ({ target, index }) => {
  const Icon = target.icon;
  
  return (
    <div 
      className="glass-card p-8 text-center relative group"
      data-testid={`protection-card-${index}`}
    >
      {/* Icon Container */}
      <div className="w-20 h-20 mx-auto mb-6 bg-cyber-subtle border border-zinc-800 flex items-center justify-center relative group-hover:border-cyber-yellow transition-colors duration-200">
        <Icon className="w-10 h-10 text-cyber-yellow" />
        {/* Shield Badge */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cyber-yellow flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 text-black" />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-xl text-white tracking-tight mb-1" data-testid={`protection-title-${index}`}>
        {target.title}
      </h3>
      
      {/* Subtitle */}
      <p className="font-mono text-xs text-cyber-yellow uppercase tracking-wider mb-4">
        {target.subtitle}
      </p>

      {/* Description */}
      <p className="font-body text-sm text-zinc-400 leading-relaxed" data-testid={`protection-description-${index}`}>
        {target.description}
      </p>
    </div>
  );
};

const StatItem = ({ value, label }) => (
  <div className="text-center" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
    <p className="font-heading font-black text-3xl sm:text-4xl text-cyber-yellow mb-1">{value}</p>
    <p className="font-body text-sm text-zinc-400">{label}</p>
  </div>
);

export default ProtectionSection;
