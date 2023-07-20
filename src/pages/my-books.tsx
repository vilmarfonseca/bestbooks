import BackButton from "@/components/Buttons/BackButton"
import Layout from "@/components/Layout"
import GridListingView from "@/components/Views/GridListingView"
import { AuthContext } from "@/context/AuthContext"
import useDeviceType from "@/hooks/useDeviceType"
import { getUserData } from "@/lib/database"
import { PageProps } from "@/types/pages.types"
import { Fade, Skeleton } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import NoDataFound from "@/components/NoDataFound"

const MyBooksPage: React.FC<PageProps> = ({ title }) => {
  const { isMobile } = useDeviceType()
  const { currentUser }: any = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>([])

  useEffect(() => {
    document.title = `${title} My Books`
  }, [title])

  useEffect(() => {
    async function getMyBooks() {
      setLoading(true)
      if (currentUser?.uid) {
        const userData = await getUserData(currentUser)
        if (userData?.saved_books) {
          const books = { books: userData.saved_books }
          setData(books as any)
        }
      }
      setLoading(false)
    }

    getMyBooks()
  }, [currentUser])

  return (
    <Layout>
      <div className="flex px-2 lg:py-5 gap-10 w-full">
        <div className="flex flex-col gap-16">
          <Fade in timeout={{ enter: 500 }}>
            <div>
              {!loading ? (
                <>
                  {data?.books.length > 0 ? (
                    <div className="flex flex-col gap-4">
                      <BackButton />
                      <GridListingView data={data} />
                    </div>
                  ) : (
                    <>
                      <NoDataFound message="You don't have any books added in your list" />
                    </>
                  )}
                </>
              ) : (
                <>
                  {" "}
                  {[...Array(2)].map((_, idx) => (
                    <div key={idx}>
                      <Skeleton
                        variant="text"
                        className="text-4xl max-w-[150px] lg:max-w-sm mb-5"
                      />
                      <div className="w-full flex gap-5 lg:gap-10">
                        {[...Array(5)].map((_, idx) => (
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
            </div>
          </Fade>
        </div>
      </div>
    </Layout>
  )
}
export default MyBooksPage
