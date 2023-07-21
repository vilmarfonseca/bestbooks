import CustomButton from "@/components/Buttons/CustomButton"
import { AuthContext } from "@/context/AuthContext"
import { emailRegExp, passwordRegExp } from "@/helpers/validation"
import { Link, TextField } from "@mui/material"
import React, { useContext } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const RegisterForm: React.FC | React.ElementType = () => {
  const { currentUser, signup }: any = useContext(AuthContext)
  const navigate = useNavigate()
  const {
    handleSubmit,
    formState: { errors },
    trigger,
    register,
    watch,
  } = useForm()

  const handleRegister: SubmitHandler<FieldValues> = async ({ email, password }) => {
    try {
      await signup(email, password)
      navigate("/")
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  if (currentUser) {
    navigate("/", { replace: true })
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(handleRegister)}
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
            pattern: {
              value: emailRegExp,
              message: "Invalid email address",
            },
          })}
          onKeyUp={() => {
            trigger("email")
          }}
        />
      </div>

      <div>
        <TextField
          autoComplete="new-password"
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
            pattern: {
              value: passwordRegExp,
              message:
                "Password should contain at least one uppercase letter, one lowercase letter, one number and one special character.",
            },
            minLength: {
              value: 8,
              message: "Password must be more than 8 characters",
            },
            maxLength: {
              value: 20,
              message: "Password must be less than 12 characters",
            },
          })}
          onKeyUp={() => {
            trigger("password")
          }}
        />
      </div>

      <div>
        <TextField
          autoComplete="off"
          error={Boolean(errors?.password)}
          fullWidth
          helperText={errors?.password?.message as string}
          id="confirm-password"
          label="Confirm Password"
          required
          type="password"
          variant="outlined"
          {...register("confirmPassword", {
            validate: (value) =>
              value === watch("password", "") || "The passwords do not match",
          })}
          onPaste={(e) => {
            e.preventDefault()
            return false
          }}
          onKeyUp={() => {
            trigger("confirmPassword")
          }}
        />
      </div>

      <p className="flex justify-end text-sm">
        <Link href="/login">{"Already a member? Sign In"}</Link>
      </p>

      <CustomButton type="submit" className="mt-5" text="Register" />

      <div className="flex justify-center">
        <Link href="/">Back to Home</Link>
      </div>
    </form>
  )
}

export default RegisterForm
