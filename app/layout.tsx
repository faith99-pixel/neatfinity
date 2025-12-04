import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neatfinity - Professional Cleaning Services",
  description: "Transform your space with Neatfinity's premium cleaning services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
