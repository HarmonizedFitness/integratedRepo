import React from 'react';

interface DayContentProps {
  day: number;
}

const Day3Content: React.FC<DayContentProps> = ({ day }) => {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-cormorant font-bold text-hf-copper mb-2">Day 3: Foundations of Movement</h3>
        <p className="text-white/80 font-inter">
          Welcome to Day 3 of your journey! Today we focus on establishing proper movement foundations. 
          Understanding how your body is designed to move is essential for preventing injury, optimizing performance, 
          and creating sustainable fitness habits. Today's practices will help you build awareness of fundamental 
          movement patterns that form the basis of all physical activity.
        </p>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Morning Ritual</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Body Awareness Scan (5 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Begin in a comfortable seated or standing position. Close your eyes and take three deep breaths. 
              Starting from your feet and moving upward, scan your body for any areas of tension, discomfort, 
              or misalignment. Notice your posture, the distribution of weight, and any habitual patterns 
              in how you hold your body. Simply observe without judgment.
            </p>
          </div>
          
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Intention Setting (3 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Set an intention to move with awareness and respect for your body's design today. 
              Consider: "Today, I will notice how my body naturally wants to move and honor its wisdom."
            </p>
          </div>
        </div>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Physical Practice</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Fundamental Movement Patterns (20 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Today we'll explore the seven fundamental movement patterns that form the foundation of all physical activity. 
              For each pattern, perform 5-8 slow, mindful repetitions, focusing on form and body awareness rather than speed or intensity.
            </p>
            <ul className="list-disc list-inside text-white/80 font-inter text-sm mt-2 space-y-3">
              <li>
                <span className="text-hf-copper font-medium">Squat:</span> Stand with feet shoulder-width apart, toes slightly turned out. 
                Lower your body by hinging at the hips and bending your knees, keeping your chest up and spine neutral. 
                Imagine sitting back into a chair. Return to standing by driving through your heels.
                <p className="text-white/70 text-xs font-inter mt-1 italic">
                  Things to notice: Are your knees tracking over your toes? Is your weight in your heels? 
                  Can you maintain a neutral spine throughout the movement?
                </p>
              </li>
              <li>
                <span className="text-hf-copper font-medium">Hinge:</span> Stand with feet hip-width apart. 
                With soft knees, hinge forward from your hips while maintaining a neutral spine. 
                Allow your hands to lower toward the floor as your hips move backward. Return to standing by engaging your glutes.
                <p className="text-white/70 text-xs font-inter mt-1 italic">
                  Things to notice: Are you bending from your hips rather than your waist? 
                  Can you maintain the natural curve in your lower back?
                </p>
              </li>
              <li>
                <span className="text-hf-copper font-medium">Lunge:</span> Step forward with one foot, lowering your back knee toward the floor. 
                Keep your front knee aligned over your ankle. Push through your front heel to return to standing.
                <p className="text-white/70 text-xs font-inter mt-1 italic">
                  Things to notice: Is your front knee tracking over your ankle? Are you maintaining an upright posture?
                </p>
              </li>
              <li>
                <span className="text-hf-copper font-medium">Push:</span> Begin in a modified push-up position (on knees or against a wall if needed). 
                Lower your body by bending your elbows, keeping them at about a 45-degree angle from your body. 
                Push back up to the starting position.
                <p className="text-white/70 text-xs font-inter mt-1 italic">
                  Things to notice: Are your shoulders, elbows, and wrists aligned? Is your core engaged?
                </p>
              </li>
              <li>
                <span className="text-hf-copper font-medium">Pull:</span> Stand facing a sturdy object (like a countertop). 
                Grasp the edge and lean back slightly. Pull your body toward the object, focusing on using your back muscles.
                <p className="text-white/70 text-xs font-inter mt-1 italic">
                  Things to notice: Are you engaging your back muscles rather than just your arms? 
                  Are your shoulders relaxed away from your ears?
                </p>
              </li>
              <li>
                <span className="text-hf-copper font-medium">Rotate:</span> Stand with feet hip-width apart, arms extended in front of you. 
                Rotate your torso to one side, then the other, keeping your hips facing forward.
                <p className="text-white/70 text-xs font-inter mt-1 italic">
                  Things to notice: Are you rotating from your thoracic spine (mid-back)? 
                  Are your hips staying relatively stable?
                </p>
              </li>
              <li>
                <span className="text-hf-copper font-medium">Gait (Walk):</span> Walk slowly across the room, paying attention to your natural gait. 
                Notice the heel-to-toe transition, arm swing, and rotation in your torso.
                <p className="text-white/70 text-xs font-inter mt-1 italic">
                  Things to notice: Is your weight transferring smoothly from heel to toe? 
                  Is there a natural, opposite-arm-to-leg swing pattern?
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Integration Practice</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Movement Awareness in Daily Activities (10 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Choose a routine daily activity (like washing dishes, making your bed, or preparing a meal). 
              Perform this activity with complete awareness of your movement patterns. Notice:
            </p>
            <ul className="list-disc list-inside text-white/80 font-inter text-sm mt-2">
              <li>Which of the fundamental movement patterns are you using?</li>
              <li>Are you moving efficiently, or creating unnecessary strain?</li>
              <li>Where do you feel tension or effort?</li>
              <li>How could you adjust your movement to better align with your body's natural design?</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Journaling Prompt (5 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Reflect on your experience with the fundamental movement patterns:
            </p>
            <ul className="list-disc list-inside text-white/80 font-inter text-sm mt-2">
              <li>Which movement patterns felt most natural to you? Which felt challenging?</li>
              <li>Did you notice any imbalances or asymmetries in your movement?</li>
              <li>How might improving these fundamental patterns benefit your daily life and activities?</li>
              <li>What insights did you gain from bringing awareness to everyday movements?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-hf-dark/40 p-4 rounded-lg border border-hf-copper/30">
        <h4 className="font-poppins font-medium text-white text-lg mb-2">Evening Check-in</h4>
        <div className="space-y-4">
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Grounding Moments Review (3 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Reflect on how you did with yesterday's grounding moments practice:
            </p>
            <ul className="list-disc list-inside text-white/80 font-inter text-sm mt-2">
              <li>Did you remember to take your three grounding moments?</li>
              <li>How did these moments affect your state of mind and body awareness?</li>
              <li>Did you notice any difference in how you approached challenges after these moments?</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Movement Awareness Reflection (5 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Reflect on how movement awareness affected your day:
            </p>
            <ul className="list-disc list-inside text-white/80 font-inter text-sm mt-2">
              <li>Did you notice yourself using any of the fundamental movement patterns throughout your day?</li>
              <li>Were there moments when you adjusted your movement to better align with your body's design?</li>
              <li>How did increased movement awareness affect your energy levels and physical comfort?</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-poppins font-medium text-hf-copper">Tomorrow's Micro-Habit: Posture Check-ins (2 minutes)</h5>
            <p className="text-white/80 font-inter text-sm">
              Tomorrow, commit to doing five brief posture check-ins throughout your day. 
              During these moments, notice your posture and make any necessary adjustments to align your body. 
              Pay particular attention to your head position, shoulder placement, and spinal alignment. 
              You might set reminders on your phone or link these check-ins to specific activities.
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
              <p className="text-white/70 text-xs font-inter">"Movement: Functional Movement Systems" by Gray Cook</p>
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
              <p className="text-white/70 text-xs font-inter">Day 3: Movement Foundations Assessment Guide</p>
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
              <p className="text-white/70 text-xs font-inter">Fundamental Movement Patterns Demonstration</p>
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
              <p className="text-white/70 text-xs font-inter">Research shows that proper movement patterns reduce injury risk by up to 65% and improve performance metrics across all fitness levels.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="p-4 bg-hf-dark/60 rounded-lg border border-hf-copper/20 italic text-center text-white/80 font-cormorant text-lg">
        "The body is the instrument of our attainment in the world." - Simone de Beauvoir
      </div>
    </div>
  );
};

export default Day3Content;
