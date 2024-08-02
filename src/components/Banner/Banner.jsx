import React from "react";

import "./Banner.css";

const Banner = () => {

  return (
    <div className="flex flex-col font-notoSerif mt-40 mx-auto w-fit text-center items-center font-merriWeather">
      <div>
        <p className="text-3xl text-red-800 font-semibold">Welcome to</p>
        <h1 className="text-5xl text-red-900 font-bold tracking-wider mt-4">
          Shri Ganesh Utsav Samithi Inc
        </h1>
      </div>
      <button
        type="button"
        className="text-red-800 w-fit bg-yellow-400 hover:bg-yellow-500 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 mt-4 text-center"
      >
        Donate Now
      </button>
    </div>
  );
};

export default Banner;
