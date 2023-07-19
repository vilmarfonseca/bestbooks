import BookDetails from "@/components/BookDetails"
import BackButton from "@/components/Buttons/BackButton"
import Layout from "@/components/Layout"
import RelatedBooks from "@/components/RelatedBooks"
import { PageProps } from "@/types/pages.types"
import { Divider, Fade } from "@mui/material"
import React, { useEffect } from "react"

const SingleBookPage: React.FC<PageProps> = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <Layout>
      <Fade in timeout={{ enter: 500 }}>
        <div className="flex flex-col px-2 py-5 gap-5 lg:gap-10 w-full">
          <BackButton />

          <BookDetails />

          <Divider />

          <RelatedBooks />
        </div>
      </Fade>
    </Layout>
  )
}
export default SingleBookPage
