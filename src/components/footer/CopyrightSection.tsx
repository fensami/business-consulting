import React from "react";
import Link from "next/link";

const CopyrightSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#1a0033] text-white py-[60px] container mx-auto">
      <div className="flex flex-wrap gap-5  items-center justify-between text-sm">
        {/* Copyright Information */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          {currentYear}{" "}
          <span className="text-purple-400">
            <Link href="/">Rainbow Themes.</Link>{" "}
          </span>
          All Rights Reserved.
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end space-x-4">
          <Link
            href="/terms-condition"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Terms & Condition
          </Link>
          <span className="text-gray-500">•</span>
          <Link
            href="/privacy-policy"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-500">•</span>
          <Link
            href="/support"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CopyrightSection;
