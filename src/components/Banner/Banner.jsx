import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div className="flex flex-col font-notoSerif text-red-800 px-4 md:mt-36 mx-auto w-fit text-center items-center font-merriWeather">
      <div>
        <p className="text-base md:text-2xl font-semibold">
          Shree Ganesh Utsav Samithi, Sacramento invites you to
        </p>

        <h1 className="text-2xl md:text-6xl text-rose-900 md:text-[#E74C3C] font-bold tracking-wider mt-2 md:mt-6 uppercase">
          Ganesh Chaturthi
        </h1>
        <p className="text-xs md:text-lg font-semibold md:mt-4">
          6th September through 14th September
        </p>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <FaLocationDot size={15} />
        <div className="text-xs">
          <p className="self-center whitespace-nowrap">
            Masonic Center, 1000 Duchow Way, Forlsom, CA 99560
          </p>
        </div>
      </div>
      <button
        type="button"
        className="text-red-800 w-fit bg-yellow-400 hover:bg-yellow-500 focus:outline-none font-bold rounded-full text-xs md:text-sm px-3 py-2 md:px-5 md:py-2.5 mt-2 md:mt-4 text-center"
      >
        <Link to={"donations"} smooth={true} duration={500}>
          Donate Now
        </Link>
      </button>
    </div>
  );
};

export default Banner;
