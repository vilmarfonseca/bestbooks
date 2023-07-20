import { Button } from "@mui/material"
import React from "react"

import clsx from "clsx"

interface SidebarItemProps {
  className?: string
  displayName: string
  href?: string
  icon?: React.ReactNode
  itemKey?: string | undefined
  onClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  className,
  displayName,
  icon,
  onClick
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
