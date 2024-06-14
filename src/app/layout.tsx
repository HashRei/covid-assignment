"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppHeader from "./components/AppHeader";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

// Create a client
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
