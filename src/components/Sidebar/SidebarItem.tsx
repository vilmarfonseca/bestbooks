import { SidebarItemProps } from "@/types/components/sidebar.types"
import { Button } from "@mui/material"
import clsx from "clsx"
import React from "react"

const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  className,
  displayName,
  icon,
  onClick,
}) => {
  return (
    <div className="w-full">
      <Button
        href={href}
        startIcon={icon}
        onClick={onClick}
        className={clsx(
          className,
          "text-black normal-case font-sans w-full flex justify-start text-lg",
        )}
      >
        {displayName}
      </Button>
    </div>
  )
}

export default SidebarItem
