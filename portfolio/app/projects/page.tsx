import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js and Stripe integration.',
    image: '/placeholder.svg?height=200&width=300',
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A React-based task management application with real-time updates using Firebase.',
    image: '/placeholder.svg?height=200&width=300',
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that provides real-time weather information using a third-party API.',
    image: '/placeholder.svg?height=200&width=300',
    link: '#',
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-5xl font-bold mb-8 text-black dark:text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <Card key={index} variant="neobrutalism" className="flex flex-col bg-white dark:bg-gray-800">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">{project.title}</h2>
              <p className="text-lg mb-4 flex-grow text-gray-700 dark:text-gray-300">{project.description}</p>
              <Button variant="neobrutalism" asChild className="self-start text-black">
                <Link href={project.link}>View Project</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="absolute top-40 right-10 w-40 h-40 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-400 dark:bg-pink-600 transform rotate-45 mix-blend-multiply dark:mix-blend-screen"></div>
    </div>
  )
}

