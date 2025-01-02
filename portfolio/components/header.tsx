'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import DarkModeToggle from './dark-mode-toggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white dark:bg-gray-800 border-b-4 border-black dark:border-white py-4 transition-colors duration-300">
      <nav className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold text-black dark:text-white">
          Your Name
        </Link>
        <div className="flex flex-wrap gap-2 items-center">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="neobrutalism"
              asChild
              className={`${pathname === item.href ? 'bg-yellow-500 dark:bg-yellow-600' : ''} dark:text-black`}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  )
}

