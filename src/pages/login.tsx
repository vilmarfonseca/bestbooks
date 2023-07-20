import { useEffect } from "react"
import LoginImage from "@/assets/img/login.jpeg"
import LoginForm from "@/components/Forms/LoginForm"
import { Fade } from "@mui/material"

const LoginPage = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <main className="flex h-[100vh] w-[100vw]">
      <div className="h-[100vh] xl:w-[60%] hidden sm:flex sm:w-[50%]">
        <img
          loading="lazy"
          className="h-full object-cover w-full"
          src={LoginImage}
          alt=""
        />
      </div>

      <div className="w-full sm:w-[50%] xl:w-[40%] shadow-card">
        <Fade in timeout={{ enter: 1000 }}>
          <div className="flex flex-col items-center my-20 gap-12 w-full">
            <h1 className="text-3xl lg:text-5xl font-serif">Sign in</h1>
            <LoginForm />
          </div>
        </Fade>
      </div>
    </main>
  )
}

export default LoginPage
