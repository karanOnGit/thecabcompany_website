import SubscriptionPlans from "@/components/Molecules/SubscriptionPlans";
import SubscriptionPolicy from "@/components/Molecules/SubscriptionPolicy";
import React from "react";

const page = () => {
    return (
        <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="max-w-6xl mx-auto text-center mb-20">
                <h2 className="text-4xl font-extrabold mb-3 text-white">
                    Choose your plan
                </h2>
                <p className="text-gray-300">
                    Get the right plan for your needs. Plans can be upgraded anytime.
                </p>
                
                <SubscriptionPlans />
                <SubscriptionPolicy />
            </div>
        </section>
    );
};

export default page;
