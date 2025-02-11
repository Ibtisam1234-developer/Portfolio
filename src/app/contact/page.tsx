import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        {/* Contact Form */}
        <div className="p-12 space-y-6 bg-gradient-to-br from-blue-50 to-white">
          <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Get in Touch
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Have a project in mind or just want to say hello? 
            I'm always excited to collaborate and bring creative ideas to life.
          </p>
          
          <form className="space-y-6">
            <div className="relative">
              <input 
                type="text" 
                id="name" 
                placeholder="Your Name" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer placeholder-transparent"
              />
              <label 
                htmlFor="name" 
                className="absolute left-4 -top-3 text-gray-600 text-sm bg-white px-1 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm"
              >
                Name
              </label>
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                placeholder="Your Email" 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer placeholder-transparent"
              />
              <label 
                htmlFor="email" 
                className="absolute left-4 -top-3 text-gray-600 text-sm bg-white px-1 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm"
              >
                Email
              </label>
            </div>
            
            <div className="relative">
              <textarea 
                id="message" 
                placeholder="Your Message" 
                rows={4} 
                required 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer placeholder-transparent"
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-4 -top-3 text-gray-600 text-sm bg-white px-1 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm"
              >
                Message
              </label>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="p-12 flex flex-col justify-center space-y-8 bg-gradient-to-br from-blue-100 to-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Let's Connect
            </h2>
            <p className="text-gray-600 mb-8">
              Feel free to reach out through these channels
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              { 
                icon: "", 
                title: "Email", 
                value: "john.doe@example.com",
                link: "mailto:john.doe@example.com"
              },
              { 
                icon: "", 
                title: "Phone", 
                value: "+1 (123) 456-7890",
                link: "tel:+11234567890"
              }
            ].map((contact, index) => (
              <Link 
                key={index} 
                href={contact.link}
                className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="text-3xl">{contact.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800">{contact.title}</h3>
                  <p className="text-gray-600">{contact.value}</p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            {[
              { 
                icon: "LinkedIn", 
                link: "https://linkedin.com",
                color: "text-blue-600 hover:text-blue-800"
              },
              { 
                icon: "GitHub", 
                link: "https://github.com",
                color: "text-gray-800 hover:text-black"
              },
              { 
                icon: "Twitter", 
                link: "https://twitter.com",
                color: "text-blue-400 hover:text-blue-600"
              }
            ].map((social, index) => (
              <Link 
                key={index} 
                href={social.link} 
                target="_blank"
                className={`text-2xl transition-colors duration-300 ${social.color}`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
