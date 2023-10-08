'use client'

import '@styles/dashboard.css'

import ClientSidebar from '@components/ClientSidebar'
import { useSession } from 'next-auth/react'

export default function LighthouseReportsPage() {
  const { data: session } = useSession({
    required: true
  })
  
  return (
      <div className="">
        <ClientSidebar />
        <main className="">
          Lighthouse Reports
        </main>
      </div>
  )
}