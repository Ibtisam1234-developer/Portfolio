import { SkillIcons } from './SkillIcons';

const skills = [
  { name: 'Agentic AI', icon: SkillIcons.agenticAI, level: 60 },
  { name: 'Prompt Engineering', icon: SkillIcons.promptEngineering, level: 85 },
  { name: 'Python', icon: SkillIcons.python, level: 88 }
]

export default function Skills() {
  return (
    <div className="min-h-screen animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My <span className="text-blue-600">Skills</span>
      </h1>
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center glass-card p-6 hover-scale animate-stagger"
            >
              <skill.icon 
                className="text-5xl text-blue-600 mb-4" 
                style={{ color: skill.level > 80 ? '#3B82F6' : skill.level > 60 ? '#10B981' : '#F43F5E' }}
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex items-center space-x-4 animate-stagger"
            >
              <span className="w-24 text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <div className="flex-grow bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ 
                    width: `${skill.level}%`, 
                    backgroundColor: skill.level > 80 ? '#3B82F6' : skill.level > 60 ? '#10B981' : '#F43F5E' 
                  }}
                ></div>
              </div>
              <span className="w-12 text-right text-gray-700 dark:text-gray-300">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
