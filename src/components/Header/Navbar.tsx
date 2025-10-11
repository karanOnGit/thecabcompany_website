"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", path: "/about" },
        { name: "Subscription & Plans", path: "/subscription" },
        { name: "Customer Guidelines", path: "/customer-guidelines" },
        { name: "FAQs", path: "/FAQs" },
    ];

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="backdrop-blur-xl bg-white/10 dark:bg-[#001f35]/30 border border-white/20 dark:border-[#00ff30]/20 text-white px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between rounded-b-3xl sm:rounded-b-4xl shadow-[0_8px_25px_rgba(0,0,0,0.2)] sticky top-0 z-50"
        >
            {/* Logo and Menu Button */}
            <div className="w-full flex items-center justify-between">
                <Link
                    href="/"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00ff30] to-[#00ff90] text-transparent bg-clip-text"
                >
                    TheCabCompany
                </Link>

                <button
                    className="sm:hidden text-white hover:text-[#00ff30] transition"
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
                        className="flex flex-col sm:hidden items-center space-y-3 mt-3 overflow-hidden w-full bg-white/10 dark:bg-[#001f35]/40 rounded-2xl border border-white/10 p-4 backdrop-blur-lg"
                    >
                        {navLinks.map((link) => (
                            <li key={link.name} className="w-full text-center">
                                <Link
                                    href={link.path}
                                    className="text-base hover:text-[#00ff30] transition"
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
                    <li key={link.name} className="min-w-max">
                        <Link
                            href={link.path}
                            className="text-base sm:text-lg hover:text-[#00ff30] transition"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Navbar;
