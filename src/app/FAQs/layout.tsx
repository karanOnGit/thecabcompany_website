import { ReactNode } from "react";

export const metadata = {
    title: "FAQs",
    description: "Get quick answers to your most common questions about TheCabCompany's reliable cab services. From booking tips and fare structures to safety protocols and customer support, dive into our detailed FAQs for hassle-free urban travel solutions across India.",
    alternates: {
        canonical: "https://thecabcompany.in/FAQs",
    },
};

export default function FAQLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <>{children}</>;
}
