import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../src/index.css";

import { Providers } from "../src/components/Providers";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darpan Neve — Full-Stack Developer (Flutter · React · Node.js · Python)",
  description: "Portfolio of Darpan Neve — full-stack developer. React, Node.js, Python, web & mobile apps. Hire for high-quality, production-ready development.",
  keywords: "Darpan Neve, Darpan, full stack developer, react developer, node.js developer, python developer, web developer, hire developer, portfolio",
  authors: [{ name: "Darpan Neve" }],
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Darpan Neve — Full-Stack Developer",
    description: "Portfolio of Darpan Neve — React, Node.js & Python developer. Available for opening.",
    url: "https://darpanneve.com/",
    siteName: "DarpanNeve",
    images: [
      {
        url: "https://darpanneve.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Darpan Neve — Full-Stack Developer portrait / logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "Darpan Neve — Full-Stack Developer",
    description: "Portfolio of Darpan Neve — React, Node.js & Python developer.",
    images: ["https://darpanneve.com/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0ea5a2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}