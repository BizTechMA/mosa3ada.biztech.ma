import { MuiProvider } from "@/components";
import GoogleAnalytics from "@/utils/analytics";
import "mapbox-gl/dist/mapbox-gl.css";
import { Toaster } from "react-hot-toast";
import "./globals.css";
export const metadata = {
  title: "مساعدة",
  description: "قائمة بالمناطق المتضررة المحتاجة للمساعدة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning>
        <MuiProvider>
          <GoogleAnalytics GA_TRACKING_ID={process.env.MEASUREMENT_ID} />
          {children}
        </MuiProvider>
        <Toaster />
      </body>
    </html>
  );
}
