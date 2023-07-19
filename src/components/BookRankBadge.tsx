import { MdBookmark } from "react-icons/md"

const BookRankBadge = ({ rank }: { rank: number | string }) => {
  return (
    <div className="absolute -top-2 right-0 z-40 flex justify-center items-center">
      <span className="absolute font-sans font-bold text-primary">{rank}</span>
      <MdBookmark className="w-10 h-10 fill-cta" />
    </div>
  )
}

export default BookRankBadge
