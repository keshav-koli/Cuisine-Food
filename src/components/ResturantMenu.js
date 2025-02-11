import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { menu_food_img_id } from "../utils/constant"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuList from "./RestaurantMenuList";

const ResturantMenu = () => {
  const { resid } = useParams();
  // console.log(resid)

  const menuData = useRestaurantMenu(resid);
  // console.log( menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const [ShowIndex,setShowIndex]=useState(null);

  if (!menuData) {
    return (
      <h2 className="loading-nenu-data flex justify-center items-center m-60 text-3xl font-bold">
        Loading.......
      </h2>
    );
  }

  //   const { name } = menuData?.cards[2]?.card?.card?.info; wrong way to access the data
  const itemCards =
    menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]?.card
      ?.card?.categories?.[0]?.itemCards ||
    menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]?.card
      ?.card?.itemCards;
  const { name, cuisines } = menuData.cards[2].card.card.info;

  const categories =
    menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const filtered_categories = categories.filter(
    (c) =>
      c.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(filtered_categories);
  // if (!itemCards) {
  //   menuData.map((resinfo) => {
  //     resinfo.data.card[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.categories[0].itemCards.map(
  //       (item) => {
  //         console.log(item.card.info.name);
  //       }
  //     );
  //   });
  // }
  // const Restaurant_Menu_List = RestaurantMenuList(itemCards);
  return (
    <div className="resturant-menu flex flex-col items-center">
      <h1 className="font-bold text-3xl my-8">{name}</h1>
      <h3 className="font-medium text-xl m-2">{cuisines.join(", ")}</h3>
      {/* <div className="menu-data  flex flex-wrap m-2.5 p-2 bg-gray-100 justify-start">
      {itemCards.map((item) => (
        <div key={item.card.info.id} className="menu-data-card p-3 m-4 ml-8 w-80 bg-white rounded-2xl flex flex-col items-center transform hover:scale-105 transition duration-100">
          <h4 className="font-bold w-56 ">
            {item.card.info.name}
            {" - Rs "}
            {item.card.info.finalPrice / 100 ||
              item.card.info.price / 100 ||
              item.card.info.defaultPrice / 100}
          </h4>
          <img
            className="menu-data-image rounded-lg w-60 h-60"
            src={menu_food_img_id.concat(item?.card?.info?.imageId)}
            alt={item.card.info.name}
          />
        </div>
      ))}
    </div> */}
      {filtered_categories.map((item ,index) => (
        <RestaurantMenuList resObj={item.card.card} key={item.card.card.title} 
        showItem={index==ShowIndex?true:false}
        setShowIndex={()=>{
          setShowIndex(index)
        }}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
