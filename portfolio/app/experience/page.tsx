import { Card } from '@/components/ui/card'

const experiences = [
  {
    title: 'Senior Web Developer',
    company: 'Tech Innovators Inc.',
    period: '2022 - Present',
    description: 'Leading a team of developers in creating cutting-edge web applications using React and Node.js.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2019 - 2022',
    description: 'Developed and maintained various web applications using MERN stack and implemented CI/CD pipelines.',
  },
  {
    title: 'Junior Web Developer',
    company: 'WebCraft Studios',
    period: '2017 - 2019',
    description: 'Assisted in the development of responsive websites and e-commerce platforms using WordPress and PHP.',
  },
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-5xl font-bold mb-8 text-black dark:text-white">Experience</h1>
      <div className="space-y-8 relative z-10">
        {experiences.map((exp, index) => (
          <Card key={index} variant="neobrutalism" className="p-6 bg-white dark:bg-gray-800 text-black dark:text-white">
            <h2 className="text-2xl font-bold mb-2">{exp.title}</h2>
            <h3 className="text-xl mb-2">{exp.company}</h3>
            <p className="text-lg mb-2 text-gray-600 dark:text-gray-400">{exp.period}</p>
            <p className="text-lg">{exp.description}</p>
          </Card>
        ))}
      </div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-400 dark:bg-pink-600 transform rotate-12 mix-blend-multiply dark:mix-blend-screen"></div>
    </div>
  )
}

