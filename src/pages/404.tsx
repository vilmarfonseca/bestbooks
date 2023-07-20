import Layout from "@/components/Layout"
import { PageProps } from "@/types/pages.types"
import { Button, Fade } from "@mui/material"
import React, { useEffect } from "react"
import { MdErrorOutline } from "react-icons/md"

const NotFoundPage: React.FC<PageProps> = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <Layout>
      <div className="py-5 w-full">
        <Fade in timeout={{ enter: 500 }}>
          <div className="w-full h-[75vh] flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col gap-5 items-center justify-center">
              <MdErrorOutline className="w-36 h-36" />
              <h2 className="text-2xl lg:text-4xl max-w-lg text-center">
                Sorry, the page you're looking for doesn't exists
              </h2>
            </div>
            <Button
              variant="outlined"
              className="normal-case font-bold text-white bg-cta border-cta hover:bg-white hover:text-cta"
              href="/"
            >
              Back to Homepage
            </Button>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}
export default NotFoundPage
