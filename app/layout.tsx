import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/sections/Layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ei Minn Khet',
  description: 'Graphic Designer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
        </body>
    </html>
  )
}
