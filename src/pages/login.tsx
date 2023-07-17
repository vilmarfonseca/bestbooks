import React, { useEffect } from "react"
import { PageProps } from "@/types/pages.types"

const LoginPage: React.FC<PageProps> = ({ title }) => {
  
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <>
      <h1>Login Page</h1>
    </>
  )
}
export default LoginPage
