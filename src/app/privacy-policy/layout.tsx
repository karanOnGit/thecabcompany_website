import { ReactNode } from "react";

export const metadata = {
    title: "Privacy & Policy",
    description: "Understand TheCabCompany's commitment to safeguarding your privacy with our detailed privacy policy. Discover how we collect, use, and protect your personal information, ensure data security for bookings, and uphold compliance with India's data protection laws for a safe and transparent ride experience.",
    alternates: {
        canonical: "https://www.thecabcompany.in/privacy-policy",
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: ReactNode;
}) {
    return <>{children}</>;
}
