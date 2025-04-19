import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "Diabetes Checker",
    description: "A web application to check if you have diabetes or not and generate a PDF report.",
    technologies: ["Python", "Streamlit","FPDF"],
    imageUrl: "/5.png",
    githubLink: "https://github.com/Ibtisam1234-developer/Diabetes-Checker",
    liveLink: "https://diabetes-checker1.streamlit.app/",
    category: "Web Development",
    complexity: "Advanced"
  },
  {
    id: 2,
    title: "Agent Maker Web App",
    description: "A Full Online Agent maker that works on the instruction provided by user",
    technologies: ["Python", "Streamlit", "Openai-Agents"],
    imageUrl: "/project1.jpeg",
    githubLink: "https://github.com/Ibtisam1234-developer/Agent-maker1",
    liveLink: "https://agent-maker.streamlit.app/",
    category: "Productivity",
    complexity: "Intermediate"
  },
  {
    id: 4,
    title: "Voice Assistant",
    description: "Python voice assistant handling speech, commands, downloads, and automation tasks.",
    technologies: ["Python", "SpeechRecognition", "pyttsx3", "webbrowser", "wikipedia", "requests", "yt_dlp", "huggingface_hub"],
    imageUrl: "/10.png",
    githubLink: "https://github.com/Ibtisam1234-developer/Voice-Assistant",
    liveLink: "#",
    category: "Backend",
    complexity: "Intermediate"
  },
  {
    id: 5,
    title: "Weather GUI App",
    description: "A GUI application to display real-time weather data using OpenWeatherMap API.",
    technologies: ["Python", "tkinter", "OpenWeatherMap API"],
    imageUrl: "/3.png",
    githubLink: "https://github.com/Ibtisam1234-developer/Weather-App",
    liveLink: "#",
    category: "Data Visualization",
    complexity: "Beginner"
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My <span className="text-blue-600">Projects</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`glass-card hover-scale overflow-hidden rounded-xl shadow-lg animate-stagger delay-${index * 100}`}
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <Link 
                  href={project.githubLink} 
                  target="_blank" 
                  className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition transform hover:scale-105"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    className="mr-2"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </Link>
                <Link 
                  href={project.liveLink} 
                  target="_blank" 
                  className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition transform hover:scale-105"
                >
                  Live
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
