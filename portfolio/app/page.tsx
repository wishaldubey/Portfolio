import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-4 text-black dark:text-white">Hi, I'm Your Name</h1>
          <p className="text-2xl mb-8 text-gray-700 dark:text-gray-300">A passionate web developer crafting digital experiences.</p>
          <Button variant="neobrutalism" asChild className="text-black">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
        <div className="relative">
          <div className="bg-yellow-400 dark:bg-yellow-600 border-4 border-black dark:border-white p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <img src="/placeholder.svg?height=400&width=400" alt="Your Name" className="w-full h-auto" />
          </div>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 dark:bg-blue-600 rounded-lg rotate-12 mix-blend-multiply dark:mix-blend-screen"></div>
        </div>
      </div>
    </div>
  )
}

