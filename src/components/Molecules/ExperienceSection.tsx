import React from "react";
import Card from "../Atoms/Card";

import img1 from "../../../public/bus.jpg";
import img2 from "../../../public/bus.jpg";

const ExperienceSection = () => {
    const images = [img1, img2];

    return (
        <div className="p-12 dark:bg-[#001f35]/30">
            <div className="mb-4 gap-2 flex flex-col">
                <h1 className="text-5xl font-bold text-[#00ff30]">
                    The Cityflo Experience
                </h1>
                <p className="text-l text-[#00FFFF]">
                    Sit back, relax. We’ll drive you to work and back.
                </p>
            </div>
            <Card images={images} />
        </div>
    );
};

export default ExperienceSection;
