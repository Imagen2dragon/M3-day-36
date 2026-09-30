import type { Metadata } from "next";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Addis Eats",
  description: "Authentic Ethiopian dishes delivered through a Next.js App Router demo."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="site-wrapper">
            <Header />
            <main className="main-content">{children}</main>
            <footer className="site-footer"><p>&copy; 2026 Addis Eats &bull; Bole, Addis Ababa &bull;</p></footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
