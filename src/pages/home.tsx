import Layout from "@/components/Layout"
import CategorizedRowsView from "@/components/Views/CategorizedRow"
import { GlobalStateContext } from "@/context/GlobalStateContext"
import useDeviceType from "@/hooks/useDeviceType"
import { PageProps } from "@/types/pages.types"
import { Fade } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"

const HomePage: React.FC<PageProps> = ({ title }) => {
  const [data, setData] = useState([])
  const { fullListsData } = useContext(GlobalStateContext)
  const { isMobile } = useDeviceType()

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    if (fullListsData?.results?.lists) {
      setData(fullListsData.results.lists)
    }
  }, [fullListsData])

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
export default HomePage
