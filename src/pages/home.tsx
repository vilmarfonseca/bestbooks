import Layout from "@/components/Layout"
import { PageProps } from "@/types/pages.types"
import { Badge, Button, Card } from "@mui/material"
import React, { useEffect } from "react"
import { MdOutlineChevronRight, MdBookmark } from "react-icons/md"

const HomePage: React.FC<PageProps> = ({ title }) => {
  useEffect(() => {
    document.title = title
  }, [title])

  const CategryTitleLink = ({ title, href }: { title: string; href?: string }) => (
    <Button
      href={href}
      className="flex justify-start gap-4 hover:bg-primary max-w-fit"
      disableRipple
    >
      <h2 className="text-4xl font-serif text-black normal-case">{title}</h2>
      <MdOutlineChevronRight className="h-5 w-5 text-black" />
    </Button>
  )

  const CategoryDisplayRow = ({ categoryName }: { categoryName: string }) => {
    const items = [
      { image: "", href: "" },
      { image: "", href: "" },
      { image: "", href: "" },
      { image: "", href: "" },
      { image: "", href: "" },
      { image: "", href: "" },
      { image: "", href: "" },
      { image: "", href: "" },
      { image: "", href: "" },
      { image: "", href: "" },
    ]

    return (
      <div className="flex justify-between px-2 py-5 gap-10 w-full">
        {items.map((item, idx) => (
          <a
            key={`${categoryName}-book-${idx}`}
            href={item.href}
            className="w-full h-full relative hover:scale-110 transition-all duration-200 ease-in-out lg:max-w-[100px] xl:max-w-[150px]"
          >
            <div className="absolute -top-2 right-0 z-40 flex justify-center items-center">
              <span className="absolute font-sans font-bold text-primary">
                {idx + 1}
              </span>
              <MdBookmark className="w-10 h-10 fill-[#A75B35]" />
            </div>
            <Card className="shadow-2xl">
              <img
                loading="lazy"
                src="https://storage.googleapis.com/du-prd/books/images/9781538756591.jpg"
                alt=""
              />
            </Card>
          </a>
        ))}
      </div>
    )
  }

  return (
    <Layout>
      <div className="container py-5">
        <div className="flex flex-col gap-16">
          <div>
            <CategryTitleLink title="Category Title 1" />
            <CategoryDisplayRow categoryName="cat1" />
          </div>

          <div>
            <CategryTitleLink title="Category Title 2" />
            <CategoryDisplayRow categoryName="cat2" />
          </div>

          <div>
            <CategryTitleLink title="Category Title 2" />
            <CategoryDisplayRow categoryName="cat2" />
          </div>

          <div>
            <CategryTitleLink title="Category Title 2" />
            <CategoryDisplayRow categoryName="cat2" />
          </div>

          <div>
            <CategryTitleLink title="Category Title 2" />
            <CategoryDisplayRow categoryName="cat2" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default HomePage
