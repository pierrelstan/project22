'use client'

import '@styles/sidebar.css'

import Link from 'next/link'
import { usePathname } from "next/navigation"

const routes = [
  {
    label: "Dashboard",
    href:"/dashboard",
    color: "blue"
  },
  {
    label: "Batch Lighthouse Reports",
    href:"/lighthouse-reports",
    color: "blue"
  },
  {
    label: "Batch Validate Schema",
    href:"/schema-validator",
    color: "blue"
  },
  {
    label: "Batch Broken URL Checker",
    href:"/link-validator",
    color: "blue"
  }
]
const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className="sidebar">
      <div className="sidebar-nav">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`sidebar-route ${pathname === route.href ? "active" : ""}`}
            >
              <div className="">
                {route.label}
              </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar