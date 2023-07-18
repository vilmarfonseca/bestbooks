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
    <div className="flex px-2 py-5 gap-10 w-full">
      {items
        .map((item, idx) => (
          <div key={`${categoryName}-book-item-${idx}`}>
            <Book href={item.href} rank={idx + 1} imgSrc="https://storage.googleapis.com/du-prd/books/images/9781538756591.jpg" />
          </div>
        ))
        .filter((_, idx) => idx <= itemsPerRow)}
    </div>
  )
}

export default CategorizedRowItem
