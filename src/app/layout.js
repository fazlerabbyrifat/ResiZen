"use client";
import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "ResiZen",
};

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </body>
      </QueryClientProvider>
    </html>
  );
}
