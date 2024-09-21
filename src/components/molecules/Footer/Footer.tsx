// components/Footer.tsx
import React from 'react'

/**
 * Footer component
 *
 * A footer component that includes a logo or brand, navigation links, and copyright text.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Logo or Brand */}
          <div className="text-lg font-bold mb-4 md:mb-0">
            <a href="#" aria-label="RollWithIt Home">
              RollWithIt
            </a>
          </div>

          {/* Center: Navigation Links */}
          <nav className="space-x-6 mb-4 md:mb-0" aria-label="Footer Navigation">
            <a href="#" className="text-gray-300 hover:text-white" aria-label="Home">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white" aria-label="Profile">
              Profile
            </a>
          </nav>

          {/* Right Side: Copyright Text */}
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} RollWithIt. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
