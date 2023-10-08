'use client'

import '@styles/dashboard.css'

import ClientSidebar from '@components/ClientSidebar'
import { useSession } from 'next-auth/react'

export default function LinkValidatorPage() {
  const { data: session } = useSession({
    required: true
  })
  
  return (
      <div className="">
        <ClientSidebar />
        <main className="">
          Link Validator Page
        </main>
      </div>
  )
}