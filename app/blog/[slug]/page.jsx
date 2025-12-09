"use client";

import React, { useState, useEffect } from "react";
import axios from "../../../Utils/axios";
import { Image_Url } from "../../../Utils/const";
import  {BlogBanner}  from "../../Components/BlogBanner";
import CustomSeo from "../../Components/CustomSeo";
import DOMPurify from "isomorphic-dompurify";
import { useRouter, usePathname } from "next/navigation";
import JoditEditor from "jodit-react"; 
import { RxCross2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function BlogDetailPage() {
  const router = useRouter();
 const pathname = usePathname(); // Get current URL path
  const slug = pathname.split("/blog/")[1];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.public.post("blog-categories/index");
        setCategories(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

  // Fetch Blog Details
  useEffect(() => {
    const fetchBlogDetails = async () => {
      setLoading(true);

      try {
        const response = await axios.public.post("blogs/detail", {
          blog_slug: slug,
        });
console.log('blog', response)
        setBlog(response.data.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }

      setLoading(false);
    };

    fetchBlogDetails();
  }, [slug]);

  // Navigate to category page  
   const handleCategoryClick = (slug) => {
    router.push("/blog", { state: { selectedCategory: slug } });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const editorConfig = {
    readonly: true,
    toolbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    showPoweredBy: false,
  };

  const fproperties = [
    { slug: "property-1", link: "/property/1" },
    { slug: "property-2", link: "/property/2" },
    { slug: "property-3", link: "/property/3" },
  ];

  return (
    <div className="pt-20 md:pt-32">
      <CustomSeo
        title={blog?.meta_title}
        des={blog?.meta_description}
        focuskey={blog?.focus_keyword}
        canonicalUrl={blog?.canonical_url}
        schema={blog?.schema}
      />
      {/* <Banner image="/aboutBanner.png" /> */}
      <BlogBanner
        title={blog?.blog_title}
        image={`${Image_Url}${blog?.main_image}`}
        status={true}
      />
      <div className="px-5 md:px-10 py-6 md:py-8">
        <div className="flex md:flex-row flex-col mt-4">
          {/* Sidebar */}
          <div
            className={`fixed lg:static lg:flex top-0 left-0 w-2/3 lg:w-[20%] flex-col gap-[20px] h-auto overflow-yscroll bg-white pr-4 lg:rounded-lg z-10 transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
          >
            {/* Mobile Close */}
            <div className="lg:hidden flex justify-end">
              <button onClick={toggleSidebar} className="text-xl p-2">
                <RxCross2 />
              </button>
            </div>

            {/* Categories */}
            <div>
              <h2 className="text-lg font-normal md:text-[20px] font-montserrat text-black mb-4">
                Categories
              </h2>
              <div
                className={`grid gap-3 rounded-[10px] p-3 ${
                  categories.length > 5 ? "max-h-[300px] overflow-y-auto" : ""
                }`}
              >
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="relative cursor-pointer pb-2 md:pb-8 border-b border-[#D9D9D9]"
                    onClick={() => handleCategoryClick(category.slug)}
                  >
                    <span className="font-montserrat absolute inset-0 text-[15px] text-black flex items-center">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="md:w-[65%] md:p-8">
            <h1 className="text-4xl font-newsLetter  text-center md:text-start mb-6">
              {blog?.blog_title}
            </h1>
            <div className="w-full md:w-[90%]  text-center md:text-start jodit-editor">
              {/* <BlogBody body={blog?.blog_body?.replace(/(\r\n|\n|\r)/g, '')} /> */}
              <JoditEditor
                value={blog?.blog_body}
                config={editorConfig}
                style={{ border: "none" }}
              />
            </div>
          </div>

          {/* Featured Properties */}
          <div className="flex flex-col items-center md:w-[15%]">
            <h2 className="text-xl  font-normal md:text-[20px] font-montserrat text-black mb-4">
              Feature Blogs
            </h2>

            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={10}
              className="w-full"
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
            >
              {fproperties.map((property, index) => (
                <SwiperSlide key={property.slug || index}>
                  <div >
                    <img
                      src="/b3.png"
                      alt="Property"
                      className="w-full h-auto"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
