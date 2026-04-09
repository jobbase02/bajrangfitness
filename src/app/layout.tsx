import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import FreeTrialPopup from "./components/TrialPopUp";
import Chatbot from "./components/ChatBot";

const title = "Bajrang Fitness Best Gym in Haldwani | Fitness Center – Pilikothi Road";
const description = "Join the best gym in Haldwani on Pilikothi Road. Expert personal trainers, modern equipment, weight loss & bodybuilding programs. Start your fitness journey today!";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://bajrangfitness.com',
    siteName: 'Bajrang Fitness',
    images: [
      {
        url: '/og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Bajrang Fitness Arena',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/og.jpeg'],
  },
};


//business ke liye schema markup for better SEO and local search visibility
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym", 
  "name": "Bajrang Fitness",
  "image": "https://bajrangfitness.com/logo.png",
  "description": "Best gym in Haldwani located at Pilikothi Road. We offer imported equipment, personal training, and a great fitness community.",
  "@id": "https://bajrangfitness.com",
  "url": "https://bajrangfitness.com",
  "telephone": [
    "+91-8445588806",
    "+91-7253008213"
  ], 
  "email": "fitnessbajrang5@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pilikothi Road, OPP Primary School",
    "addressLocality": "Haldwani",
    "addressRegion": "Uttarakhand",
    "postalCode": "263139",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.2115784,
    "longitude": 79.5057334
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "05:00", 
      "closes": "22:00"
    }
  ],
  "sameAs": [
    "https://instagram.com/bajrangfitness2026"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <FreeTrialPopup />
        <Chatbot />
      </body>
    </html>
  );
}