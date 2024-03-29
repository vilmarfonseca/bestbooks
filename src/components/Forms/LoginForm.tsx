import CustomButton from "@/components/Buttons/CustomButton"
import { AuthContext } from "@/context/AuthContext"
import { Link, TextField } from "@mui/material"
import React, { useContext } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const LoginForm: React.FC | React.ElementType = () => {
  const { currentUser, login }: any = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
  } = useForm()

  const handleLogin: SubmitHandler<FieldValues> = async ({ email, password }) => {
    try {
      await login(email, password)
      navigate("/")
    } catch (error) {
      alert(error)
    }
  }

  if (currentUser) {
    navigate("/", { replace: true })
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-4 w-full px-10 xl:px-20 max-w-xl"
    >
      <div className="w-full">
        <TextField
          autoComplete="email"
          autoFocus
          error={Boolean(errors?.email)}
          fullWidth
          helperText={errors?.email?.message as string}
          id="email"
          label="Email"
          required
          type="email"
          variant="outlined"
          {...register("email", {
            required: "Email is Required",
          })}
          onKeyUp={() => {
            trigger("email")
          }}
        />
      </div>

      <div>
        <TextField
          autoComplete="current-password"
          error={Boolean(errors?.password)}
          fullWidth
          helperText={errors?.password?.message as string}
          id="password"
          label="Password"
          required
          type="password"
          variant="outlined"
          {...register("password", {
            required: "You must specify a password",
          })}
          onKeyUp={() => {
            trigger("password")
          }}
        />
      </div>

      <p className="flex justify-end text-sm">
        <Link href="/register">{"Don't have an account? Sign Up"}</Link>
      </p>

      <CustomButton type="submit" className="mt-5" text="Login" />

      <div className="flex justify-center">
        <Link href="/">Back to Home</Link>
      </div>
    </form>
  )
}

export default LoginForm
