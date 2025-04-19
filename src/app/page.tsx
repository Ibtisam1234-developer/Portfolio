'use client';

import Image from 'next/image'
import React from 'react'

// --- TypewriterTitle component (copied from ClientLayout.tsx) ---
function TypewriterTitle({ words, className = "" }: { words: string[], className?: string }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [cycle, setCycle] = React.useState(0); // force re-render to trigger next word
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [charIndex, setCharIndex] = React.useState(0);
  const [blink, setBlink] = React.useState(true);

  React.useEffect(() => {
    const word = words[activeIndex];
    let timer: NodeJS.Timeout;
    if (!isDeleting && charIndex <= word.length) {
      timer = setTimeout(() => setCharIndex(charIndex + 1), 120);
    } else if (!isDeleting && charIndex > word.length) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex >= 0) {
      timer = setTimeout(() => setCharIndex(charIndex - 1), 60);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setActiveIndex((activeIndex + 1) % words.length);
      setCharIndex(0);
      setCycle(cycle + 1);
    }
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, activeIndex, words, cycle]);

  React.useEffect(() => {
    const blinkTimer = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  // Find the longest word for minWidth
  const maxLen = Math.max(...words.map(w => w.length));
  return (
    <span
      className={className + " font-mono text-center mx-auto block"}
      style={{ letterSpacing: '1.5px', minWidth: `${maxLen + 2}ch` }}
    >
      {words.map((word, i) => (
        <span key={i} className="block min-h-[1.2em]">
          {i === activeIndex
            ? word.slice(0, charIndex) + (blink ? '|' : ' ')
            : '\u00A0'}
        </span>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center animate-fade-in">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative w-48 h-48 mx-auto mb-6 hover-scale animate-stagger">
          <Image 
            src="/profile.jpeg" 
            alt="Profile Picture" 
            fill 
            priority 
            className="rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center mb-4">
  <span className="block text-3xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-2">Hi, I am</span>
  <TypewriterTitle
    words={["Muhammad Ibtisam", "Python Developer", "AI Enthusiast"]}
    className="text-4xl md:text-7xl font-extrabold text-blue-600 text-center" />
</div>   
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-stagger">
          Passionate Python developer specializing in building robust applications, automations, and data-driven solutions. 
          Transforming ideas into efficient, scalable Python code for web, automation, and data science projects.
          Let&apos;s bring your Python project to life! 🐍
        </p>
        
        <div className="flex justify-center space-x-4 animate-stagger">
          <a 
            href="/projects" 
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
          >
            View Projects
          </a>
          <a 
            href="/contact" 
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}
