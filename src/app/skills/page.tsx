export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Technologies",
      icon: "💻",
      skills: [
        { name: "React", level: 90, color: "bg-blue-500", gradient: "from-blue-500 to-cyan-400" },
        { name: "Next.js", level: 85, color: "bg-gray-800", gradient: "from-gray-800 to-gray-600" },
        { name: "Vue.js", level: 75, color: "bg-green-500", gradient: "from-green-500 to-emerald-400" },
        { name: "Typescript", level: 80, color: "bg-blue-600", gradient: "from-blue-600 to-indigo-500" }
      ]
    },
    {
      category: "Styling",
      icon: "🎨",
      skills: [
        { name: "Tailwind CSS", level: 90, color: "bg-teal-500", gradient: "from-teal-500 to-green-400" },
        { name: "CSS3", level: 85, color: "bg-blue-400", gradient: "from-blue-400 to-sky-300" },
        { name: "SASS/SCSS", level: 75, color: "bg-pink-500", gradient: "from-pink-500 to-rose-400" },
        { name: "Styled Components", level: 70, color: "bg-purple-500", gradient: "from-purple-500 to-violet-400" }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85, color: "bg-orange-500", gradient: "from-orange-500 to-red-400" },
        { name: "Docker", level: 70, color: "bg-blue-600", gradient: "from-blue-600 to-cyan-500" },
        { name: "Webpack", level: 65, color: "bg-sky-500", gradient: "from-sky-500 to-blue-400" },
        { name: "Figma", level: 75, color: "bg-purple-600", gradient: "from-purple-600 to-indigo-500" }
      ]
    },
    {
      category: "Backend & Databases",
      icon: "🗃️",
      skills: [
        { name: "Node.js", level: 70, color: "bg-green-600", gradient: "from-green-600 to-emerald-500" },
        { name: "Express", level: 65, color: "bg-gray-700", gradient: "from-gray-700 to-slate-600" },
        { name: "MongoDB", level: 60, color: "bg-green-500", gradient: "from-green-500 to-lime-400" },
        { name: "PostgreSQL", level: 55, color: "bg-blue-700", gradient: "from-blue-700 to-cyan-600" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
          My Technical Arsenal
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
            >
              <div className="flex items-center mb-6 space-x-4">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="text-2xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2">
                  {category.category}
                </h2>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="group relative w-full h-12 bg-gray-200 rounded-full overflow-hidden"
                  >
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-70 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}
                    ></div>
                    <div 
                      className="absolute inset-0 flex items-center justify-between px-4 z-10"
                    >
                      <span className="text-gray-800 font-semibold text-sm md:text-base">
                        {skill.name}
                      </span>
                      <span className="text-gray-700 font-bold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div 
                      className={`absolute inset-y-0 left-0 ${skill.color} w-0 group-hover:w-full transition-all duration-700`} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Continuous Learning Journey
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:bg-white/80 transition-all duration-300">
            🚀 As a passionate frontend developer, I'm committed to pushing the boundaries of web technologies. 
            My learning is an endless adventure, constantly exploring new frameworks, design patterns, 
            and innovative solutions that transform digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
