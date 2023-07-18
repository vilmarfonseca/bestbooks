import Layout from "@/components/Layout"
import CategorizedRowsView from "@/components/Views/CategorizedRow"
import { PageProps } from "@/types/pages.types"
import React, { useEffect } from "react"

const HomePage: React.FC<PageProps> = ({ title }) => {
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
        <div className="flex flex-col gap-16">
          <CategorizedRowsView data={data} itemsPerRow={10} />
        </div>
      </div>
    </Layout>
  )
}
export default HomePage
