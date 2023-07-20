import Layout from "@/components/Layout"
import CategorizedRowsView from "@/components/Views/CategorizedRow"
import { GlobalStateContext } from "@/context/GlobalStateContext"
import useDeviceType from "@/hooks/useDeviceType"
import { PageProps } from "@/types/pages.types"
import { capitalizeSentence } from "@/helpers/functions"
import { Fade } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const DateListsPage: React.FC<PageProps> = ({ title, params }) => {
  const { dateRange } = useParams()
  const { isMobile } = useDeviceType()
  const { fullListsData } = useContext(GlobalStateContext)
  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    document.title = title + capitalizeSentence(dateRange) + " Lists"
  }, [dateRange, title])

  useEffect(() => {
    const lists = fullListsData?.results?.lists

    if (lists?.length > 0) {
      const filteredList = lists.filter(
        (list: { updated: string }) =>
          list.updated === dateRange?.toLocaleUpperCase(),
      )

      if (filteredList.length > 0) {
        setData(filteredList)
      } else {
        navigate("/404", { replace: true })
      }
    }
  }, [dateRange, fullListsData, navigate])

  return (
    <Layout>
      <div className="py-5 w-full">
        <Fade in timeout={{ enter: 500 }}>
          <div className="flex flex-col gap-10 w-full">
            <h2 className="text-3xl lg:text-5xl font-serif pl-2">{`${capitalizeSentence(
              dateRange,
            )} Lists`}</h2>
            <CategorizedRowsView data={data} itemsPerRow={isMobile ? 3 : 5} />
          </div>
        </Fade>
      </div>
    </Layout>
  )
}
export default DateListsPage
