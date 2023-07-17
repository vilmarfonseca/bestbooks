import Router from "@/pages/router"
import { StyledEngineProvider } from "@mui/material"
import React from "react"
import { BrowserRouter } from "react-router-dom"

const App: React.FC = () => {
  return (
    <StyledEngineProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App
