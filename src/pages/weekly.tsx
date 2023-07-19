import Layout from "@/components/Layout"
import CategorizedRowsView from "@/components/Views/CategorizedRow"
import { GlobalStateContext } from "@/context/GlobalStateContext"
import useDeviceType from "@/hooks/useDeviceType"
import { PageProps } from "@/types/pages.types"
import { Fade } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"

const WeeklyListsPage: React.FC<PageProps> = ({ title }) => {
  const { isMobile } = useDeviceType()
  const { fullListsData } = useContext(GlobalStateContext)
  const [data, setData] = useState([])

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    const lists = fullListsData?.results?.lists

    if (lists?.length > 0) {
      setData(lists.filter((list: { updated: string }) => list.updated === "WEEKLY"))
    }
  }, [fullListsData])

  console.log(data, "data")

  return (
    <Layout>
      <div className="py-5 w-full">
        <Fade in timeout={{ enter: 500 }}>
          <div className="flex flex-col gap-10 w-full">
            <CategorizedRowsView data={data} itemsPerRow={isMobile ? 3 : 5} />
          </div>
        </Fade>
      </div>
    </Layout>
  )
}
export default WeeklyListsPage
