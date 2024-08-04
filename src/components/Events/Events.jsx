import React from "react";
import { events } from "../../utils";

const Events = () => {
  return (
    <div
      className="text-center mt-6 px-4 md:mt-10 font-merriWeather"
      id="events"
    >
      <div>
        <h3 className="text-base md:text-lg text-customYellow font-bold before:content-['ॐ'] before:mr-3 after:content-['ॐ'] after:ml-3">
          SRI MAHA GANAPATAYE NAMAHA
        </h3>
        <h2 className="text-3xl md:text-4xl mt-2 font-bold text-customPurple">
          Events Schedule
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-fit gap-4 md:gap-8 my-4 mx-auto">
        {events.map((event, index) => {
          const { date, eventList } = event;
          return (
            <div
              key={index}
              className="md:max-w-lg rounded overflow-hidden shadow-lg flex items-center"
            >
              <div className="p-5 w-24 md:w-40 bg-[#FADBD8] text-red-900">
                <h2 className="text-4xl md:text-7xl">{date}</h2>
                <h3 className="text-2xl md:text-3xl">Sept</h3>
              </div>
              <div className="px-6 md:py-4 text-left">
                <ul className="max-w-md space-y-1 text-red-800 list-inside ">
                  {eventList.map((eventItem, index) => (
                    <li className="flex items-center" key={index}>
                      <svg
                        className="w-3.5 h-3.5 me-2 text-customYellow  flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      {eventItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
