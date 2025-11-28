"use client";

import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner/Banner";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "../../Utils/axios";
import { Image_Url } from "../../Utils/const";
import CustomSeo from "../Components/CustomSeo";

const Blogs = () => {
  const searchParams = useSearchParams();
  const selectedCategoryState = searchParams.get("category") || "";
  const [showFilter, setShowFilter] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(selectedCategoryState);
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogSeo, setBlogSeo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => setSearchTerm(e.target.value);

  // Fetch Categories
 // Fetch Categories
useEffect(() => {
  const getCategories = async () => {
    setLoading(true);
    try {
      const res = await axios.public.post("blog-categories/index", {
        slug: "",   // send empty string if needed
        type: "1",  // send type as required by API
      });
      console.log("Categories API:", res.data);
      setCategories(res.data?.data || []);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  getCategories();
}, []);


  // Fetch Blogs
  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      try {
        const res = await axios.public.post("blogs/index", {
          blog_category_slug: selectedCategory,
          slug: "blogs/",
        });
        if (res.data?.success) {
          setBlogPosts(res.data.data || []);
          setBlogSeo(res.data);
        } else {
          setBlogPosts([]);
          console.warn("API returned error:", res.data?.message);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
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
      <h1 className="md:text-6xl text-2xl text-black text-center font-Amaranth px-4 pb-4 rounded-md">
        Blogs by POB Trust
      </h1>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Mobile Filter Button */}
        <div className="md:hidden mt-4">
          <button
            onClick={() => setShowFilter(true)}
            className="bg-[#F39C12] text-white px-4 py-2 rounded"
          >
            Filter
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`md:hidden fixed top-0 left-0 w-64 h-full bg-white p-4 space-y-10 shadow-lg z-50 transform transition-transform duration-300 ${
            showFilter ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setShowFilter(false)}
              className="text-gray-600 text-lg"
            >
              ✕
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border px-4 py-2 rounded focus:outline-none"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-xl mb-4">Category</h2>
            <div className="space-y-2 h-52 overflow-auto">
              {categories.length === 0 && <p>No categories found</p>}
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="border px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedCategory(cat?.slug);
                    setShowFilter(false);
                  }}
                >
                  {cat?.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden md:block md:col-span-1 space-y-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border px-4 py-2 rounded focus:outline-none"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <h2 className="text-xl mb-4">Category</h2>
            <div className="space-y-2 h-52 overflow-auto">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="border px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedCategory(cat?.slug)}
                >
                  {cat?.name}
                </div>
              ))}
            </div>
          </div>

          <div><div className="space-y-4">
  {blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5)
    .map((post, idx) => {
      // ✅ Yahan console log karo
      console.log("Post slug:", post?.slug);
      console.log("Post main_image:", post?.main_image);

      return (
        <Link
          href={`/blog/${post?.slug}`}
          key={idx}
          onClick={() => console.log("Clicked slug:", post?.slug)}
          className="flex items-center gap-3 border px-2 py-2 rounded hover:bg-gray-100"
        >
          <img
            src={`${Image_Url}/${post.main_image}`}
            alt={post.blog_title}
            className="w-12 h-12 object-cover rounded"
          />
          <div className="text-sm">
            <p className="text-gray-700">{post.blog_title}</p>
            <p className="text-gray-400 text-[10px] font-Amaranth">
              {post.blog_date}
            </p>
          </div>
        </Link>
      );
    })}
</div>

          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {loading ? (
            <p className="col-span-full flex justify-center py-6">
              <img
                src="/logo.png"
                alt="Loading..."
                className="w-20 h-20 animate-pulse"
              />
            </p>
          ) : blogPosts.filter((p) =>
              p.blog_title.toLowerCase().includes(searchTerm.toLowerCase())
            ).length === 0 ? (
            <p className="col-span-full text-center py-6 text-gray-500">
              No blog found
            </p>
          ) : (
            blogPosts
              .filter((p) =>
                p.blog_title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((post, idx) => (
                <div key={idx} className="bg-white rounded shadow h-fit">
                  <img
                    src={`${Image_Url}/${post.main_image}`}
                    alt={post.blog_title}
                    className="w-full h-56 object-cover rounded-t"
                  />
                  <div className="p-4 space-y-2 text-center md:text-start">
                    <h3 className="text-md">{post.blog_title}</h3>
                    <p className="text-[10px] text-gray-400 font-Amaranth">
                      {post.blog_date}
                    </p>
                    <Link  href={`/blogs/${post.slug}`} >
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
