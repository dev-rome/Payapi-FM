import type { Metadata } from "next";
import { publicSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Payapi",
  description: "Frontend mentor challenge project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={publicSans.variable}>
        <main>{children}</main>
      </body>
    </html>
  );
}
