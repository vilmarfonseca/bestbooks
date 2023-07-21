import Book from "@/components/Book"
import { CategorizedRowItemProps } from "@/types/components/categorizedRowItems.types"
import React from "react"

const CategorizedRowItem: React.FC<CategorizedRowItemProps> = ({
  categoryName,
  items,
  itemsPerRow,
  listData,
}) => {
  return (
    <div className="flex px-2 py-2 lg:py-5 gap-5 lg:gap-10 w-full">
      {items
        .map((item, idx) => (
          <div key={`${categoryName}-book-item-${idx}`}>
            <Book data={item} listData={listData} />
          </div>
        ))
        .filter((_, idx) => idx < itemsPerRow)}
    </div>
  )
}

export default CategorizedRowItem
