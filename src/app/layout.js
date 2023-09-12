import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mosa3ada',
  description: 'Mosa3ada is web app to help you find a place damaged in Marakesh earthquake'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body suppressHydrationWarning className={inter.className}>{children}</body>
    </html>
  )
}
