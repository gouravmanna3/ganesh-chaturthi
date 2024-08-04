import React from "react";
import QR from "../../assets/QR.jpeg";
import ganesha from "../../assets/ganesha.png";

const Donate = () => {
  return (
    <div className="px-4">
      <div className="text-center mt-10 font-merriWeather" id="donations">
        <div>
          <h3 className="text-base md:text-lg text-customYellow uppercase font-bold before:content-['ॐ'] before:mr-3 after:content-['ॐ'] after:ml-3">
            Make a donation
          </h3>
          <h2 className="text-3xl md:text-4xl mt-2 font-bold text-customPurple">
            We need your help
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 mt-6">
          <div className="md:basis-1/2">
            <img
              src={ganesha}
              alt="ganesha"
              className="h-auto w-2/3 md:w-3/4 m-auto"
            />
          </div>
          <div className="md:basis-1/2">
            <img
              src={QR}
              alt="qr_code"
              className="h-auto w-2/3 md:w-2/4 m-auto md:ml-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
