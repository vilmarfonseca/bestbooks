export const fetchAllLists = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_NY_API_BASE_URL}/lists/full-overview.json?api-key=${process.env.REACT_APP_NY_API_KEY}`,
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
