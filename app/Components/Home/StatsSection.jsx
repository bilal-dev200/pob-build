"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { value: 161858, label: "Diagnostics" },
    { value: 31495, label: "Laser Treatment" },
    { value: 140, label: "Corneal Transplant" },
    { value: 74077, label: "Other Procedures" },
    { value: 1766323, label: "OPD" },
    { value: 159257, label: "Cataract Surgeries" },
    { value: 9652, label: "Vitreo-Retinal Surgeries" },
  ];

  return (
    <section
      ref={ref}
      className="w-full px6 md:px-20 md:py-10 flex flex-col justify-center items-center"
    >
      {/* Top Border */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      {/*Mobile Stats Grid */}
      <div className=" md:hidden grid grid-cols-2 md:grid-cols-4 gap-7 text-center py-6">
        {stats.slice(0, 2).map((stat, index) => (
          <div
            key={index}
            className={`flex md:flex-row items-center justify-center text-start gap-2 px-4 ${
              index < 3 ? "md:border-r border-gray-300" : ""
            }`}
          >
            <span className="font-antonio text-2xl md:text-5xl">
              {inView && (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                />
              )}
            </span>
            <span className="text-gray-500 text-sm md:text-2xl font-normal mt-1 font-poppins">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
<div className="block md:hidden w-full h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
       <div className=" md:hidden grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-6">
        {stats.slice(2, 4).map((stat, index) => (
          <div
            key={index}
            className={`flex md:flex-row items-center justify-center text-start gap-2 px-4 ${
              index < 3 ? "md:border-r border-gray-300" : ""
            }`}
          >
            <span className="font-antonio text-2xl md:text-5xl">
              {inView && (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                />
              )}
            </span>
            <span className="text-gray-500 text-sm md:text-2xl font-normal mt-1 font-poppins">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-6">
        {stats.slice(0, 4).map((stat, index) => (
          <div
            key={index}
            className={`flex md:flex-row items-center justify-center text-start gap-2 px-4 ${
              index < 3 ? "md:border-r border-gray-300" : ""
            }`}
          >
            <span className="font-antonio text-2xl md:text-5xl">
              {inView && (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                />
              )}
            </span>
            <span className="text-gray-500 text-sm md:text-2xl font-normal mt-1 font-poppins">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Middle Border */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

      {/* Second Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center py-6">
        {stats.slice(4).map((stat, index) => (
<div
  key={index}
  className={`flex flex-row items-center md:justify-center text-start gap-2 md:gap-4 px-4 ${
    index < 2 ? "md:border-r border-gray-300" : ""
  } ${index === 2 ? "hidden md:flex" : ""}`}
>
  <span className="font-antonio text-2xl md:text-5xl ">
    {inView && (
      <CountUp
        start={0}
        end={stat.value}
        duration={2.5}
        separator=","
      />
    )}
  </span>
  <span className="text-gray-500 text-sm md:text-2xl font-normal mt-1 font-poppins">
    {stat.label}
  </span>
</div>


        ))}
      </div>

      {/* Bottom Border */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
};

export default StatsSection;
