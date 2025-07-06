// components/BusinessSolutionSection.jsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCircle } from "react-icons/fa"; // Importing a bolt icon for the tag and circle for bullet points
import { TbArrowBigUpLines } from "react-icons/tb";

const BusinessSolutionSection = () => {
  return (
    <section className="">
      <div className=" ">
        <div
          className="
            inline-flex items-center space-x-2
            px-4 py-2 mb-6
            text-sm font-semibold text-white
          

            rounded-[48px]
  bg-[linear-gradient(90deg,_#708BFD_0%,_#FE71B9_100%)]
  shadow-[0px_-2px_4px_0px_rgba(255,255,255,0)_inset,0px_-4px_18.5px_0px_rgba(255,255,255,0.79)_inset]
          "
        >
          <TbArrowBigUpLines className="text-sm rotate-45" />
          <span>Know about us</span>
        </div>
        {/* Main Heading */}
        <h2 className=" text-gray-900 mb-6 text-5xl font-semibold  ">
          All-in-one web solution <br className="hidden md:inline" /> for your
          business
        </h2>
        {/* Descriptive Paragraph */}
        <p className="text-lg font-normal text-[#838A95] mb-8 max-w-xl">
          We are creative agency, we are here to helping your business growth
          consectetur adipiscing.
        </p>
        {/* Bulleted List */}
        <ul className="text-left space-y-3 mb-10 md:mb-12 ">
          <li className="flex items-start space-x-3 text-lg text-gray-700">
            <div className="w-[26px] h-[26px] text-white shadow-[0px_8px_15.7px_0px_rgba(12,4,66,0.07)] flex justify-center items-center rounded-full">
              <FaCircle className=" text-blue-500  text-[10px]" />
            </div>
            {/* Blue dot icon */}
            <span>There are many variations of passages available</span>
          </li>
          <li className="flex items-start space-x-3 text-lg text-gray-700">
            <div className="w-[26px] h-[26px] text-white shadow-[0px_8px_15.7px_0px_rgba(12,4,66,0.07)] flex justify-center items-center rounded-full">
              <FaCircle className=" text-blue-500 text-[10px]" />
            </div>
            <span>Majority have suffered alteration in some form</span>
          </li>
          <li className="flex items-start space-x-3 text-lg text-gray-700">
            <div className="w-[26px] h-[26px] text-white shadow-[0px_8px_15.7px_0px_rgba(12,4,66,0.07)] flex justify-center items-center rounded-full">
              <FaCircle className=" text-blue-500  text-[10px]" />
            </div>
            <span>Contrary to popular belief is not simply random</span>
          </li>
        </ul>
        {/* "More about us" Button and CEO Info */}
        <div className="flex  items-center gap-7">
          {/* More about us Button */}
          <Link href="/about" passHref>
            <button className="button-custom v2">More about us</button>
          </Link>

          {/* CEO Info */}
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
              <Image
                src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751694451/vfim9adyp4vbtjvpwky5.png" // Replace with actual CEO avatar path
                alt="Bm Ashik"
                width={64}
                height={64}
                objectFit="cover"
                className="rounded-full"
              />
            </div>

            {/* Name and Title */}
            <div className="flex flex-col items-start">
              {/* Align text left */}
              <div className="text-xl font-bold text-gray-900 pb-[8px] mb-[9px] border-b border-[#00234B] opacity-15">
                <Image
                  src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751694875/Bm_Ashik._v7mrao.png"
                  alt=""
                  width={125}
                  height={27}
                ></Image>
              </div>
              <p className="text-gray-600 text-sm">CEO at Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutionSection;
