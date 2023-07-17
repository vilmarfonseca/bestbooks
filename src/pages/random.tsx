import React, { useEffect } from "react"
import { PageProps } from "@/types/pages.types"

const RandomPage: React.FC<PageProps> = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <>
      <h1>Random Page</h1>
    </>
  )
}
export default RandomPage
