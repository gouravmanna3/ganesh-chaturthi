import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white" id="footer">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-evenly">
          <div className="mb-6 md:mb-0">
            <p className="self-center text-2xl font-semibold whitespace-nowrap">
              Shree Ganesh Utsav Samithi
            </p>

            <div className="flex gap-2 items-center mt-4">
              <FaLocationDot size={30} />
              <div>
                <p className="self-center whitespace-nowrap">
                  Masonic Center, 1000 Duchow Way
                </p>
                <p>Forlsom, CA 99560</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Contact us
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <div className="flex items-center gap-2">
                  <FaPhone />
                  <p>+1 954-903-8226 (Rajesh)</p>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center gap-2">
                  <FaPhone />
                  <p>+1 916-693-9454 (Pankaj)</p>
                </div>
              </li>
              <li className="mb-4">
                <div className="flex items-center gap-2">
                  <FaPhone />
                  <p>+1 916-273-2056 (Chiranth)</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Connect with us
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="flex gap-2 mb-4 items-center">
                <FaInstagram />
                <a
                  href="https://www.instagram.com/p/C-YC_BZPLuD/?igsh=NjFhOGMzYTE3ZQ=="
                  className="hover:underline "
                >
                  Instagram
                </a>
              </li>
              <li className="flex gap-2 mb-4 items-center">
                <FaFacebook />
                <a
                  href="https://www.facebook.com/SacGaneshUtsavSamiti"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2024 <span>Shree Ganesh Utsav Samithi.</span> All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
