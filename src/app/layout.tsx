import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO !!!

export const metadata: Metadata = {
  title: "Order – Школа Політології",
  description: "Школа Політології у Київській школі економіки ─ офлайн-курси для учнів 8-11 класів, які хочуть поглибити знання з політології, критичного мислення та соціальних наук.",
  keywords : "літня школа для учнів Київ, літня школа з політології, курси критичного мислення Київ, освітні курси соціальні науки, програми для старшокласників Київ, інтенсиви для школярів літо, курси для майбутніх студентів, профорієнтаційні програми Київ, академічні курси для дітей, навчання в Київській школі економіки, літні освітні програми для підлітків, літні інтенсиви Україна, курси суспільних наук для школярів, підготовка до вступу у виш, освітній табір Київ, курси для старшокласників з політології, школа критичного мислення Україна, сучасна освіта для підлітків, навчальні програми 8-11 клас, розвиток лідерських навичок школярів, summer school Ukraine, Kyiv academic summer program, Ukrainian summer school for high school, high school political science Kyiv, critical thinking summer camp, social sciences for teenagers, pre-university courses Ukraine, leadership school Kyiv, Kyiv School of Economics summer program, educational summer camp Kyiv",
  openGraph : {
    title : "Order – Школа Політології",
    description : "Офлайн-курси для учнів 8-11 класів. Політологія, критичне мислення та соціальні науки в Київській школі економіки.",
    type : "website",
    url : "https://www.orderschool.online/",
    locale : "uk_UA",
    siteName : "Order – Школа Політології"
  },
  robots : {
    index : true,
    follow : true
  },
  twitter : {
    card: "summary_large_image",
    title: "Літні політичні студії — Київська школа економіки",
    description: "Офлайн-курси для учнів 8-11 класів. Політологія, критичне мислення та соціальні науки.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
