import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(components)/header";
import { Suspense } from "react";
import Loading from "./Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Broken music player",
  description: "a broken music player in NExtJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
