import BookDetails from "@/components/Book/BookDetails"
import BackButton from "@/components/Buttons/BackButton"
import Layout from "@/components/Layout"
import RelatedBooks from "@/components/Book/RelatedBooks"
import { GlobalStateContext } from "@/context/GlobalStateContext"
import { PageProps } from "@/types/pages.types"
import { capitalizeSentence } from "@/helpers/functions"
import { Divider, Fade } from "@mui/material"
import React, { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"

const SingleBookPage: React.FC<PageProps> = ({ title }) => {
  const location = useLocation()
  const currentPath = location.pathname
  const { selectedBook } = useContext(GlobalStateContext)

  useEffect(() => {
    document.title = `${title} ${capitalizeSentence(
      selectedBook.title.toLowerCase(),
    )} - ${selectedBook.author}`
  }, [selectedBook.author, selectedBook.title, title])

  return (
    <Layout>
      <Fade in timeout={{ enter: 500 }}>
        <div className="flex flex-col px-2 py-5 gap-5 lg:gap-10 w-full">
          <BackButton />

          <BookDetails />

          {!(currentPath === "/my-books/book") && (
            <>
              <Divider />
              <RelatedBooks />
            </>
          )}
        </div>
      </Fade>
    </Layout>
  )
}
export default SingleBookPage
