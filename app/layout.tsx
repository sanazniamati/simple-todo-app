import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// component
import Navbar from "../components/Navbar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simple TODO App",
  description: "simple TODO app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className=" max-w-3xl mx-auto p-4 ">
            <Navbar />
            <div className="mt-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
