import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import useDeviceType from "@/hooks/useDeviceType"
import { LayoutProps } from "@/types/layout.types"
import clsx from "clsx"
import React from "react"

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
        <main className="max-w-[1440px] mt-5 mb-10 lg:mt-10 lg:mb-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
export default Layout
