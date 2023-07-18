import CategoryTitleLink from "@/components/CategoryTitleLink"
import CategorizedRowItem from "@/components/Views/CategorizedRow/CategorizedRowItem"

const CategorizedRowsView = ({
  data,
  itemsPerRow,
}: {
  data: Array<any>
  itemsPerRow: number
}) => {


  return (
    <>
      {data.map((item, idx) => (
        <div key={`${item.categoryName}-data-row-${idx}`}>
          <CategoryTitleLink title={item.categoryDisplayName} />
          <CategorizedRowItem
            categoryName={item.categoryDisplayName}
            items={item.items}
            itemsPerRow={itemsPerRow}
          />
        </div>
      ))}
    </>
  )
}
export default CategorizedRowsView
