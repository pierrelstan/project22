'use client'

import { useState } from 'react'

export default function LoginPanel() {

  const [ username, setUsername ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ isPending, setIsPending ] = useState(false)

  const handleSubmit = (e) => {
    const data = { username, email, password }
    e.preventDefault()
    setIsPending(true)
    
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    console.log("running")
    setIsPending(false)
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