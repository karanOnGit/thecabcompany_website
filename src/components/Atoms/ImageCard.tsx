import React from "react";
import Image, { StaticImageData } from "next/image";

interface ImageCardProps {
    images: StaticImageData[];
}

export const ImageCard: React.FC<ImageCardProps> = ({ images }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-6 md:gap-8 flex-wrap">
            {images?.map((img, index) => (
                <div
                    key={index}
                    className="w-full sm:w-[48%] md:w-[45%] lg:w-[40%] xl:w-[30%] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                >
                    <Image
                        src={img}
                        alt={`Experience ${index + 1}`}
                        className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover"
                        priority
                    />
                </div>
            ))}
        </div>
    );
};
