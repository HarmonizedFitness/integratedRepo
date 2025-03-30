import React from 'react';

interface ChakraLetterProps {
  letter: string;
  chakraColor: string;
  chakraName: string;
  description?: string;
}

const ChakraLetter: React.FC<ChakraLetterProps> = ({ 
  letter, 
  chakraColor, 
  chakraName,
  description 
}) => {
  return (
    <div className="flex flex-col items-center">
      <span 
        className={`text-4xl md:text-5xl font-bold font-cormorant ${chakraColor}`}
        style={{ textShadow: '0 0 10px rgba(255,255,255,0.2)' }}
      >
        {letter}
      </span>
      {description && (
        <div className="mt-2 text-center">
          <span className="text-xs text-white/70 block">{chakraName}</span>
          <span className="text-sm text-white/90 block mt-1">{description}</span>
        </div>
      )}
    </div>
  );
};

export default ChakraLetter;
