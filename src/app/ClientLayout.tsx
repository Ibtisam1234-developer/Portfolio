'use client';

import React, { useEffect, useState } from 'react';

// Typing animation hook for a single word
function useTypewriterWord(word: string, typingSpeed = 120, deletingSpeed = 60, pause = 1200, active = true) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (!active) return;
    let timer: NodeJS.Timeout;
    if (!isDeleting && charIndex <= word.length) {
      setText(word.slice(0, charIndex));
      timer = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      setText(word.slice(0, charIndex));
      timer = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
    } else if (!isDeleting && charIndex > word.length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setCharIndex(0);
    }
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, word, typingSpeed, deletingSpeed, pause, active]);

  useEffect(() => {
    if (!active) return;
    const blinkTimer = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(blinkTimer);
  }, [active]);

  return text + (blink ? '|' : ' ');
}

// Component to display multiple words line by line with typewriter effect
function TypewriterTitle({ words, className = "" }: { words: string[], className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycle, setCycle] = useState(0); // force re-render to trigger next word
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // Internal typewriter logic for the active word
  useEffect(() => {
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

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(blinkTimer);
  }, []);

  return (
    <span className={className} style={{letterSpacing: '1.5px'}}>
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

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-700">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 transition-all duration-700">
            <div className="flex items-center">
              
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-gray-600 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition">
                  Home
                </a>
                <a href="/projects" className="text-gray-600 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition">
                  Projects
                </a>
                <a href="/skills" className="text-gray-600 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition">
                  Skills
                </a>
                <a href="/contact" className="text-gray-600 hover:bg-gray-100 hover:text-blue-600 px-3 py-2 rounded-md transition">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-700 animate-fade-in">
        {children}
      </main>
      
      <footer className="bg-white dark:bg-gray-800 py-8 mt-16 transition-all duration-700 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            2024 Muhammad Ibtisam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
