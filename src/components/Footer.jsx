import { Heart } from 'lucide-react'
import ContactIcons from './ContactIcons'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-accent-900 border-t border-gray-200 dark:border-accent-700">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold gradient-text mb-4">
              Construction Company
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              We will build it right for you!
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                Home
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Connect With Us!
            </h4>
            <ContactIcons className="flex justify-center md:justify-end space-x-4" />         
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-accent-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Contruction Company. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 