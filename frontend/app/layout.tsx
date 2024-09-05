import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Navbar 
import NavBar from '../components/NavBar/page';

// Footer 
import Footer from '../components/Footer/page';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: "Developed by Ameer Yousuf Ali Bhatti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="grow">
        {children}
        </div>
        <Footer />
      </div>
      </body>
    </html>
  );
}
