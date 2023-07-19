import CategorizedRowItem from "@/components/Views/CategorizedRow/CategorizedRowItem"
import { GlobalStateContext } from "@/context/GlobalStateContext"
import useDeviceType from "@/hooks/useDeviceType"
import { useContext } from "react"

const RelatedBooks = () => {
  const { isMobile } = useDeviceType()
  const { selectedBook, selectedCategory } = useContext(GlobalStateContext)

  const relatedBooksData = selectedCategory?.books
    ? selectedCategory.books.filter(
        (book: { primary_isbn10: string }) =>
          book.primary_isbn10 !== selectedBook.primary_isbn10,
      )
    : []

  return (
    <section className="font-serif flex flex-col gap-2 md:gap-5 lg:gap-10">
      <h2 className="text-2xl lg:text-4xl">
        More {selectedCategory.display_name.toLowerCase()} books
      </h2>
      <CategorizedRowItem
        items={relatedBooksData}
        itemsPerRow={isMobile ? 3 : 5}
        listData={selectedCategory}
      />
    </section>
  )
}
export default RelatedBooks
