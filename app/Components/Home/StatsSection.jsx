"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { value: 157772, label: "Diagnostics" },
    { value: 3613, label: "Laser Treatment" },
    { value: 134, label: "Corneal Transplant" },
    { value: 73505, label: "Other Procedures" },
    { value: 1739628, label: "OPD" },
    { value: 156145, label: "Cataract Surgeries" },
    { value: 9502, label: "Vitreo-Retinal Surgeries" },
  ];

  return (
    <section
      ref={ref}
      className="w-full px-4 sm:px-6 md:px-20 py-10 flex flex-col items-center"
    >
      {/* Top Border */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

      {/* Stats Grid */}
      <div className="w-full flex flex-wrap justify-center gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 min-w-[120px] md:min-w-[180px]"
          >
            <span className="font-antonio text-2xl sm:text-3xl md:text-5xl">
              {inView && (
                <CountUp start={0} end={stat.value} duration={2.5} separator="," />
              )}
            </span>
            <span className="text-gray-500 text-sm sm:text-base md:text-2xl font-normal mt-1 font-poppins">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Border */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-6"></div>
    </section>
  );
};

export default StatsSection;
