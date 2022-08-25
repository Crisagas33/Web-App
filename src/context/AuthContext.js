import { createContext, useContext } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../firebase'

export const authcontext = createContext()

export const useAuth = () => {
  const context = useContext(authcontext)
  if (!context) throw new Error('There is no auth provider')
  return context
}

export function AuthProvider({ children }) {
  const singup = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
  }
  const login = async (email, password) => {
     await signInWithEmailAndPassword(auth, email, password)
  }

  return (
    <authcontext.Provider value={{ singup, login }}>
      {children}
    </authcontext.Provider>
  )
}
