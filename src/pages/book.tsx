import Layout from "@/components/Layout"
import CategorizedRowItem from "@/components/Views/CategorizedRow/CategorizedRowItem"
import { GlobalStateContext } from "@/context/GlobalStateContext"
import useDeviceType from "@/hooks/useDeviceType"
import { PageProps } from "@/types/pages.types"
import { capitalizeSentence } from "@/utils/helpers"
import { Button, Divider, IconButton } from "@mui/material"
import React, { useContext, useEffect } from "react"
import { MdBookmarkBorder, MdOutlineChevronLeft } from "react-icons/md"

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
      <div className="flex flex-col px-2 py-5 gap-5 lg:gap-10 w-full">
        <div className="flex w-full justify-start items-center gap-2">
          <Button
            href="/"
            startIcon={<MdOutlineChevronLeft />}
            className="normal-case text-black text-lg font-serif"
          >
            Back
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-24 mb-10 lg:mb-20 w-full">
          <div className="w-full md:w-auto flex justify-center relative">
            <img
              className="w-[200px] md:w-[275px] shadow-card"
              alt=""
              src={selectedBook.book_image}
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col font-serif">
              <div className="flex items-center gap-2 lg:gap-4">
                <h2 className="text-2xl lg:text-4xl">
                  {capitalizeSentence(selectedBook.title)}
                </h2>
                <IconButton aria-label="Save to My List">
                  <MdBookmarkBorder />
                </IconButton>
              </div>
              <h3 className="text-xl lg:text-2xl text-gray-800">
                {selectedBook.author}
              </h3>
              <h3 className="text-lg lg:text-xl text-gray-800 mt-4">
                #{selectedBook.rank} in {selectedCategory.display_name}
              </h3>
              <Divider className="my-2" />

              <div className="flex flex-col gap-3 mt-2 ">
                <span className="uppercase text-gray-800 font-sans font-black text-xs tracking-[.1875rem]">
                  Available to buy at
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedBook?.buy_links?.length > 0 &&
                    selectedBook.buy_links.map(
                      (item: { url: string; name: string }, idx: any) => (
                        <Button
                          key={`buyLink-${idx}`}
                          href={item.url}
                          target="_blank"
                          variant="outlined"
                          className="text-black border-black normal-case"
                        >
                          {item.name}
                        </Button>
                      ),
                    )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="uppercase text-gray-800 font-black text-xs tracking-[.1875rem]">
                Publisher
              </span>
              <p className="text-lg lg:text-xl text-gray-800 font-serif">
                {selectedBook.publisher}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="uppercase text-gray-800 font-black text-xs tracking-[.1875rem]">
                Description
              </span>
              <p className="text-lg lg:text-xl text-gray-800 font-serif max-w-6xl">
                {selectedBook.description}
              </p>
            </div>
          </div>
        </div>

        <Divider />

        <div className="font-serif flex flex-col gap-2 md:gap-5 lg:gap-10">
          <h2 className="text-2xl lg:text-4xl">
            More {selectedCategory.display_name.toLowerCase()} books
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
