"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { TbArrowBigUpLines } from "react-icons/tb";

const consultingCards = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dsc0hliud/image/upload/v1751771837/Growth_Img_ksmiaf.png",
    tag: "Service-4",
    title: "One-to-one Consulting",
    description:
      "Where we specialize in transforming your visions into unforgettable experiences. With a passion for perfection and an eye for detail our dedicated team of event.",
    link: "/services/one-to-one-consulting",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dsc0hliud/image/upload/v1751771838/Growth_Img_1_dk9tqv.png",
    tag: "Service-5",
    title: "Business Strategy",
    description:
      "Developing robust strategies to help your business navigate challenges and seize opportunities for growth and innovation.",
    link: "/services/business-strategy",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dsc0hliud/image/upload/v1751771837/Growth_Img_2_zgx4jz.png",
    tag: "Service-6",
    title: "Financial Planning",
    description:
      "Expert guidance in managing your finances, ensuring long-term stability and maximizing your investment returns.",
    link: "/services/financial-planning",
  },
];

const ConsultingCardSlider = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden pt-[100px] pb-[120px] service-section z-[1]">
      <div className="container mx-auto h-[600px]  relative z-10 flex flex-col justify-center items-center">
        <div
          className="
                    inline-flex items-center space-x-2 px-4 py-2 mb-6
                    text-sm font-semibold text-white rounded-[48px]
          bg-[linear-gradient(90deg,_#708BFD_0%,_#FE71B9_100%)]
          shadow-[0px_-2px_4px_0px_rgba(255,255,255,0)_inset,0px_-4px_18.5px_0px_rgba(255,255,255,0.79)_inset]"
        >
          <TbArrowBigUpLines className="text-sm rotate-45" />
          <span>Know about us</span>
        </div>
        {/* Main Heading */}
        <h2 className=" text-gray-900 mb-[70px] text-5xl font-semibold  ">
          Our Core Services
        </h2>

        <Swiper
          direction="vertical"
          effect={"cards"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="my-card-swiper"
        >
          {consultingCards.map((card) => (
            <SwiperSlide key={card.id}>
              {({ isActive }) => (
                <div
                  className={`
                    relative w-full h-full p-[50px] 
                    flex items-center
                    transition-all duration-300 ease-in-out
                    gap-[62px]

rounded-[10px]  border-[1px] border-white bg-white shadow-[0px_-23px_25.3px_0px_#F6F7FF_inset,0px_33px_101.1px_0px_#EEEFFF_inset]

                    ${isActive ? "opacity-100 z-20" : "opacity-90 z-10"}
                  `}
                >
                  {/* Image */}
                  <div className="relative min-w-[414px] h-full border-[5px] border-white rounded-lg ">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>

                  <div>
                    {/* Tag */}
                    <span
                      className="
                    inline-block px-3 py-1 mb-3
                    text-xs font-medium rounded-full
                    text-purple-700 bg-[#EEEFFF]
                  "
                    >
                      {card.tag}
                    </span>

                    {/* Title */}
                    <h3 className="text-5xl font-semibold text-[#00234B] mb-[18px]">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#838A95] text-[18px] font-normal flex-grow mb-6 max-w-[600px]">
                      {card.description}
                    </p>

                    {/* Read Details Button */}
                    <Link href={card.link} passHref>
                      <button
                        className="
                      mt-auto inline-flex justify-center items-center
                      px-6 py-2 text-sm font-medium text-gray-700
                      hover:bg-gray-100 hover:border-gray-400
                      transition-colors duration-200
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500

                      rounded-[10px]  border-[2px] border-[rgba(0,35,75,0.10)] bg-[radial-gradient(83.54%_74.04%_at_37.13%_12%,_rgba(255,255,255,0.43)_0%,_rgba(255,255,255,0.00)_69.79%,_rgba(255,255,255,0.00)_100%)]
                    "
                      >
                        Read Details
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center ">
        <button className="button-custom v2 mt-[60px] ">
          View all services
        </button>
      </div>
      {/* left bg */}
      <div className="absolute left-0 top-0 z-[-1]">
        <Image
          src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751770987/Bg_Element_1_kqh0kw.png"
          alt="bg left"
          width={319}
          height={589}
        />
      </div>
      {/* right bg */}
      <div className="absolute right-0 bottom-0 z-[-1]">
        <Image
          src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751770988/Bg_Color_Shado_2_dex21i.png"
          alt="bg left"
          width={553}
          height={436}
        />
      </div>
      {/* center bg */}
      <div className="absolute right-0 top-0 z-[-1]">
        <Image
          src="https://res.cloudinary.com/dsc0hliud/image/upload/v1751770988/Bg_Color_Shado_3_qr3jer.png"
          alt="bg left"
          width={681}
          height={692}
        />
      </div>
    </section>
  );
};

export default ConsultingCardSlider;
