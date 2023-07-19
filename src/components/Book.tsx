import { GlobalStateContext } from "@/context/GlobalStateContext"
import { useContext } from "react"
import BookRankBadge from "@/components/BookRankBadge"

const Book = ({ data, listData }: { data?: any; listData?: any }) => {
  const { setSelectedBook, setSelectedCategory } = useContext(GlobalStateContext)

  function handleSelectBook() {
    if (data) {
      setSelectedBook(data)
    }
    if (listData) {
      setSelectedCategory(listData)
    }
  }

  return (
    <div
      className="hover:scale-110 transition-all duration-200 ease-in-out shadow-card h-full"
      onClick={() => handleSelectBook()}
    >
      <a href="/book" className="w-full h-full relative">
        <BookRankBadge rank={data.rank} />
        <img
          alt=""
          loading="lazy"
          src={data.book_image}
          className="object-cover h-full w-[275px]"
        />
      </a>
    </div>
  )
}

export default Book
