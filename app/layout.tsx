import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const siteUrl = "https://jesse-briska-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jesse Briska — Software · Automation · Systems",
    template: "%s — Jesse Briska",
  },
  description:
    "Jesse Briska builds full-stack applications, AI automation workflows and backend systems for people and businesses.",
  applicationName: "Jesse Briska Portfolio",
  authors: [{ name: "Jesse Briska", url: siteUrl }],
  creator: "Jesse Briska",
  publisher: "Jesse Briska",
  keywords: [
    "Jesse Briska",
    "software developer",
    "full-stack developer",
    "AI automation",
    "n8n",
    "Next.js",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jesse Briska — Software · Automation · Systems",
    description:
      "Full-stack applications, AI automation workflows and backend systems by Jesse Briska.",
    url: siteUrl,
    siteName: "Jesse Briska",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jesse Briska — Software · Automation · Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesse Briska — Software · Automation · Systems",
    description:
      "Full-stack applications, AI automation workflows and backend systems by Jesse Briska.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jesse Briska",
  url: siteUrl,
  jobTitle: "Software Developer",
  description:
    "Software developer focused on full-stack applications, AI automation and backend systems.",
  sameAs: [
    "https://github.com/Jey7447",
    "https://www.linkedin.com/in/briska-jesse-a8b864322/",
    "https://x.com/JBART7447",
  ],
  knowsAbout: [
    "Software development",
    "Full-stack development",
    "AI automation",
    "Backend systems",
    "Next.js",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "n8n",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
