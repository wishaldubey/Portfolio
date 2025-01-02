import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-5xl font-bold mb-8 text-black dark:text-white">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div>
          <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">I'd love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out using the form below or through my social media channels.</p>
          <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">You can also email me directly at: <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline dark:text-blue-400">your.email@example.com</a></p>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-md py-2 px-3 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-md py-2 px-3 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-md py-2 px-3 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-yellow-500 focus:border-yellow-500" required></textarea>
          </div>
          <Button variant="neobrutalism" type="submit" className="text-black">Send Message</Button>
        </form>
      </div>
      <div className="absolute top-40 right-10 w-40 h-40 bg-yellow-400 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-screen"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-400 dark:bg-blue-600 transform rotate-45 mix-blend-multiply dark:mix-blend-screen"></div>
    </div>
  )
}

