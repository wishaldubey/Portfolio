'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Cloud } from 'lucide-react'

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`
          w-20 h-10 rounded-full transition-colors duration-200 ease-in-out relative overflow-hidden
          ${theme === 'dark' 
            ? 'bg-blue-950 border-2 border-blue-800' 
            : 'bg-sky-400 border-2 border-sky-300'
          }
        `}
        aria-label="Toggle theme"
      >
        <span
          className={`
            absolute block w-8 h-8 rounded-full bg-white shadow-lg transform transition-transform duration-200 top-[2px] left-[2px]
            ${theme === 'dark' ? 'translate-x-[calc(150%-8px)]' : 'translate-x-0'}
          `}
        />
        <span className="absolute inset-0 flex items-center justify-between px-1.5">
          <span className="flex items-center">
            {theme === 'dark' ? (
              <Moon className="w-5 h-5 text-yellow-300 ml-11" />
            ) : (
              <div className="flex items-center relative z-10">
                <Sun className="w-5 h-5 text-yellow-400" />
                <Cloud className="w-4 h-4 text-white ml-6" />
              </div>
            )}
          </span>
          <span className="flex items-center mr-1">
            {theme === 'dark' ? (
              <>
                <span className="w-1 h-1 rounded-full bg-yellow-300 absolute right-14 top-2.5" />
                <span className="w-1 h-1 rounded-full bg-yellow-300 absolute right-12 top-4" />
                <span className="w-1 h-1 rounded-full bg-yellow-300 absolute left-3 top-5" />
              </>
            ) : null}
          </span>
        </span>
      </button>
    </div>
  )
}

