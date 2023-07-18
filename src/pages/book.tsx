import Layout from "@/components/Layout"
import CategorizedRowItem from "@/components/Views/CategorizedRow/CategorizedRowItem"
import { GlobalStateContext } from "@/context/GlobalStateContext"
import useDeviceType from "@/hooks/useDeviceType"
import { PageProps } from "@/types/pages.types"
import { capitalizeSentence } from "@/utils/helpers"
import { Button } from "@mui/material"
import React, { useContext, useEffect } from "react"
import { MdOutlineChevronLeft } from "react-icons/md"

const SingleBookPage: React.FC<PageProps> = ({ title }) => {
  const { isMobile } = useDeviceType()
  const { selectedBook, selectedCategory } = useContext(GlobalStateContext)

  const relatedBooksData = selectedCategory?.books
    ? selectedCategory.books.filter(
        (book: { primary_isbn10: string }) =>
          book.primary_isbn10 !== selectedBook.primary_isbn10,
      )
    : []

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <Layout>
      <div className="flex flex-col px-2 py-5 gap-10 w-full">
        <div className="flex w-full justify-start items-center gap-2">
          <Button href="/" startIcon={<MdOutlineChevronLeft />} className="normal-case text-black text-lg font-serif">
            Back
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-auto flex justify-center">
            <img
              className="max-w-[275px] shadow-2xl"
              alt=""
              src={selectedBook.book_image}
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="font-serif">
              <h2 className="text-4xl">{capitalizeSentence(selectedBook.title)}</h2>
              <h3 className="text-2xl text-gray-600">{selectedBook.author}</h3>
              <h4>{selectedCategory.display_name}</h4>
            </div>
            <div>
              <p className="text-lg">{selectedBook.description}</p>
            </div>
          </div>
        </div>
        <div className="font-serif mt-10 lg:mt-32 flex flex-col gap-2 md:gap-5 lg:gap-10">
          <h2 className="text-2xl lg:text-4xl">
            Related books in {selectedCategory.display_name}
          </h2>
          <CategorizedRowItem
            items={relatedBooksData}
            itemsPerRow={isMobile ? 3 : 5}
            listData={selectedCategory}
          />
        </div>
      </div>
    </Layout>
  )
}
export default SingleBookPage
