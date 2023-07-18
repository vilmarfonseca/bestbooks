import { CircularProgress } from "@mui/material"
import React, { useContext, useState } from "react"

export const GlobalStateContext = React.createContext<any>({});

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  if (loading) {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <CircularProgress className="h-10 w-10 text-cta" />
      </div>
    )
  }

  const value = {
    loading,
    setLoading,
    isSidebarOpen,
    setIsSidebarOpen,
  }
  return (
    <GlobalStateContext.Provider value={value as any}>
      {children}
    </GlobalStateContext.Provider>
  )
}
