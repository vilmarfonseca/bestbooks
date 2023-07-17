import { Route, Routes } from "react-router-dom"
import { routerType } from "@/types/router.types"
import pagesData from "@/pages/pagesData"

const Router = () => {
  const pageRoutes = pagesData.map(({ path, element }: routerType, idx) => {
    return <Route key={idx} path={`/${path}`} element={element} />
  })

  return <Routes>{pageRoutes}</Routes>
}

export default Router
