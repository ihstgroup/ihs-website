"use client"

import "@/styles/globals.css"
import { Poppins } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const isLandingPage = pathname === "/"

  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${poppins.className} flex flex-col min-h-full`}>
        {!isLandingPage && <Header />}
        <main className="flex-grow">{children}</main>
        {!isLandingPage && <Footer />}
      </body>
    </html>
  )
}

