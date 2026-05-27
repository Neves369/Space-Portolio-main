import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";
import LoadingIndicator from "@/components/ui/LoadingIndicator";
import BackgroundVideo from "@/components/main/BackgroundVideo";
import { ThemeProvider } from "@/context/theme";
import { LoadingProvider } from "@/context/loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Douglas Neves Portfolio",
  description:
    "This is the portfolio of Douglas Neves, software developer and technology student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          id="body"
          className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden relative`}
        >
          <LoadingProvider>
            <Navbar />
            <LoadingIndicator />
            <BackgroundVideo />
            <div className="relative z-[20]">{children}</div>
            <StarsCanvas />
          </LoadingProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}

