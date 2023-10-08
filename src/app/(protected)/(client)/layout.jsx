import '@styles/globals.css'
import { Inter } from 'next/font/google'

import ClientDashboardHeader from '@components/ClientDashboardHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ClientDashboardHeader />
          {children}
      </body>
    </html>
  )
}
