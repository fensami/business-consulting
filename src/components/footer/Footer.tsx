import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import NewsletterSubscription from "./NewsletterSubscription";
import CopyrightSection from "./CopyrightSection";

const Footer = () => {
  return (
    <footer className="bg-[#1a0033] text-white pt-16 px-4 sm:px-6 lg:px-8 relative z-[1]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 container mx-auto">
        <div className="col-span-1 md:col-span-2 bg-[linear-gradient(145deg,rgba(254,113,185,0.04)_-2.12%,rgba(20,2,73,0.01)_121.13%)] h-auto xl:p-[40px] rounded-[10px]">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <Image
                src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751633124/logo-light-1_2_r0xv6y.png"
                alt="Rainbow Themes Logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">RAINBOW THEMES</span>
            </div>
          </Link>
          <p className="text-white text-[16px] font-normal mt-6 mb-5">
            Introducing our team of talented and skilled professionals who are
            ready to increase your productivity and bring your business.
          </p>
          <div className="mb-6">
            <p className="text-white text-[16px] font-normal ">
              We Are Available !!
            </p>
            <p className="text-white text-[18px] font-medium ">
              Mon-Sat: 10:00am - 08:00pm
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="icon-btn  items-center justify-center inline-flex w-[40px] h-[40px]"
            >
              <FaFacebookF className="text-white text-lg" />
            </Link>
            <Link
              href="#"
              className="icon-btn  items-center justify-center inline-flex w-[40px] h-[40px]"
            >
              <FaTwitter className="text-white text-lg" />
            </Link>
            <Link
              href="#"
              className="icon-btn  items-center justify-center inline-flex w-[40px] h-[40px]"
            >
              <FaInstagram className="text-white text-lg" />
            </Link>
            <Link
              href="#"
              className="icon-btn items-center justify-center inline-flex w-[40px] h-[40px] "
            >
              <FaLinkedinIn className="text-white text-lg" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-3  xl:py-[40px] xl:px-[50px] rounded-[10px] bg-[linear-gradient(145deg,rgba(254,113,185,0.04)_-2.12%,rgba(20,2,73,0.01)_121.13%)]">
          {/* Quick Link Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className=" flex items-center gap-[10px] footer-link"
                >
                  About Company
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-[10px] footer-link"
                >
                  Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-[10px] footer-link"
                >
                  Investor Presentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-[10px] footer-link"
                >
                  Investor Career
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-[10px] footer-link"
                >
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-[10px] footer-link"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[rgba(255, 255, 255, 0.90)] font-normal hover:text-purple-400 transition-colors duration-300 text-[16px]"
                >
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[rgba(255, 255, 255, 0.90)] font-normal hover:text-purple-400 transition-colors duration-300 text-[16px]"
                >
                  Finance Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[rgba(255, 255, 255, 0.90)] font-normal hover:text-purple-400 transition-colors duration-300 text-[16px]"
                >
                  Investor Presentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[rgba(255, 255, 255, 0.90)] font-normal hover:text-purple-400 transition-colors duration-300 text-[16px]"
                >
                  Investor Career
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[rgba(255, 255, 255, 0.90)] font-normal hover:text-purple-400 transition-colors duration-300 text-[16px]"
                >
                  Marketing Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[rgba(255, 255, 255, 0.90)] font-normal hover:text-purple-400 transition-colors duration-300 text-[16px]"
                >
                  Tax Preparation
                </Link>
              </li>
            </ul>
          </div>

          {/* Upcoming Event Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Upcoming Event</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Image
                  src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751633759/Image_qh5uan.png"
                  alt="Business Consulting Event"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium text-white hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    Business Consulting
                  </Link>
                  <p className="text-gray-400 text-xs">26 March, USA</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Image
                  src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751633759/Image_1_lrhut1.png"
                  alt="Email Marketing Event"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium text-white hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    Email Marketing
                  </Link>
                  <p className="text-gray-400 text-xs">29 September, CA</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Image
                  src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751633759/Image_2_baeort.png"
                  alt="Cultures of Creativity Event"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <Link
                    href="#"
                    className="block font-medium text-white hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    Cultures of Creativity
                  </Link>
                  <p className="text-gray-400 text-xs">30 August, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterSubscription />
      <CopyrightSection />

      <Image
        src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751812310/7_ulnjdc.png"
        alt="bg-right"
        width={137}
        height={137}
        className="absolute bottom-[5px] right-[84px] z-[-1]"
      />
      <Image
        src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751812311/6_cueagu.png"
        alt="bg-left"
        width={137}
        height={137}
        className="absolute top-[167px] left-[0] z-[-1]"
      />
    </footer>
  );
};

export default Footer;
