import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../services/auth'

export default function Login() {
  const [username, setUsername] = useState(``)
  const [password, setPassword] = useState(``)

  const handleUsername = e => {
    setUsername(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleLogin({ username, password })
    navigate(`/app/profile`)
  }

  return isLoggedIn() ? (
    navigate(`/app/profile`)
  ) : (
    <>
      <h1>Log in</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Username
          <input type="text" onChange={handleUsername} />
        </label>
        <label>
          Password
          <input type="password" onChange={handlePassword} />
        </label>
        <input type="submit" value="Log In" />
      </form>
    </>
  )
}
