import React from 'react';
import DayNavigation from './DayNavigation';
import Day1Content from './day-content/Day1Content';
import Day2Content from './day-content/Day2Content';
import Day3Content from './day-content/Day3Content';

interface ChallengeContentProps {
  initialDay?: number;
}

const ChallengeContent: React.FC<ChallengeContentProps> = ({ initialDay = 1 }) => {
  const [currentDay, setCurrentDay] = React.useState(initialDay);
  const totalDays = 14;
  
  const renderDayContent = () => {
    switch(currentDay) {
      case 1:
        return <Day1Content day={1} />;
      case 2:
        return <Day2Content day={2} />;
      case 3:
        return <Day3Content day={3} />;
      // Additional days would be added here as they're implemented
      default:
        return (
          <div className="text-center py-12">
            <h3 className="text-xl font-cormorant font-bold text-hf-copper mb-4">Coming Soon</h3>
            <p className="text-white/80 font-inter">
              Day {currentDay} content is being prepared. Check back soon!
            </p>
          </div>
        );
    }
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <DayNavigation 
        currentDay={currentDay}
        totalDays={totalDays}
        onDayChange={setCurrentDay}
      />
      
      <div className="bg-hf-dark/40 p-6 rounded-lg border border-hf-copper/30">
        {renderDayContent()}
      </div>
    </div>
  );
};

export default ChallengeContent;
