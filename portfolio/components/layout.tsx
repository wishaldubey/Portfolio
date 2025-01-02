import Header from './header'
import { Inter } from 'next/font/google'
import DarkModeToggle from './dark-mode-toggle'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex flex-col min-h-screen ${inter.className} bg-white dark:bg-gray-900 transition-colors duration-300`}>
      <Header />
      <main className="flex-grow relative overflow-hidden">
        {children}
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-pink-400 rotate-45 mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-400 rounded-lg mix-blend-multiply dark:mix-blend-screen"></div>
      </main>
      <footer className="bg-black dark:bg-white text-white dark:text-black py-4 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
        {/* Geometric shapes in footer */}
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-400 rounded-tr-3xl"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-pink-400 rounded-bl-3xl"></div>
      </footer>
    </div>
  )
}

