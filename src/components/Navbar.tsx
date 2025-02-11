"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          John Doe
        </Link>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link 
            href="/skills" 
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Skills
          </Link>
          <Link 
            href="/projects" 
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Projects
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/skills" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
              <Link 
                href="/projects" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
