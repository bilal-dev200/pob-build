import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import { Image_Url } from "../../../Utils/const";

const KaffaraObligation = ({ section_4 }) => {
  if (!section_4) return null;

  const {
    who_must_pay_title,
    who_must_pay_description,
    who_must_pay_image
  } = section_4;

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-14 px-6 lg:px-0 my-16">
      {/* Circular Image */}
      <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
        <img
          src={`${Image_Url}/${who_must_pay_image}`}
          alt="Helping Hands"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="max-w-lg text-center lg:text-left">
        <h2 className="text-3xl font-Amaranth mb-4">{who_must_pay_title}</h2>
        <div
          className="mt-2 text-[15px] max-w-2xl  font-inter   text-[#777777]"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(who_must_pay_description) }}
        ></div>
        {/* <p className="text-gray-600 mb-4 text-sm">
          Kaffara is obligatory upon individuals who have committed certain
          religious violations, such as breaking a fast, oath, or vow. It
          serves as a means of spiritual purification and social
          responsibility, ensuring that those in need benefit from one's
          repentance.
        </p>
        <p className="text-gray-600 mb-4 text-sm">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many websites still in their infancy.
        </p>
        <h3 className="text-lg font-Amaranth mb-2">
          Conditions for Kaffara Obligation:
        </h3>
        <ul className="text-gray-600 list-disc pl-6 space-y-1 text-sm">
          <li>The act must be committed knowingly and intentionally.</li>
          <li>The individual must have the means to fulfill Kaffara.</li>
          <li>
            If financially incapable, fasting may be an alternative in some
            cases.
          </li>
        </ul> */}
      </div>
    </section>
  );
};

export default KaffaraObligation;
