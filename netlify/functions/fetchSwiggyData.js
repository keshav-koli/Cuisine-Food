import axios from "axios";

export async function handler(event) {
  try {
    const { restaurantId } = event.queryStringParameters;

    if (!restaurantId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing restaurantId parameter" }),
      };
    }

    const SWIGGY_API_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6582349&lng=77.1432671&restaurantId=${restaurantId}`;

    const response = await axios.get(SWIGGY_API_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://www.swiggy.com/",
        "Accept": "application/json",
      },
      timeout: 15000, // 15 seconds timeout
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.message || "Failed to fetch menu data" }),
    };
  }
}
