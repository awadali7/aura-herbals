import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/Header";
import PerformanceOptimizer from "../components/PerformanceOptimizer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
    metadataBase: new URL("https://auraherbals.in"),
    title: {
        default: "Aura Herbals - Natural Rosemary Water for Hair & Scalp",
        template: "%s | Aura Herbals",
    },
    description:
        "Experience the pure power of nature for your hair and scalp. Aura Herbals Rosemary Water is crafted for those who value natural beauty and effective care.",
    keywords: [
        "Aura Herbals",
        "Rosemary Water",
        "Natural Hair Care",
        "Herbal Hair",
        "Dandruff Prevention",
        "Hair Growth",
        "No Chemicals",
        "Ayurvedic Hair",
        "Kerala Herbal",
    ],
    openGraph: {
        title: "Aura Herbals - Natural Rosemary Water for Hair & Scalp",
        description:
            "Experience the pure power of nature for your hair and scalp. Aura Herbals Rosemary Water is crafted for those who value natural beauty and effective care.",
        url: "https://auraherbals.in/",
        siteName: "Aura Herbals",
        images: [
            {
                url: "/herbs-bg.png",
                width: 1200,
                height: 630,
                alt: "Aura Herbals Rosemary Water",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Aura Herbals - Natural Rosemary Water for Hair & Scalp",
        description:
            "Experience the pure power of nature for your hair and scalp. Aura Herbals Rosemary Water is crafted for those who value natural beauty and effective care.",
        images: ["/herbs-bg.png"],
        site: "@aura__herbals",
    },
    icons: {
        icon: "/favicon.ico",
    },
    alternates: {
        canonical: "https://auraherbals.in/",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aura Herbals",
    url: "https://auraherbals.in/",
    logo: "/herbs-bg.png",
    sameAs: [
        "https://instagram.com/aura__herbals",
        "https://wa.me/919074934653",
    ],
    contactPoint: [
        {
            "@type": "ContactPoint",
            telephone: "+91-9074934653",
            contactType: "customer service",
            email: "auraherbals006@gmail.com",
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#6A994E" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="bg-background text-text">
                <PerformanceOptimizer />
                <Header />
                {children}
                <FloatingWhatsApp />
            </body>
        </html>
    );
}
