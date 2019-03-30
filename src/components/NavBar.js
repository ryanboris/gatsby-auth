import React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from '../services/auth'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  border-bottom: 4px solid #d1c1e0;
  margin: 10px 0;
  padding: 20px 0;
  font: 1.2rem 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  nav a:link {
    text-decoration: none;
    margin: 0 30px;
  }
`

export default () => {
  const content = { message: '', login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } else {
    content.message = "You ain't logged in, boo!"
  }
  return (
    <Container>
      <span>{content.message}</span>
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/app/profile">Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={e => {
              logout(() => navigate(`/app/login`))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </Container>
  )
}
