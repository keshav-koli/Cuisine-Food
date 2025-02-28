const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { restaurantId } = event.queryStringParameters;

  const API_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6582349&lng=77.1432671&restaurantId=${restaurantId}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch data from Swiggy API" }),
    };
  }
};
