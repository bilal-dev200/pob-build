"use client";
import React, { useEffect } from "react";

const CustomSeo = ({ title, des, focuskey, canonicalUrl, schema }) => {
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  return (
    <>
      {/* Schema markup */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      )}
    </>
  );
};

export default CustomSeo;
