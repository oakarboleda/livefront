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
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Logo or Brand */}
          <div className="text-lg font-bold mb-4 md:mb-0">
            <a href="#">RollWithIt</a>
          </div>

          {/* Center: Navigation Links */}
          <div className="space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Profile
            </a>
          </div>

          {/* Right Side: Copyright Text */}
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} RollWithIt. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
