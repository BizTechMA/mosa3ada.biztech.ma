import "./globals.css";
import GoogleAnalytics from "@/utils/analytics";
import { MuiProvider } from "@/components";
import Head from 'next/head';
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";

export const metadata = {
  title: "مساعدة",
  description: "قائمة بالمناطق المتضررة المحتاجة للمساعدة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#faf1f5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#faf1f5" />
      </Head>
      <MuiProvider>
        <Toaster />
        <GoogleAnalytics GA_TRACKING_ID={process.env.MEASUREMENT_ID} />
        <body suppressHydrationWarning>{children}</body>
      </MuiProvider>
    </html>
  );
}
