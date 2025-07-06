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
          {/* The dotted pattern lines - placeholder for more complex CSS if needed */}
          {/* <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"> */}
          {/* If you have a dotted background, define it via custom CSS or Tailwind config */}
          {/* Example: <div className="absolute inset-x-0 bottom-0 h-4 bg-dots-pattern bg-repeat-x"></div> */}
          {/* </div> */}

          {/* Marquee effect for the text */}
          <Marquee
            gradient={false} // Disable gradient if not needed for seamless scroll
            speed={50} // Adjust speed as desired
            pauseOnHover={true} // Pause animation on hover
            className="z-10" // Ensure marquee content is above background patterns
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
