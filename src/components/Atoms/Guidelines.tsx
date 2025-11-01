import React from 'react'

const guidelines = [
    {
        title: "Please arrive on time",
        desc: "Kindly arrive at your pickup stop at least 2 minutes before the scheduled time. The bus’s expected arrival time (ETA) is subject to change depending on traffic conditions. Please use the bus tracking feature to track the bus live, and to avoid missing your ride.",
    },
    {
        title: "Show boarding pass",
        desc: "We request you to verify your boarding by turning on Bluetooth and showing your boarding pass to the driver. Rest assured, your privacy is important to us — no personal data is collected through Bluetooth.",
    },
    {
        title: "Female-preferred seats",
        desc: "We try the best from our end to make sure females are paired with female passengers. But in some cases, like if the bus is full or there are no other seats, male passengers can book the seats adjacent to the female seats.",
    },
    {
        title: "Use aisle seat sliders",
        desc: "We request you to be mindful of your co-passengers’ and your personal space. Using seat sliders present on aisle seats can help create more space and comfort for you and the co-passenger sitting adjacent to you.",
    },
    {
        title: "Maintain bus hygiene",
        desc: "We request you to refrain from consuming food or beverages during your journey to maintain a pleasant travel environment. Given the bus is a closed space, the smell may cause inconvenience to passengers on your trip and future ones. Should you want to dispose of any litter, paper or masks, etc, please use the dustbin near the bus entrance.",
    },
    {
        title: "No smoking or drinking",
        desc: "TheCabCompany buses provide a pleasant space for the comfort and well-being of all passengers. Smoking tobacco, e-cigarettes, or alcohol consumption is, therefore, strictly prohibited onboard.",
    },
    {
        title: "Use the overhead rack to keep your bag",
        desc: "We request you to keep your bags on the overhead rack for your comfort and to minimize inconvenience to fellow passengers.",
    },
    {
        title: "Maintain a considerate speaking volume",
        desc: "If you need to make or receive phone calls or listen to audio, please use earphones and keep your voice at a low volume. This will minimize any disturbance to fellow co-passengers and ensure a calm and quiet environment for everyone.",
    },
    {
        title: "Adhere to designated stops",
        desc: "Ensure you board and alight at designated stops only. Making unscheduled stops can result in traffic disruptions, inconvenience for the driver, and delays in reaching the drop-off points for your fellow passengers.",
    },
    {
        title: "Remember to collect your belongings",
        desc: "Forgot something on the bus? Our customer support team will be happy to help get it back to you. However, we encourage you to take care of your belongings during your journey. TheCabCompany is not liable for any misplacements.",
    },
    {
        title: "We love pets, but not on the bus",
        desc: "To ensure that the bus environment is safe and hygienic for all, we do not allow any pets on the bus, as it might cause an inconvenience to other co-passengers.",
    },
    {
        title: "For your coffee and bites order",
        desc: "If you reschedule a ride after placing a coffee order 40 minutes before departure from your stop, the order will be cancelled with refund. If reschedule is done within 30 minute window, no refund will be done. If you cancel your ride at least 40 minutes before departure, you’ll get a full refund of the coffee amount in your TheCabCompany Wallet; cancellations within 40 minutes of departure are not refundable. In case TheCabCompany or AB Coffee is unable to deliver your order, you’ll receive a full refund in your TheCabCompany Wallet.",
    },
];

export const Guidelines = () => {
    return (
        <ul className="space-y-8">
            {guidelines.map((item, index) => (
                <li key={index}>
                    <h2 className="text-xl font-semibold text-[#00ff30] mb-2">
                        {item.title}
                    </h2>
                    <p className="text-gray-200 leading-relaxed text-justify">
                        {item.desc}
                    </p>
                </li>
            ))}
        </ul>
    )
}
