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
      <h2 className="text-xl lg:text-4xl font-serif text-black normal-case text-left truncate">
        {title}
      </h2>
      <MdOutlineChevronRight className="w-5 h-5 lg:h-6 lg:w-6 shadow-sm text-black border border-secondary border-opacity-50 rounded-full" />
    </Button>
  )
}

export default CategoryTitleLink
