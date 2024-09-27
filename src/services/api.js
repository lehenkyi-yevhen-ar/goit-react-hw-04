import axios from "axios"

const API_KEY =
  "s1KS5ciEEdTZ_RgvzUReLbHbpy8R_SLXNIP0zKKH4y8"

export const fetchImages = async (
  query,
  page = 1
) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos`,
      {
        params: {
          query: query,
          client_id: API_KEY,
          page: page,
          per_page: 16,
        },
      }
    )

    return response.data
  } catch (error) {
    console.error("Error fetching images:", error)
    throw error
  }
}
