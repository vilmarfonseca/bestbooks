import React from "react"
import { LayoutProps } from "@/types/layout.types"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex w-full justify-between">
      <div className="w-[250px]">
        <Sidebar />
      </div>

      <div className="flex flex-col items-center w-[calc(100vw-250px)]">
        <Header />
        <main className="container">{children}</main>
      </div>
    </div>
  )
}
export default Layout
