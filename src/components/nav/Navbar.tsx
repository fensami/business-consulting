import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai"; // Import icons
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between px-4 border-b border-gray-300 py-3">
        <div className="flex items-center gap-3.5">
          <div className="border-r pr-3 block border-[rgba(0,35,75,0.15)]">
            <MdOutlineMenu className="text-[20px] text-[#838A95] " />
          </div>
          <div className="relative ">
            <AiOutlineShoppingCart className=" text-[#838A95] text-[20px] " />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>

          <button className=" focus:outline-none border-l pl-3 block border-[rgba(0,35,75,0.15)]">
            <AiOutlineSearch className="text-[20px] text-[#838A95]" />
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <div>
                <Link
                  href="/"
                  className="text-[#838A95] hover:text-[#5163FF] transition-all duration-500 flex items-center text-[16px] font-medium"
                >
                  Home
                  <IoIosArrowDown className="text-[10px] ml-2 flex items-center" />
                </Link>
              </div>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[#838A95] hover:text-[#5163FF] transition-all duration-500 flex items-center text-[16px] font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-[#838A95] hover:text-[#5163FF] transition-all duration-500 flex items-center text-[16px] font-medium"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pages"
                className="text-[#838A95] hover:text-[#5163FF] transition-all duration-500 flex items-center text-[16px] font-medium"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                className="text-[#838A95] hover:text-[#5163FF] transition-all duration-500 flex items-center text-[16px] font-medium"
              >
                News
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[#838A95] hover:text-[#5163FF] transition-all duration-500 flex items-center text-[16px] font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button className="button-custom">Get a free quote</button>
      </div>
    </nav>
  );
};

export default Navbar;
