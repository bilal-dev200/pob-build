"use client";

import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner/Banner";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "../../Utils/axios";
import { Image_Url } from "../../Utils/const";
import CustomSeo from "../Components/CustomSeo";
import fetchData from "../Components/fetchData";

const Blogs = () => {
const searchParams = useSearchParams();
const selectedCategoryState = searchParams.get("selectedCategory") || "";
  const [showFilter, setShowFilter] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    selectedCategoryState
  );
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogSeo, setBlogSeo] = useState([]);

  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };  

  // useEffect(() => {
  //   fetchData({
  //     url: "blog-categories/index",
  //     slug: "",
  //     type: "1",
  //     setState: setCategories,
  //     setLoading: setLoading,
  //   });
  // }, []);

   useEffect(() => {
      const fetchCat = async () => {
        
        try {
          const res = await axios.public.post("blog-categories/index");
        console.log('das',res)
          setCategories(res.data.data || []);
        } catch (error) {
          console.error("Error fetching mega menu:", error);
          setCategories([]);
        }
        //  finally {
        //   setLoading(false);
        // }
      };
  
      fetchCat();
    }, []);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.public.post(`blogs/index`, {
          blog_category_slug: selectedCategory, 
          slug: "blogs/",
        });

        if (response.data?.success) {
          setBlogPosts(response.data.data);
          setBlogSeo(response.data);
        } else {
          setBlogPosts([]);
          console.warn("API returned an error:", response.data?.message);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    // ✅ Always run fetch, even if selectedCategory is empty
    fetchBlogPosts();
  }, [selectedCategory]);

  return (
    <div className="pt-20 md:pt-32">
      <CustomSeo
        title={blogSeo?.blogSeoDetail?.meta_title}
        des={blogSeo?.blogSeoDetail?.meta_description}
        focuskey={blogSeo?.blogSeoDetail?.focus_keyword}
        canonicalUrl={blogSeo?.blogSeoDetail?.canonical_url}
        schema={blogSeo?.blogSeoDetail?.schema}
      />

      <Banner image="/aboutBanner.png" />
      <h1 className="md:text-6xl text-2xl text-black text-center  font-Amaranth px-4 pb-4 rounded-md">
        Blogs by POB Trust
      </h1>
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Filter Button (Mobile only) */}
        <div className="md:hidden mt-4">
          <button
            onClick={() => setShowFilter(true)}
            className="bg-[#F39C12] text-white px-4 py-2 rounded"
          >
            Filter
          </button>
        </div>

        {/* Overlay for Sidebar */}
        {showFilter && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={() => setShowFilter(false)}
          ></div>
        )}

        {/* Sliding Sidebar for Mobile */}
        <div
          className={`md:hidden fixed top-0 left-0 w-64 overflow-auto h-full bg-white p-4 space-y-10 shadow-lg z-50 transform transition-transform duration-300 md:static md:transform-none ${
            showFilter ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close button (Mobile only) */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setShowFilter(false)}
              className="text-gray-600 text-lg "
            >
              ✕
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border px-4 py-2 rounded focus:outline-none"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button className="absolute right-2 top-2.5 text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Categories */}  
          <div>
            <h2 className="text-xl  mb-4">Category</h2>
            <div className="space-y-2 h-52 overflow-auto">
              {Array.isArray(categories) &&
                categories.map((cat, index) => (
                  <div
                    key={index}
                    className="border px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => {setSelectedCategory(cat?.slug), setShowFilter(false)}}
                  >
                    {cat?.name}
                  </div>
                ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="hidden md:block">
            <h2 className="text-xl  mb-4">Recent Posts</h2>
            <div className="space-y-4">
              {blogPosts
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date (newest first)
                .slice(0, 5)
                .map((post, index) => (
                  <Link
                    href={`/blog/${post?.slug}`}
                    key={index}
                    className="flex items-center gap-3 border px-2 py-2 rounded hover:bg-gray-100"
                  >
                    <img
                      src={`${Image_Url}/${post.main_image}`}
                      alt="Recent"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="text-sm">
                      <p className="text-gray-700 ">{post.blog_title}</p>
                      <p className="text-gray-400 text-[10px] font-Amaranth">
                        {post.blog_date}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Left Sidebar */}
        <div className="hidden md:block md:col-span-1 space-y-10">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border px-4 py-2 rounded focus:outline-none"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button className="absolute right-2 top-2.5 text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-xl  mb-4">Category</h2>
            <div className="space-y-2 h-52 overflow-auto">
              {Array.isArray(categories) &&
                categories.map((cat, index) => (
                  <div
                    key={index}
                    className="border px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedCategory(cat?.slug)}
                  >
                    {cat?.name}
                  </div>
                ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="text-xl  mb-4">Recent Posts</h2>
            <div className="space-y-4">
              {blogPosts
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date (newest first)
                .slice(0, 5)
                .map((post, index) => (
                  <Link
                    href={`/blog/${post?.slug}`}
                    key={index}
                    className="flex items-center gap-3 border px-2 py-2 rounded hover:bg-gray-100"
                  >
                    <img
                      src={`${Image_Url}/${post.main_image}`}
                      alt="Recent"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="text-sm">
                      <p className="text-gray-700 ">{post.blog_title}</p>
                      <p className="text-gray-400 text-[10px] font-Amaranth">
                        {post.blog_date}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

{/* Blog Posts Grid */}
<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
  {loading ? (
    <p className="col-span-full flex justify-center text-center text-gray-500 py-6">
      <img 
        src="/poblogo.png"  // <-- animated logo
        alt="Loading..."
        className="w-20 h-20 animate-pulse"
      />
    </p>
  ) : blogPosts
      .filter((post) =>
        post.blog_title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date)).length === 0 ? (
    <p className="col-span-full text-center text-gray-500 py-6">
      No blog found
    </p>
  ) : (
    blogPosts
      .filter((post) =>
        post.blog_title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((post, index) => (
        <div key={index} className="bg-white rounded shadow h-fit">
          <img
            src={`${Image_Url}/${post.main_image}`}
            alt="Blog"
            className="w-full h-56 object-cover rounded-t"
          />
          <div className="p-4 space-y-2 text-center md:text-start">
            <h3 className="text-md">{post.blog_title}</h3>
            <p className="text-[10px] text-gray-400 font-Amaranth">
              {post.blog_date}
            </p>
            <Link href={`/blog/${post?.slug}`}>
              <button className="text-xs text-white bg-[#F39C12] px-4 py-2 mt-4 rounded">
                Continue Reading
              </button>
            </Link>
          </div>
        </div>
      ))
  )}
</div>


      </div>
    </div>
  );
};

export default Blogs;
