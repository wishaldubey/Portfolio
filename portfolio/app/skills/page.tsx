import { Card } from '@/components/ui/card'

const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'CSS/Sass', level: 85 },
  { name: 'GraphQL', level: 70 },
]

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-5xl font-bold mb-8 text-black dark:text-white">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {skills.map((skill, index) => (
          <Card key={index} variant="neobrutalism" className="p-6 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">{skill.name}</h2>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-yellow-200 dark:bg-yellow-600">
                    {skill.level}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200 border-2 border-black dark:border-white">
                <div 
                  style={{ width: `${skill.level}%` }} 
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400 dark:bg-yellow-600"
                ></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="absolute top-40 left-10 w-32 h-32 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400 dark:bg-pink-600 transform rotate-12 mix-blend-multiply dark:mix-blend-screen"></div>
    </div>
  )
}

