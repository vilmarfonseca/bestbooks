import Book from "@/components/Book"

const GridListingView = ({ data, title }: { data: any; title: string }) => {
  const { books } = data

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl lg:text-4xl font-serif text-black normal-case">{data.display_name}</h2>
      <div className="grid grid-cols-3 lg:grid-cols-5 px-2 py-2 lg:py-5 gap-8 lg:gap-12 w-full">
        {books &&
          books.map((item: any, idx: number) => (
            <div key={`book-item-${idx}`}>
              <Book data={item} />
            </div>
          ))}
      </div>
    </div>
  )
}
export default GridListingView
