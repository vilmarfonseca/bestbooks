import { IconButton } from "@mui/material"
import React from "react"
import { MdOutlineMenu, MdOutlineAccountCircle } from "react-icons/md"

const Header: React.FC = () => {
  return (
    <div className="container w-full h-20 flex items-center justify-between">
      <div>
        <IconButton disableFocusRipple disableTouchRipple>
          <MdOutlineMenu className="h-6 w-6" />
        </IconButton>
      </div>
      <div className="flex items-center gap-4">
        <span>placeholder@email.com</span>
        <MdOutlineAccountCircle className="w-10 h-10"/>
      </div>
    </div>
  )
}
export default Header
