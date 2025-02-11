import React, { useState } from "react";
import RestaurantList from "./RestaurantList";

const RestaurantMenuList = ({ resObj ,showItem ,setShowIndex}) => {
  clickedButton = () => {
    setShowIndex();
  };
  // const [showItem, setShowItem] = useState(false);

  // console.log(resObj);
  
  return (
    <div className="w-6/12 ">
      <div
        className=" bg-gray-100 flex items-center cursor-pointer justify-between border-b-2 border-gray-400 my-2 h-10 shadow "
        onClick={clickedButton}
      >
        <span className="text-xl font-medium ml-2">
          {resObj.title} ({resObj.itemCards.length})
        </span>
        <span >🔽</span>
      </div>

      {showItem && <RestaurantList items={resObj.itemCards} />}
    </div>
  );
};
export default RestaurantMenuList;
