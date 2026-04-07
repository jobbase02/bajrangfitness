import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import FreeTrialPopup from "./components/TrialPopUp";

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