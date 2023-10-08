'use client'

import '@styles/dashboard.css'

import ClientSidebar from '@components/ClientSidebar'

export default function ClientDashboard() {
  return (
      <div className="dashboard">
        <ClientSidebar />
        <main className="dashboard-main">
          Im the main
        </main>
      </div>
  )
}