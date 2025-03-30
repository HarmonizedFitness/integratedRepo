import React from 'react';
import ChallengeContent from '../components/challenge/ChallengeContent';
import BreatheFramework from '../components/challenge/BreatheFramework';

export default function ChallengePage() {
  return (
    <div className="min-h-screen bg-hf-black">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-cormorant font-bold mb-4">
            <span className="text-gradient">Master the Little Things</span>
          </h1>
          <p className="text-xl text-white/80 font-inter max-w-3xl mx-auto">
            Your 14-day journey to harmonize mind, body, and spirit through daily practices
            and the B.R.E.A.T.H.E. code.
          </p>
        </div>
        
        <div className="mb-12">
          <BreatheFramework showBothVersions={true} />
        </div>
        
        <ChallengeContent initialDay={1} />
      </div>
    </div>
  );
}
