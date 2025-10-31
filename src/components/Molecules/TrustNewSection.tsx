import Image from "next/image";
import React from "react";

const TrustNewSection = () => {
    return (
        <section className="relative py-16 px-6 md:px-16 overflow-hidden">
            {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 w-[400px] h-[400px] bg-[#c9ef00] rounded-full rotate-45 opacity-30"></div> */}
            <div className="relative text-center max-w-6xl mx-auto z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-[#00ff30] leading-tight">
                    Peer-to-peer for transparency and choice
                </h2>
                <p className="mt-4 text-base md:text-lg text-[#FFF] font-medium">
                    Our platform is committed to delivering essential services that meet
                    fundamental life needs and empower individuals with core values, all
                    grounded in the principles of fair business practices.
                </p>
            </div>

            <div className="relative mt-14 flex flex-wrap justify-center items-center gap-6 z-10">
                <div className="w-32 h-44 md:w-48 md:h-64 overflow-hidden rounded-3xl shadow-md">
                    <Image
                        src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Family in car"
                        width={400}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-32 h-44 md:w-48 md:h-64 overflow-hidden rounded-3xl shadow-md">
                    <Image
                        src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Barber cutting hair"
                        width={400}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-44 h-72 md:w-64 md:h-[420px] border-4 border-[#00ff30] rounded-[2.5rem] overflow-hidden shadow-lg">
                    <Image
                        src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Driver"
                        width={400}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-32 h-44 md:w-48 md:h-64 overflow-hidden rounded-3xl shadow-md">
                    <Image
                        src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Worker with tablet"
                        width={400}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-32 h-44 md:w-48 md:h-64 overflow-hidden rounded-3xl shadow-md">
                    <Image
                        src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Man with phone outdoors"
                        width={400}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default TrustNewSection;
