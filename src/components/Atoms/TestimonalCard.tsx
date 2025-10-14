import React from "react";

interface TestimonalCardProps {
    comment: string[];
}

export const TestimonalCard: React.FC<TestimonalCardProps> = ({ comment }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comment?.map((text, index) => (
                <div
                    key={index}
                    className="bg-gray-100 dark:bg-[#001f35]/20 p-6 rounded-2xl shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
                >
                    <div className="mb-4">
                        <p className="text-3xl sm:text-4xl font-semibold text-[#00FFFF] mb-2">“</p>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#00FFFF] mb-2">{text.split('.')[0]}</h3>
                    </div>

                    <div className="mt-4">
                        <p className="font-semibold text-gray-900 dark:text-white">Aparna</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Senior Manager</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">Union Bank of India</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
