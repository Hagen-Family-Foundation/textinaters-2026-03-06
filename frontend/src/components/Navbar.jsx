import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    window.open('https://nomorescamcalls.com/#comparison', '_blank', 'noopener,noreferrer');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-cyber-black/95 backdrop-blur-xl border-b border-zinc-800' : 'bg-transparent'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2" data-testid="navbar-logo">
            <Shield className="w-8 h-8 text-cyber-yellow" />
            <span className="font-heading font-bold text-xl sm:text-2xl text-white uppercase tracking-tight">
              Textinaters
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              className="font-body text-sm text-zinc-400 hover:text-cyber-yellow transition-colors duration-200"
              data-testid="nav-features"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="font-body text-sm text-zinc-400 hover:text-cyber-yellow transition-colors duration-200"
              data-testid="nav-how-it-works"
            >
              How It Works
            </a>
            <a 
              href="#protection" 
              className="font-body text-sm text-zinc-400 hover:text-cyber-yellow transition-colors duration-200"
              data-testid="nav-protection"
            >
              Protection
            </a>
            <button
              onClick={handleCTAClick}
              className="cta-primary px-5 py-2 font-heading text-sm uppercase tracking-wide"
              data-testid="nav-cta-button"
            >
              GET ALL 4 PROTECTIONS
            </button>
            <span className="four-pillars" style={{ fontSize: '14px' }}>PHONE • TEXT • EMAIL • WEB</span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-cyber-paper border-t border-zinc-800" data-testid="mobile-menu">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#features" 
                className="block font-body text-base text-zinc-400 hover:text-cyber-yellow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="block font-body text-base text-zinc-400 hover:text-cyber-yellow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#protection" 
                className="block font-body text-base text-zinc-400 hover:text-cyber-yellow"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Protection
              </a>
              <button
                onClick={handleCTAClick}
                className="w-full cta-primary px-5 py-3 font-heading text-sm uppercase tracking-wide"
              >
                GET ALL 4 PROTECTIONS
              </button>
              <p className="four-pillars mt-2" style={{ fontSize: '16px' }}>PHONE • TEXT • EMAIL • WEB</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
