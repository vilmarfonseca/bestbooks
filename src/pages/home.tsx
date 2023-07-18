import Layout from "@/components/Layout"
import CategorizedRowsView from "@/components/Views/CategorizedRow"
import useDeviceType from "@/hooks/useDeviceType"
import { fetchAllLists } from "@/lib/api"
import { PageProps } from "@/types/pages.types"
import React, { useEffect, useState } from "react"

const HomePage: React.FC<PageProps> = ({ title }) => {
  const [data, setData] = useState([])
  const { isMobile } = useDeviceType()

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    async function getHomePageData() {
      const listsData = await fetchAllLists()

      if(listsData?.results?.lists.length > 0) {
        setData(listsData.results.lists)
      }
    }

    getHomePageData()
  }, [])
  
  return (
    <Layout>
      <div className="py-5 w-full">
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-10 w-full">
          <CategorizedRowsView data={data} itemsPerRow={isMobile ? 3 : 5} />
        </div>
      </div>
    </Layout>
  )
}
export default HomePage
