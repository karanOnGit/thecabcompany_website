import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="backdrop-blur-xl bg-white/10 dark:bg-[#001f35]/30 border-t border-white/20 dark:border-[#00FFFF]/20 py-20 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-[#001f35] dark:text-white rounded-t-3xl shadow-[0_-8px_30px_rgba(0,255,255,0.25)] transition-all duration-500">
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                <h1 className="text-4xl font-semibold bg-gradient-to-r from-[#00ff30] to-[#00FFFF] text-transparent bg-clip-text">
                    TheCabCompany
                </h1>

                <button className="bg-[#001f35]/90 dark:bg-[#00FFFF]/90 text-white dark:text-[#001f35] rounded-full px-6 py-3 flex items-center gap-2 shadow-md hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition cursor-pointer">
                    <span className="text-base font-medium">Download the app</span>
                    <span className="flex items-center gap-1 text-lg">
                        <i className="fa-brands fa-apple"></i>
                        <i className="fa-brands fa-google-play"></i>
                    </span>
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-sm">
                <div className="space-y-6">
                    <h3 className="text-base font-bold uppercase tracking-wide">Company</h3>
                    <ul className="space-y-1 text-[#001f35]/80 dark:text-gray-300">
                        <li>
                            <a
                                href="/privacy-policy"
                                className="hover:text-[#00ff30] dark:hover:text-[#00FFFF] transition"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/refunds-cancellation"
                                className="hover:text-[#00ff30] dark:hover:text-[#00FFFF] transition"
                            >
                                Refunds & Cancellation
                            </a>
                        </li>
                        <li>
                            <a
                                href="/subscription"
                                className="hover:text-[#00ff30] dark:hover:text-[#00FFFF] transition"
                            >
                                Subscription Policy
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h3 className="text-base font-bold uppercase tracking-wide">Support</h3>
                    <ul className="space-y-1 text-[#001f35]/80 dark:text-gray-300">
                        <li>
                            <a
                                href="/contact"
                                className="hover:text-[#00ff30] dark:hover:text-[#00FFFF] transition"
                            >
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/customer-guidelines"
                                className="hover:text-[#00ff30] dark:hover:text-[#00FFFF] transition"
                            >
                                Customer Guidelines
                            </a>
                        </li>
                        <li>
                            <a
                                href="/FAQs"
                                className="hover:text-[#00ff30] dark:hover:text-[#00FFFF] transition"
                            >
                                FAQs
                            </a>
                        </li>
                    </ul>

                    <div className="flex gap-4 pt-3">
                        <FaFacebookF className="hover:text-[#00FFFF] cursor-pointer transition transform hover:scale-110" />
                        <FaInstagram className="hover:text-[#00FFFF] cursor-pointer transition transform hover:scale-110" />
                        <FaTwitter className="hover:text-[#00FFFF] cursor-pointer transition transform hover:scale-110" />
                        <FaLinkedinIn className="hover:text-[#00FFFF] cursor-pointer transition transform hover:scale-110" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
