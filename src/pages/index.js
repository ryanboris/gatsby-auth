import React from 'react'
import { Link } from 'gatsby'
import { getUser, isLoggedIn } from '../services/auth'
import Layout from '../components/Layout'

import * as signInSvg from '../../static/sign-in.svg'

export default () => (
  <Layout>
    <h1>Hello {isLoggedIn() ? getUser().name : 'world'}!</h1>
    <p>
      {isLoggedIn() ? (
        <>
          You is logged in, so check your <Link to="/app/profile">profile</Link>
        </>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> to see restricted
          content.
        </>
      )}
    </p>
    <p>
      Or sign up for an account <Link to="/app/signup">here</Link>
    </p>
    <a href="https://github.com/login/oauth/authorize?client_id=5fecc339292cbcb09f2f">
      <img
        src={signInSvg}
        alt="github"
        css={`
          transform: scale(2.5);
          margin: 30px;
        `}
      />
    </a>
  </Layout>
)

/**
 * fixes issue
 */
