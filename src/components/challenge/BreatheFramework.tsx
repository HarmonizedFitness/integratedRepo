import React from 'react';
import BreatheDisplay from './BreatheDisplay';

interface BreatheFrameworkProps {
  activeVersion?: 'holistic' | 'emotional';
  showBothVersions?: boolean;
}

const BreatheFramework: React.FC<BreatheFrameworkProps> = ({ 
  activeVersion = 'holistic',
  showBothVersions = true
}) => {
  const [version, setVersion] = React.useState<'holistic' | 'emotional'>(activeVersion);

  return (
    <div className="bg-hf-dark/40 p-6 rounded-lg border border-hf-copper/30">
      <h2 className="text-2xl md:text-3xl font-cormorant font-bold text-center mb-6">
        The <span className="text-hf-copper">B.R.E.A.T.H.E.</span> Code
      </h2>
      
      {showBothVersions && (
        <div className="flex justify-center mb-8">
          <div className="bg-hf-dark/60 rounded-full p-1 flex">
            <button 
              onClick={() => setVersion('holistic')}
              className={`px-4 py-2 rounded-full text-sm font-poppins transition-all ${
                version === 'holistic' 
                  ? 'bg-hf-copper text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Holistic Alignment
            </button>
            <button 
              onClick={() => setVersion('emotional')}
              className={`px-4 py-2 rounded-full text-sm font-poppins transition-all ${
                version === 'emotional' 
                  ? 'bg-hf-copper text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Emotional Regulation
            </button>
          </div>
        </div>
      )}
      
      <BreatheDisplay version={version} showDescriptions={true} />
      
      <div className="mt-8 text-center">
        <p className="text-white/80 font-inter">
          The B.R.E.A.T.H.E. Code serves as both a guiding philosophy for long-term growth and an immediate tool for emotional regulation.
        </p>
      </div>
    </div>
  );
};

export default BreatheFramework;
