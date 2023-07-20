import RegisterImage from "@/assets/img/register.jpg"
import RegisterForm from "@/components/Forms/RegisterForm"
import { Fade } from "@mui/material"
import { useEffect } from "react"

const RegisterPage = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <main className="flex h-[100vh] w-[100vw]">
      <div className="h-[100vh] xl:w-[60%] hidden sm:flex sm:w-[50%]">
        <img
          loading="lazy"
          className="h-full object-cover w-full"
          src={RegisterImage}
          alt=""
        />
      </div>

      <Fade in timeout={{ enter: 1000 }}>
        <div className="w-full sm:w-[50%] xl:w-[40%] shadow-card h-full flex flex-col justify-between">
          <div>
            <div className="flex flex-col items-center my-20 gap-12 w-full">
              <h1 className="text-3xl lg:text-5xl font-serif">Sign Up</h1>
              <RegisterForm />
            </div>
          </div>

          <span className={"flex items-center justify-center py-10"}>
            {`© BestBooks ${new Date().getFullYear()}`}
          </span>
        </div>
      </Fade>
    </main>
  )
}

export default RegisterPage
