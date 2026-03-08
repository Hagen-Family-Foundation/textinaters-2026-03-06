import React from 'react';

const NMSCTeaser = () => {
  const handleClick = () => {
    window.open('https://nomorescamcalls.com/#comparison', '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="w-full py-6 cursor-pointer hover:opacity-90 transition-opacity duration-200"
      style={{ backgroundColor: '#FFFFFF', border: '1px solid #1E3A8A' }}
      onClick={handleClick}
      data-testid="nmsc-teaser"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p
          className="font-heading font-bold text-lg sm:text-xl md:text-2xl mb-2"
          style={{ color: '#1E3A8A' }}
        >
          Text Only $12.99/mo → Get All 4 Protections $19.99/mo
        </p>
        <p
          className="font-body text-sm sm:text-base"
          style={{ color: '#1E3A8A' }}
        >
          ✅ Red dot warnings &nbsp;&nbsp; ✅ Phone + Text + Email + Web included
        </p>
        <p
          className="font-body text-sm sm:text-base mt-1"
          style={{ color: '#1E3A8A' }}
        >
          ✅ Works on ALL devices/carriers &nbsp;&nbsp; ✅ Family covered anywhere in US - one plan
        </p>
      </div>
    </div>
  );
};

export default NMSCTeaser;
