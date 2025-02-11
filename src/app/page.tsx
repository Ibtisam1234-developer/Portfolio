import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 transform transition-all duration-500 hover:scale-105">
          <div className="relative">
            <span className="absolute -top-2 -left-4 text-6xl text-blue-200 opacity-50">❝</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight">
              John Doe
            </h1>
            <span className="absolute -bottom-2 -right-4 text-6xl text-blue-200 opacity-50">❞</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 animate-pulse">
            Frontend Wizard & Design Alchemist
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed shadow-sm p-4 bg-white/60 rounded-xl backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
            Crafting digital experiences that breathe life into pixels. 
            Transforming complex ideas into elegant, intuitive interfaces 
            with a touch of magic ✨
          </p>
          
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <Link 
              href="/projects" 
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:rotate-3 text-center"
            >
              Explore Projects
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 border-2 border-blue-500 text-blue-600 rounded-full shadow-md transform transition-all duration-300 hover:scale-110 hover:bg-blue-50 text-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-blob opacity-70 blur-2xl"></div>
            <Image 
              src="/profile.jpg" 
              alt="Profile Picture" 
              width={500} 
              height={500} 
              priority
              className="relative z-10 rounded-full object-cover w-full h-full shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-6"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-400 rounded-full animate-bounce opacity-70 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
