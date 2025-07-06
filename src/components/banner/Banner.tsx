import React from "react";
import CallToActionConsultant from "./CallToActionConsultant";
import RegisteredUsersDisplay from "./RegisteredUsersDisplay";
import Image from "next/image";
const bgLeftImage =
  "https://res.cloudinary.com/dsc0hliud/image/upload/v1751687764/Element_Blur_yo5oxq.png";
const rocketSmall =
  "https://res.cloudinary.com/dsc0hliud/image/upload/v1751687764/Rocket-small_fwbc8w.png";
const colorImgText =
  "https://res.cloudinary.com/dsc0hliud/image/upload/v1751687764/Mask_group_kgkxoj.png";
const bannerMainImage =
  "https://res.cloudinary.com/dsc0hliud/image/upload/v1751688830/Group_1_tfiuj3.png";
const Banner = () => {
  return (
    <section className=" py-[110px] relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-7">
          <div className="col-span-5">
            <h1 className=" banner-title relative">
              We shape the future of
              <span className="business-text"> business</span>
              <span className="absolute top-[-40px] right-[-40px]">
                <Image
                  src={colorImgText}
                  alt="color Img Text"
                  width={75}
                  height={75}
                />
              </span>
              <span className="inline">
                <Image
                  src={rocketSmall}
                  alt="rocket small image"
                  width={75}
                  height={75}
                  className="inline"
                />
              </span>
            </h1>
            <p className="text-[18px] font-normal max-w-[574px] my-[50px]">
              A business consultant is a professional who provides expert advice
              and guidance to businesses on various aspects such.
            </p>
            <CallToActionConsultant />
            <RegisteredUsersDisplay />
          </div>
        </div>
      </div>
      {/* Banner Main Image */}
      <div className="banner-main-image absolute right-[0px] bottom-[-100px]">
        <div className="relative w-[1134px] h-[700px]">
          <Image src={bannerMainImage} alt="banner left bg image" fill></Image>
        </div>
      </div>
      {/* Banner Left bg Image */}
      <div className="banner-left-bg-image absolute left-[125px] top-[168px]">
        <div className="relative w-[50px] h-[50px]">
          <Image src={bgLeftImage} alt="banner left bg image" fill></Image>
        </div>
      </div>
    </section>
  );
};

export default Banner;
