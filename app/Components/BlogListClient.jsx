"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Image_Url } from "../../Utils/const";

const BlogListClient = ({ blogPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogPosts.filter((blog) =>
    blog.blog_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 p-2 border rounded w-full max-w-md"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 text-center justify-center w-full">
        {filteredBlogs.length === 0 ? (
          <p className="col-span-full flex justify-center text-gray-500 py-6">
            No blog posts found.
          </p>
        ) : (
          filteredBlogs
            .sort((a, b) => new Date(b.blog_date) - new Date(a.blog_date))
            .map((post, index) => (
              <div key={index} className="bg-white rounded shadow h-fit">
                <img
                  src={`${Image_Url}${post.main_image}`}
                  alt={post.blog_title}
                  className="w-full h-56 object-cover rounded-t"
                />
                <div className="p-4 space-y-2 text-center md:text-start">
                  <h3 className="text-md font-semibold">{post.blog_title}</h3>
                  <p className="text-[10px] text-gray-400 font-Amaranth">
                    {new Date(post.blog_date).toLocaleDateString()}
                  </p>
                  <Link
                    href={`/blogs/media-and-publications/${post?.slug}`}
                    className="text-xs text-white bg-[#F39C12] px-4 py-2 mt-4 rounded inline-block"
                  >
                    Continue Reading
                  </Link>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default BlogListClient;
