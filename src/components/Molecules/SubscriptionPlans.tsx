import React from 'react'

const plans = [
    {
        name: "Basic Plan",
        price: "$4.99",
        duration: "/month",
        features: [
            "2TB additional storage",
            "Up to 1GB file size",
            "Up to 5 projects",
        ],
        color: "from-blue-500 to-indigo-600",
    },
    {
        name: "Standard Plan",
        price: "$9.99",
        duration: "/month",
        features: [
            "10TB additional storage",
            "Unlimited file size",
            "Up to 10 projects",
        ],
        color: "from-green-500 to-emerald-600",
    },
    {
        name: "Premium Plan",
        price: "$19.99",
        duration: "/month",
        features: [
            "Unlimited storage",
            "Unlimited file size",
            "Permanent Membership",
        ],
        color: "from-purple-500 to-indigo-700",
    },
];

const SubscriptionPlans = () => {
    return (
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3 mb-10">
            {plans.map((plan, i) => (
                <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 p-8 flex flex-col justify-between"
                >
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-200">
                            {plan.name}
                        </h3>
                        <h4 className="text-4xl font-bold mb-1 text-white">
                            {plan.price}
                            <span className="text-gray-300 text-lg font-normal">
                                {plan.duration}
                            </span>
                        </h4>

                        <ul className="mt-6 space-y-3 text-gray-200 text-sm text-left">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="text-green-400">✔</span> {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button
                        className={`mt-8 bg-gradient-to-r ${plan.color} text-white font-semibold py-2 rounded-full hover:opacity-90 transition`}
                    >
                        Get Plan
                    </button>
                </div>
            ))}
        </div>
    )
}

export default SubscriptionPlans