"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "../../../Utils/axios";
import { Image_Url } from "../../../Utils/const";

const BlogsSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fallback blogs if API fails
  const fallbackBlogs = [
    {
      img: "/b1.png",
      title: "Why do we use it?",
      description:
        "It is a long established fact that a reader will be distracted by...",
    },
    {
      img: "/b2.png",
      title: "Why do we use it?",
      description:
        "It is a long established fact that a reader will be distracted by...",
    },
    {
      img: "/b3.png",
      title: "Why do we use it?",
      description:
        "It is a long established fact that a reader will be distracted by...",
    },
  ];

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.public.post(`blogs/index`, {
          blog_category_slug: "",
          slug: "blogs/",
        });

        if (response.data?.success) {
          setBlogPosts(response.data.data);
        } else {
          console.warn("API returned an error:", response.data?.message);
          setBlogPosts([]);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const blogsToRender = blogPosts.length ? blogPosts.slice(0, 3) : fallbackBlogs;

  return (
    <div className="pt-12">
      <div className="flex flex-col gap-8 items-center">
        <div className="text-center">
          <p className="uppercase text-[#F39C12] text-lg font-Amaranth">Own Blogs</p>
          <h1 className="text-2xl md:text-4xl font-Amaranth text-black">
            Our Latest News and Articles
          </h1>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          {blogsToRender.map((blog, index) => (
            <Link
              key={index}
              href={`/blog/${blog.slug || index}`}
              className="relative rounded-[10px] w-full mx-4 md:w-80 md:h-96 overflow-hidden cursor-pointer group"
            >
              {/* Blog Image */}
              <Image
                src={blog.main_image ? `${Image_Url}${blog.main_image}` : blog.img}
                alt={blog.title || blog.blog_title}
                width={320}
                height={384}
                className="object-cover w-full h-96 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text overlay */}
              <div className="absolute inset-0 px-2 md:px-0 font-inter text-center md:text-start flex flex-col justify-end md:pl-5 pb-5 text-white">
                <h2 className="text-lg font-semibold">
                  {(blog.blog_title || blog.title)
                    .split(" ")
                    .slice(0, 7)
                    .join(" ")}{" "}
                  ..
                </h2>
                <p className="text-[12px] mt-1">
                  {(blog.blog_body || blog.description)
                    .replace(/<[^>]+>/g, "")
                    .split(" ")
                    .slice(0, 15)
                    .join(" ")}
                  ...
                </p>
                <span className="mt-2 text-[10px] w-full md:w-fit  font-semibold">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
