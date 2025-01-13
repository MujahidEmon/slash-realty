import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import FeaturedPropCard from "../Components/FeaturedPropertyCard/FeaturedPropCard";
import { GoDotFill } from "react-icons/go";
import { MdRealEstateAgent } from "react-icons/md";
import { PiBuildingApartment } from "react-icons/pi";
import { IoPeople } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import ReviewCard from "../Components/ReviewCard/ReviewCard";

const Home = () => {
  const {featured, reviews} = useLoaderData();
  // const {name} = useContext(AuthContext)
  return (
    <>
      <div className="flex lg:flex-row lg:gap-0 gap-6 max-w-7xl mx-auto flex-col">
        <div className="md:w-2/5 w-full gap-y-5 flex flex-col justify-center lg:items-start items-center">
          <p className="text-green-500 text-2xl">Build Your Dreams</p>
          <h1 className="text-4xl font-thin  lg:text-7xl justify-center">
            IT'S TIME TO FIND YOUR LUXURY HOME
          </h1>
          {/* Search bar */}
          <div className="flex rounded-md border-2 border-green-500 overflow-hidden max-w-96  font-[sans-serif]">
            <input
              type="email"
              placeholder="Search Your Dream House..."
              className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
            />
            <button
              type="button"
              className="flex items-center justify-center bg-green-500 px-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="fill-white"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="md:w-3/5 w-full ">
          <Slider></Slider>
        </div>
      </div>

      {/* Feature Properties */}
      <div className="mt-6 bg-[#fff7ec] p-3 lg:p-7 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-5xl flex items-center">
            <GoDotFill color="#22c55e"></GoDotFill><span className="text-green-500 font-medium">Featured Estates</span>
          </h1>
          <div className="mt-8 lg:12 pr-8 ">
            <Marquee pauseOnHover gap={20} gradient={false}>

            {featured.slice(0,3).map((p, idx) => (
              <div key={idx} className="mr-8"><FeaturedPropCard  p={p}></FeaturedPropCard></div>
            ))}
            </Marquee>
          </div>
        </div>
      </div>

      {/* Overview section */}
      <div
        style={{
          backgroundImage: "url('https://i.ibb.co.com/68L3cV9/bg-02-1920x916.jpg')",
        }}
        className="lg:h-60 h-96 flex   justify-center bg-cover items-center  "
      >
        <div className="stats flex md:flex-row flex-col bg-opacity-75 lg:w-[1280px] w-full lg:mx-12 mx-auto shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <PiBuildingApartment size={40}></PiBuildingApartment>
            </div>
            <div className="stat-value ">749</div>
            <div className="stat-title font-semibold text-xl ">Properties on Map</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <MdRealEstateAgent size={40}></MdRealEstateAgent>
            </div>
            <div className="stat-value ">31</div>
            <div className="stat-title font-semibold text-xl ">Professional Agents</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <IoPeople size={40}></IoPeople>
            </div>
            <div className="stat-value ">15k</div>
            <div className="stat-title font-semibold text-xl ">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className=" bg-[#fff7ec] p-3 lg:p-7 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-5xl flex items-center">
            <GoDotFill color="#22c55e"></GoDotFill><span className="text-green-500 font-medium">What People Say</span>
          </h1>
          <div className="mt-8 lg:12 pr-8 ">
            <Marquee pauseOnHover gap={20} gradient={false}>

            {reviews.slice(0,3).map((r, idx) => (
              <div key={idx} className="mr-8"><ReviewCard r={r}></ReviewCard></div>
            ))}
            </Marquee>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Home;
