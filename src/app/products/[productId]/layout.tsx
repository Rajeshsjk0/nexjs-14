import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

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
    <>
      {children}
      <h1>feature products</h1>
    </>
  );
}