import { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export const authcontext = createContext()

export const useAuth = () => {
  const context = useContext(authcontext)
  if (!context) throw new Error('There is no auth provider')
  return context
}

export function AuthProvider({ children }) {
  const singup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  }

  return (
    <authcontext.Provider value={{ singup }}>{children}</authcontext.Provider>
  )
}
