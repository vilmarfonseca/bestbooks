import { IconButton, Slide } from "@mui/material"
import { useState } from "react"

import clsx from "clsx"
import {
    MdCalendarViewMonth,
    MdCalendarViewWeek,
    MdOutlineCategory,
    MdOutlineChevronRight,
    MdOutlineHome,
    MdOutlineLayers,
    MdOutlineLogin,
    MdOutlineShuffle,
} from "react-icons/md"
import SidebarItem from "./SidebarItem"

export default function Sidebar() {
  const [open, setOpen] = useState(true)

  const sidebarItems = [
    { displayName: "Top Books", icon: <MdOutlineHome />, href: "/" },
    {
      displayName: "Random Best Seller",
      icon: <MdOutlineShuffle />,
      href: "/random",
    },
    {
      displayName: "Lists By Category",
      icon: <MdOutlineLayers />,
      subItems: [
        { displayName: "Fiction", icon: <MdOutlineCategory /> },
        { displayName: "Nonfiction", icon: <MdOutlineCategory /> },
        { displayName: "Children's", icon: <MdOutlineCategory /> },
      ],
    },
    { displayName: "Weekly Lists", icon: <MdCalendarViewWeek />, href: "/weekly" },
    {
      displayName: "Monthly Lists",
      icon: <MdCalendarViewMonth />,
      href: "/monthly",
    },
  ]

  return (
    <>
      <IconButton
        className={clsx(
          open ? "flex" : "hidden",
          "absolute bg-primary border-solid z-40 translate-x-[230px] translate-y-6 border border-secondary border-opacity-25",
        )}
        disableTouchRipple
        onClick={() => setOpen(!open)}
      >
        <MdOutlineChevronRight className="h-5 w-5" />
      </IconButton>
      <Slide
        in={open}
        appear={false}
        direction="right"
        id="mainSidebar"
        className={clsx(
          !open ? "absolute" : "relative",
          "flex flex-col w-[250px] p-5 h-[100vh] border-r border-secondary border-opacity-25 justify-between",
        )}
      >
        <div>
          <a
            href="/"
            className="text-black font-serif text-4xl no-underline text-center "
          >
            BestBooks
          </a>

          <div>
            {sidebarItems.map((item, idx) => (
              <SidebarItem
                key={`sidebar-menu-item${idx}`}
                href={item.href}
                icon={item.icon}
                displayName={item.displayName}
              />
            ))}
          </div>

          <div>
            {sidebarItems.map((item, idx) => (
              <SidebarItem
                key={`sidebar-menu-item${idx}`}
                href={item.href}
                icon={item.icon}
                displayName={item.displayName}
              />
            ))}
          </div>

          <SidebarItem
            href="/login"
            displayName="Sign In"
            icon={<MdOutlineLogin />}
          />
        </div>
      </Slide>
    </>
  )
}
