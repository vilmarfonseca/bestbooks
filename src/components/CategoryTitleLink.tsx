import { Button } from "@mui/material"
import { MdOutlineChevronRight } from "react-icons/md"

const CategoryTitleLink = ({ title, href }: { title: string; href?: string }) => (
  <Button
    href={href}
    className="flex justify-start gap-2 lg:gap-4 hover:bg-primary max-w-fit"
    disableRipple
  >
    <h2 className="text-2xl lg:text-4xl font-serif text-black normal-case text-left">{title}</h2>
    <MdOutlineChevronRight className="h-5 w-5 text-black" />
  </Button>
)

export default CategoryTitleLink
