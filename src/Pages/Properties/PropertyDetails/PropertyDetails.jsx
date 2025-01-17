import { useLoaderData, useParams } from "react-router-dom";
import DetailsPropertyCard from "../../../Components/DetailsPropertyCard/DetailsPropertyCard";
import { useEffect } from "react";

// import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
const PropertyDetails = () => {
   useEffect(() => {
      document.title = 'SLASH Realty: Property Details';
    }, []);
  const { id } = useParams();
  const intId = parseInt(id);
  const properties = useLoaderData();
  console.log(typeof id);
  const property = properties.find((p) => p.id === intId);
  console.log(property);
  return (
    <div>
        <DetailsPropertyCard property={property}></DetailsPropertyCard>
    </div>
  );
};

export default PropertyDetails;
