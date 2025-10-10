"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        // { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Subscription & Plans", path: "/subscription" },
        { name: "Customer Guidelines", path: "/customer-guidelines" },
        { name: "FAQs", path: "/FAQs" },
    ];

    return (
        <div className="bg-[#00ff30] text-white px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between rounded-b-3xl sm:rounded-b-4xl">
            {/* Logo and Menu Button */}
            <div className="w-full flex items-center justify-between">
                <Link href="/" className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    TheCabCompany
                </Link>

                <button
                    className="sm:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
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
                        {navLinks.map((link) => (
                            <li key={link.name}
                                className="w-full text-center">
                                <Link
                                    href={link.path}
                                    className="text-base hover:underline cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>

            {/* Desktop Menu */}
            <ul className="hidden sm:flex items-center space-x-6 md:space-x-8 mt-3 sm:mt-0">
                {navLinks.map((link) => (
                    <li key={link.name} className="min-w-max" >
                        <Link
                            href={link.path}
                            className="text-base sm:text-l hover:underline cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
