import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: "Arkada - Simulador",
  description: "Simulador de obras de construção",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer/>
      </body>
      
    </html>
  );
}
