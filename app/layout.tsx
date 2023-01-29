import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <head />
      <body>
        <div>navbar position? maybe this area is to have common navbar.</div>
        {children}
        <div>footer position?</div>
      </body>
    </html>
  )
}
