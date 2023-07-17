import React, { useEffect } from "react"
import { PageProps } from "@/types/pages.types"
import Layout from "@/components/Layout";


const HomePage: React.FC<PageProps> = ({ title }) => {

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  )
}
export default HomePage
