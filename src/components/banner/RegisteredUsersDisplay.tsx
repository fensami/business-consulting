// components/RegisteredUsersDisplay.jsx

import React from "react";
import Image from "next/image";
import { FiPlus } from "react-icons/fi"; // Importing a plus icon from Feather Icons

const RegisteredUsersDisplay = () => {
  return (
    <div className="flex items-center gap-[20px] mt-[60px]">
      {/* Avatar Stack */}
      <div className="flex -space-x-3">
        {/* Avatar 1 */}
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <Image
            src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751651599/Ellipse_39_llbusy.png" // Replace with actual image path
            alt="User 1"
            width={48}
            height={48}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        {/* Avatar 2 */}
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <Image
            src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751651599/Ellipse_42_xzwsaf.png" // Replace with actual image path
            alt="User 2"
            width={48}
            height={48}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        {/* Avatar 3 */}
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
          <Image
            src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751651599/Ellipse_41_kbwzwg.png" // Replace with actual image path
            alt="User 3"
            width={48}
            height={48}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        {/* Plus Icon Avatar */}
        <div
          className="
            w-12 h-12 rounded-full
            flex items-center justify-center
            border-2 border-white shadow-md
            text-white text-xl
          "
          style={{
            background: "linear-gradient(90deg, #FF6B8B 0%, #E04D8C 100%)", // Pink gradient for the plus avatar
          }}
        >
          <FiPlus />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <p className=" text-[#838A95] text-[16px] font-normal">
          <span className="text-blue-600">2.5K+</span> Business Peoples
        </p>
        <p className="text-gray-600">Already Registered</p>
      </div>
    </div>
  );
};

export default RegisteredUsersDisplay;
