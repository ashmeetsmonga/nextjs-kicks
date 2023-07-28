import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import ToasterProvider from "./providers/ToasterProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KICKS",
  description: "Created By Ashmeet Singh Monga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-theme-gray p-6 md:px-10`}>
        <ToasterProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
