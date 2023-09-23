import "./globals.css";
import GoogleAnalytics from "@/utils/analytics";
import { MuiProvider } from "@/components";
import { Toaster } from "react-hot-toast";
import "mapbox-gl/dist/mapbox-gl.css";
export const metadata = {
  title: "مساعدة",
  description: "قائمة بالمناطق المتضررة المحتاجة للمساعدة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <MuiProvider>
        <Toaster />
        <GoogleAnalytics GA_TRACKING_ID={process.env.MEASUREMENT_ID} />
        <body suppressHydrationWarning>{children}</body>
      </MuiProvider>
    </html>
  );
}
