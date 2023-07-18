import Router from "@/pages/router"
import { StyledEngineProvider } from "@mui/material"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { GlobalStateProvider } from "@/context/GlobalStateContext"

const App: React.FC = () => {
  return (
    <StyledEngineProvider>
      <BrowserRouter>
        <GlobalStateProvider>
          <Router />
        </GlobalStateProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App
