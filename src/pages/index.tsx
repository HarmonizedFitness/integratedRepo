import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-hf-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant font-bold mb-6">
              <span className="text-gradient">Harmonized Fitness</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-inter mb-8">
              Transform your mind, body, and spirit through the power of harmonized movement and the B.R.E.A.T.H.E. code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/challenge">
                <button className="button-primary">
                  Start Your 14-Day Journey
                </button>
              </Link>
              <button className="button-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Background overlay */}
        <div className="absolute inset-0 bg-hero-pattern"></div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span className="text-white/50 text-sm mb-2">Scroll to explore</span>
          <div className="scroll-circle">
            <div className="scroll-circle-inner"></div>
          </div>
        </div>
      </section>
      
      {/* B.R.E.A.T.H.E. Code Section */}
      <section className="py-20 bg-hf-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">The <span className="text-hf-copper">B.R.E.A.T.H.E.</span> Code</h2>
            <p className="section-subtitle">
              Our unique framework for harmonizing mind, body, and spirit through intentional practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-6 max-w-5xl mx-auto">
            <div className="glass-card p-6 text-center transition-all hover:scale-105">
              <span className="text-chakra-root text-4xl font-bold font-cormorant">B</span>
              <h3 className="text-white font-poppins font-medium mt-3">Be the Change</h3>
              <p className="text-white/70 text-sm mt-2">Embody the transformation you seek</p>
            </div>
            
            <div className="glass-card p-6 text-center transition-all hover:scale-105">
              <span className="text-chakra-sacral text-4xl font-bold font-cormorant">R</span>
              <h3 className="text-white font-poppins font-medium mt-3">Recognize</h3>
              <p className="text-white/70 text-sm mt-2">Acknowledge your feelings and experiences</p>
            </div>
            
            <div className="glass-card p-6 text-center transition-all hover:scale-105">
              <span className="text-chakra-solar text-4xl font-bold font-cormorant">E</span>
              <h3 className="text-white font-poppins font-medium mt-3">Empathy</h3>
              <p className="text-white/70 text-sm mt-2">Cultivate compassion for yourself and others</p>
            </div>
            
            <div className="glass-card p-6 text-center transition-all hover:scale-105">
              <span className="text-chakra-heart text-4xl font-bold font-cormorant">A</span>
              <h3 className="text-white font-poppins font-medium mt-3">Alignment</h3>
              <p className="text-white/70 text-sm mt-2">Align your actions with your values</p>
            </div>
            
            <div className="glass-card p-6 text-center transition-all hover:scale-105">
              <span className="text-chakra-throat text-4xl font-bold font-cormorant">T</span>
              <h3 className="text-white font-poppins font-medium mt-3">Trust</h3>
              <p className="text-white/70 text-sm mt-2">Trust the process and your journey</p>
            </div>
            
            <div className="glass-card p-6 text-center transition-all hover:scale-105">
              <span className="text-chakra-third-eye text-4xl font-bold font-cormorant">H</span>
              <h3 className="text-white font-poppins font-medium mt-3">Hold Space</h3>
              <p className="text-white/70 text-sm mt-2">Create space for yourself and others to grow</p>
            </div>
            
            <div className="glass-card p-6 text-center transition-all hover:scale-105">
              <span className="text-chakra-crown text-4xl font-bold font-cormorant">E</span>
              <h3 className="text-white font-poppins font-medium mt-3">Exhale</h3>
              <p className="text-white/70 text-sm mt-2">Let go of tension and embrace the present</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 14-Day Prelude Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">14-Day <span className="text-hf-copper">"Master the Little Things"</span> Prelude</h2>
            <p className="section-subtitle">
              Begin your transformation with our guided 14-day program designed to build awareness and establish powerful daily practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card p-8 glass-card-hover">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-hf-copper/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hf-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-poppins font-medium text-white">Daily Structure</h3>
              </div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-hf-copper mr-2">•</span>
                  <span>Morning ritual to set intentions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hf-copper mr-2">•</span>
                  <span>Physical practice tailored to your level</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hf-copper mr-2">•</span>
                  <span>Integration practice for mind-body connection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hf-copper mr-2">•</span>
                  <span>Evening check-in to reflect and prepare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hf-copper mr-2">•</span>
                  <span>Resources to deepen your understanding</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 glass-card-hover">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-hf-copper/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hf-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-poppins font-medium text-white">Program Progression</h3>
              </div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-hf-copper mr-2">•</span>
                  <span>Days 1-3: Foundations of awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hf-copper mr-2">•</span>
                  <span>Days 4-7: Introduction to the B.R.E.A.T.H.E. code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hf-copper mr-2">•</span>
                  <span>Days 8-10: Building consistency and intensity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hf-copper mr-2">•</span>
                  <span>Days 11-13: Integration and personalization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-hf-copper mr-2">•</span>
                  <span>Day 14: Assessment and next steps</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/challenge">
              <button className="button-primary">
                Begin Your 14-Day Journey
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Dr. U Section */}
      <section className="py-20 bg-hf-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet <span className="text-hf-copper">Dr. U</span></h2>
            <p className="section-subtitle">
              Your personal guide and mentor throughout your fitness journey.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto glass-card p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-hf-copper/30 to-hf-light-copper/30 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-hf-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-cormorant font-bold text-white mb-4">
                  Wisdom, Compassion, and Expertise
                </h3>
                <p className="text-white/80 mb-6">
                  Dr. U combines the wisdom of a seasoned mentor with the practical knowledge of a fitness expert. 
                  Drawing from a blend of scientific understanding and spiritual insight, Dr. U provides personalized 
                  guidance tailored to your unique journey.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-hf-copper/20 text-white/90 text-sm">DNA Insights</span>
                  <span className="px-3 py-1 rounded-full bg-hf-copper/20 text-white/90 text-sm">Gut Health</span>
                  <span className="px-3 py-1 rounded-full bg-hf-copper/20 text-white/90 text-sm">Movement Patterns</span>
                  <span className="px-3 py-1 rounded-full bg-hf-copper/20 text-white/90 text-sm">Mindfulness</span>
                  <span className="px-3 py-1 rounded-full bg-hf-copper/20 text-white/90 text-sm">Chakra Awareness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Military/Veteran Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Specialized Support for <span className="text-hf-copper">Military & Veterans</span></h2>
            <p className="section-subtitle">
              Tailored programs that address the unique needs of those who serve and have served.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-poppins font-medium text-white mb-4">
                  Why We Focus on Military Community
                </h3>
                <p className="text-white/80 mb-6">
                  Our founder's military background drives our commitment to serving this community. 
                  We understand the physical demands, mental challenges, and transition difficulties 
                  faced by military personnel and veterans.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-hf-copper mr-2">•</span>
                    <span>Programs designed with military mindset in mind</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hf-copper mr-2">•</span>
                    <span>Trauma-informed approach to movement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-hf-copper mr-2">•</span>
                    <span>Transition support for veterans</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-poppins font-medium text-white mb-4">
                  Our Commitment
                </h3>
                <p className="text-white/80 mb-6">
                  We're dedicated to providing accessible, effective fitness solutions that address 
                  the whole person—physically, mentally, and spiritually—with special attention to 
                  the unique needs of military personnel and veterans.
                </p>
                <div className="p-4 bg-hf-dark/60 rounded-lg border border-hf-copper/20 italic text-center text-white/80 font-cormorant text-lg">
                  "Fitness isn't just about physical strength—it's about harmonizing mind, body, and spirit to face life's challenges with resilience."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-hf-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Simple <span className="text-hf-copper">Pricing</span></h2>
            <p className="section-subtitle">
              Transparent pricing with options for every commitment level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8 glass-card-hover relative">
              <div className="absolute top-0 right-0 bg-white/10 px-3 py-1 text-xs font-poppins rounded-bl-lg rounded-tr-lg">
                FREE
              </div>
              <h3 className="text-2xl font-cormorant font-bold text-white mb-2">14-Day Prelude</h3>
              <div className="text-3xl font-poppins font-medium text-hf-copper mb-6">$0</div>
              <ul className="space-y-3 text-white/80 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete 14-day program</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic Dr. U guidance</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Daily practice resources</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Progress tracking</span>
                </li>
              </ul>
              <Link href="/challenge">
                <button className="w-full button-secondary">
                  Start Now
                </button>
              </Link>
            </div>
            
            <div className="glass-card p-8 glass-card-hover relative border-hf-copper">
              <div className="absolute top-0 right-0 bg-hf-copper px-3 py-1 text-xs font-poppins rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-2xl font-cormorant font-bold text-white mb-2">Core Program</h3>
              <div className="text-3xl font-poppins font-medium text-hf-copper mb-6">$49<span className="text-sm text-white/60">/month</span></div>
              <ul className="space-y-3 text-white/80 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in 14-Day Prelude</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full 12-week program</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced Dr. U personalization</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Community access</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weekly live sessions</span>
                </li>
              </ul>
              <button className="w-full button-primary">
                Coming Soon
              </button>
            </div>
            
            <div className="glass-card p-8 glass-card-hover relative">
              <div className="absolute top-0 right-0 bg-white/10 px-3 py-1 text-xs font-poppins rounded-bl-lg rounded-tr-lg">
                PREMIUM
              </div>
              <h3 className="text-2xl font-cormorant font-bold text-white mb-2">Elite Program</h3>
              <div className="text-3xl font-poppins font-medium text-hf-copper mb-6">$99<span className="text-sm text-white/60">/month</span></div>
              <ul className="space-y-3 text-white/80 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Core Program</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>DNA/Gut test kit included</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1-on-1 coaching sessions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hf-copper mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Exclusive content access</span>
                </li>
              </ul>
              <button className="w-full button-secondary">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Success <span className="text-hf-copper">Stories</span></h2>
            <p className="section-subtitle">
              Hear from those who have transformed their lives through our program.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-6 glass-card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-hf-copper/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hf-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins font-medium text-white">James R.</h3>
                  <p className="text-white/60 text-sm">Marine Corps Veteran</p>
                </div>
              </div>
              <p className="text-white/80 italic">
                "After leaving the service, I struggled to find a fitness program that addressed both my physical and mental needs. The B.R.E.A.T.H.E. code changed everything for me. I'm stronger, more centered, and finally sleeping through the night."
              </p>
            </div>
            
            <div className="glass-card p-6 glass-card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-hf-copper/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hf-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins font-medium text-white">Sarah T.</h3>
                  <p className="text-white/60 text-sm">Active Duty Army</p>
                </div>
              </div>
              <p className="text-white/80 italic">
                "I was looking for something beyond the standard PT. This program has improved my performance on duty while giving me tools to manage stress. The DNA insights were eye-opening and helped me optimize my nutrition and recovery."
              </p>
            </div>
            
            <div className="glass-card p-6 glass-card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-hf-copper/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hf-copper" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins font-medium text-white">Michael D.</h3>
                  <p className="text-white/60 text-sm">Civilian</p>
                </div>
              </div>
              <p className="text-white/80 italic">
                "I was drawn to the military-inspired approach but wasn't sure if it would work for me as a civilian. The 14-day prelude convinced me this was different. Six months later, I've lost 30 pounds and gained a whole new outlook on life."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-hf-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked <span className="text-hf-copper">Questions</span></h2>
            <p className="section-subtitle">
              Get answers to common questions about our program.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-poppins font-medium text-white mb-2">
                Do I need to be in the military to benefit from this program?
              </h3>
              <p className="text-white/80">
                Not at all. While we have a special focus on military and veterans, our program is designed for anyone seeking to harmonize their mind, body, and spirit through intentional fitness practices.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-poppins font-medium text-white mb-2">
                What equipment do I need for the 14-day prelude?
              </h3>
              <p className="text-white/80">
                The prelude program requires minimal equipment—just comfortable clothing, a yoga mat or soft surface, and occasionally light dumbbells or resistance bands. Many exercises can be modified to use bodyweight only.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-poppins font-medium text-white mb-2">
                How is this different from other fitness programs?
              </h3>
              <p className="text-white/80">
                Our approach integrates physical training with mental and spiritual practices, guided by the B.R.E.A.T.H.E. code. We also incorporate DNA and gut microbiome insights for truly personalized fitness, and offer specialized support for military personnel and veterans.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-poppins font-medium text-white mb-2">
                What is the B.R.E.A.T.H.E. code?
              </h3>
              <p className="text-white/80">
                The B.R.E.A.T.H.E. code is our unique framework that guides all aspects of the program. It has two versions: one for long-term holistic alignment and another for in-the-moment emotional regulation. Each letter corresponds to a principle and is associated with one of the seven chakras.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-poppins font-medium text-white mb-2">
                Do I need to complete the 14-day prelude before joining the full program?
              </h3>
              <p className="text-white/80">
                While not required, we strongly recommend it. The prelude builds essential foundations and helps you determine if our approach resonates with you before committing to the full program.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-cormorant font-bold mb-6">
              Ready to <span className="text-hf-copper">Transform</span> Your Life?
            </h2>
            <p className="text-xl text-white/80 font-inter mb-8 max-w-2xl mx-auto">
              Begin your journey with our 14-day "Master the Little Things" Prelude and discover the power of harmonized fitness.
            </p>
            <Link href="/challenge">
              <button className="button-primary text-lg px-10 py-4">
                Start Your Journey Today
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-hf-dark/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-cormorant font-bold text-white">
                Harmonized <span className="text-hf-copper">Fitness</span>
              </h2>
              <p className="text-white/60 mt-2">
                Mind. Body. Spirit. DNA. Harmonized.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-hf-copper transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-hf-copper transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-hf-copper transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Harmonized Fitness. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
