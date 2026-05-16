import type { Metadata } from "next";
import Header from "@/components/Header";
import { projects } from "@/lib/projects";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Projects",
  description: "Коллекция дизайн-макетов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header projects={projects} />
        {children}
      </body>
    </html>
  );
}
