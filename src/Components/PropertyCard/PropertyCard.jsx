import { FaKitchenSet, FaRegSquareFull } from "react-icons/fa6";
import { LuBath } from "react-icons/lu";
import { MdOutlineBedroomParent } from "react-icons/md";

const PropertyCard = ({p}) => {
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
    <div className="card bg-base-100 w-96 border ">
      <figure>
        <img src={image} alt={estate_title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-green-500">
          {estate_title}
          <div className="badge badge-secondary">{status}</div>
        </h2>
        <div className="divider my-0"></div>
        {/* <p className='text-gray-600'>{description}</p> */}
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <FaRegSquareFull></FaRegSquareFull>
            <p>{area}</p>
          </div>
          <div className="flex items-center gap-1">
            <LuBath></LuBath>
            <p>{bathrooms} Bathrooms</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-1">
            <MdOutlineBedroomParent></MdOutlineBedroomParent>
            <p>{bedrooms} Bedrooms</p>
          </div>
          <div className="flex items-center gap-1">
            <FaKitchenSet></FaKitchenSet>
            <p>{kitchens} Kitchens</p>
          </div>
        </div>
        <div className="card-actions mt-4 items-center justify-end">
          {/* <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div> */}
          <p className="font-bold text-green-500">{price}</p>
          <a
            href="#_"
            className=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Show Property</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
