import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow text-center">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Shree Ganesh Utsav Samithi Inc
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
