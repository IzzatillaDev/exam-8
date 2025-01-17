import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Outfit} from "next/font/google"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="outfit.className">
      <Header/>
      {children}
      <Footer/>

      </body>
    </html>
  );
}
