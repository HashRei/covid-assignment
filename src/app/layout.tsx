import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppHeader from "./components/AppHeader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Covid assignment",
  description: "Covid assignment by Hashrei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <AppHeader />
          <main className="flex-grow container mx-auto py-8">{children}</main>
          <footer className="text-center py-4">
            Covid assignment ©2024 Created by Hashrei
          </footer>
        </div>
      </body>
    </html>
  );
}
