import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { IoGlobeOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
const logo =
  "https://res.cloudinary.com/dsc0hliud/image/upload/v1751554989/logo_1_skbbar.png";
const HeaderTop = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="bg-gradient-to-r from-[#f8f9fc] to-[#fdfdff] py-[19px] shadow-sm rounded-[10px]">
        <div className=" flex flex-wrap justify-between items-center text-sm text-gray-600 px-[30px]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 font-medium text-[14px]">
              <FaMapMarkerAlt className="text-gray-500" />
              <span>15th Street, USA</span>
            </div>
            <span className="hidden sm:inline-block">|</span>
            <div className="flex items-center gap-1 font-medium text-[14px]">
              <HiOutlineChatBubbleLeftRight className="text-gray-500" />
              <span>support@gamil.com</span>
            </div>
          </div>

          <div className="w-[200px] h-[32px] relative">
            <Link href="/">
              <Image src={logo} alt="logo" fill />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <IoGlobeOutline />
              <span>English</span>
              <MdKeyboardArrowDown />
            </div>
            <span className="hidden sm:inline-block">|</span>
            <div className="flex items-center gap-3 text-gray-600">
              <Link href="/">
                <FaFacebookF className="hover:text-[#5163FF] transition duration-300" />
              </Link>
              <Link href="/">
                <FaXTwitter className="hover:text-[#5163FF] transition duration-300" />
              </Link>
              <Link href="/">
                <FaInstagram className="hover:text-[#5163FF] transition duration-300" />
              </Link>
              <Link href="/">
                <FaLinkedinIn className="hover:text-[#5163FF] transition duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
