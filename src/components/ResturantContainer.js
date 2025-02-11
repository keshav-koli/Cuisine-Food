import  food_imageCDN  from "../utils/constant";
import star from "../../item/star.png";
const ResturantContainer = (props) => {
  // Destructuring of the object
  const { resObj } = props;
  const { cloudinaryImageId, name, avgRating, locality, cuisines, costForTwo } =
    resObj?.info;
  return (
    <div className="resCard border-0.1 pt-1 h-96 w-64 m-3.5 shadow-xl rounded-lg bg-gray-100 hover:bg-gray-200  hover:border transition duration-200 hover:scale-105 hover:z-2 ">
      <img className="res-image rounded-lg ml-5 my-3 w-54 h-50 " src={ food_imageCDN  + cloudinaryImageId} />
      <div className="res-details ml-5  ">
        <h3 className="text-lg font-bold">{name}</h3>
        <div id="rating " className="flex items-center">
          <img src={star} alt="rating" className="star-image w-4 mr-1"></img>
          <span className="flex items-center  w-38 text-amber-400 font-medium">{avgRating } <span className=" ml-[100px] text-black font-normal">• {resObj.info.sla.deliveryTime}</span></span>
          mins
        </div>
        {/* <p id="rating">
          <img src={star} alt="rating" className="star-image"></img>
          {avgRating} • {resObj.info.sla.deliveryTime} 
          mins
        </p> */}
        <p>{locality}</p>
        <p className="cuisines line-clamp-1 w-50 text-ellipsis ">{cuisines.join(",")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};
export const withPromptedResturantContainer=(ResturantContainer)=>{
  return(props)=>{
    return(
      <div className="">
        <label className=" absolute p-1 bg-black text-white rounded text text-xs  z-3">Prompted</label>
        <ResturantContainer {...props}/>
      </div>
    )
  }
}


export default ResturantContainer;
