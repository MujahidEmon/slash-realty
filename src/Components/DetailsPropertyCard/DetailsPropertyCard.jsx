import { FaKitchenSet, FaRegSquareFull } from "react-icons/fa6";
import { LuBath } from "react-icons/lu";
import { MdOutlineBedroomParent } from "react-icons/md";

const DetailsPropertyCard = ({ property }) => {
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
  } = property;
  return (
    <div className="bg-white grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full  max-w-7xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="min-h-[280px] h-full">
        <img src={image} className="w-full h-full object-cover" alt="Card" />
      </div>

      <div className="p-6 card-body">
        <h3 className="text-xl font-semibold">{estate_title}</h3>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
        <p className="font-semibold mt-2">Facilities</p>
        <p className=" text-sm text-gray-500 leading-relaxed">
          {facilities.map((f) => (
            <li>{f}</li>
          ))}
        </p>

        <div className="flex lg:flex-row flex-col">
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
        </div>
          <div className="card-actions items-center justify-end">
            <p className="font-bold text-green-500">{price}</p>
          </div>
      </div>
    </div>
  );
};

export default DetailsPropertyCard;
