import { GlobalStateContext } from "@/context/GlobalStateContext"
import { Button } from "@mui/material"
import { useContext } from "react"
import { MdOutlineChevronLeft } from "react-icons/md"
import { useLocation } from "react-router-dom"

const BackButton = () => {
  const { backPath } = useContext(GlobalStateContext)
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex w-full justify-start items-center gap-2">
      <Button
        href={backPath === currentPath ? "/" : backPath}
        startIcon={<MdOutlineChevronLeft />}
        className="normal-case text-black text-lg font-serif"
      >
        Back
      </Button>
    </div>
  )
}
export default BackButton
