import '@styles/globals.css'
import { Inter } from 'next/font/google'

import AdminDashboardHeader from '@components/AdminDashboardHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Generated by create next app',
}

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AdminDashboardHeader />
          {children}
      </body>
    </html>
  )
}
