import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
    images: StaticImageData[];
}

const Card: React.FC<CardProps> = ({ images }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-xl shadow-md"
                />
            ))}
        </div>
    );
};

export default Card;
