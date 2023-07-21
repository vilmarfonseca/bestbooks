import CategoryTitleLink from "@/components/CategoryTitleLink"
import CategorizedRowItem from "@/components/Views/CategorizedRow/CategorizedRowItem"
import useDeviceType from "@/hooks/useDeviceType"
import { Skeleton } from "@mui/material"
import React from "react"
import { CategorizedRowsViewProps } from "@/types/components/categorizedRow.types"

const CategorizedRowsView: React.FC<CategorizedRowsViewProps> = ({
  data,
  itemsPerRow,
}) => {
  const { isMobile } = useDeviceType()

  return (
    <>
      {data.length > 0 ? (
        data.map((item, idx) => (
          <div
            key={`${item.categoryName}-data-row-${idx}`}
            className="flex flex-col gap-2"
          >
            <CategoryTitleLink title={item.display_name} categoryData={item} />
            <CategorizedRowItem
              listData={item}
              categoryName={item.display_name}
              items={item.books}
              itemsPerRow={itemsPerRow}
            />
          </div>
        ))
      ) : (
        <>
          {[...Array(3)].map((_, idx) => (
            <div key={idx}>
              <Skeleton
                variant="text"
                className="text-4xl max-w-[150px] lg:max-w-sm mb-5"
              />
              <div className="w-full flex gap-5 lg:gap-10">
                {[...Array(itemsPerRow)].map((_, idx) => (
                  <Skeleton
                    key={idx}
                    variant="rectangular"
                    width={isMobile ? 120 : 275}
                    height={isMobile ? 150 : 440}
                  />
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </>
  )
}
export default CategorizedRowsView
