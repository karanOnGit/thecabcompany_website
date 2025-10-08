import React from 'react'

const HeroSection = () => {
    return (
        <div className="font-sans flex flex-col md:flex-row items-center justify-center min-h-screen p-4 sm:p-8 md:p-16 lg:p-20 gap-8 sm:gap-12 md:gap-16">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl/tight font-bold text-center">
                <span className="text-[#00ff30]">Reimagining</span> <br />
                <span>Daily</span> <br />
                <span className="text-[#00ff30]">Commutes</span>
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-center md:text-left max-w-md">
                This is where you can introduce your website or application.
            </div>
        </div>
    )
}

export default HeroSection