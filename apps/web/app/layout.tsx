import { Moderustic } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

const fontSans = Moderustic({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable}  font-sans antialiased `}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
