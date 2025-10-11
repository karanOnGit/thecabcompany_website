import { ReactNode } from "react";

export const metadata = {
    title: "Plans & Subscription",
    description: "Discover flexible subscription plans tailored for seamless urban mobility with TheCabCompany. From daily commutes to monthly passes, find affordable options for reliable cab services across India.",
    alternates: {
        canonical: "https://www.thecabcompany.in/subscription",
    },
};

export default function SubscriptionLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <>{children}</>;
}
