// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const newsData = [
//   {
//     date: "February 4, 2025",
//     title:
//       "Putting Hope in Every Swing: 8th Annual Golf Tournament Tees Off to Raise Funds for Sight Restoration of Thousands",
//     image: "/img1.png",
//   },
//   {
//     date: "October 14, 2024",
//     title:
//       "Annual Musical Fundraiser with Madam Abida Parveen Inspires Support for Eye Care Initiatives",
//     image: "/opd.png",
//   },
//   {
//     date: "January 15, 2024",
//     title:
//       "Acknowledging Our Impact: Recognition at the 39th MAP Corporate Excellence Awards",
//     image: "/img3.jpg",
//   },
//   {
//     date: "February 2, 2024",
//     title:
//       "Generous Donation by Trustee Mrs. Spenta Kandawalla Empowers Eye Care Outreach",
//     image: "/img4.jpg",
//   },
//   {
//     date: "February 2, 2024",
//     title: "The 7th Engro Golf Tournament: Saving Sight with Every Swing",
//     image: "/img4.jpg",
//   },
// ];

// const NewsEvents = () => {
//   return (
//     <section className="py-10 md:py-16">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-2xl md:text-4xl font-Amaranth text-black text-center mb-8">
//           NEWS & EVENTS
//         </h2>

//         <div className="flex flex-col lg:flex-row gap-18">
//           {/* Left Main News */}
//           <div className="lg:w-1/2 w-full text-center md:text-start">
//             <div className="relative w-[600px] h-[400px] mx-auto md:mx-0 mb-4">
//               <Image
//                 src="/reception.png"
//                 alt="Main news"
//                 fill
//                 className="object-cover rounded-lg"
//               />
//             </div>
//             <p className="text-sm text-gray-600 font-Amaranth mb-1">
//               February 2, 2025
//             </p>
//             <h3 className="text-xl font-inter text-black">
//               Putting Hope in Every Swing: 8th Annual Golf Tournament Tees Off to
//               Raise Funds for Sight Restoration of Thousands
//             </h3>
//           </div>

//           {/* Right Side List */}
//           <div className="lg:w-1/2 w-full space-y-4">
//             {newsData.map((news, index) => (
//               <div key={index} className="flex gap-3 items-start">
//                 <div className="relative w-[70px] h-[80px] md:w-[100px]">
//                   <Image
//                     src={news.image}
//                     alt={news.title}
//                     fill
//                     className="object-cover rounded"
//                   />
//                 </div>
//                 <div>
//                   <p className="text-xs text-gray-600 font-Amaranth">
//                     {news.date}
//                   </p>
//                   <h4 className="text-md font-inter text-black">{news.title}</h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Button */}
//         <div className="text-center mt-8">
//           <Link href="/about-us/">
//             <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-full text-[12px] hover:bg-green-600 transition duration-300">
//               VIEW ALL NEWS
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsEvents;

import React from "react";
import Link from "next/link";

const newsData = [
  {
    date: "February 4, 2025",
    title:
      "Putting Hope in Every Swing: 8th Annual Golf Tournament Tees Off to Raise Funds for Sight Restoration of Thousands",
    image: "/img1.png", // Replace with actual image
  },
  {
    date: "October 14, 2024",
    title:
      "Annual Musical Fundraiser with Madam Abida Parveen Inspires Support for Eye Care Initiatives",
    image: "/opd.png",
  },
  {
    date: "January 15, 2024",
    title:
      "Acknowledging Our Impact: Recognition at the 39th MAP Corporate Excellence Awards",
    image: "/img3.jpg",
  },
  {
    date: "February 2, 2024",
    title:
      "Generous Donation by Trustee Mrs. Spenta Kandawalla Empowers Eye Care Outreach",
    image: "/img4.jpg",
  },
  {
    date: "February 2, 2024",
    title: "The 7th Engro Golf Tournament: Saving Sight with Every Swing",
    image: "/img4.jpg",
  },
];

const NewsEvents = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className=" text-2xl  md:text-4xl font-Amaranth text-black text-center mb-8">
          NEWS & EVENTS
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Main News */}
          <div className="lg:w-1/2 w-full text-center md:text-start">
            <img
              src="/reception.png" // Replace with main image
              alt="Main news"
              className="rounded-lg mb-4 w-[600px]"
            />
            <p className="text-sm text-gray-600 font-Amaranth mb-1">
              February 2, 2025
            </p>
            <h3 className="text-xl font-inter text-black">
              Putting Hope in Every Swing: 8th Annual Golf Tournament Tees Off
              to Raise Funds for Sight Restoration of Thousands
            </h3>
          </div>

          {/* Right Side List */}
          <div className="lg:w-1/2 w-full space-y-4">
            {newsData.map((news, index) => (
              <div key={index} className="flex gap-3 items-start">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-[70px] md:w[100px] h-[80px] object-cover rounded"
                />
                <div>
                  <p className="text-xs text-gray-600 font-Amaranth">
                    {news.date}
                  </p>
                  <h4 className="text-md font-inter text-black">{news.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <Link href="/about-us/">
            <button className="mt-6 px-6 py-3 cursor-pointer bg-green-500 text-white rounded-full text-[12px] hover:bg-green-600 transition duration-300">
              VIEW ALL NEWS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

