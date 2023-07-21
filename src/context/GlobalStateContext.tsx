import { hoursDiff } from "@/helpers/functions"
import { fetchAllLists } from "@/lib/api"
import React, { useCallback, useContext, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useLocalStorage } from "usehooks-ts"

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

  const getHomePageData = useCallback(async () => {
    try {
      const listsData = await fetchAllLists()

      if (listsData?.status === "OK") {
        setFullListsData({ ...listsData, ...{ requestDate: new Date() } })
      }
    } catch (error) {
      console.error("Error while fetching home page data:", error)
    }
  }, [setFullListsData])

  // Handle initial data request
  useEffect(() => {
    if (
      !fullListsData ||
      hoursDiff(new Date(fullListsData?.requestDate), new Date()) >
        parseInt(process.env.REACT_APP_NY_API_CACHE_TTL as string)
    ) {
      getHomePageData()
    }
  }, [fullListsData, getHomePageData])

  useEffect(() => {
    if (currentPath === "/") {
      setSelectedBook(null)
      setSelectedCategory(null)
      setBackPath("/")
    }
  }, [currentPath, setBackPath, setSelectedBook, setSelectedCategory])

  useEffect(() => {
    if (currentPath !== "/" && !fullListsData) {
      navigate("/", { replace: true })
    }
  }, [currentPath, fullListsData, navigate])

  const value = {
    backPath,
    fullListsData,
    isSidebarOpen,
    selectedBook,
    selectedCategory,
    setBackPath,
    setIsSidebarOpen,
    setSelectedBook,
    setSelectedCategory,
  }
  return (
    <GlobalStateContext.Provider value={value as any}>
      {children}
    </GlobalStateContext.Provider>
  )
}
