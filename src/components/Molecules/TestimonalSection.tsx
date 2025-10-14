"use client"
import Image from "next/image";
import { TestimonalCard } from "../Atoms/TestimonalCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TestimonalSection = () => {
    const testimonials = [
        {
            comment: "Made my daily commute so much easier and comfortable!",
            name: "Aparna",
            title: "Senior Manager",
            company: "Union Bank of India",
        },
        {
            comment: "The wide range of cab facilities is truly impressive.",
            name: "Rahul Sharma",
            title: "Software Engineer",
            company: "Tech Solutions Inc.",
        },
        {
            comment: "Always on time and the drivers are very professional.",
            name: "Priya Singh",
            title: "Marketing Head",
            company: "Creative Minds",
        },
        {
            comment: "A fantastic service that I rely on for all my city travel.",
            name: "Vikram Kumar",
            title: "Product Designer",
            company: "Innovate Co.",
        },
    ];

    return (
        <div className="px-4 sm:px-8 md:px-12 py-12 bg-transparent">
            <div className="mb-8 flex flex-col gap-4 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00ff30] leading-tight">
                    What they say, is who we are
                </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 mb-12">
                <div className="bg-[#001f35] px-6 sm:px-10 py-4 rounded-full flex flex-col sm:flex-row items-center justify-between w-full sm:w-auto cursor-pointer gap-4 sm:gap-10">
                    <div className="text-center sm:text-left">
                        <p className="text-xl sm:text-2xl font-bold text-white">
                            Customer Rating
                        </p>
                        <p className="text-[#f2ff00] text-sm sm:text-base">100k+ ratings</p>
                    </div>

                    <div className="flex items-center justify-center gap-3 sm:gap-4">
                        <Image
                            src="/star.svg"
                            alt="Star Icon"
                            width={45}
                            height={45}
                            className="drop-shadow-lg w-8 h-8 sm:w-[45px] sm:h-[45px]"
                        />
                        <p className="text-[#00FFFF] text-3xl sm:text-4xl md:text-5xl font-bold">
                            4.6 / 5
                        </p>
                    </div>
                </div>
            </div>

            {/* 4. Implement the Swiper component */}
            <Swiper
                modules={[Pagination, Autoplay]} 
                spaceBetween={30} 
                pagination={{ clickable: true }} 
                loop={true} 
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    
                    640: { 
                        slidesPerView: 1,
                    },
                    768: { 
                        slidesPerView: 2,
                    },
                    1024: { 
                        slidesPerView: 3,
                    },
                }}
                className="mySwiper" 
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} style={{ height: "auto" }}>
                        <TestimonalCard
                            comment={testimonial.comment}
                            name={testimonial.name}
                            title={testimonial.title}
                            company={testimonial.company}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonalSection;