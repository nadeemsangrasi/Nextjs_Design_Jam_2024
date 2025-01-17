import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import CartStore from "@/context/store/CartStore";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopSphere",
  description: "your online marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <CartStore>
        <html lang="en">
          <body className={`${poppins.className} relative`}>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </body>
        </html>
      </CartStore>
    </ClerkProvider>
  );
}
