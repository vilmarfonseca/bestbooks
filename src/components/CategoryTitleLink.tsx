import { GlobalStateContext } from "@/context/GlobalStateContext"
import { Button } from "@mui/material"
import { useContext } from "react"
import { MdOutlineChevronRight } from "react-icons/md"

const CategoryTitleLink = ({
  title,
  categoryData,
}: {
  title: string
  categoryData?: any
}) => {
  const { setSelectedCategory } = useContext(GlobalStateContext)

  function handleSelectedCategory() {
    if (categoryData) {
      setSelectedCategory(categoryData)
    }
  }

  return (
    <Button
      href="/category"
      className="flex justify-start gap-2 lg:gap-4 hover:bg-primary max-w-fit"
      onClick={() => handleSelectedCategory()}
      disableRipple
    >
      <h2 className="text-2xl lg:text-4xl font-serif text-black normal-case text-left">
        {title}
      </h2>
      <MdOutlineChevronRight className="h-6 w-6 shadow-sm text-black border border-secondary border-opacity-50 rounded-full" />
    </Button>
  )
}

export default CategoryTitleLink
