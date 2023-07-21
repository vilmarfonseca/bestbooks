import { GlobalStateContext } from "@/context/GlobalStateContext"
import React, { useContext } from "react"
import BookRankBadge from "@/components/Book/BookRankBadge"
import { useLocation } from "react-router-dom"
import { BookProps } from "@/types/components/book.types"

const Book: React.FC<BookProps> = ({ data, listData }) => {
  const { setSelectedBook, setSelectedCategory, setBackPath } =
    useContext(GlobalStateContext)

  const location = useLocation()
  const currentPath = location.pathname

  function handleSelectBook() {
    if (data) {
      setSelectedBook(data)
    }
    if (listData) {
      setSelectedCategory(listData)
    }
    setBackPath(currentPath)
  }

  return (
    <div
      className="hover:scale-110 transition-all duration-200 ease-in-out shadow-card h-full"
      onClick={() => handleSelectBook()}
    >
      <a
        href={currentPath === "/my-books" ? "/my-books/book" : "/book"}
        className="w-full h-full relative"
      >
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
