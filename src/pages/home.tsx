import Layout from "@/components/Layout"
import CategorizedRowsView from "@/components/Views/CategorizedRow"
import useDeviceType from "@/hooks/useDeviceType"
import { PageProps } from "@/types/pages.types"
import React, { useEffect } from "react"

const HomePage: React.FC<PageProps> = ({ title }) => {
  const { isMobile } = useDeviceType()

  useEffect(() => {
    document.title = title
  }, [title])

  const data = [
    {
      categoryDisplayName: "Category Title 1",
      categoryName: "category",
      items: [
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
      ],
    },
    {
      categoryDisplayName: "Category Title 2",
      categoryName: "category2",
      items: [
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
        { image: "", href: "" },
      ],
    },
  ]

  return (
    <Layout>
      <div className="py-5">
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-10">
          <CategorizedRowsView data={data} itemsPerRow={isMobile ? 3 : 5} />
        </div>
      </div>
    </Layout>
  )
}
export default HomePage
