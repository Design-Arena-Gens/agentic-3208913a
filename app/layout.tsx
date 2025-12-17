import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TikTok & Shopee Affiliate - Dapatkan Penawaran Terbaik",
  description: "Platform affiliate terbaik untuk produk TikTok dan Shopee dengan komisi menarik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
