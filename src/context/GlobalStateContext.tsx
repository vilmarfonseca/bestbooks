import { fetchAllLists } from "@/lib/api"
import { hoursDiff } from "@/utils/helpers"
import { CircularProgress } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { useLocalStorage } from "usehooks-ts"
import { useLocation, useNavigate } from "react-router-dom"

export const GlobalStateContext = React.createContext<any>({})

export function useGlobalState() {
  return useContext(GlobalStateContext)
}

type GlobalStateProviderProps = {
  children: React.ReactNode
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false)
  const [backPath, setBackPath] = useLocalStorage("backPath", "/")
  const [isSidebarOpen, setIsSidebarOpen] = useLocalStorage("sidebarControl", true)
  const [fullListsData, setFullListsData] = useLocalStorage("listsData", null as any)
  const [selectedBook, setSelectedBook] = useLocalStorage(
    "selectedBook",
    null as any,
  )
  const [selectedCategory, setSelectedCategory] = useLocalStorage(
    "selectedCategory",
    null as any,
  )

  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname

  useEffect(() => {
    async function getHomePageData() {
      const listsData = await fetchAllLists()

      if (listsData?.status === "OK") {
        setFullListsData({ ...listsData, ...{ requestDate: new Date() } })
      }
    }

    if (
      !fullListsData ||
      hoursDiff(new Date(fullListsData?.requestDate), new Date()) >
        parseInt(process.env.REACT_APP_NY_API_CACHE_TTL as string)
    ) {
      getHomePageData()
    }
  })

  useEffect(() => {
    if (currentPath === "/") {
      setSelectedBook(null)
      setSelectedCategory(null)
      setBackPath("/")
    }

    if (currentPath !== "/" && !fullListsData) {
      navigate("/", { replace: true })
    }
  }, [
    currentPath,
    fullListsData,
    navigate,
    setBackPath,
    setSelectedBook,
    setSelectedCategory,
  ])

  if (loading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <CircularProgress className="h-10 w-10 text-cta" />
      </div>
    )
  }

  const value = {
    backPath,
    fullListsData,
    isSidebarOpen,
    loading,
    selectedBook,
    selectedCategory,
    setBackPath,
    setIsSidebarOpen,
    setLoading,
    setSelectedBook,
    setSelectedCategory,
  }
  return (
    <GlobalStateContext.Provider value={value as any}>
      {children}
    </GlobalStateContext.Provider>
  )
}
