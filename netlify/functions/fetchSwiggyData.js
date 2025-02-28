const fetch_menu_data = async () => {
    try {
      console.log("Fetching menu data from:", menu_food_api + resid);
  
      const response = await fetch(menu_food_api + resid, {
        method: "GET",
        mode: "cors",  // Helps with cross-origin requests
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Referer": "https://www.swiggy.com/",
          "Accept": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log("Menu data:", json);
  
      setMenuData(json);
    } catch (error) {
      console.error("Failed to fetch menu data:", error);
    }
  };
  