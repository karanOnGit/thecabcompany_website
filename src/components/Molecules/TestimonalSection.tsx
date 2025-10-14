import Image from "next/image";
import { TestimonalCard } from "../Atoms/TestimonalCard";

const TestimonalSection = () => {
    const comment = [
        "thecabcompany made my daily commute so much easier and comfortable!",
        "the cabcompany has wide range of cab facility",
    ];

    return (
        <div className="px-4 sm:px-8 md:px-12 py-12 bg-transparent">
            <div className="mb-8 flex flex-col gap-4 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00ff30] leading-tight">
                    What they say, is who we are
                </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 mb-8">
                <div className="bg-[#001f35] px-6 sm:px-10 py-4 rounded-full flex flex-col sm:flex-row items-center justify-between w-full sm:w-[550px] md:w-[600px] cursor-pointer gap-4 sm:gap-0">
                    <div className="text-center sm:text-left">
                        <p className="text-xl sm:text-2xl font-bold text-white">
                            Customer Rating
                        </p>
                        <p className="text-[#f2ff00] text-sm sm:text-base">
                            100k+ ratings
                        </p>
                    </div>

                    <div className="flex items-center justify-center gap-3 sm:gap-4">
                        <Image
                            src="/star.svg"
                            alt="Star Icon"
                            width={35}
                            height={35}
                            className="drop-shadow-lg w-8 h-8 sm:w-[45px] sm:h-[45px]"
                        />
                        <p className="text-[#00FFFF] text-3xl sm:text-4xl md:text-5xl font-bold">
                            4.6 / 5
                        </p>
                    </div>
                </div>
            </div>

            <TestimonalCard comment={comment} />
        </div>
    );
};

export default TestimonalSection;
