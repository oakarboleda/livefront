// components/HeroSection.tsx
import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between p-8 min-h-screen">
      {/* Left Column: Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Your Hero Title
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          This is your amazing hero section where you describe your product or service. This text is
          responsive and will adjust according to the screen size.
        </p>
      </div>

      {/* Right Column: Image Content */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img src="/avatar.png" alt="Hero" className="max-w-full" />
      </div>
    </section>
  )
}

export default HeroSection
