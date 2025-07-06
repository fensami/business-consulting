import React from "react";
import Marquee from "react-fast-marquee";
import { HiOutlineSparkles } from "react-icons/hi2";

const Marque = () => {
  return (
    <>
      <section className="py-8 md:py-12 ">
        <div
          className="
          flex items-center justify-center text-center
          overflow-hidden relative
          p-4
        "
          style={{
            background: "linear-gradient(90deg, #8A2BE2 0%, #FF69B4 100%)", // Purple to Pink gradient
          }}
        >
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            className="z-10"
          >
            <div
              className="
              flex items-center justify-center gap-x-6 sm:gap-x-8 lg:gap-x-12 px-4
              text-white font-extrabold uppercase
              text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
              
            "
            >
              <span className="text-outline creative-solution-text">
                Creative
              </span>
              <HiOutlineSparkles className="text-white text-2xl sm:text-3xl lg:text-4xl" />
              <span className="text-outline creative-solution-text">
                Solutions
              </span>
              <HiOutlineSparkles className="text-white text-2xl sm:text-3xl lg:text-4xl" />
              <span className="text-outline creative-solution-text">
                Expert Guidance
              </span>
              <HiOutlineSparkles className="text-white text-2xl sm:text-3xl lg:text-4xl" />
              <span className="text-outline creative-solution-text">
                Consulting
              </span>
              <span className="w-16 sm:w-24 lg:w-32 inline-block"></span>
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Marque;
