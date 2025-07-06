import React from "react";
import { FiBell } from "react-icons/fi";

const NewsletterSubscription = () => {
  return (
    <div className=" container mx-auto mt-[60px]">
      <div className="w-full px-[70px] py-[50px] rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-10 bg-[linear-gradient(90deg,_#6B4BF6_0%,_#D954A3_100%)]">
        <div className="flex items-center space-x-4 text-white text-center md:text-left">
          <div className="p-4 rounded-full border border-white border-opacity-40 flex items-center justify-center">
            <FiBell className="text-4xl text-white" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              keep up to date -
            </h3>
            <p className="text-base sm:text-lg">
              get updates with latest topics
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-2 w-full md:w-auto pl-[25px] pr-[10px] pt-[10px] pb-[10px] "
          style={{
            borderRadius: "10px",
            border: "2px solid rgba(255, 255, 255, 0.35)",
            background:
              "linear-gradient(153deg, rgba(255, 255, 255, 0.45) -3.36%, rgba(254, 113, 185, 0.00) 149.26%)",
            boxShadow:
              "0px 20px 122px 0px rgba(13, 7, 75, 0.08) inset, -2px -1px 7.8px 0px rgba(255, 255, 255, 0.15) inset",
            color: "#fff",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email..."
            className="flex-grow p-3 rounded-xl text-white transition-all duration-300"
            aria-label="Email for subscription"
          />
          <button
            type="submit"
            className="p-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 w-[130px] ml-auto"
            style={{
              background: "linear-gradient(90deg, #60A5FA 0%, #8B5CF6 100%)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
