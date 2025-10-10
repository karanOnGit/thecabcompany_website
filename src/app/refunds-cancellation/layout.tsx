import { ReactNode } from "react";

export const metadata = {
    title: "Refund Cancellation",
    description: "Explore TheCabCompany's straightforward refund and cancellation policies designed for hassle-free travel. Discover eligibility criteria, quick processing timelines, and easy steps to request refunds or modifications for your cab bookings across India.",
    alternates: {
        canonical: "https://thecabcompany.in/refunds-cancellation",
    },
};

export default function RefundLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <>{children}</>;
}
