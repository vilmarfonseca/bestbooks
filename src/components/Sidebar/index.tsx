import { Fade, IconButton, Slide } from "@mui/material"
import { useState } from "react"

import clsx from "clsx"
import {
  MdCalendarViewMonth,
  MdCalendarViewWeek,
  MdOutlineChevronRight,
  MdOutlineHome,
  MdOutlineLayers,
  MdOutlineLogin,
  MdOutlineShuffle,
} from "react-icons/md"
import SidebarItem from "./SidebarItem"

export default function Sidebar() {
  const [open, setOpen] = useState(true)

  const sidebarItems = {
    explore: [
      { displayName: "Top Books", icon: <MdOutlineHome />, href: "/" },
      {
        displayName: "Random Book",
        icon: <MdOutlineShuffle />,
        href: "/random",
      },
    ],
    byDate: [
      { displayName: "Weekly Lists", icon: <MdCalendarViewWeek />, href: "/weekly" },
      {
        displayName: "Monthly Lists",
        icon: <MdCalendarViewMonth />,
        href: "/monthly",
      },
    ],
    byCategory: [
      { displayName: "Fiction", icon: <MdOutlineLayers />, href: "/fiction" },
      {
        displayName: "Nonfiction",
        icon: <MdOutlineLayers />,
        href: "/nonfiction",
      },
      { displayName: "Children's", icon: <MdOutlineLayers />, href: "/childrens" },
    ],
  }

  return (
    <>
      <IconButton
        className={clsx(
          open ? "flex" : "hidden",
          "fixed bg-primary border-solid z-40 translate-x-[230px] translate-y-6 border border-secondary border-opacity-25",
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
          !open ? "absolute" : "",
          "flex flex-col w-[250px] p-5 h-[100vh] fixed justify-between bg-primary border-r border-secondary border-opacity-25",
        )}
      >
        <div>
          <div className="flex flex-col gap-10 items-start">
            <Fade in timeout={{ enter: 500 }}>
              <a
                href="/"
                className="text-black font-serif text-4xl no-underline text-center w-full"
              >
                BestBooks
              </a>
            </Fade>

            <div className="w-full">
              <span className="uppercase opacity-50 font-black text-xs tracking-[.1875rem]">
                Explore
              </span>
              {sidebarItems.explore.map((item, idx) => (
                <Fade
                  in
                  key={`sidebar-explore-item-${idx}`}
                  timeout={{ enter: 300 * (idx + 1) }}
                >
                  <div>
                    <SidebarItem
                      href={item.href}
                      icon={item.icon}
                      displayName={item.displayName}
                    />
                  </div>
                </Fade>
              ))}
            </div>

            <div className="w-full">
              <span className="uppercase opacity-50 font-black text-xs tracking-[.1875rem]">
                By Date
              </span>
              {sidebarItems.byDate.map((item, idx) => (
                <Fade
                  in
                  key={`sidebar-date-item-${idx}`}
                  timeout={{ enter: 400 * (idx + 1) }}
                >
                  <div>
                    <SidebarItem
                      href={item.href}
                      icon={item.icon}
                      displayName={item.displayName}
                    />
                  </div>
                </Fade>
              ))}
            </div>

            <div className="w-full">
              <span className="uppercase opacity-50 font-black text-xs tracking-[.1875rem]">
                By Category
              </span>
              {sidebarItems.byCategory.map((item, idx) => (
                <Fade
                  in
                  key={`sidebar-category-item-${idx}`}
                  timeout={{ enter: 500 * (idx + 1) }}
                >
                  <div>
                    <SidebarItem
                      href={item.href}
                      icon={item.icon}
                      displayName={item.displayName}
                    />
                  </div>
                </Fade>
              ))}
            </div>
          </div>

          <Fade in timeout={{ enter: 500 }}>
            <div>
              <SidebarItem
                href="/login"
                displayName="Sign In"
                icon={<MdOutlineLogin />}
              />
            </div>
          </Fade>
        </div>
      </Slide>
    </>
  )
}
