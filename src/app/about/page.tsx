import React from 'react';
import Image from "next/image";

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

            <div className="dark:bg-[#001f35]/30 min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-16 font-sans">
                <div className="relative flex-1 w-full min-h-[550px] lg:min-h-[600px]">
                    <div className="absolute top-[-10%] right-10 sm:right-70 transform rotate-10 z-10 w-[300px] h-[300px]">
                        <Image
                            src="/frozen-face.jpg"
                            alt="Frozen person in winter gear"
                            fill
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </div>

                    <div className="absolute top-[25%] right-10 sm:right-20 transform rotate-10 z-1 w-[300px] h-[300px]">
                        <Image
                            src="/snowy-car.jpg"
                            alt="Frozen person in winter gear"
                            fill
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </div>

                    <div className="absolute bottom-0 right-20 sm:right-80 transform rotate-340 z-10 w-[300px] h-[300px]">
                        <Image
                            src="/woman-coat.jpg"
                            alt="Woman in fur coat walking in cold"
                            fill
                            className="rounded-2xl shadow-lg object-cover"
                        />
                    </div>
                </div>

                <div className="flex-1 max-w-xl text-[#111]">
                    <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Our Story
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-[#00FFFF]/90">
                        It was New Year’s Eve 2012 in the northern city of{" "}
                        <span className="bg-[#fff] px-2 text-lime-300">Karnataka</span>
                    </h1>

                    <p className="text-lg leading-relaxed text-white mb-4">
                        Temperatures dropped to –45°C (–49°F). Local taxi companies colluded
                        to dramatically increase their prices, leaving many locals stranded in
                        the dead of winter.
                    </p>

                    <p className="text-lg leading-relaxed text-white">
                        This unfair price hike left the people of Yakutsk outraged, so they
                        came together on social media to find and offer rides — and most
                        importantly, to agree on fair prices. What started as a grassroots
                        collective action eventually became the <b>TheCabCompany app</b>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page;