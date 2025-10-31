import React from 'react';
import Image from "next/image";
import OurStorySection from '@/components/Molecules/OurStorySection';
import AboutNewsSection from '@/components/Molecules/AboutNewsSection';
import TrustNewSection from '@/components/Molecules/TrustNewSection';
import AboutPlatformSection from '@/components/Molecules/AboutPlatformSection';
import AboutComponyFigures from '@/components/Molecules/AboutComponyFigures';
import AboutFairServices from '@/components/Molecules/AboutFairServices';

const page = () => {
    return (
        <div className="font-sans">
            <div className='flex flex-col items-center gap-10 min-h-screen justify-center'>
                <div className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl/tight font-bold text-center">
                    <span className='text-[#00ff30]'>TheCabCompany</span> began as <br /> a response to injustice
                </div>
                <div>
                    <button className="bg-[#001f35]/90 dark:bg-[#00FFFF]/90 text-white dark:text-[#001f35] rounded-full px-6 py-3 flex items-center gap-2 shadow-md hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition cursor-pointer">
                        <Image
                            src="/play.svg"
                            alt="play-icon"
                            width={15}
                            height={15}
                            className="drop-shadow-lg w-4 h-4 sm:w-[15px] sm:h-[15px]"
                        />
                        Watch our story
                    </button>
                </div>
            </div>

            <OurStorySection />
            <AboutFairServices />
            <TrustNewSection />
            <AboutPlatformSection />
            <AboutComponyFigures />
            <AboutNewsSection />
        </div>
    )
}

export default page;