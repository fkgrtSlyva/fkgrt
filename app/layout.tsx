import React from "react";
import { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { VideoDialogProvider } from "@/components/ui/VideoDialogContext";
import VideoDialog from "@/components/ui/VideoDialog";
import { assetPath } from "@/lib/asset-path";

import "@/styles.css";
import { TailwindIndicator } from "@/components/ui/breakpoint-indicator";

const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const merriweather = Merriweather({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "КГРТ КНУ — Фаховий коледж геологорозвідувальних технологій",
  description:
    "Фаховий коледж геологорозвідувальних технологій Київського національного університету імені Тараса Шевченка",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uk"
      className={cn(openSans.variable, merriweather.variable)}
    >
      <body
        className="min-h-screen bg-background font-sans antialiased"
        style={{ "--legacy-breadcrumb-bg": `linear-gradient(rgba(7, 26, 68, .75), rgba(7, 26, 68, .75)), url(${assetPath("/images/bg-07-1920x660.jpg")}) center/cover` } as React.CSSProperties}
      >
        <VideoDialogProvider>
          {children}
          <VideoDialog />
        </VideoDialogProvider>
        <TailwindIndicator />
      </body>
    </html>
  );
}
