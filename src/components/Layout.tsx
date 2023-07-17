import React from "react"
import { LayoutProps } from "@/types/layout.types"
import Sidebar from "@/components/Sidebar"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
export default Layout
