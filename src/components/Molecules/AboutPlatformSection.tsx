import React from "react";
import Image from "next/image";

const AboutPlatformSection = () => {
    return (
        <section className="dark:bg-[#001f35]/30 py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center md:gap-45 gap-20">
            <div className="relative w-[250px] sm:w-[300px] md:w-[350px]">
                <div className="overflow-hidden shadow-xl">
                    <Image
                        src="https://cdsassets.apple.com/live/7WUAS350/images/ios/ios13-iphone-xs-home-assistive-touch.png"
                        alt="App mockup"
                        width={400}
                        height={800}
                        className="object-cover w-full h-auto"
                    />
                </div>
            </div>

            <div className="max-w-xl text-center md:text-left space-y-5">
                <h2 className="text-2xl md:text-5xl font-bold text-[#00ff30] leading-tight">
                    TheCabCompany is committed to{" "}
                    <span className="relative inline-block">
                        <span className="relative z-10">challenging injustice</span>
                        <span className="absolute left-0 bottom-1 w-full h-4 bg-[#FFF] -z-0"></span>
                    </span>{" "}
                    in communities around the India
                </h2>

                <p className="text-base md:text-lg text-[#fff] font-medium">
                    In addition to mobility solutions, we offer intercity transportation,
                    delivery, freight and lending services, as well as on-demand task
                    services in different markets of operation.
                </p>
            </div>
        </section>
    );
};

export default AboutPlatformSection;
