"use client";

import Image from "next/image";
import Link from "next/link";

const OrbitDisorder = ({slug}) => {
  const data = [
    {
      p: "Neuro-Ophthalmology Services",
      des: "At POB Eye Welfare, we specialize in treating vision issues caused by neurological conditions. Our team manages problems like optic neuritis, double vision, and visual field defects with expert precision. Using advanced diagnostics, we assess conditions affecting the optic nerve and brain.",
      img: "/diagnosticImg1.png",
    },
    {
      p: "Integrated, Individualized Care",
      des: "Each treatment plan is tailored, blending neurology and eye care to restore vision and improve quality of life.",
      img: "/diagnosticImg2.png",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-w-full pt-12 gap-4 items-center justify-center">
      <div>
        <Image
          src="/servicelist2.jpg"
          width={450}
          height={450}
          className="md:max-w-lg md:h-[450px] md:w-[450px] h-[280px] w-[280px] rounded-full"
          alt="Pediatric Eye Care"
        />
      </div>
      <div className="md:w-5/12 w-[90%] font-inter items-center md:items-start flex flex-col gap-2">
        <p className="uppercase text-[#F39C12] font-Amaranth text-center md:text-start text-lg">
          Pediatric Eye Care
        </p>
        <h2 className="text-4xl max-w-xl font-Amaranth text-center md:text-start">
          Gentle Eye Care For Children
        </h2>
        <p className="text-[#777777] text-center md:text-start md:max-w-xl">
          Children’s eyes need specialized care during growth and development.
          At POB Eye Hospital, we treat conditions like squint, lazy eye, and
          refractive errors with gentle methods. Early intervention prevents
          lifelong vision challenges. Parents trust our team for safe,
          effective, and child-friendly care. Discover how children’s eye care
          ensures a brighter future. Click below for more details about this
          service.
        </p>
        <Link href={`/services/${slug}`}>
          <button className="mt-4 px-4 py-2 w-32 rounded-full text-[12px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>

      {/* Orbital Disease Section */}
      {/* <OrbitalDisease data={data} /> */}
    </div>
  );
};

export default OrbitDisorder;

// const OrbitalDisease = ({ data }) => {
//   return (
//     <div className="w-full relative flex flex-col gap-20 justify-center items-start pb-16 mt-20">
//       <div className="w-full flex flex-col justify-center items-center text-center">
//         <p className="uppercase font-Amaranth text-sm">
//           Improve Your Eyesight with POB
//         </p>
//         <h2 className="font-Amaranth text-4xl">
//           Precision Care for Nerve-Related <br /> Vision Problems
//         </h2>
//       </div>
//       <div className="w-full grid grid-cols-2 grid-flow-row gap-5 mt-10">
//         {data.map((d, i) => (
//           <div
//             key={i}
//             className="bg-[#F4F4F4] w-full text-black flex gap-5 items-start p-2 md:p-5 rounded-3xl"
//           >
//             <div className="bg-white p-4 w-8 md:w-20 rounded-full hidden md:block">
//               <Image src={d.img} width={80} height={80} alt={d.p} className="w-full" />
//             </div>
//             <div className="w-full flex flex-col gap-3 py-3">
//               <h2 className="font-Amaranth text-[12px] md:text-2xl">{d.p}</h2>
//               <p className="text-[8px] md:text-sm">{d.des}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="w-full flex justify-center pt-10">
//         <button className="bg-[#28A745] text-white px-10 py-3 text-xs rounded-full">
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// };
