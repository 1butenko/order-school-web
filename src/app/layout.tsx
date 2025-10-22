import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

import { Navigation } from "@/components/Navigation";

import { GoogleAnalytics } from '@next/third-parties/google'

const gothamPro = localFont({
  src: [
    {
      path: "/fonts/GothamPro/GothamProBlack/GothamProBlack.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "/fonts/GothamPro/GothamProBlackItalic/GothamProBlackItalic.woff",
      weight: "900",
      style: "italic",
    },
    {
      path: "/fonts/GothamPro/GothamProBold/GothamProBold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/GothamPro/GothamProBoldItalic/GothamProBoldItalic.woff",
      weight: "700",
      style: "italic",
    },
    {
      path: "/fonts/GothamPro/GothamProMedium/GothamProMedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/GothamPro/GothamProMediumItalic/GothamProMediumItalic.woff",
      weight: "500",
      style: "italic",
    },
    {
      path: "/fonts/GothamPro/GothamProRegular/GothamProRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/GothamPro/GothamProItalic/GothamProItalic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/GothamPro/GothamProLight/GothamProLight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/GothamPro/GothamProLightItalic/GothamProLightItalic.woff",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-gotham-pro",
  display: "swap"
});

const grotesk = localFont({
  src : "/fonts/cy-grotesk/cy-grotesk-wide.ttf",
  display: "swap",
  variable : "--font-grotesk"
})

export const metadata: Metadata = {
  title: "Гурток політології",
  description:
    "Школа Політології у Київській школі економіки ─ офлайн-курси для учнів 8-11 класів, які хочуть поглибити знання з політології, критичного мислення та соціальних наук.",
  keywords:
    "літня школа для учнів Київ, літня школа з політології, курси критичного мислення Київ, освітні курси соціальні науки, програми для старшокласників Київ, інтенсиви для школярів літо, курси для майбутніх студентів, профорієнтаційні програми Київ, академічні курси для дітей, навчання в Київській школі економіки, літні освітні програми для підлітків, літні інтенсиви Україна, курси суспільних наук для школярів, підготовка до вступу у виш, освітній табір Київ, курси для старшокласників з політології, школа критичного мислення Україна, сучасна освіта для підлітків, навчальні програми 8-11 клас, розвиток лідерських навичок школярів, summer school Ukraine, Kyiv academic summer program, Ukrainian summer school for high school, high school political science Kyiv, critical thinking summer camp, social sciences for teenagers, pre-university courses Ukraine, leadership school Kyiv, Kyiv School of Economics summer program, educational summer camp Kyiv",
  openGraph: {
    title: "Гурток політології",
    description:
      "Офлайн-курси для учнів 8-11 класів. Політологія, критичне мислення та соціальні науки в Київській школі економіки.",
    type: "website",
    url: "https://www.orderschool.online/",
    locale: "uk_UA",
    siteName: "Гурток політології",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Літні політичні студії — Київська школа економіки",
    description:
      "Офлайн-курси для учнів 8-11 класів. Політологія, критичне мислення та соціальні науки.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${grotesk.variable} ${gothamPro.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
      <GoogleAnalytics gaId="G-7D74XW0FZ1" />
    </html>
  );
}
