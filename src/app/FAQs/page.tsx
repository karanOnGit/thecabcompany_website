import { FAQs } from "@/components/Atoms/FAQs";
import React from "react";

const page = () => {
    return (
        <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 border border-white/20">
                <h1 className="text-3xl font-extrabold text-center text-[#00ff30] mb-2">
                    Frequently Asked Questions
                </h1>
                <p className="text-center text-gray-300 mb-10">
                    Find answers to common questions about booking, riding, and using
                    TheCabCompany services.
                </p>

                <FAQs />

                <div className="mt-12 text-center">
                    <h3 className="text-xl font-semibold text-[#00ff30]">
                        Still need help?
                    </h3>
                    <p className="text-gray-300 mt-2">
                        Visit our <span className="text-[#00ff30]">Help & Support</span>{" "}
                        section in the app for more assistance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default page;
