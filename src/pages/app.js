import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import Profile from '../components/Profile'
import Login from '../components/Login'

const App = () => (
  <Layout>
    <Router>
      <Profile path="/app/profile" />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
