"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const teamMembers = [
    {
        name: "Kshiteesh Dayal",
        position: "CEO and Founder",
        description:
            "Kshiteesh Dayal is the visionary CEO and Founder of the company. With a strong background in technology and leadership, he drives innovation and strategic growth. He is committed to building sustainable solutions and empowering teams to achieve excellence. An avid reader and mentor, Kshiteesh inspires the next generation of leaders.",
        buttonText: "Read Kshiteesh’s story",
    },
    {
        name: "Karan Bhardwaj",
        position: "Chief Technical Officer (CTO)",
        description:
            "Karan Bhardwaj is the Chief Technical Officer, leading the company’s technology vision and engineering excellence. With deep expertise in software architecture, cloud infrastructure, and AI-driven innovation, he spearheads the development of scalable, secure, and cutting-edge platforms. A hands-on leader, Karan fosters a culture of technical innovation and empowers engineers to push boundaries.",
        buttonText: "Explore Karan’s tech vision",
    },
];

const images = [
    "https://media.licdn.com/dms/image/v2/D5603AQGj3QkynLETKg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670005995766?e=1763596800&v=beta&t=LmaRubIWXObojdZeH0N2jBpu50JHJii600T1xYWB3DA",
    "https://media.licdn.com/dms/image/v2/D5603AQFST9b1g09oLg/profile-displayphoto-scale_400_400/B56Zf4lvC.HQAk-/0/1752222334002?e=1763596800&v=beta&t=GAEShBH9LKUDBthwomXdCpNr5bnNWtLHKVNCJHQRK5U",
];

const AboutCompanyFigures = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    const currentMember = teamMembers[currentImage];

    return (
        <section className="relative overflow-hidden h-[90vh]">
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1483750356451-828d7d2cec30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                    alt="Background leaves"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto px-6 py-16 gap-10">
                <div className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] relative h-[420px]">
                    {images.map((img, idx) => (
                        <Image
                            key={idx}
                            src={img}
                            alt={teamMembers[idx].name}
                            width={500}
                            height={700}
                            className={`rounded-lg object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === currentImage ? "opacity-100" : "opacity-0"
                                }`}
                        />
                    ))}
                </div>

                <div className="max-w-2xl text-center md:text-left">
                    <h2 className="text-4xl text-[#00ff30] md:text-5xl font-bold mb-2">
                        {currentMember.name}
                    </h2>
                    <h3 className="text-lg md:text-xl font-semibold text-[#fff] mb-4">
                        {currentMember.position}
                    </h3>

                    <p className="text-base md:text-lg text-justify leading-relaxed text-gray-100 mb-6">
                        {currentMember.description}
                    </p>

                    <button className="bg-[#c9ef00] text-black font-semibold py-2 px-5 rounded-full shadow-md hover:bg-[#b8e000] transition">
                        {currentMember.buttonText}
                    </button>
                </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="relative z-10 flex justify-center md:justify-start gap-3 px-6 pb-10 max-w-7xl mx-auto flex-wrap">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-gray-800 cursor-pointer transition-transform duration-300 hover:scale-110 ${idx === currentImage ? "ring-2 ring-[#c9ef00]" : ""
                            }`}
                        onClick={() => setCurrentImage(idx)}
                    >
                        <Image
                            src={img}
                            alt={teamMembers[idx].name}
                            width={64}
                            height={64}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutCompanyFigures;