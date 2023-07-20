import { GlobalStateContext } from "@/context/GlobalStateContext"
import useDeviceType from "@/hooks/useDeviceType"
import { Button, IconButton } from "@mui/material"
import React, { useContext } from "react"
import { MdOutlineAccountCircle, MdOutlineMenu } from "react-icons/md"

const Header: React.FC = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(GlobalStateContext)
  const { isDesktop } = useDeviceType()

  return (
    <div
      className={
        "max-w-[1536px] w-full h-16 md:h-20 flex items-center justify-between border-b border-secondary border-opacity-25"
      }
    >
      <div className="flex items-center">
        {!isDesktop && (
          <div>
            <IconButton
              disableFocusRipple
              disableTouchRipple
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <MdOutlineMenu className="h-6 w-6" />
            </IconButton>
          </div>
        )}

        <a
          href="/"
          className="text-black font-serif text-2xl lg:text-4xl no-underline text-center w-full"
        >
          BestBooks
        </a>
      </div>
      <div className="flex items-center gap-4">
        <Button
          href="/login"
          className="normal-case bg-cta text-white font-sans font-bold py-2 px-4 rounded-full shadow-sm transition-all duration-200 hover:bg-white hover:text-cta"
        >
          Sign In
        </Button>
        {/* TODO: Change based on user logged */}
        {/* <span className="hidden lg:flex">placeholder@email.com</span>
        <MdOutlineAccountCircle className="w-8 h-8 lg:w-10 lg:h-10" /> */}
      </div>
    </div>
  )
}
export default Header
