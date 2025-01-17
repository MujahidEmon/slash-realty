import PropType from "prop-types";
import { FaKitchenSet, FaRegSquareFull } from "react-icons/fa6";
import { LuBath } from "react-icons/lu";
import { MdOutlineBedroomParent } from "react-icons/md";
import { Link } from "react-router-dom";
const FeaturedPropCard = ({ p }) => {
  const {
    id,
    estate_title,
    image,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    bedrooms,
    bathrooms,
    kitchens,
  } = p;
  return (
    <div className="card bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <img src={image} alt="image" />
      </figure>
      <div className="card-body space-y-4">
        <h2 className="card-title text-white text-lg">{estate_title}</h2>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <FaRegSquareFull></FaRegSquareFull>
            <p className="text-sm">{area}</p>
          </div>
          <div className="flex items-center gap-1">
            <LuBath></LuBath>
            <p className="text-sm">{bathrooms} Bathrooms</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <MdOutlineBedroomParent></MdOutlineBedroomParent>
            <p className="text-sm">{bedrooms} Bedrooms</p>
          </div>
          <div className="flex items-center gap-1">
            <FaKitchenSet></FaKitchenSet>
            <p className="text-sm">{kitchens} Kitchens</p>
          </div>
        </div>
        <div className="card-actions items-center justify-end">
        <p className="font-bold text-green-500">{price}</p>
        <a
            href="#_"
            className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <Link to={`/properties/${id}`} className="relative">Show Property</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

FeaturedPropCard.propTypes = {
  p: PropType.object,
};

export default FeaturedPropCard;
