import React from "react"
import { LayoutProps } from "@/types/layout.types"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  )
}
export default Layout
