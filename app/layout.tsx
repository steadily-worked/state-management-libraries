import "./globals.css"
import { Inter } from "@next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr" className={inter.className}>
      <head />
      <body>
        <div>navbar position? maybe this area is to have common navbar.</div>
        {children}
        <div>footer position?</div>
      </body>
    </html>
  )
}
