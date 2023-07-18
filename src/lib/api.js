export const fetchAllLists = async () => {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${process.env.REACT_APP_NY_API_KEY}`,
    )
    if (!response.ok) {
      throw new Error("Failed to fetch data from the API")
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}
