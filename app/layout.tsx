import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import ClientThemeProvider from "@/components/ClientThemeProvider";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Movie App",
  description: "The Movie App powered by The Movie DB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`} suppressHydrationWarning>
        <ClientThemeProvider>
          <main className="container mx-auto py-10">{children}</main>
          <footer className="flex gap-6 flex-wrap items-center justify-center p-4 bg-zinc-900">
            <span>
              Created by{' '}
              <span className="text-sky-800">
                <Link href="https://github.com/ManuLisek/recruitment-task-next" target="_blank">
                  Michał Lisowiec
                </Link>
              </span>
            </span>

          </footer>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
