import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'The Fullness of Jesus Christ Ministries',
  description: 'Welcome to The Fullness of Jesus Christ Ministries - A place of worship, growth, and community.',
  keywords: 'church, ministries, Jesus Christ, worship, community, faith',
  openGraph: {
    title: 'The Fullness of Jesus Christ Ministries',
    description: 'A place of worship, growth, and community.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
