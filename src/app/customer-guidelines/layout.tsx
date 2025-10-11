import { ReactNode } from "react";

export const metadata = {
    title: "Customer Guidelines",
    description: "Navigate TheCabCompany's comprehensive customer guidelines to ensure a safe, respectful, and efficient ride every time. From ride etiquette and safety protocols to payment rules and prohibited behaviors, empower yourself with clear policies for seamless urban travel across India.",
    alternates: {
        canonical: "https://www.thecabcompany.in/customer-guidelines",
    },
};

export default function CustomerGuidelinesLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <>{children}</>;
}
