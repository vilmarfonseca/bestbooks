export const fetchAllLists = async () => {
  const apiUrl = `${process.env.REACT_APP_NY_API_BASE_URL}/lists/full-overview.json?api-key=${process.env.REACT_APP_NY_API_KEY}`

  try {
    const response = await fetch(apiUrl)

    if (!response.ok) {
      // Check for specific HTTP error status and throw appropriate error messages
      if (response.status === 401) {
        throw new Error("Unauthorized: Invalid API key")
      } else {
        throw new Error("Failed to fetch data from the API")
      }
    }

    return await response.json()
  } catch (error) {
    // Log the error and throw it again to propagate it up the chain
    console.error("Error while fetching data:", error)
    throw error
  }
}
