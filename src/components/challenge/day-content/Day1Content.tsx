import React from 'react';

interface DayContentProps {
  day: number;
}

const Day1Content: React.FC<DayContentProps> = ({ day }) => {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-cormorant font-bold text-hf-copper mb-2">Day 1: Awakening Awareness</h3>
        <p className="text-white/80 font-inter">
          Welcome to the first day of your 14-day journey! Today is all about awakening awareness - 
          the foundation of all transformation. When we become truly aware of our current patterns, 
          habits, and sensations, we create the space for change to occur.
        </p>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Morning Ritual</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Intention Setting (5 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Find a quiet space where you won't be disturbed. Sit comfortably with your spine straight 
              but not rigid. Close your eyes and take three deep breaths, feeling your body settle into 
              the present moment. Ask yourself: "What is my intention for this 14-day journey?" Listen 
              for the answer that arises naturally.
            </p>
          </div>
          
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Body Scan (10 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Remaining in your seated position, bring your awareness to your body. Starting at the crown 
              of your head, slowly move your attention downward, noticing sensations without judgment. 
              Observe areas of tension, comfort, or neutrality. Simply notice what is present without 
              trying to change anything.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Physical Practice</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Movement Assessment (15 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Today we'll establish your baseline awareness of how your body moves. Perform each movement 
              slowly, focusing on form and how your body feels:
            </p>
            <ul className="list-disc list-inside text-white/80 font-inter text-sm mt-2 space-y-2">
              <li>
                <span className="text-hf-copper font-medium">Squat (5 reps):</span> Stand with feet 
                shoulder-width apart, lower your body as if sitting in a chair, then return to standing.
              </li>
              <li>
                <span className="text-hf-copper font-medium">Push-up or Wall Push (5 reps):</span> Either 
                on the floor or against a wall, perform a pushing movement with your arms.
              </li>
              <li>
                <span className="text-hf-copper font-medium">Hip Hinge (5 reps):</span> With soft knees, 
                bend forward from your hips while maintaining a neutral spine.
              </li>
            </ul>
            <p className="text-white/80 font-inter text-sm mt-2">
              After each movement, pause and notice: Where did you feel tension? Which parts moved easily? 
              Where did you feel strong or weak?
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Integration Practice</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Mindful Moment Practice (10 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Choose a simple, everyday activity that you typically do on autopilot (e.g., brushing teeth, 
              washing dishes, eating a snack). Perform this activity with complete awareness, slowing down 
              to notice every sensation, thought, and emotion that arises.
            </p>
          </div>
          
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Journaling Prompt (5 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Take a few minutes to reflect on and write about:
            </p>
            <ul className="list-disc list-inside text-white/80 font-inter text-sm mt-2">
              <li>What did you notice during your body scan this morning that you weren't previously aware of?</li>
              <li>During the movement assessment, which patterns felt natural and which felt challenging?</li>
              <li>What is one "little thing" you could bring more awareness to in your daily life?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Evening Check-in</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Day 1 Reflection (5 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Take a few moments to reflect on your day:
            </p>
            <ul className="list-disc list-inside text-white/80 font-inter text-sm mt-2">
              <li>What moments of awareness did you experience today?</li>
              <li>Did you notice any patterns or habits you weren't previously aware of?</li>
              <li>What was challenging about maintaining awareness?</li>
              <li>What was rewarding about practicing awareness?</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Gratitude Practice (3 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Write down three specific things you're grateful for today. Try to be as specific as possible.
            </p>
          </div>
          
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Tomorrow's Micro-Habit: Awareness Trigger (2 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Choose a specific trigger that will remind you to practice awareness throughout tomorrow. 
              This could be walking through a doorway, checking your phone, taking a drink of water, or 
              washing your hands. Each time this trigger occurs, take three conscious breaths and notice 
              your surroundings.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Resources</h4>
        <div className="space-y-2">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-hf-copper/20 flex items-center justify-center mr-3 text-hf-copper">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h5 className="font-poppins font-medium text-white text-sm">Recommended Reading</h5>
              <p className="text-white/70 text-xs font-inter">"The Power of Now" by Eckhart Tolle</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-hf-copper/20 flex items-center justify-center mr-3 text-hf-copper">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h5 className="font-poppins font-medium text-white text-sm">Downloadable Worksheet</h5>
              <p className="text-white/70 text-xs font-inter">Day 1: Awakening Awareness Practice Worksheet</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-hf-copper/20 flex items-center justify-center mr-3 text-hf-copper">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h5 className="font-poppins font-medium text-white text-sm">Video Resource</h5>
              <p className="text-white/70 text-xs font-inter">Guided Body Scan Meditation (10 minutes)</p>
            </div>
          </div>
        </div>
      </section>

      <div className="p-4 bg-hf-dark/60 rounded-lg border border-hf-copper/20 italic text-center text-white/80 font-cormorant text-lg">
        "When you change the way you look at things, the things you look at change." - Dr. Wayne Dyer
      </div>
    </div>
  );
};

export default Day1Content;
