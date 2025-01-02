import './globals.css'
import Layout from '@/components/layout'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'A neo-brutalist portfolio showcasing my web development projects and skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}

