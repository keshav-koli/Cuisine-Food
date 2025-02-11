import { menu_food_api } from "./constant";
import { useEffect, useState } from "react";
const useRestaurantMenu = (resid) => {
  let [menuData,setmenuData]=useState(null);

  useEffect(() => {
    fetch_menu_data();
  }, []);

  const fetch_menu_data = async () => {
    const data = await fetch(menu_food_api + resid);
    const json = await data.json();
    setmenuData(json.data);
    // console.log(json.data);
    // console.log(
    //   json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card
    // );
    // console.log(json.data.cards[2].card.card.info);
    // console.log(menuData?.cards[2]?.card?.card?.info?.name);
  };

  return menuData;
};
export default useRestaurantMenu;
