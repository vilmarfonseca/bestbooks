import { getUserData, initializeNewUser } from "@/lib/database"
import { auth } from "@/services/firebase"
import {
  User as FirebaseAuthUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import React, { useCallback, useContext, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "usehooks-ts"

export const AuthContext = React.createContext<any>(null)

export function useAuth() {
  return useContext(AuthContext)
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate()
  const [userData, setUserData] = useLocalStorage("userData", null)
  const [currentUser, setCurrentUser] = useLocalStorage<FirebaseAuthUser | null>(
    "user",
    null,
  )

  const signup = useCallback(
    async (email: string, password: string) => {
      try {
        const response = await createUserWithEmailAndPassword(auth, email, password)

        if (response?.user?.uid) {
          initializeNewUser(response.user)
        }
        navigate("/")
      } catch (error) {
        navigate("/")
        console.error("Error during signup:", error)
      }
    },
    [navigate],
  )

  const login = useCallback((email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }, [])

  const logout = useCallback(async () => {
    try {
      await auth.signOut()
      setCurrentUser(null)
      navigate("/")
    } catch (error) {
      console.error("Error during logout:", error)
    }
  }, [setCurrentUser, navigate])

  useEffect(() => {
    return auth.onAuthStateChanged((firebaseUser) => {
      setCurrentUser(firebaseUser as FirebaseAuthUser | null)
    })
  }, [setCurrentUser])

  const getInitialUserData = useCallback(async () => {
    if (currentUser?.uid && !userData) {
      try {
        const data = await getUserData(currentUser)
        if (data) {
          setUserData(data as any)
        }
      } catch (error) {
        console.error("Error while fetching initial user data:", error)
      }
    }
  }, [currentUser, setUserData, userData])

  useEffect(() => {
    getInitialUserData()
  }, [getInitialUserData])

  const value = useMemo(
    () => ({
      currentUser,
      userData,
      login,
      signup,
      logout,
    }),
    [currentUser, userData, login, signup, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
