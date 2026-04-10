import { Inter } from 'next/font/google'
import React from 'react'
import '../globals.css'
import './styles.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata = {
  description: 'FJELKOR est un studio digital spécialisé en direction visuelle, interfaces premium et sites web sur mesure.',
  title: 'FJELKOR — Studio digital',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="fr">
      <body className={inter.variable}>
        <main>{children}</main>
      </body>
    </html>
  )
}
