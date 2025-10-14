import React from "react";

// Define the props for a single testimonial
interface TestimonalCardProps {
    comment: string;
    name: string;
    title: string;
    company: string;
}

export const TestimonalCard: React.FC<TestimonalCardProps> = ({
    comment,
    name,
    title,
    company,
}) => {
    return (
        <div className="bg-gray-100 dark:bg-[#001f35]/20 p-6 rounded-2xl shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 h-full">
            <div>
                <p className="text-3xl sm:text-4xl font-semibold text-[#00FFFF] mb-2">“</p>
                <h3 className="text-xl sm:text-2xl font-bold text-[#00FFFF] mb-2">
                    {comment}
                </h3>
            </div>

            <div className="mt-4">
                <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{title}</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{company}</p>
            </div>
        </div>
    );
};