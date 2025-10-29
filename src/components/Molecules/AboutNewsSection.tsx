"use client";
import React from "react";
import Image from "next/image";

const AboutNewsSection = () => {
    const rightCards = [
        {
            id: 1,
            tag: "corporate",
            date: "April 16",
            title:
                "TheCabCompany participates in Gitex Africa with new visions for Future of RH in Morocco",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP1Y0gVXeuZKMk87R6xiGH4WNatriak5VdHg&s",
        },
        {
            id: 2,
            tag: "impact",
            date: "April 13",
            title: "Aurora Tech Award 2025 Announces Global Winners",
            image:
                "https://static.vecteezy.com/system/resources/thumbnails/033/692/769/small/rear-view-of-journalists-interviewing-a-man-in-the-news-studio-media-interview-in-a-conference-room-microphones-press-conference-press-conference-ai-generated-free-photo.jpg",
        },
        {
            id: 3,
            tag: "impact",
            date: "February 25",
            title: "Aurora Tech Award 2025 Announces Groundbreaking Finalists",
            image:
                "https://t3.ftcdn.net/jpg/06/32/94/46/360_F_632944678_pVHjSed6l0jO7uc7oC7AViyEn2qttenK.jpg",
        },
    ];

    return (
        <section className="py-16 px-6 md:px-20">
            <div className="text-center mb-10">
                <button className="bg-black text-white text-sm font-semibold py-1 px-4 rounded-full mb-4">
                    News
                </button>
                <h2 className="text-4xl md:text-5xl font-bold text-[#00ff30]">
                    TheCabCompany in the headlines
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-sm group">
                    <div className="relative w-full h-96 overflow-hidden rounded-3xl group">
                        <Image
                            src="https://images.ctfassets.net/7nr1etht02oh/EKmbWrDlxy9pXTFkIAHcK/2997d11773c35f1372192accc657692d/IMG_3559.jpg"
                            alt="Web Summit"
                            fill
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 cursor-pointer"
                            priority
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="bg-gray-200 text-[#000] text-sm px-3 py-1 rounded-full">
                                corporate
                            </span>
                            <span className="text-[#00ff30] text-sm">April 29</span>
                        </div>
                        <h3 className="text-xl font-semibold leading-snug transition-all duration-300 group-hover:underline cursor-pointer">
                            “We need more business focused on tackling injustices”, states CEO
                            and founder of TheCabCompany
                        </h3>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {rightCards.map((card) => (
                        <div
                            key={card.id}
                            className="flex gap-4 rounded-2xl p-4 shadow-sm group hover:shadow-md transition-all duration-300"
                        >
                            <div className="relative w-32 h-28 flex-shrink-0 overflow-hidden rounded-xl group">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 cursor-pointer"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="bg-gray-200 text-sm px-3 py-1 rounded-full text-[#000]">
                                        {card.tag}
                                    </span>
                                    <span className="text-[#00ff30] text-sm">{card.date}</span>
                                </div>
                                <h4 className="font-semibold text-sm md:text-base leading-snug transition-all duration-300 group-hover:underline cursor-pointer">
                                    {card.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutNewsSection;
