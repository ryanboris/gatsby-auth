//  checks if the browser window object exists
export const isBrowser = () => typeof window !== 'undefined'

// check result of ifBrowser and for existence of 'gatsbyUser'
//  true ? parse the string 'gatsbyUser' and return object
//  false ? return an empty object
export const getUser = () =>
  isBrowser() && window.localStorage.getItem('gatsbyUser')
    ? JSON.parse(window.localStorage.getItem('gatsbyUser'))
    : {}

//  pass in a user to store in localStorage
const setUser = user =>
  window.localStorage.setItem('gatsbyUser', JSON.stringify(user))

/**
 * ! Note: the hardcoding you are about to see...
 * ! is for demo purposes only!!
 * */

/**
 * @param {Object} ({ username, password })
 * * checks username, and password for given values
 * * true ? set localStorage with given user info
 * * false ? return false and carry on
 */
export const handleLogin = ({ username, password }) => {
  if (username === 'TitoJackson' && password === 'abc-123-do-re-mi') {
    return setUser({
      username: 'TitoJackson',
      name: 'Tito',
      email: 'titojackson@protonmail.com'
    })
  }

  return false
}

//  check for existence of user from LS
//  return true if logged in and false if not
// ! (note: !! because user.username will return the name itself)
export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

//  upon logout clear local storage and execute a callback
export const logout = callback => {
  setUser({})
  callback()
}
