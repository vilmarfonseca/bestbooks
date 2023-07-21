import { CircularProgress } from "@mui/material"

const FullPageSpinner = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <CircularProgress className="h-10 w-10 text-cta" />
    </div>
  )
}

export default FullPageSpinner
