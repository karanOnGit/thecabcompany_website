import React from "react";
import img1 from "../../../public/bus.jpg";
import img2 from "../../../public/bus.jpg";
import { ImageCard } from "../Atoms/ImageCard";

const ExperienceSection = () => {
    const images = [img1, img2, img1];

    return (
        <div className="px-4 sm:px-8 md:px-12 py-12 dark:bg-[#001f35]/30">
            <div className="mb-8 flex flex-col gap-3 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00ff30] leading-tight">
                    The TheCabCompany Experience
                </h1>
                <p className="text-base sm:text-lg text-[#00FFFF] max-w-xl mx-auto sm:mx-0">
                    Sit back, relax. We’ll drive you to work and back.
                </p>
            </div>

            <ImageCard images={images} />
        </div>
    );
};

export default ExperienceSection;
