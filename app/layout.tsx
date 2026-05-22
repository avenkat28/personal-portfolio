import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arya Venkat | Portfolio",
  description:
    "Personal portfolio for Arya Venkat, a Computer Science and Business student at Northeastern University concentrating in fintech."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
