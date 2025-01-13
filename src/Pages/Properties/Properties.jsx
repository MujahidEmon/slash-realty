import { useLoaderData } from "react-router-dom";
import PropertyCard from "../../Components/PropertyCard/PropertyCard";
import PropertiesBanner from "./PropertiesBanner";
import { GoDotFill } from "react-icons/go";

const Properties = () => {
  const properties = useLoaderData();
  return (
    <div className="mb-6">
      <PropertiesBanner></PropertiesBanner>
      {/* <PropertyCard></PropertyCard> */}
      <div className="lg:max-w-7xl mx-auto">
        <h1 className="font-medium my-8 lg:text-6xl flex items-center text-3xl text-green-500">
          <GoDotFill></GoDotFill>Properties
        </h1>
        <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-6">
          {properties.map((p, idx) => (
            <div key={idx}>
              <PropertyCard key={idx} p={p}></PropertyCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
