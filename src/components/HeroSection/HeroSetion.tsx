"use client";
import React from "react";
import { motion } from "framer-motion";

interface TextVariants {
    hidden: {
        opacity: number;
        y: number;
    };
    visible: (i: number) => {
        opacity: number;
        y: number;
        transition: {
            delay: number;
            duration: number;
            ease: string;
        };
    };
}

const textVariants: TextVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3, // delay between spans
            duration: 0.8,
            ease: "easeOut",
        },
    }),
};

const HeroSection = () => {
    return (
        <div className="font-sans flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 sm:gap-12 md:gap-16">
            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl/tight font-bold text-center">
                {["Reimagining", "Daily", "Commutes"].map((text, i) => (
                    <motion.span
                        key={text}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className={i === 0 || i === 2 ? "text-[#00ff30] block" : "block"}
                    >
                        {text}
                    </motion.span>
                ))}
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 text-center md:text-left max-w-md">
                This is where you can introduce your website or application.
            </div>
        </div>
    );
};

export default HeroSection;
