import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce website with React, Next.js, and Stripe integration",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      imageUrl: "/project.jpeg",
      githubLink: "#",
      liveLink: "#",
      category: "Web Development",
      complexity: "Advanced"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Kanban-style task management application with real-time collaboration",
      technologies: ["React", "Firebase", "Typescript"],
      imageUrl: "/project.jpeg",
      githubLink: "#",
      liveLink: "#",
      category: "Productivity",
      complexity: "Intermediate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
          My Creative Portfolio
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
            >
              {/* Project Image with Overlay */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="text-white space-y-2">
                    <span className="text-sm bg-blue-500 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm bg-green-500 px-3 py-1 rounded-full ml-2">
                      {project.complexity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition">
                  {project.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
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
    </div>
  );
}
