import React, { useEffect } from "react"
import { PageProps } from "@/types/pages.types"

const RegisterPage: React.FC<PageProps> = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [title])
  
  return (
    <>
      <h1>Register Page</h1>
    </>
  )
}
export default RegisterPage
