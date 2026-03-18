import type { Metadata } from "next";
import "./globals.css";

// Variables for cleaner code
const title = "Bajrang Fitness: Premium Gym & Fitness Center in Haldwani";
const description = "Transform at Bajrang Fitness, the best gym in Pilikothi, Haldwani. Experience elite coaching, premium equipment, and a hardcore iron vibe. Join the tribe today!";

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
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}