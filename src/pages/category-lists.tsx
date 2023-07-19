import Layout from "@/components/Layout"
import CategorizedRowsView from "@/components/Views/CategorizedRow"
import { GlobalStateContext } from "@/context/GlobalStateContext"
import useDeviceType from "@/hooks/useDeviceType"
import { PageProps } from "@/types/pages.types"
import { capitalizeSentence } from "@/utils/helpers"
import { Fade } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CategoryListsPage: React.FC<PageProps> = ({ title }) => {
  const { queryCategory } = useParams()
  const [data, setData] = useState([] as any)
  const { fullListsData } = useContext(GlobalStateContext)
  const { isMobile } = useDeviceType()

  useEffect(() => {
    document.title = `${title} ${capitalizeSentence(queryCategory)} Lists`
  }, [queryCategory, title])

  useEffect(() => {
    function getParsedQueryCategory() {
      let query = queryCategory

      if (query?.includes("-")) {
        query = query?.split("-").join(" ")
      } else if (query?.includes("'s")) {
        query = query?.replace("'s", "")
      }

      return query as string
    }

    const lists = fullListsData?.results?.lists

    if (lists.length > 0) {
      const filteredList = lists.filter((item: { display_name: string }) =>
        queryCategory === "fiction"
          ? item.display_name.toLowerCase().includes("fiction") &&
            !item.display_name.toLowerCase().includes("nonfiction")
          : item.display_name.toLowerCase().includes(getParsedQueryCategory()),
      )

      if (filteredList?.length > 0) {
        setData(filteredList)
      }
    }
  }, [fullListsData, queryCategory])

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
export default CategoryListsPage
