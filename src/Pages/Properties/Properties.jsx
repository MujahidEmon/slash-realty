import { useLoaderData } from "react-router-dom";
import PropertyCard from "../../Components/PropertyCard/PropertyCard";
import PropertiesBanner from "./PropertiesBanner";
import { GoDotFill } from "react-icons/go";
import { useEffect } from "react";


const Properties = () => {

  useEffect(() => {
    document.title = 'SLASH Realty: Properties';
  }, []);
  const properties = useLoaderData();
  return (
    <div className="mb-6 mt-0">
      <PropertiesBanner></PropertiesBanner>
      {/* <PropertyCard></PropertyCard> */}
      <div className="lg:max-w-7xl max-w-xl mx-auto">
        <h1 className="font-medium my-11 lg:text-4xl flex items-center text-center text-2xl text-green-500">
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
