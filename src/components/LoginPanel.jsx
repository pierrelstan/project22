'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPanel() {

  const [ username, setUsername ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ isPending, setIsPending ] = useState(false)

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { username, email, password }
    
    console.log(isPending)
    setIsPending(true)
    console.log(isPending)
    
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
      }).then(() => {
        router.push("/dashboard")
    })

    console.log(isPending)
    setIsPending(false)
    console.log(isPending)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          id="username" 
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          id="email"  
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          id="password"  
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button 
          disabled={isPending}
          type='submit'
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
        <p>Dont have an account? Register here.</p>
      </form>
    </>
  )
}