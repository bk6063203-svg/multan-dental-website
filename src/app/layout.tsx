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
  // Title ko thoda change kar ke dekhte hain taake search engine force-update ho
  title: {
    default: 'Multan Dental & Aesthetics | #1 Dental Clinic',
    template: '%s | Multan Dental & Aesthetics',
  },
  description: '#1 Dental Clinic in Multan. Your Smile, Our Passion. Professional aesthetic care designed for your unique smile. Experience precision, comfort.',
  // ... baqi code wahi rehne do
};
  icons: {
    icon: '/favicon.ico', 
  },
  
  openGraph: {
    title: 'Multan Dental & Aesthetics | Dr. Alizay Gull Khan',
    description: 'Dr. Alizay Gull Khan. Lead Dental Surgeon & Aesthetic Specialist. Providing quality dental care in Multan.',
    url: 'https://multandentalandaesthetics.online',
    siteName: 'Multan Dental & Aesthetics',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Multan Dental & Aesthetics Logo',
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