import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Image from "next/image";
import player from "public/images/stephen-curry.png";
import { Providers } from "~/utils/Providers";

import { Navigation } from "../components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "NBA Stats",
  description: "Simple app to view NBA stats",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} relative min-h-screen`}>
        <Providers>
          <Navigation />
          {children}
          <Image
            alt="bastkeball players"
            src={player}
            className="absolute bottom-0 right-10 w-56 object-contain"
          />
        </Providers>
      </body>
    </html>
  );
}
