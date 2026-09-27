import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jesse Briska — Software · Automation · Systems",
  description: "Jesse Briska builds web applications, AI automation workflows and backend systems for people and businesses.",\n  metadataBase: new URL("https://jesse-briska-portfolio.vercel.app"),\n  alternates: { canonical: "/" },\n  openGraph: {\n    title: "Jesse Briska — Software · Automation · Systems",\n    description: "Web applications, AI automation workflows and backend systems by Jesse Briska.",\n    url: "/",\n    siteName: "Jesse Briska",\n    type: "website",\n  },\n  twitter: {\n    card: "summary_large_image",\n    title: "Jesse Briska — Software · Automation · Systems",\n    description: "Web applications, AI automation workflows and backend systems by Jesse Briska.",\n  },
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
