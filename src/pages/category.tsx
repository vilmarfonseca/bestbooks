import Layout from "@/components/Layout"
import GridListingView from "@/components/Views/GridListingView"
import { PageProps } from "@/types/pages.types"
import React, { useEffect } from "react"

const HomePage: React.FC<PageProps> = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [title])

  const data = [
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
  ]

  return (
    <Layout>
      <div className="flex px-2 py-5 gap-10 w-full">
        <div className="flex flex-col gap-16">
          <div>
            <GridListingView data={data} title="Category 1" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default HomePage
