import type { Metadata } from "next";
import { JetBrains_Mono, IBM_Plex_Sans, Lora } from "next/font/google";
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

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nguyễn Minh Phương — Backend Developer",
  description:
    "Backend Developer · Java · Spring Boot · REST APIs. Portfolio of Nguyễn Minh Phương.",
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
    <html
      lang="vi"
      data-accent="gold"
      data-motif="stars"
      className={`${jetbrainsMono.variable} ${ibmPlex.variable} ${lora.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
