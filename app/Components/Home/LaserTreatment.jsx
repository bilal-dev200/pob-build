"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

let DOMPurify;

if (typeof window !== "undefined") {
  DOMPurify = require("dompurify")(window);
}

const LaserTreatment = ({
  title,
  subtitle,
  description,
  description2,
  buttonText,
  image,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ye ensure karega ki client pe hi render ho
  }, []);

  return (
    <section className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 px-6 md:px-20 py-12">
      {/* Text Content Section */}
      <div className="md:w-1/2 text-center md:text-start">
        <p className="text-yellow-500  uppercase font-Amaranth text-lg tracking-wide">
          {title}
        </p>
        <h2 className="text-3xl md:text-4xl font-Amaranth leading-tight mt-2">
          {subtitle}
        </h2>
        {/* <p className="text-gray-600 mt-4">
          {description}
        </p> */}
        <div
          className="text-gray-600 mt-4 font-inter"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        ></div>
        {description2 && (
          <div
            className="text-gray-600 mt-4 font-inter"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description2),
            }}
          ></div>
        )}
        <Link href="/contact-us/">
          <button className="mt-2 px-4 py-2 bg-green-500 text-white text-[12px] rounded-full  hover:bg-green-600 transition">
            {buttonText}
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 relative">
        <div className=" overflow-hidden roundedfull flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="object-cover rounded-b-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LaserTreatment;
