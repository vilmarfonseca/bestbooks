import React from "react"
import { LayoutProps } from "@/types/layout.types"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import clsx from "clsx"
import useDeviceType from "@/hooks/useDeviceType"
import Footer from "@/components/Footer"

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDesktop } = useDeviceType()

  return (
    <div className="flex w-full justify-between">
      <div className={clsx(!isDesktop && "absolute", "max-w-[250px]")}>
        <Sidebar />
      </div>

      <div
        className={clsx(
          isDesktop ? "w-[calc(100vw-250px)]" : "w-full",
          "flex flex-col items-center px-[25px] lg:px-[50px]",
        )}
      >
        <Header />
        <main className="max-w-[1800px] mt-5 mb-10 lg:mt-10 lg:mb-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
export default Layout
