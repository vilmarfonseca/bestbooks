import FullPageSpinner from "@/components/FullPageSpinner"
import { getUserDataFromFirestore, initializeNewUser } from "@/lib/database"
import { auth } from "@/services/firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import firebase from "firebase/compat"
import React, { useCallback, useContext, useEffect, useState } from "react"
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
  const [userData, setUserData] = useLocalStorage<any>("userData", null)
  const [currentUser, setCurrentUser] = useLocalStorage<firebase.User | null>(
    "user",
    null,
  )

  async function signup(email: string, password: string) {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)

      if (response?.user?.uid) {
        initializeNewUser(response.user)
      }
      navigate("/")
    } catch (error) {
      navigate("/")
      console.log(error)
    }
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

  const getInitialUserData = useCallback(async () => {
    if (currentUser?.uid && !userData) {
      const data = await getUserDataFromFirestore(currentUser)
      if (data) {
        setUserData(data)
      }
    }
  }, [currentUser, setUserData, userData])

  useEffect(() => {
    getInitialUserData()
  }, [getInitialUserData])

  if (loading) {
    return <FullPageSpinner />
  }

  const value = {
    currentUser,
    userData,
    login,
    signup,
    logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
