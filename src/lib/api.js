export const fetchAllLists = async () => {
  const response = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${process.env.REACT_APP_NY_API_KEY}`,
  )
  return await response.json()
}
