import React from 'react';

interface DayNavigationProps {
  currentDay: number;
  totalDays: number;
  onDayChange: (day: number) => void;
}

const DayNavigation: React.FC<DayNavigationProps> = ({
  currentDay,
  totalDays,
  onDayChange
}) => {
  return (
    <div className="w-full bg-hf-dark/40 rounded-lg border border-hf-copper/30 p-4 mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <button 
            onClick={() => onDayChange(Math.max(1, currentDay - 1))}
            disabled={currentDay === 1}
            className={`p-2 rounded-full ${currentDay === 1 ? 'text-white/30' : 'text-white/70 hover:text-hf-copper'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <h2 className="text-xl font-cormorant font-bold text-white mx-4">
            Day {currentDay} of {totalDays}
          </h2>
          
          <button 
            onClick={() => onDayChange(Math.min(totalDays, currentDay + 1))}
            disabled={currentDay === totalDays}
            className={`p-2 rounded-full ${currentDay === totalDays ? 'text-white/30' : 'text-white/70 hover:text-hf-copper'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {Array.from({ length: totalDays }, (_, i) => i + 1).map(day => (
            <button
              key={day}
              onClick={() => onDayChange(day)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-poppins transition-all ${
                currentDay === day
                  ? 'bg-hf-copper text-white'
                  : 'bg-hf-dark/60 text-white/70 hover:bg-hf-copper/20'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
      
      <div className="w-full bg-hf-dark/60 h-2 rounded-full mt-4 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-hf-copper to-hf-light-copper h-full rounded-full"
          style={{ width: `${(currentDay / totalDays) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default DayNavigation;
