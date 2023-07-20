import { GlobalStateProvider } from "@/context/GlobalStateContext"
import Router from "@/pages/router"
import { StyledEngineProvider } from "@mui/material"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

const App: React.FC = () => {
  return (
    <StyledEngineProvider>
      <BrowserRouter>
        <AuthProvider>
          <GlobalStateProvider>
            <Router />
          </GlobalStateProvider>
        </AuthProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App
