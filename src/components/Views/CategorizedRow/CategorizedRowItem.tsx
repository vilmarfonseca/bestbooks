import Book from "@/components/Book"

const CategorizedRowItem = ({
  categoryName,
  items,
  itemsPerRow,
}: {
  categoryName: string
  items: Array<any>
  itemsPerRow: number
}) => {
  return (
    <div className="flex px-2 py-2 lg:py-5 gap-5 lg:gap-10 w-full">
      {items
        .map((item, idx) => (
          <div key={`${categoryName}-book-item-${idx}`}>
            <Book href={item.href} rank={item.rank} imgSrc={item.book_image} />
          </div>
        ))
        .filter((_, idx) => idx < itemsPerRow)}
    </div>
  )
}

export default CategorizedRowItem
