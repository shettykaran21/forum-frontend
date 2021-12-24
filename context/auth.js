import { setAuthHeader } from '@utils/api'
import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userInfo = localStorage.getItem('userInfo')
    const expiresAt = localStorage.getItem('expiresAt')

    setAuthState({
      token,
      expiresAt,
      userInfo: userInfo ? JSON.parse(userInfo) : {},
    })
  }, [])

  const setAuthInfo = ({ token, userInfo, expiresAt }) => {
    localStorage.setItem('token', token)
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    localStorage.setItem('expiresAt', expiresAt)

    setAuthState({
      token,
      userInfo,
      expiresAt,
    })
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('expiresAt')
    setAuthHeader(null)
    setAuthState({})
  }

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt) {
      return false
    }
    return new Date().getTime() / 1000 < authState.expiresAt
  }

  const isAdmin = () => {
    return authState.userInfo?.role === 'admin'
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState: (authInfo) => setAuthInfo(authInfo),
        logout,
        isAuthenticated,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
