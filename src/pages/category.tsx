import BackButton from "@/components/Buttons/BackButton"
import Layout from "@/components/Layout"
import GridListingView from "@/components/Views/GridListingView"
import { GlobalStateContext } from "@/context/GlobalStateContext"
import { PageProps } from "@/types/pages.types"
import { Fade } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"

const HomePage: React.FC<PageProps> = ({ title }) => {
  const { selectedCategory, fullListsData } = useContext(GlobalStateContext)
  const [data, setData] = useState([])

  useEffect(() => {
    document.title = title + selectedCategory.display_name
  }, [selectedCategory.display_name, title])

  useEffect(() => {
    const catListId = selectedCategory.list_id
    const lists = fullListsData?.results?.lists

    if (lists?.length > 0) {
      const books = lists.find(
        (item: { list_id: number }) => item.list_id === catListId,
      )

      if (books) {
        setData(books)
      }
    }
  }, [fullListsData, selectedCategory])

  return (
    <Layout>
      <div className="flex px-2 lg:py-5 gap-10 w-full">
        <div className="flex flex-col gap-16">
          <Fade in timeout={{ enter: 500 }}>
            <div className="flex flex-col gap-4">
              <BackButton />
              <GridListingView data={data} />
            </div>
          </Fade>
        </div>
      </div>
    </Layout>
  )
}
export default HomePage
