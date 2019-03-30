import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import PrivateRoute from '../components/PrivateRoute'
import Profile from '../components/Profile'
import Login from '../components/Login'
import Signup from '../components/Signup'

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <Signup path="/app/signup" />
    </Router>
  </Layout>
)

export default App
