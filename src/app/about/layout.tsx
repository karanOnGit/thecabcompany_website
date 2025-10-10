import { ReactNode } from "react";

export const metadata = {
    title: "About Us",
    description: "Discover the story of TheCabCompany, India's premier cab service transforming urban travel. Explore our mission to deliver safe, reliable, and affordable rides, our innovative journey, and unwavering commitment to customer satisfaction across the nation.",
    alternates: {
        canonical: "https://thecabcompany.in/about",
    },
};

export default function AboutLayout({
    children
}: {
    children: ReactNode
}) {
    return <>{children}</>;
}
