import { Button } from "@mui/material"
import React from "react"

import clsx from "clsx"

interface SidebarItemProps {
  key?: string
  href?: string
  className?: string
  displayName: string
  icon?: React.ReactNode
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  key,
  href,
  className,
  displayName,
  icon,
}) => {
  return (
    <div key={key} className="w-full">
      <Button
        href={href}
        startIcon={icon}
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
