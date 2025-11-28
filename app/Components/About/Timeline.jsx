import React from "react";

const Timeline = () => {
  return (
    <div className="hidden md:flex flex-col items-center py-12">
      <p className="text-[#F39C12] text-lg font-Amaranth uppercase">Journey in Phases</p>
      <h2 className="text-3xl md:text-4xl  text-black mt-2 mb-8 font-Amaranth">
        A Legacy of Transforming Lives
      </h2>

      <div className="relative w-full max-w-6xl font-inter">
        {/* Phases */}
        <div className="flex justify-center items-center relative h-96">
          {/* Phase 1 */}
          <div className="relative w-44">
            <div className="absolute -top-16 left-1 border-l-2 border-dashed border-gray-300 pl-4 pb-4">
              <p className="text-green-600 text-start font-Amaranth">Phase 1</p>
              <p className="text-gray-500 text-sm text-start">
                Outreach Program
              </p>
            </div>
            <img
              src="./Polygon1.png"
              alt=""
              className="w-3 absolute left-0 z-10"
            />
            <div className="bg-green-600 text-white py-2 px-8 mt-2">2007</div>
          </div>

          {/* Phase 2 */}
          <div className="relative w-44">
            <div className="absolute -bottom-16 left-1 border-l-2 border-dashed border-gray-300 pl-4 pt-4">
              <p className="text-green-600 font-Amaranth">Phase 2</p>
              <p className="text-gray-500 text-sm">Hospital Started</p>
            </div>
            <div className="bg-gray-200 text-black py-2 px-8 mt-2 border-r border-black">
              2015
            </div>
            <img
              src="./Polygon2.png"
              alt=""
              className="w-3 absolute left-0 z-10"
            />
          </div>

          {/* Phase 3 */}
          <div className="relative w-44">
            <div className="absolute -top-16 left-1 border-l-2 border-dashed border-gray-300 pl-4 pb-4">
              <p className="text-green-600 font-Amaranth">Phase 3</p>
              <p className="text-gray-500 text-sm">
                POB Main Campus
                <br />
                Gulistan-e-Johar
              </p>
            </div>
            <img
              src="./Polygon1.png"
              alt=""
              className="w-3 absolute left-0 z-10"
            />
            <div className="bg-gray-200 text-black py-2 px-8 mt-2 border-r border-black">
              2017
            </div>
          </div>

          {/* Phase 4 */}
          <div className="relative w-44">
            <div className="absolute -bottom-20 left-1 border-l-2 border-dashed border-gray-300 pl-4 pt-4">
              <p className="text-green-600 font-Amaranth">Phase 4</p>
              <p className="text-gray-500 text-sm">
                POB AdamJee
                <br />
                Unit Dhoraji
              </p>
            </div>
            <div className="bg-gray-200 text-black py-2 px-8 mt-2 border-r border-black">
              2020
            </div>
            <img
              src="./Polygon2.png"
              alt=""
              className="w-3 absolute left-0 z-10"
            />
          </div>

          {/* Phase 5 (second location) */}
          <div className="relative w-44">
            <div className="absolute -top-16 left-1 border-l-2 border-dashed border-gray-300 pl-4 pb-4">
              <p className="text-green-600 font-Amaranth">Phase 5</p>
              <p className="text-gray-500 text-sm">
                POB Sakina Noor
                <br />
                Unit Hussainabad
              </p>
            </div>
            <img
              src="./Polygon1.png"
              alt=""
              className="w-3 absolute left-0 z-10"
            />
            <div className="bg-gray-200 text-black py-2 px-8 mt-2">2021</div>
          </div>

          {/* Phase 6 */}
          <div className="relative w-44">
            <div className="absolute -bottom-20 left-1 border-l-2 border-dashed border-gray-300 pl-4 pt-4">
              <p className="text-green-600 font-Amaranth">Phase 6</p>
              <p className="text-gray-500 text-sm">
                POB Muhammad Rafiq
                <br />
                Unit Surjani Town
              </p>
            </div>
            <div className="bg-green-600 text-white py-2 px-8 mt-2">2023</div>
            <img
              src="./Polygon2.png"
              alt=""
              className="w-3 absolute left-0 z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
