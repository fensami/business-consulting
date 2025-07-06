import Image from "next/image";
import React from "react";
import BusinessSolutionSection from "./BusinessSolutionSection";
const aboutSmallImage =
  "https://res.cloudinary.com/dsc0hliud/image/upload/v1751692165/Mask_group_1_wttrcc.png";
const aboutBigImage =
  "https://res.cloudinary.com/dsc0hliud/image/upload/v1751692166/steptodown_23_gasu8d.png";
const aboutCompanyExperianceImage =
  "https://res.cloudinary.com/dsc0hliud/image/upload/v1751692204/Comapny_Experience_ibkrio.png";
const About = () => {
  return (
    <section className="relative">
      <div className="container mx-auto py-[110px]">
        <div className="grid grid-cols-12 items-center gap-6">
          <div className=" col-span-5 h-[600px]">
            <div className="relative">
              <div className="about-big-image relative w-[318px] h-[540px] rounded-[10px] overflow-hidden">
                <Image src={aboutBigImage} alt="about big image" fill></Image>
              </div>
              <div className="absolute bottom-[-60px] right-0">
                <div className="about-big-image relative w-[308px] h-[360px] rounded-[10px] overflow-hidden ">
                  <Image
                    src={aboutSmallImage}
                    alt="about big image"
                    fill
                  ></Image>
                </div>
              </div>
              <div className="absolute top-[0px] right-0">
                <div className="about-big-image relative w-[178px] h-[178px] rounded-[10px] overflow-hidden ">
                  <Image
                    src={aboutCompanyExperianceImage}
                    alt="about big image"
                    fill
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-7 pl-[50px]">
            <BusinessSolutionSection />
          </div>
        </div>
      </div>

      <div className="about-bg absolute right-0 bottom-0">
        <Image
          src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751695094/Bg_Element_sdqxtt.png"
          alt="about bg"
          width={354}
          height={600}
        />
      </div>
    </section>
  );
};

export default About;
