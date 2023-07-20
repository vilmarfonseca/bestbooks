import { GlobalStateProvider } from "@/context/GlobalStateContext"
import Router from "@/pages/router"
import { StyledEngineProvider } from "@mui/material"
import React, { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "@/context/AuthContext"
import FullPageSpinner from "@/components/FullPageSpinner"

const App: React.FC = () => {
  return (
    <StyledEngineProvider>
      <BrowserRouter>
        <AuthProvider>
          <GlobalStateProvider>
            <Suspense fallback={<FullPageSpinner />}>
              <Router />
            </Suspense>
          </GlobalStateProvider>
        </AuthProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App
