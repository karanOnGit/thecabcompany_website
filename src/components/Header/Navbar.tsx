"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#00ff30] text-white px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between rounded-b-3xl sm:rounded-b-4xl">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    TheCabCompany
                </h1>

                <button
                    className="sm:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        key="menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex flex-col sm:hidden items-center space-y-3 mt-3 overflow-hidden"
                    >
                        <li className="text-base hover:underline cursor-pointer">Home</li>
                        <li className="text-base hover:underline cursor-pointer">About</li>
                        <li className="text-base hover:underline cursor-pointer">Services</li>
                        <li className="text-base hover:underline cursor-pointer">Contact</li>
                    </motion.ul>
                )}
            </AnimatePresence>

            <ul className="hidden sm:flex items-center space-x-6 md:space-x-8 mt-3 sm:mt-0">
                <li className="text-base sm:text-lg hover:underline cursor-pointer">Home</li>
                <li className="text-base sm:text-lg hover:underline cursor-pointer">About</li>
                <li className="text-base sm:text-lg hover:underline cursor-pointer">Services</li>
                <li className="text-base sm:text-lg hover:underline cursor-pointer">Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;

