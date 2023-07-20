import Notification from "@/components/NotificationBanner"
import { AuthContext } from "@/context/AuthContext"
import { GlobalStateContext } from "@/context/GlobalStateContext"
import { capitalizeSentence } from "@/helpers/functions"
import { saveBookToFirestore } from "@/lib/database"
import { Button, Divider, IconButton } from "@mui/material"
import { useContext, useState } from "react"
import { MdBookmarkBorder } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const BookDetails = () => {
  const navigate = useNavigate()
  const { currentUser }: any = useContext(AuthContext)
  const { selectedBook, selectedCategory } = useContext(GlobalStateContext)
  const [showSavedNotification, setShowSavedNotification] = useState(false)

  async function handleAddBookToMyList() {
    if (currentUser) {
      await saveBookToFirestore(currentUser, selectedBook)
      setShowSavedNotification(true)
    } else {
      navigate("/")
    }
  }

  return (
    <section className="flex flex-col md:flex-row gap-10 md:gap-24 mb-10 lg:mb-20 w-full">
      <Notification
        open={showSavedNotification}
        autoHideDuration={5000}
        handleClose={setShowSavedNotification}
        message="Book added to your list!"
      />
      <div className="w-full md:w-auto flex justify-center relative">
        <img
          className="w-[200px] md:w-[275px] shadow-card"
          alt=""
          src={selectedBook.book_image}
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col font-serif">
          <div className="flex items-center gap-2 lg:gap-4">
            <h2 className="text-2xl lg:text-4xl">
              {capitalizeSentence(selectedBook.title)}
            </h2>
            <IconButton
              aria-label="Save to My List"
              onClick={() => handleAddBookToMyList()}
            >
              <MdBookmarkBorder />
            </IconButton>
          </div>
          <h3 className="text-xl lg:text-2xl text-gray-800">
            {selectedBook.author}
          </h3>
          <h3 className="text-lg lg:text-xl text-gray-800 mt-4">
            #{selectedBook.rank} in {selectedCategory.display_name}
          </h3>
          <Divider className="my-2" />

          <div className="flex flex-col gap-3 mt-2 ">
            <span className="uppercase text-gray-800 font-sans font-black text-xs tracking-[.1875rem]">
              Available to buy at
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedBook?.buy_links?.length > 0 &&
                selectedBook.buy_links.map(
                  (item: { url: string; name: string }, idx: any) => (
                    <Button
                      key={`buyLink-${idx}`}
                      href={item.url}
                      target="_blank"
                      variant="outlined"
                      className="text-black border-black normal-case"
                    >
                      {item.name}
                    </Button>
                  ),
                )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="uppercase text-gray-800 font-black text-xs tracking-[.1875rem]">
            Publisher
          </span>
          <p className="text-lg lg:text-xl text-gray-800 font-serif">
            {selectedBook.publisher}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="uppercase text-gray-800 font-black text-xs tracking-[.1875rem]">
            Description
          </span>
          <p className="text-lg lg:text-xl text-gray-800 font-serif max-w-6xl">
            {selectedBook.description}
          </p>
        </div>
      </div>
    </section>
  )
}
export default BookDetails
