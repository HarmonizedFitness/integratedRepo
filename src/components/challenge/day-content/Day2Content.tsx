import React from 'react';

interface DayContentProps {
  day: number;
}

const Day2Content: React.FC<DayContentProps> = ({ day }) => {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-cormorant font-bold text-hf-copper mb-2">Day 2: Be the Change</h3>
        <p className="text-white/80 font-inter">
          Welcome to Day 2 of your journey! Today we explore the first letter of the B.R.E.A.T.H.E. Code: <span className="text-red-500 font-medium">B - Be the Change</span>. 
          This principle reminds us that transformation begins within. Rather than waiting for external circumstances to change, 
          we become the agents of change through our presence and awareness.
        </p>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Morning Ritual</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Root Chakra Activation (7 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              The Root Chakra (Muladhara) is located at the base of your spine and represents your foundation, stability, and security. 
              It's associated with the color red and is connected to today's principle: Be the Change.
            </p>
            <p className="text-white/80 font-inter text-sm mt-2">
              Sit comfortably with your spine straight. Visualize a glowing red sphere at the base of your spine. 
              As you breathe deeply, imagine this red energy expanding and providing you with stability and grounding. 
              Silently repeat the affirmation: "I am safe, I am secure, I am grounded in my power to create change."
            </p>
          </div>
          
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Intention Reinforcement (3 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Review the intention you set yesterday. Reflect on how this intention relates to being the change you wish to see. 
              How can you embody this intention today through your actions, thoughts, and presence?
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Physical Practice</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Grounding Movement Sequence (15 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              This sequence focuses on connecting to the earth and building a strong foundation in your body, 
              mirroring the stability needed to be an agent of change.
            </p>
            <ul className="list-disc list-inside text-white/80 font-inter text-sm mt-2 space-y-2">
              <li>
                <span className="text-hf-copper font-medium">Mountain Pose (1 minute):</span> Stand with feet hip-width apart, 
                feeling the connection between your feet and the ground. Engage your leg muscles, lengthen your spine, 
                and breathe deeply, embodying stability and presence.
              </li>
              <li>
                <span className="text-hf-copper font-medium">Grounding Squats (2 minutes):</span> From Mountain Pose, 
                perform slow squats, focusing on keeping your feet firmly planted and your core engaged. 
                Notice how your body creates a stable base even during movement.
              </li>
              <li>
                <span className="text-hf-copper font-medium">Warrior II (2 minutes each side):</span> Step your feet wide apart, 
                turn your right foot out 90 degrees, and bend your right knee. Extend your arms parallel to the floor. 
                Feel the strength and stability in your stance. Repeat on the left side.
              </li>
              <li>
                <span className="text-hf-copper font-medium">Bridge Pose (3 minutes):</span> Lie on your back with knees bent, 
                feet flat on the floor. Press into your feet to lift your hips, engaging your core and glutes. 
                This activates the root chakra while strengthening your foundation.
              </li>
              <li>
                <span className="text-hf-copper font-medium">Child's Pose (2 minutes):</span> Kneel on the floor, touch your big toes together, 
                and sit back on your heels. Extend your arms forward and rest your forehead on the mat. 
                Feel the connection between your body and the earth.
              </li>
            </ul>
            <p className="text-white/80 font-inter text-sm mt-2">
              Throughout this sequence, focus on the sensation of stability and groundedness in your body. 
              Notice how a strong physical foundation allows for more effective movement and action.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Integration Practice</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Be the Change Reflection (10 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Consider an area of your life where you've been waiting for something external to change. 
              This could be a relationship, work situation, health condition, or any circumstance that feels challenging.
            </p>
            <p className="text-white/80 font-inter text-sm mt-2">
              Ask yourself:
            </p>
            <ul className="list-disc list-inside text-white/80 font-inter text-sm mt-2">
              <li>How have I been waiting for external change rather than embodying the change I wish to see?</li>
              <li>What quality or state of being could I cultivate that would represent the change I desire?</li>
              <li>What small action could I take today that embodies this quality?</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Micro-Action Commitment (5 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Based on your reflection, identify one small, specific action you can take today that embodies the change you wish to see. 
              This should be something concrete and achievable within your current circumstances.
            </p>
            <p className="text-white/80 font-inter text-sm mt-2">
              Write down this commitment and set a specific time today when you will take this action. 
              Remember, transformation happens through consistent small actions, not occasional grand gestures.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Evening Check-in</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Awareness Trigger Review (3 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Reflect on how you did with yesterday's awareness trigger:
            </p>
            <ul className="list-disc list-inside text-white/80 font-inter text-sm mt-2">
              <li>How many times did you notice your trigger and practice awareness?</li>
              <li>What did you observe during these moments of awareness?</li>
              <li>How did these brief moments of awareness affect your day?</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Micro-Action Reflection (5 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Reflect on the micro-action you committed to earlier today:
            </p>
            <ul className="list-disc list-inside text-white/80 font-inter text-sm mt-2">
              <li>Did you complete your micro-action? If not, what prevented you?</li>
              <li>How did it feel to embody the change rather than waiting for external circumstances to shift?</li>
              <li>What impact, if any, did this small action have on you or others?</li>
              <li>How might consistent application of this principle create larger change over time?</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Tomorrow's Micro-Habit: Grounding Moments (2 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Tomorrow, commit to taking three "grounding moments" throughout your day. During these moments, 
              pause whatever you're doing, feel your feet on the ground, take three deep breaths, and remind yourself 
              of your power to be the change. Set specific times for these moments or link them to regular activities 
              (e.g., before meals, after meetings, etc.).
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
              <p className="text-white/70 text-xs font-inter">"The Biology of Belief" by Bruce Lipton</p>
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
              <p className="text-white/70 text-xs font-inter">Day 2: Be the Change Practice Worksheet</p>
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
              <p className="text-white/70 text-xs font-inter">Root Chakra Guided Meditation (10 minutes)</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-hf-copper/20 flex items-center justify-center mr-3 text-hf-copper">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h5 className="font-poppins font-medium text-white text-sm">Scientific Insight</h5>
              <p className="text-white/70 text-xs font-inter">Research on neuroplasticity shows that our thoughts and actions can literally rewire our brains, supporting the concept that we can "be the change" at a neurological level.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="p-4 bg-hf-dark/60 rounded-lg border border-hf-copper/20 italic text-center text-white/80 font-cormorant text-lg">
        "Be the change you wish to see in the world." - Mahatma Gandhi
      </div>
    </div>
  );
};

export default Day2Content;
