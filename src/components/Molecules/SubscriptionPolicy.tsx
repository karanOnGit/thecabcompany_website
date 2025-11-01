import React from 'react'

const subscriptionPolicy = [
    "Each subscription pass is for a single person for the fixed duration as specified during the time of the purchase.",
    "One ride will be booked for each day for the entire duration of the pass on your preferred route, bus timing and seat, selected during the time of the purchase.",
    "Bus timing, stops and seat can be changed for any subscription ride before the scheduled pick-up time at no extra cost.",
    "Only one ride is booked per day in the same morning/evening slot.",
    {
        text: "Any subscription ride can be cancelled for free, up to ",
        highlight: "30 minutes before the scheduled pick-up time",
        suffix:
            ". 100% of the ride amount will be instantly refunded to your TheCabCompany wallet. Rides cancelled within 30 minutes or rescheduled within 30 minutes and then cancelled are non-refundable.",
    },
    "Bus schedules on your route are subject to changes in timings.",
    "If no timing is available on the route (i.e., the entire route is cancelled by TheCabCompany), the user’s subscription will be refunded in proportion to the number of days remaining of the subscription.",
    {
        text: "In case of non-completion of service by TheCabCompany, a ",
        highlight: "free ride coupon",
        suffix:
            " will be provided to the user, as and when deemed appropriate by TheCabCompany.",
    },
    {
        text: "For Flexi Pass ride extension limits, customers can extend or cancel rides only up to ",
        highlight: "30 days from the subscription start date",
        suffix: " for a weekly pass, and up to ",
        highlight2: "75 days",
        suffix2: " for a monthly pass.",
    },
];

const SubscriptionPolicy = () => {
    return (
        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 border border-white/20">
            <h1 className="text-3xl font-extrabold text-center text-[#00ff30] mb-6">
                Subscription Policy
            </h1>

            <ul className="list-disc list-inside space-y-4 text-gray-100 leading-relaxed text-justify">
                {subscriptionPolicy.map((item, index) => {
                    if (typeof item === "string") {
                        return <li key={index}>{item}</li>;
                    }

                    return (
                        <li key={index}>
                            {item.text}
                            <span className="font-semibold text-[#00ff30]">
                                {item.highlight}
                            </span>
                            {item.suffix}
                            {item.highlight2 && (
                                <>
                                    <span className="font-semibold text-[#00ff30]">
                                        {item.highlight2}
                                    </span>
                                    {item.suffix2}
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default SubscriptionPolicy