import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import FreeTrialPopup from "./components/TrialPopUp";

// Variables for cleaner code
const title = "Bajrang Fitness Best Gym in Haldwani | Fitness Center – Pilikothi Road";
const description = "Join the best gym in Haldwani on Pilikothi Road. Expert personal trainers, modern equipment, weight loss & bodybuilding programs. Start your fitness journey today!";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://bajrangfitness.com', // Aapni actual domain se replace kar lena baad mein
    siteName: 'Bajrang Fitness',
    images: [
      {
        url: '/og.jpeg', // Ye automatically public folder se og.jpeg uthayega
        width: 1200,    // Standard size for WhatsApp/FB sharing
        height: 630,
        alt: 'Bajrang Fitness Arena',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', // Bada image preview ke liye
    title: title,
    description: description,
    images: ['/og.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <FreeTrialPopup />
      </body>
    </html>
  );
}