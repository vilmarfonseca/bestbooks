import React, { useEffect } from "react"
import { PageProps } from "@/types/pages.types"


const HomePage: React.FC<PageProps> = ({ title }) => {

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <h1>Home Page</h1>
    </>
  )
}
export default HomePage