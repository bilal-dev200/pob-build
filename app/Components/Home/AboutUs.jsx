import React from "react";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";

const AboutUs = ({ img, yellowHead, head, pageName, btnName, des }) => {
  // Sanitize description for server-side rendering
  const sanitizedDescription = des ? sanitizeHtml(des) : "";

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-10 md:py-16 mb-6 md:mb-0 bg-white md:w-[95%]">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={img} alt="Eye Checkup" className="w-186 h-79" />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-start">
        <h5 className="text-yellow-500 uppercase font-Amaranth text-lg tracking-wide">
          {yellowHead}
        </h5>
        <h2 className="text-3xl md:text-4xl font-Amaranth mt-2">{head}</h2>

        {pageName === "home" ? (
          <div
  className="font-inter text-gray-600 prose"
  dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
/>

        ) : (
          <div className="text-gray-600 mt-4 text-sm">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </div>
        )}

        <Link href="/about-us">
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-full text-[12px] hover:bg-green-600 transition duration-300">
            {btnName}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
