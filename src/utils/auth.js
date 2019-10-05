const jwt = require('jwt-simple')
const isBrowser = typeof window !== `undefined`

const getToken = () => isBrowser && window.localStorage.getItem('token')
const setToken = token => window.localStorage.setItem('token', token)
const clearToken = () => window.localStorage.removeItem('token')

export const handleLogin = ({ password }) => {
  if (!isBrowser) return false
  if (
    (password === process.env.GUEST_PASSWORD) || 
    (password === process.env.ADMIN_PASSWORD)
  ) {
    const token = jwt.encode(password, process.env.ACCESS_TOKEN)
    return setToken(token)
  }

  return false
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const token = getToken()
  if (token === null) return false

  let password
  try {
    password = jwt.decode(token, process.env.ACCESS_TOKEN)
  } catch (err) {}
  if (
    (password !== process.env.GUEST_PASSWORD) &&
    (password !== process.env.ADMIN_PASSWORD)
  ) {
    clearToken()
    return false
  } 
  return true
}

export const isLoggedInAdmin = () => {
  if (!isLoggedIn()) return false
  return process.env.ADMIN_PASSWORD === jwt.decode(getToken(), process.env.ACCESS_TOKEN)
}

export const logout = () => {
  if (!isBrowser) return
  clearToken()
}