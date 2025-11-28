"use client"; // ❗ Client-side component

import React, { useState } from "react";
import DOMPurify from "isomorphic-dompurify"; 
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faqs = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = faqs?.[0]; // assuming response is an array with one object
  if (!faqData || !faqData.pages_faq_details || faqData.pages_faq_details.length === 0) {
    return null;
  }

  return (
    <div className="flex justify-center flex-col md:flex-row items-center py-12 md:py-0 md:pt-10 md:items-start gap-4 bg-transparent w-full">
      <div className="flex justify-center flex-col md:flex-row items-center md:items-start md:w-[80%]">
        {/* Left Headings */}
        <div className="flex flex-col pt-4 md:w-[40%] w-[100%] text-center md:text-start">
          <h3 className="text-[#F39C12] uppercase text-lg font-Amaranth">
            {faqData?.top_heading}
          </h3>
          <h2 className="capitalize text-3xl md:text-4xl font-Amaranth w-96 text-black">
            {faqData?.main_heading}
          </h2>
        </div>

        {/* FAQ List */}
        <div className="w-[90%] md:w-[60%]">
          {faqData?.pages_faq_details?.map((faq, index) => (
           <div key={faq.id || index} className="w-full mb-2">

              <div className="transition duration-300">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <p className="md:text-xl font-poppins text-lg text-black py-4">
                    {faq.question}
                  </p>
                  <span className="md:text-2xl text-xl px-4 text-black">
                    {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="py-2 text-black rounded-b-xl">
                    <p
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(faq.answer) }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
