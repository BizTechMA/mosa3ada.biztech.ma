import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "مساعدة",
  description: "قائمة بالمناطق المتضررة المحتاجة للمساعدة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning className={inter.className}>
        {children}
      </body>
    </html>
  );
}
