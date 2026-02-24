import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-paper border-t border-zinc-800 py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2" data-testid="footer-logo">
            <Shield className="w-6 h-6 text-cyber-yellow" />
            <span className="font-heading font-bold text-lg text-white uppercase tracking-tight">
              Textinaters
            </span>
          </div>

          {/* Tagline */}
          <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider" data-testid="footer-tagline">
            Danger – Open At Own Risk!
          </p>

          {/* Copyright */}
          <p className="font-body text-sm text-zinc-500" data-testid="footer-copyright">
            © {currentYear} Textinaters. All rights reserved.
          </p>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-zinc-800">
          <p className="text-center font-body text-xs text-zinc-600">
            A product designed to protect your family from dangerous text messages.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
