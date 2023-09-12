import "./globals.css";

export const metadata = {
	title: "مساعدة",
	description: "قائمة بالمناطق المتضررة المحتاجة للمساعدة"
};

export default function RootLayout({ children }) {
	return (
		<html lang="ar" dir="rtl">
			<body suppressHydrationWarning>{children}</body>
		</html>
	);
}
