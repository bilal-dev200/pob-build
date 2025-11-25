"use client";

import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import Link from "next/link";

const ContactSection = ({ heading, para, button }) => {
  return (
    <div className="bg-[#F39C12] py-8 md:py-12 text-white">
      <div>
        <div className="flex md:justify-around px-8 flex-col md:flex-row gap-4 items-center justify-center text-center md:text-start">
          <h3 className="w-72 md:w-96 text-4xl md:text-5xl font-Amaranth">
            {heading}
          </h3>
          <div className="flex px-2 justify-end flex-col md:items-end md:text-right">
            <div
              className="w-72 md:w-[22rem] text-sm font-poppins"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(para) }}
            ></div>

            <Link href="/contact-us/">
              <span className="mt-6 px-6 py-3 text-[12px] bg-white text-black rounded-full transition duration-300 inline-block cursor-pointer">
                {button}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
