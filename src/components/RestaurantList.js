import React from "react";
import { menu_food_img_id } from "../utils/constant";

const RestaurantList = ({ items }) => {
  // console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <div
            className="menu-data-card my-6 flex transform hover:scale-105 transition duration-100 bg-gray-100 hover:cursor-pointer "
          >
            <div className=" w-8/12 h-auto p-2 border-b-2  ">
              <h4 className="font-bold  ">
                {item.card.info.name}
                {" - Rs "}
                {item.card.info.finalPrice / 100 ||
                  item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </h4>
              <p className="w-10/12 ">{item?.card?.info?.description}</p>
            </div>
            <div className="w-4/12 h-52 ">
            <button className="absolute bg-black text-white px-2 py-1  rounded text-sm top-45 left-176 cursor-pointer">Add +</button>
              <img
                className="menu-data-image h-52 w-full rounded"
                src={menu_food_img_id.concat(item?.card?.info?.imageId)}
                alt={item.card.info.name}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
