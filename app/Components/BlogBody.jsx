"use client";

import React from "react";
import DOMPurify from "isomorphic-dompurify"; 
import parse from "html-react-parser";
import Image from "next/image";

// Helper function to create sanitized HTML
const createMarkup = (html) => ({
  __html: DOMPurify.sanitize(html),
});

const BlogBody = ({ body }) => {
  const options = {
    replace: (domNode) => {
      // Handle headings
      const headingMap = {
        h1: "text-[40px] my-4 leading-10",
        h2: "text-[24px] my-3 font-inter leading-10",
        h3: "text-[20px] my-3 font-Amaranth",
        h4: "text-[18px] my-3 font-poppins",
        h5: "text-[16px] my-2 font-poppins",
      };

      if (domNode.name && headingMap[domNode.name]) {
        const Tag = domNode.name;
        return (
          <Tag className={headingMap[domNode.name]}>
            {domNode.children?.map((child) =>
              child.data || child.children ? child.data || child.children[0]?.data : null
            )}
          </Tag>
        );
      }

      // Handle span
      if (domNode.name === "span") {
        return (
          <span className="text-[12px] font-inter">
            {domNode.children?.map((child) =>
              child.data || child.children ? child.data || child.children[0]?.data : null
            )}
          </span>
        );
      }

      // Handle images
      if (domNode.name === "img") {
        return (
          <div className="my-4 w-full relative h-[300px] md:h-[400px]">
            <Image
              src={domNode.attribs.src}
              alt={domNode.attribs.alt || "Image"}
              fill
              style={{ objectFit: "contain" }}
              className="rounded"
            />
          </div>
        );
      }

      // Handle unordered lists
      if (domNode.name === "ul") {
        return (
          <ul className="list-disc list-inside my-4 pl-4">
            {domNode.children?.map((child) => options.replace(child))}
          </ul>
        );
      }

      // Handle list items
      if (domNode.name === "li") {
        return (
          <li className="my-1 text-sm leading-relaxed font-poppins">
            {domNode.children?.map((child) =>
              child.data || child.children ? child.data || child.children[0]?.data : null
            )}
          </li>
        );
      }
    },
  };

  return (
    <div className="mb-8 font-inter">
      {parse(DOMPurify.sanitize(body || ""), options)}
    </div>
  );
};

export default BlogBody;
