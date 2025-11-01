import { Guidelines } from "@/components/Atoms/Guidelines";
import React from "react";

const page = () => {
    return (
        <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 border border-white/20">
                <h1 className="text-3xl font-extrabold text-center text-[#00ff30] mb-2">
                    Customer Guidelines
                </h1>
                <p className="text-center text-gray-300 mb-10">
                    Dear customer, TheCabCompany is a community-driven service. To make commuting
                    pleasant for everyone, a few small gestures can make a huge difference!
                </p>

                <Guidelines />

                <div className="mt-12 text-center">
                    <p className="text-gray-300">We appreciate your cooperation in ensuring a comfortable ride for all passengers.</p>
                    <h3 className="text-xl font-semibold text-[#00ff30] mt-4">
                        Happy commuting!
                    </h3>
                    <p className="text-gray-400 mt-1">— Team TheCabCompany</p>
                </div>
            </div>
        </section>
    );
};

export default page;
