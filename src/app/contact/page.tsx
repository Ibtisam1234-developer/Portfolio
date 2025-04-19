import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 w-full">
        {/* Contact Information */}
        <div className="space-y-8 bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Let&apos;s Connect
          </h1>
          
          <p className="text-gray-600 leading-relaxed mb-8">
            I&apos;m always excited to discuss new projects, opportunities, or just have a friendly chat about tech and design.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <a 
                href="mailto:pythondeveloperibtisam@gmail.com" 
                className="text-gray-800 hover:text-blue-600 transition"
              >
                pythondeveloperibtisam@gmail.com
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <span className="text-gray-800">+92 3332191214</span>
            </div>
          </div>
          
          <div className="flex space-x-6 mt-8">
            <Link 
              href="https://github.com/Ibtisam1234-developer" 
              target="_blank" 
              className="text-gray-700 hover:text-blue-600 transition transform hover:scale-125"
            >
              <FaGithub className="text-3xl" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/ -ibtisam-asim-12baab32a/" 
              target="_blank" 
              className="text-gray-700 hover:text-blue-600 transition transform hover:scale-125"
            >
              <FaLinkedin className="text-3xl" />
            </Link>
            <Link 
              href="https://www.youtube.com/@Ibtisam.python" 
              target="_blank" 
              className="text-gray-700 hover:text-red-600 transition transform hover:scale-125"
            >
              <FaYoutube className="text-2xl" />
            </Link>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl">
          <form className="space-y-6">
            <div className="relative">
              <input 
                type="text" 
                id="name" 
                placeholder=" " 
                required 
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <label 
                htmlFor="name" 
                className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1"
              >
                Your Name
              </label>
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                placeholder=" " 
                required 
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <label 
                htmlFor="email" 
                className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1"
              >
                Your Email
              </label>
            </div>
            
            <div className="relative">
              <textarea 
                id="message" 
                placeholder=" " 
                rows={4} 
                required 
                className="peer w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-4 top-3 text-gray-500 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1"
              >
                Your Message
              </label>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
