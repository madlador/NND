import type { Metadata, Viewport } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: 'Nepremičnine na dlani | Vse o nepremičninah v Sloveniji',
  description: 'Baza znanja, aktualne novice in preverjena ponudba nepremičnin na enem mestu.',
}

export const viewport: Viewport = {
  themeColor: '#0d1821',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sl">
      <body className={`${openSans.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
