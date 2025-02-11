import ResturantContainer,{withPromptedResturantContainer} from "./ResturantContainer.js";
// import { resList } from "../utils/MockData";//no need of this
import { useEffect, useState } from "react";
import Shimer from "./Shimer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body = () => {
  // whenever state variable updates ,react trigger the reconcilation  (re-render the component)
  let [listRestaurantCard, setlistRestaurantcard] = useState([]);
  let [filterRestaurantCard, setfilterRestaurantcard] = useState([]);
  // * Use UseState at top of the component
  // * don't use UseState hook inside loop or conditional statement or function

  const [search, setSearch] = useState("");
  const RestaurantCardPrompted=withPromptedResturantContainer(ResturantContainer);

  useEffect(() => {
    fetch_data();
  }, []);
  // console.log("rendered");

  let Status=useOnlineStatus();
  if(Status===false){
    return(
    <h1>Please check your internet connection !!</h1>
    )
  }
  const fetch_data = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistRestaurantcard(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestaurantcard(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json.data);
  };
  // Conditional rendering
  if (!listRestaurantCard || listRestaurantCard.length === 0) {
    return <Shimer />;
  }

 
  return (
    <div className="Card ">
      <div className="filter flex">
        <div className="search-bar flex">
          <input
            type="text"
            placeholder="Search for Restaurants"
            className="search-input border h-10 ml-24 my-5 rounded-lg p-2 w-84 border-amber-500"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button
            className="search-btn border-2 h-10 m-5 rounded-2xl w-22 border-red-300 text-white bg-amber-300 hover:bg-amber-500"
            onClick={(e) => {
              let filter_restaurant1 = listRestaurantCard.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setfilterRestaurantcard(filter_restaurant1);
            }}
          >
            {" "}
            search
          </button>
        </div>
        <div className="border-2 h-10 m-5 rounded-2xl w-50 border-red-300 text-white bg-amber-400 pl-4 pt-1.5 hover:bg-amber-500">
        <button
          onClick={() => {
            const filter_restaurant = listRestaurantCard.filter(
              (resturant) => resturant.info.avgRating > 4.5
            );
            setfilterRestaurantcard(filter_restaurant);
          }}
          className="filter-btn"
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap ml-20">
        {filterRestaurantCard.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/resturantMenu/" + resturant.info.id}
          >
            {resturant.info.totalRatingsString>150?(<RestaurantCardPrompted resObj={resturant} />):
            (<ResturantContainer resObj={resturant} />)}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
