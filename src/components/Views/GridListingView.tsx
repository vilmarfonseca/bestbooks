import Book from "@/components/Book"

const GridListingView = ({ data, title }: { data: Array<any>; title: string }) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-serif text-black normal-case">{title}</h2>
      <div className="flex px-2 py-5 gap-10 w-full">
        {data.map((item, idx) => (
          <div key={`book-item-${idx}`}>
            <Book
              href={item.href}
              rank={idx + 1}
              imgSrc="https://storage.googleapis.com/du-prd/books/images/9781538756591.jpg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default GridListingView
