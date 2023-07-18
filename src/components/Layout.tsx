import React from "react"
import { LayoutProps } from "@/types/layout.types"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import clsx from "clsx"
import useDeviceType from "@/hooks/useDeviceType"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDesktop } = useDeviceType()

  return (
    <div className="flex w-full justify-between">
      <div className={clsx(!isDesktop && "absolute", "max-w-[250px]")}>
        <Sidebar />
      </div>

      <div className="flex flex-col items-center w-full px-[25px] lg:px-[50px]">
        <Header />
        <main className="container">{children}</main>
      </div>
    </div>
  )
}
export default Layout
