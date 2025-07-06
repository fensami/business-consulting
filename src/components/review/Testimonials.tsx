/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";

const personImages = [
  {
    image:
      "https://res.cloudinary.com/dsc0hliud/image/upload/v1751712636/Image_3_vsmx9c.png",
  },
  {
    image:
      "https://res.cloudinary.com/dsc0hliud/image/upload/v1751712636/Image_5_lnzyva.png",
  },
  {
    image:
      "https://res.cloudinary.com/dsc0hliud/image/upload/v1751712636/Image_4_b0ks1k.png",
  },
  {
    image:
      "https://res.cloudinary.com/dsc0hliud/image/upload/v1751712636/Image_7_qjgw8h.png",
  },

  {
    image:
      "https://res.cloudinary.com/dsc0hliud/image/upload/v1751712636/Image_6_vlseqf.png",
  },
  {
    image:
      "https://res.cloudinary.com/dsc0hliud/image/upload/v1751712636/Image_4_b0ks1k.png",
  },
  {
    image:
      "https://res.cloudinary.com/dsc0hliud/image/upload/v1751712636/Image_5_lnzyva.png",
  },
];

const TestimonialSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <section className=" review-section bg-[#EEEFFF] py-[100px] relative z-[1]">
      <div className="container mx-auto">
        <div>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            slideToClickedSlide={true} // ✅ make clicked slide active
            centeredSlides={true} // ✅ center the active slide
            modules={[FreeMode, Thumbs]} // ✅ ensure modules are imported
            className="mySwiper"
            initialSlide={4}
          >
            {personImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.image}
                  alt="person-image"
                  width={100}
                  height={100}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {Array.from({ length: 6 }).map((_, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center text-center">
                <p className="text-2xl font-normal  text-[#838A95] max-w-3xl mb-7">
                  “Simply dummy text of the printing and
                  <span className="text-[#00234B]"> Expert Advisor</span>. lorem
                  Ipsum has been the standard dummy text ever since the when an
                  unknown printer took a galley of type and scrambled.”
                </p>
                <div className="mb-4">
                  <p className="text-[20px] font-semibold text-[#00234B] ">
                    Bm Ashik -
                    <span className="font-normal text-[#838A95]">
                      UI/UX Designer
                    </span>
                  </p>
                  <ul className="flex items-center gap-1 justify-center mt-[10px]">
                    <li>
                      <MdOutlineStar className="text-[#FFA722] text-2xl" />
                    </li>
                    <li>
                      <MdOutlineStar className="text-[#FFA722] text-2xl" />
                    </li>
                    <li>
                      <MdOutlineStar className="text-[#FFA722] text-2xl" />
                    </li>
                    <li>
                      <MdOutlineStar className="text-[#FFA722] text-2xl" />
                    </li>
                    <li>
                      <MdOutlineStarHalf className="text-[#FFA722] text-2xl" />
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="review-bg-left absolute top-0 left-0 z-[-1]">
        <Image
          src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751728902/Bg_Color_Shado_i1hbaw.png"
          alt="bg-left"
          width={560}
          height={257}
        ></Image>
      </div>
      <div className="review-bg-right absolute bottom-0 right-0 z-[-1]">
        <Image
          src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751728903/Bg_Color_Shado_1_s6wufn.png"
          alt="bg-left"
          width={487}
          height={382}
        ></Image>
      </div>
    </section>
  );
};

export default TestimonialSlider;
