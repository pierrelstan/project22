// 'use client'

import '@styles/header.css';
// import Link from 'next/link'
// import Image from 'next/image'

// import { useSession, signOut } from 'next-auth/react'

const Header = () => {
  // const { data: session } = useSession()

  return (
    <header id="header">
      {/* <Link href="/">Project 22</Link>
      {session ? (
        <div className="authentication-container">
          <Image
            src={session.user.image}
            width={37}
            height={37}
            className="headshot-circle"
            alt="profile"
          />
          <p>{session.user.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
      </div>
      ) : (
        <Link href="/login">Login</Link>
      )} */}
    </header>
  )
}

export default Header