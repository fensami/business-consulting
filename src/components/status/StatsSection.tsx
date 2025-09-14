import React from "react";

const stats = [
  { value: "99%", label: "Business Strategy" },
  { value: "80%", label: "Targeted Acquisition" },
  { value: "62k+", label: "Complete Projects" },
  { value: "15k+", label: "Happy Customers" },
  { value: "100+", label: "Consultant Advisors" },
];

const StatsSection = () => {
  return (
    <section className="container mx-auto pb-[100px] px-5">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="status-items">
            <div className="w-[200px] h-[2px] bg-[#00234B] opacity-25 rounded-full mb-4 top-bar-status"></div>

            <p className="text-4xl text-[80px] font-normal text-[#00234B] mb-5">
              {stat.value}
            </p>

            <p className="text-base font-normal text-[#838A95]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
