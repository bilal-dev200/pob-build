"use client";

import React, { useEffect, useState } from "react";

const donationData = [
  {
    title: "PHOTOCOAGULATION TREATMENT FOR DIABETIC RETINOPATHY",
    price: "PKR 91,500",
    image: "/RETINA.jpg",
  },
  {
    title: "CATARACT SURGERIES – CHILDREN",
    price: "PKR 65,800",
    image: "/CORNEAL.png",
  },
  {
    title: "GLAUCOMA SURGERIES (INCLUDING LASER TREATMENT)",
    price: "PKR 56,300",
    image: "/CORNEALADULTS.jpg",
  },
  {
    title: "CORNEAL GRAFTING – ADULTS (EXCLUDING COST OF CORNEA)",
    price: "PKR 150,000",
    image: "/GLAUCOMA.jpg",
  },
  {
    title: "RETINA DETACHMENT CHILDREN",
    price: "PKR 20,500",
    image: "/CATARACT.jpg",
  },
  {
    title: "CORNEAL GRAFTING – CHILDREN (EXCLUDING COST OF CORNEA)",
    price: "PKR 150,000",
    image: "/PHOTOCOAGULATION.jpg",
  },
];

const ZakatDonations = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleDonations = isMobile ? donationData.slice(0, 3) : donationData;

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h5 className="text-yellow-500 font-Amaranth uppercase text-lg tracking-wide">
          HELP US
        </h5>
        <h2 className="text-3xl md:text-4xl font-Amaranth mt-2 mb-6">
          HELP THEM WITH YOUR ZAKAT/DONATIONS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleDonations.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between items-center h-auto md:h-44">
                <div className="flex flex-col justify-between h-32">
                  <h3 className="text-sm md:text-base text-black mb-2 font-inter">
                    {item.title}
                  </h3>
                  <p className="text-[#F39C12] text-lg mb-4 font-inter">
                    {item.price}
                  </p>
                </div>
                <button
                  onClick={handleDonateClick}
                  className="bg-[#F39C12] w-fit text-white px-4 py-2 rounded-full text-md transition cursor-pointer"
                >
                  DONATE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZakatDonations;
