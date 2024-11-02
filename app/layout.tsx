import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { DataContextProvider } from "@/providers/useData";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restoring Rainbows",
  description: "Restoring Rainbows is a registered 501(c)3 nonprofit in the United States, the state of Connecticut.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-x-hidden">
          <DataContextProvider>
            <ToastProvider />
            <NavBar />
            {children}
            <Footer />
            <ModalProvider />
          </DataContextProvider>
        </div>
      </body>
    </html>
  );
}
