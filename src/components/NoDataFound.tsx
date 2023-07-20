import { Button, Fade } from "@mui/material"
import { MdErrorOutline } from "react-icons/md"

const NoDataFound = ({ message }: { message: string }) => {
  return (
    <Fade in timeout={{ enter: 500 }}>
      <div className="w-full h-[75vh] flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col gap-5 items-center justify-center">
          <MdErrorOutline className="w-36 h-36" />
          <h2 className="text-xl lg:text-3xl max-w-xl text-center">{message}</h2>
        </div>
        <Button
          variant="outlined"
          className="normal-case font-bold text-white bg-cta border-cta hover:bg-white hover:text-cta"
          href="/"
        >
          Back to Homepage
        </Button>
      </div>
    </Fade>
  )
}
export default NoDataFound
