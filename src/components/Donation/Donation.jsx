import React from "react";
import "./Donation.css";

const Donation = () => {
  return (
    <div className="donation-section flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center font-merriWeather">
      
      <div>
        <h3 className="text-lg text-customYellow font-bold before:content-['ॐ'] before:mr-3 after:content-['ॐ'] after:ml-3">
          DONATE HERE
        </h3>
        <h2 className="text-4xl mt-2 font-bold text-customPurple">
            Make this Event a Grand Success
        </h2>
        <h4 className="mt-2 font-bold text-customPurple">
            Scan the QR code below to make a donation
        </h4>
      </div>

      <div className="qr-code-container">
        <img
          src="src/assets/images/Zelle.jpg"
          alt="QR Code for Donation"
          className="qr-code"
        />
      </div>
    </div>
  );
};

export default Donation;
