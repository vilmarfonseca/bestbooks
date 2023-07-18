import { GlobalStateContext } from "@/context/GlobalStateContext"
import { useContext } from "react"
import { MdBookmark } from "react-icons/md"

const Book = ({ data, listData }: { data?: any, listData?: any }) => {
  const { setSelectedBook, setSelectedCategory } = useContext(GlobalStateContext)

  function handleSelectBook() {
    if (data) {
      setSelectedBook(data)
    }
    if(listData){
      setSelectedCategory(listData)
    }
  }

  function BookRankBadge() {
    return (
      <div className="absolute -top-2 right-0 z-40 flex justify-center items-center">
        <span className="absolute font-sans font-bold text-primary">
          {data.rank}
        </span>
        <MdBookmark className="w-10 h-10 fill-cta" />
      </div>
    )
  }

  return (
    <div
      className="hover:scale-110 transition-all duration-200 ease-in-out shadow-card h-full"
      onClick={() => handleSelectBook()}
    >
      <a href="/book" className="w-full h-full relative">
        <BookRankBadge />
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
