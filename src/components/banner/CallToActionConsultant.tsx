import React from "react";
import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";

const CallToActionConsultant = () => {
  return (
    <div className="flex gap-8">
      <Link href="/explore-more">
        <button
          className="
            px-12 py-4
            text-lg font-semibold text-white
            rounded-[10px]
            shadow-lg
            transition-all duration-300
            transform hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-75
          "
          style={{
            background:
              "radial-gradient(83.54% 74.04% at 37.13% 12%, rgba(255, 255, 255, 0.43) 0%, rgba(255, 255, 255, 0.00) 69.79%, rgba(255, 255, 255, 0.00) 100%), #4C5DEF",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.25)",
          }}
        >
          Explore more
        </button>
      </Link>

      <div className="flex items-center space-x-4">
        <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border-2 border-gray-300 border-opacity-50 text-blue-500 bg-white bg-opacity-10 backdrop-blur-sm">
          <LuPhoneCall className="text-[20px] text-blue-500" />
        </div>

        <div>
          <p className="text-[#838A95]  text-[13px] font-normal">
            Free Consultant
          </p>
          <a
            href="tel:+14065550120"
            className="text-[#00234B] text-[17px] font-medium hover:underline"
          >
            (406) 555-0120
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToActionConsultant;
