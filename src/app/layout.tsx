import type { Metadata } from "next";
import { JetBrains_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-plex",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nguyễn Minh Phương — Backend Developer",
  description:
    "Backend Developer turning ideas into production-ready APIs. Java Spring Boot, REST APIs, MySQL/PostgreSQL, Docker, GCP.",
  keywords: [
    "Backend Developer",
    "Java",
    "Spring Boot",
    "REST API",
    "Nguyễn Minh Phương",
    "Portfolio",
    "UIT",
  ],
  authors: [{ name: "Nguyễn Minh Phương" }],
  openGraph: {
    title: "Nguyễn Minh Phương — Backend Developer",
    description:
      "Backend Developer turning ideas into production-ready APIs.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${ibmPlex.variable}`}>
      <body className="font-sans antialiased noise">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
