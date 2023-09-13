import "./globals.css";
import GoogleAnalytics from '@/utils/analytics';

export const metadata = {
  title: "مساعدة",
  description: "قائمة بالمناطق المتضررة المحتاجة للمساعدة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <GoogleAnalytics GA_TRACKING_ID={process.env.MEASUREMENT_ID} />
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
