import { useLoaderData } from "react-router-dom";
import Slider from "../Components/Slider/Slider";
import FeaturedPropCard from "../Components/FeaturedPropertyCard/FeaturedPropCard";
import { GoDotFill } from "react-icons/go";

const Home = () => {
  const properties = useLoaderData();
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
      <div className="mt-6 bg-[#fff7ec] p-3 lg:p-7 ">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-5xl flex items-center">
            <GoDotFill></GoDotFill>Featured Properties
          </h1>
          <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
            {properties.map((p, idx) => (
              <FeaturedPropCard key={idx} p={p}></FeaturedPropCard>
            ))}
          </div>
        </div>
      </div>

      {/* Overview section */}
      <div
        style={{
          backgroundImage: "url('https://i.ibb.co.com/GMKY3pk/overview.jpg')",
        }}
        className="h-fit bg-opacity-90"
      >
        <div className="stats bg-transparent shadow">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
