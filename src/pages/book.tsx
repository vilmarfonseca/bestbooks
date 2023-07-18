import Layout from "@/components/Layout"
import CategorizedRowItem from "@/components/Views/CategorizedRow/CategorizedRowItem"
import { PageProps } from "@/types/pages.types"
import React, { useEffect } from "react"

const SingleBookPage: React.FC<PageProps> = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [title])

  const relatedBooksData = [
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
      <div className="flex flex-col px-2 py-5 gap-10 w-full">
        <div className="flex gap-20">
          <div>
            <img
              className="max-w-[200px] shadow-2xl"
              alt=""
              src="https://storage.googleapis.com/du-prd/books/images/9781538756591.jpg"
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="font-serif">
              <h2 className="text-4xl">Too Late</h2>
              <h3 className="text-2xl text-gray-500">Colleen Hoover</h3>
            </div>
            <div>
              <p className="text-lg">
                Dangers develop when a drug trafficker becomes obsessed with a woman
                who has a mutual attraction to a D.E.A. agent.
              </p>
            </div>
          </div>
        </div>
        <div className="font-serif mt-10">
          <h2 className="text-4xl">Related Books</h2>
          <CategorizedRowItem
            categoryName=""
            items={relatedBooksData}
            itemsPerRow={10}
          />
        </div>
      </div>
    </Layout>
  )
}
export default SingleBookPage
