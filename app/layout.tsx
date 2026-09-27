import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jesse Briska — Software · Automation · Systems",
  description: "Jesse Briska builds web applications, AI automation workflows and backend systems for people and businesses.",
  metadataBase: new URL("https://jesse-briska-portfolio.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jesse Briska — Software · Automation · Systems",
    description: "Web applications, AI automation workflows and backend systems by Jesse Briska.",
    url: "/",
    siteName: "Jesse Briska",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesse Briska — Software · Automation · Systems",
    description: "Web applications, AI automation workflows and backend systems by Jesse Briska.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
