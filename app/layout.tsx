import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jesse — Software · Automation · Systems",
  description: "Full-stack development and AI automation systems by Jesse.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
