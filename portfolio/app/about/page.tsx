import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-8 text-black dark:text-white">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="bg-pink-300 dark:bg-pink-600 border-4 border-black dark:border-white p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <img src="/placeholder.svg?height=400&width=400" alt="About Me" className="w-full h-auto" />
          </div>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 dark:bg-blue-600 transform rotate-45 mix-blend-multiply dark:mix-blend-screen"></div>
        </div>
        <div className="relative z-10">
          <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
            I'm a passionate web developer with a keen eye for design and a love for creating intuitive, user-friendly interfaces. With expertise in modern web technologies, I bring ideas to life through clean, efficient code.
          </p>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming my next big idea.
          </p>
          <Button variant="neobrutalism" asChild className="text-black">
            <Link href="/experience">Check out my experience</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

