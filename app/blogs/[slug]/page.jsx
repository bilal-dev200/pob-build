
"use client";

import { Image_Url } from "../../../Utils/const";
import fetchData from "../../Components/fetchData";
import CustomSeo from "../../Components/CustomSeo";
import {BlogBanner} from "../../Components/BlogBanner";


import React, { useState, useEffect } from "react";
import axios from "../../../Utils/axios";
import DOMPurify from "isomorphic-dompurify";
import { usePathname, useRouter } from "next/navigation";

export default function BlogDetailPage() {
  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const blogId = pathname.split("/").filter(Boolean).pop();

  useEffect(() => {
    if (!blogId) return;
    const fetchBlogDetails = async () => {
      setLoading(true);
      try {
        const res = await axios.public.post("/blogs/detail", { blog_slug: `${blogId}/` });
        setBlog(res.data.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
      setLoading(false);
    };
    fetchBlogDetails();
  }, [blogId]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.public.post("/blog-categories/index");
        setCategories(res.data.data);
      } catch (error) {
        console.error("Category Fetch Error:", error);
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="pt-20 md:pt-32">
      {/* SEO */}
      <CustomSeo
        title={blog?.meta_title}
        des={blog?.meta_description}
        focuskey={blog?.focus_keyword}
        canonicalUrl={blog?.canonical_url}
        schema={blog?.schema}
      />

      {/* Banner */}
      <BlogBanner
        title={blog?.blog_title}
        image={`${Image_Url}${blog?.main_image}`}
        status={true}
      />

      <div className="px-5 md:px-10 py-6 md:py-8 flex flex-col md:flex-row gap-6">
        {/* Categories */}
        <div className="hidden lg:flex lg:w-[20%] flex-col gap-5">
          <h2 className="text-lg mb-4 font-montserrat text-black">Categories</h2>
          <div className="grid gap-3 rounded-[10px] p-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => router.push(`/blogs?category=${cat.slug}`)}
                className="cursor-pointer border-b pb-2 text-[15px] font-montserrat text-left"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Content */}
        <div className="md:w-[65%]">
          <h1 className="text-4xl font-newsLetter mb-6">{blog?.blog_title}</h1>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog?.blog_body || "") }}
          />
        </div>

        <div className="md:w-[15%] text-center">
          <h2 className="text-xl mb-4 font-montserrat">Feature Blogs</h2>
          <img src="/b3.png" className="w-full" alt="featured" />
        </div>
      </div>
    </div>
  );
}
