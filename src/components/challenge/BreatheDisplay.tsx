import React from 'react';
import ChakraLetter from '../ui/ChakraLetter';

interface BreatheDisplayProps {
  version: 'holistic' | 'emotional';
  showDescriptions?: boolean;
}

const BreatheDisplay: React.FC<BreatheDisplayProps> = ({ 
  version = 'holistic',
  showDescriptions = true
}) => {
  const holisticBreatheMeanings = [
    { letter: 'B', meaning: 'Be the Change', chakra: 'Root Chakra', color: 'text-chakra-root' },
    { letter: 'R', meaning: 'Recognize', chakra: 'Sacral Chakra', color: 'text-chakra-sacral' },
    { letter: 'E', meaning: 'Empathy', chakra: 'Solar Plexus Chakra', color: 'text-chakra-solar' },
    { letter: 'A', meaning: 'Alignment', chakra: 'Heart Chakra', color: 'text-chakra-heart' },
    { letter: 'T', meaning: 'Trust', chakra: 'Throat Chakra', color: 'text-chakra-throat' },
    { letter: 'H', meaning: 'Hold Space', chakra: 'Third Eye Chakra', color: 'text-chakra-third-eye' },
    { letter: 'E', meaning: 'Exhale', chakra: 'Crown Chakra', color: 'text-chakra-crown' },
  ];

  const emotionalBreatheMeanings = [
    { letter: 'B', meaning: 'Break the Cycle', chakra: 'Root Chakra', color: 'text-chakra-root' },
    { letter: 'R', meaning: 'Recognize the Emotion', chakra: 'Sacral Chakra', color: 'text-chakra-sacral' },
    { letter: 'E', meaning: 'Exhale Slowly', chakra: 'Solar Plexus Chakra', color: 'text-chakra-solar' },
    { letter: 'A', meaning: 'Assess the Trigger', chakra: 'Heart Chakra', color: 'text-chakra-heart' },
    { letter: 'T', meaning: 'Take a Pause', chakra: 'Throat Chakra', color: 'text-chakra-throat' },
    { letter: 'H', meaning: 'Honor Your Needs', chakra: 'Third Eye Chakra', color: 'text-chakra-third-eye' },
    { letter: 'E', meaning: 'Ease Back In', chakra: 'Crown Chakra', color: 'text-chakra-crown' },
  ];

  const breatheMeanings = version === 'holistic' ? holisticBreatheMeanings : emotionalBreatheMeanings;
  
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 py-6">
        {breatheMeanings.map((item, index) => (
          <ChakraLetter 
            key={index}
            letter={item.letter}
            chakraColor={item.color}
            chakraName={item.chakra}
            description={showDescriptions ? item.meaning : undefined}
          />
        ))}
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-xl font-cormorant font-bold text-hf-copper mb-2">
          {version === 'holistic' ? 'Holistic Alignment' : 'Emotional Regulation'}
        </h3>
        <p className="text-white/80 font-inter text-sm max-w-2xl mx-auto">
          {version === 'holistic' 
            ? 'A foundational practice for mind-body-spirit integration, focusing on cultivating long-term habits and deeper awareness.'
            : 'An in-the-moment tool for emotional regulation, providing clear, actionable steps for calming down and regaining composure.'}
        </p>
      </div>
    </div>
  );
};

export default BreatheDisplay;
