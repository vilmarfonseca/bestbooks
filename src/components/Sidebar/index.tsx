import { Fade, IconButton, Slide } from "@mui/material"
import { useContext, useEffect } from "react"

import { GlobalStateContext } from "@/context/GlobalStateContext"
import clsx from "clsx"
import {
  MdCalendarViewMonth,
  MdCalendarViewWeek,
  MdClose,
  MdOutlineHome,
  MdOutlineLayers,
  MdOutlineLogin,
  MdOutlineShuffle,
} from "react-icons/md"
import SidebarItem from "./SidebarItem"
import useDeviceType from "@/hooks/useDeviceType"

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(GlobalStateContext)
  const { isDesktop } = useDeviceType()

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

  useEffect(() => {
    if (isDesktop) {
      setIsSidebarOpen(true)
    } else {
      setIsSidebarOpen(false)
    }
  }, [isDesktop, setIsSidebarOpen])

  return (
    <>
      {!isDesktop && (
        <Fade in={isSidebarOpen}>
          <div
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="bg-black absolute w-[100vw] h-[100vh] z-50 bg-opacity-40"
          ></div>
        </Fade>
      )}

      <Slide
        in={isSidebarOpen}
        appear={false}
        direction="right"
        id="mainSidebar"
        className={clsx(
          !isDesktop ? "absolute" : "fixed",
          "flex z-50 flex-col w-[250px] p-5 h-[100vh] fixed justify-between shadow-xl bg-primary border-r border-secondary border-opacity-25",
        )}
      >
        <div>
          {!isDesktop && (
            <IconButton
              className={clsx(
                isSidebarOpen ? "flex" : "hidden",
                "fixed bg-primary border-solid z-[60] translate-x-[210px] translate-y-6 border border-secondary border-opacity-25",
              )}
              disableTouchRipple
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <MdClose className="h-5 w-5" />
            </IconButton>
          )}
          <div className="flex flex-col gap-10 items-start">
            <div className="w-full mt-10">
              <span className="uppercase opacity-50 font-black text-xs tracking-[.1875rem]">
                Explore
              </span>
              {sidebarItems.explore.map((item, idx) => (
                <div key={`sidebar-explore-item-${idx}`}>
                  <SidebarItem
                    href={item.href}
                    icon={item.icon}
                    displayName={item.displayName}
                  />
                </div>
              ))}
            </div>

            <div className="w-full">
              <span className="uppercase opacity-50 font-black text-xs tracking-[.1875rem]">
                By Date
              </span>
              {sidebarItems.byDate.map((item, idx) => (
                <div key={`sidebar-date-item-${idx}`}>
                  <SidebarItem
                    href={item.href}
                    icon={item.icon}
                    displayName={item.displayName}
                  />
                </div>
              ))}
            </div>

            <div className="w-full">
              <span className="uppercase opacity-50 font-black text-xs tracking-[.1875rem]">
                By Category
              </span>
              {sidebarItems.byCategory.map((item, idx) => (
                <div key={`sidebar-category-item-${idx}`}>
                  <SidebarItem
                    href={item.href}
                    icon={item.icon}
                    displayName={item.displayName}
                  />
                </div>
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
