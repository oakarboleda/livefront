'use client'
import React, { useState } from 'react'

/**
 * NavBar component
 *
 * A navigation bar component that includes a logo, navigation links, and a mobile menu button.
 *
 * @returns {JSX.Element} The rendered navigation bar component.
 */
export const NavBar: React.FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  /**
   * Toggles the state of the mobile menu.
   *
   * This function updates the `isMenuOpen` state to its opposite value,
   * effectively opening the menu if it is closed, and closing it if it is open.
   */
  const handleMobileMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsSideNavOpen(!isSideNavOpen)
  }
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left Side: Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <a href="/#" aria-label="RollWithIt: Your D&D companion.">
              RollWithIt: Your D&D companion.
            </a>
          </div>

          {/* Right Side: Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="/#"
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Profile"
              >
                Profile
              </a>
            </li>
          </ul>

          {/* Mobile Menu (optional) */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => handleMobileMenuClick()}
              className="text-gray-600 focus:outline-none focus:text-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Open mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {isSideNavOpen && (
              <div className="fixed inset-0 flex z-50">
                <div
                  className="fixed inset-0 bg-black opacity-50"
                  onClick={() => setIsSideNavOpen(false)}
                ></div>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white transform transition-transform duration-300 ease-in-out">
                  <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                    <div className="flex-shrink-0 flex items-center px-4">
                      <a href="/#" aria-label="RollWithIt: Your D&D companion.">
                        RollWithIt: Your D&D companion.
                      </a>
                    </div>
                    <nav className="mt-5 px-2 space-y-1">
                      <a
                        href="/#"
                        className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                      >
                        Home
                      </a>
                      <a
                        href="/#"
                        className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                      >
                        Profile
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
