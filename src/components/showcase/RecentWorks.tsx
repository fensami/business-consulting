"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import {
  IoArrowBackOutline,
  IoArrowForward,
  IoArrowForwardOutline,
} from "react-icons/io5";

export default function RecentWorks() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className="py-[100px] relative z-[1]">
        <div className="container mx-auto">
          <div className=" flex items-center gap-2">
            <span>
              <Image
                src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751798428/Icon_sremub.svg"
                alt=""
                width={20}
                height={17}
              />
            </span>
            <h3
              className="text-[18px] font-normal
    bg-[linear-gradient(102deg,_#5163FF_-0.32%,_#FE71B9_100%)]
    bg-clip-text text-transparent"
            >
              Work showcase
            </h3>
          </div>
          <p className="text-end  mt-[51px] mb-[70px] text-[18px] font-normal max-w-[347px] text-[#838A95] ml-auto">
            Ready to transform your hard work into a thriving, stress-free
            business?
          </p>
        </div>
        <div className="container mx-auto  relative">
          <div className="recent-work-swiper">
            <div className="flex justify-end gap-4 mb-4">
              <button ref={prevRef} className="swiper-button-prev-custom  ">
                <IoArrowBackOutline />
              </button>
              <button ref={nextRef} className="swiper-button-next-custom ">
                <IoArrowForwardOutline />
              </button>
            </div>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              speed={1000}
              className="mySwiper"
            >
              <SwiperSlide className="relative">
                <Image
                  src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751777195/Image_8_i834hd.png"
                  alt=""
                  fill
                />
                <div className="bg-red absolute bottom-7 left-7 business-content">
                  <div className="bg-[linear-gradient(102deg,_#5163FF_-0.32%,_#FE71B9_100%)] mb-[5px] inline-flex py-[5px] px-3.5 rounded-[4px] text-[15px] font-medium text-white">
                    2024, Business
                  </div>
                  <div className="inline-flex justify-between items-center rounded-[8px] bg-white shadow-[0px_4px_23.6px_0px_rgba(81,99,255,0.19)] pt-2 pb-2 pl-5 pr-2 lg:w-[513px]">
                    <h3 className="text-2xl font-semibold text-black">
                      Business Consulting Service
                    </h3>
                    <span className="w-[54px] h-[54px] bg-[linear-gradient(102deg,_#5163FF_-0.32%,_#FE71B9_100%)] flex items-center justify-center text-white rounded-sm ">
                      <IoArrowForward className="text-[16px] font-semibold rotate-[-45deg]" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751798431/Project_1_wtufnb.png"
                  alt=""
                  fill
                />
                <div className="bg-red absolute bottom-7 left-7 business-content">
                  <div className="bg-[linear-gradient(102deg,_#5163FF_-0.32%,_#FE71B9_100%)] mb-[5px] inline-flex py-[5px] px-3.5 rounded-[4px] text-[15px] font-medium text-white">
                    2024, Business
                  </div>
                  <div className="inline-flex justify-between items-center rounded-[8px] bg-white shadow-[0px_4px_23.6px_0px_rgba(81,99,255,0.19)] pt-2 pb-2 pl-5 pr-2 lg:w-[513px]">
                    <h3 className="text-2xl font-semibold text-black">
                      Business Consulting Service
                    </h3>
                    <span className="w-[54px] h-[54px] bg-[linear-gradient(102deg,_#5163FF_-0.32%,_#FE71B9_100%)] flex items-center justify-center text-white rounded-sm ">
                      <IoArrowForward className="text-[16px] font-semibold rotate-[-45deg]" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751798430/Project_2_hnbgfm.png"
                  alt=""
                  fill
                />
                <div className="bg-red absolute bottom-7 left-7 business-content">
                  <div className="bg-[linear-gradient(102deg,_#5163FF_-0.32%,_#FE71B9_100%)] mb-[5px] inline-flex py-[5px] px-3.5 rounded-[4px] text-[15px] font-medium text-white">
                    2024, Business
                  </div>
                  <div className="inline-flex justify-between items-center rounded-[8px] bg-white shadow-[0px_4px_23.6px_0px_rgba(81,99,255,0.19)] pt-2 pb-2 pl-5 pr-2 lg:w-[513px]">
                    <h3 className="text-2xl font-semibold text-black">
                      Business Consulting Service
                    </h3>
                    <span className="w-[54px] h-[54px] bg-[linear-gradient(102deg,_#5163FF_-0.32%,_#FE71B9_100%)] flex items-center justify-center text-white rounded-sm ">
                      <IoArrowForward className="text-[16px] font-semibold rotate-[-45deg]" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751777195/Image_8_i834hd.png"
                  alt=""
                  fill
                />
                <div className="bg-red absolute bottom-7 left-7 business-content">
                  <div className="bg-[linear-gradient(102deg,_#5163FF_-0.32%,_#FE71B9_100%)] mb-[5px] inline-flex py-[5px] px-3.5 rounded-[4px] text-[15px] font-medium text-white">
                    2024, Business
                  </div>
                  <div className="inline-flex justify-between items-center rounded-[8px] bg-white shadow-[0px_4px_23.6px_0px_rgba(81,99,255,0.19)] pt-2 pb-2 pl-5 pr-2 lg:w-[513px]">
                    <h3 className="text-2xl font-semibold text-black">
                      Business Consulting Service
                    </h3>
                    <span className="w-[54px] h-[54px] bg-[linear-gradient(102deg,_#5163FF_-0.32%,_#FE71B9_100%)] flex items-center justify-center text-white rounded-sm ">
                      <IoArrowForward className="text-[16px] font-semibold rotate-[-45deg]" />
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <h2 className="text-[200px] font-bold bg-[linear-gradient(131deg,_rgba(81,99,255,0.08)_27.01%,_rgba(254,113,185,0.02)_113.08%)] bg-clip-text text-transparent leading-[160px] absolute top-[110px] left-[461px] z-[-1]">
          Recent <br /> Works
        </h2>

        <div className="bg-left w-[145px] h-[655px] absolute bottom-0 left-0 z-[-1]">
          <Image
            src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751811798/Project_4_kmqnmg.png"
            alt="bg-left"
            fill
          />
        </div>
        <div className="bg-right w-[95px] h-[646px] absolute bottom-0 right-0 z-[-1]">
          <Image
            src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751811798/Project_3_dvc54q.png"
            alt="bg-left"
            fill
          />
        </div>
      </section>
    </>
  );
}
