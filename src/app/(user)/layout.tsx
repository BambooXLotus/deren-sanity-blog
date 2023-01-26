import '@/styles/globals.css'

import Banner from '@/components/Banner'
import Header from '@/components/Header'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <head />
      <body className="mx-auto max-w-7xl">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  )
}
