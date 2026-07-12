import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Multan Dental & Aesthetics | Dr. Alizay Gull Khan',
  description: 'Dr. Alizay Gull Khan. Lead Dental Surgeon & Aesthetic Specialist. Providing quality dental care in Multan.',
  // Favicon aur Icons yahan set honge
  icons: {
    icon: '/favicon.ico', 
  },
  // WhatsApp/Social media preview ke liye image
  openGraph: {
    title: 'Multan Dental & Aesthetics | Dr. Alizay Gull Khan',
    description: 'Dr. Alizay Gull Khan. Lead Dental Surgeon & Aesthetic Specialist. Providing quality dental care in Multan.',
    url: 'https://multandentalandaesthetics.online',
    siteName: 'Multan Dental & Aesthetics',
    images: [
      {
        url: '/opengraph-image.png', // Make sure this file exists in your 'public' folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}