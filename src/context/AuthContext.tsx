import FullPageSpinner from "@/components/FullPageSpinner"
import { auth } from "@/services/firebase"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth"
import firebase from "firebase/compat"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "usehooks-ts"

export const AuthContext = React.createContext({})

export function useAuth() {
  return useContext(AuthContext)
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useLocalStorage<firebase.User | null>(
    "user",
    null,
  )

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  async function logout() {
    await auth.signOut()
    setCurrentUser(null)
    navigate("/")
  }

  useEffect(() => {
    return auth.onAuthStateChanged((firebaseUser) => {
      setCurrentUser(firebaseUser as firebase.User | null)
      setLoading(false)
    })
  }, [setCurrentUser])

  if (loading) {
    return <FullPageSpinner />
  }

  const value = {
    currentUser,
    login,
    signup,
    logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
