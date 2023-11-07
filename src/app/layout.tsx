import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const outfit = Outfit({ weight: ['400', '500', '600'],  subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Alpha Phi Omega - Chi Chapter',
  description: 'UCLA APO',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
