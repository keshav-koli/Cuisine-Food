import { menu_food_api } from "./constant";
import { useEffect, useState } from "react";
const useRestaurantMenu = (resid) => {
  let [menuData,setmenuData]=useState(null);

  useEffect(() => {
    fetch_menu_data();
  }, []);

  // const fetch_menu_data = async () => {
  //   const data = await fetch(menu_food_api + resid);
  //   const json = await data.json();
  //   setmenuData(json.data);
    // console.log(json.data);
    // console.log(
    //   json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card
    // );
    // console.log(json.data.cards[2].card.card.info);
    // console.log(menuData?.cards[2]?.card?.card?.info?.name);
  // };

  const fetch_menu_data = async () => {
    try {
      const response = await fetch(menu_food_api + resid, {
        method: "GET",
        mode: "cors",  // Ensures request allows CORS
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log("Menu data:", json);
  
      setmenuData(json);
    } catch (error) {
      console.error("Failed to fetch menu data:", error);
    }
  };
  

  return menuData;
};
export default useRestaurantMenu;
