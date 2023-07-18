import { Card } from "@mui/material"
import { MdBookmark } from "react-icons/md"

const Book = ({
  href,
  rank,
  imgSrc,
}: {
  href: string
  rank: number
  imgSrc: string
}) => {
  function BookRankBadge() {
    return (
      <div className="absolute -top-2 right-0 z-40 flex justify-center items-center">
        <span className="absolute font-sans font-bold text-primary">{rank}</span>
        <MdBookmark className="w-10 h-10 fill-cta" />
      </div>
    )
  }

  return (
    <div className="hover:scale-110 transition-all duration-200 ease-in-out shadow-card xl:max-w-[275px]">
      <a href={href} className="w-full h-full relative">
        <BookRankBadge />
        <Card>
          <img loading="lazy" src={imgSrc} alt="" />
        </Card>
      </a>
    </div>
  )
}

export default Book
