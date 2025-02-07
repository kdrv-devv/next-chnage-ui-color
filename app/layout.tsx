import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import { Providers } from "./providers/redux-provider";
import { Provider } from "react-redux";
import store from "./redux/store";

const inter = Inter({
  variable: "--inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXT.js by kdrv",
  description: "Next js kutubxonasi yordamida yaratildi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <Providers>
            {children}
            </Providers>
          </ThemeProvider>
        </body>
      </html>
  );
}
