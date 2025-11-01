"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "How do I book a ride?",
        answer: (
            <>
                Rides can be booked only through the app. You will need to download the{" "}
                <span className="text-[#00ff30] font-semibold">TheCabCompany app</span> from
                App Store or Play Store. Follow these steps:
                <ul className="list-decimal list-inside mt-2 space-y-1 text-gray-300">
                    <li>Signup or Login using your mobile number.</li>
                    <li>Enter your pick-up and drop-off addresses and click “Search”.</li>
                    <li>
                        TheCabCompany will recommend a route and stops based on your locations.
                        Choose the route card and click “Book ride”.
                    </li>
                    <li>Choose between “One-way ride” or “Flexi Pass”.</li>
                    <li>Select a seat on the bus.</li>
                    <li>Confirm to book your ride.</li>
                </ul>
            </>
        ),
    },
    {
        question: "How can I track the bus?",
        answer:
            "All our buses are GPS enabled and can be tracked live by clicking on the 'Track Ride' button in the Upcoming Ride card on the Home Screen, or in the 'My Rides' tab.",
    },
    {
        question: "How long will the bus wait at my stop?",
        answer:
            "Our buses halt at the stop till passengers have safely boarded. The bus will not wait for late passengers. Arrive at least 2 minutes early and track your bus ETA in real-time via the app.",
    },
    {
        question: "Can I use TheCabCompany if I'm not travelling daily to office?",
        answer:
            "Yes, you can. Book a 'One-way ride' if you don’t commute regularly. For frequent commuters, Flexi Pass offers up to 40% savings, free cancellations, and more.",
    },
    {
        question: "Can I make a booking on someone's behalf?",
        answer:
            "No, bookings can only be made by the passenger traveling. The user must sign up and show their unique pass while boarding. For special cases, contact our Support Team.",
    },
    {
        question: "What days does TheCabCompany operate on?",
        answer:
            "TheCabCompany operates Monday to Friday on all routes and on select routes on Saturday. Saturday rides are not covered under Flexi Pass — you’ll need to book one-way rides for that day.",
    },
    {
        question: "How can I book my ride for B2B bookings and rentals?",
        answer:
            "We provide quality buses for local and outstation trips. Go to the 'Rent a Bus' section under the 'More' tab, fill in your details, and our Travel Manager will reach out with available options.",
    },
];

export const FAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="bg-white/5 rounded-xl border border-white/10 overflow-hidden transition-all duration-300"
                >
                    {/* Header */}
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center text-left px-5 py-4 hover:bg-white/10 transition"
                    >
                        <span className="font-semibold text-[#00ff30] text-lg">
                            {index + 1}) {faq.question}
                        </span>
                        {openIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-[#00ff30]" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-[#00ff30]" />
                        )}
                    </button>

                    {/* Answer */}
                    <div
                        className={`px-6 pb-4 text-gray-200 leading-relaxed text-justify transition-all duration-300 ${openIndex === index ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                            } overflow-hidden`}
                    >
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
    )
}
