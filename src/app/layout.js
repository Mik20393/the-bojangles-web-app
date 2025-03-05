import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Toaster } from 'sonner';

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
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"]
});

export const metadata = {
  title: "The Bojangles",
  description: "The Most Serious Band in Scotland",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Toaster richColors/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
