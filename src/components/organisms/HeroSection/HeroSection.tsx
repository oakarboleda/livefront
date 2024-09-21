// components/HeroSection.tsx
import React from 'react'
import Image from 'next/image'
/**
 * HeroSection component
 *
 * A hero section component that displays a welcome message and an image.
 *
 * @returns {JSX.Element} The rendered hero section component.
 */
const HeroSection: React.FC = () => {
  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-between p-8 min-h-screen"
      aria-labelledby="hero-heading"
    >
      {/* Left Column: Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Welcome Adventurer!
        </h1>
        <p id="motto" className="mt-4 text-lg md:text-xl text-gray-600">
          Let's set off on a grand adventure!
        </p>
      </div>

      {/* Right Column: Image Content */}
      <div className="flex-1 flex justify-center md:justify-center">
        <Image
          src="/avatar.png"
          alt="Illustration of a hero character"
          className="max-w-full"
          width={300}
          height={300}
        />
      </div>
    </section>
  )
}

export default HeroSection
