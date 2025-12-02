// app/blogs/media-and-publications/page.jsx
"use client"
import { useState, useEffect } from "react";
import Banner from "../Components/Banner/Banner";
import CustomSeo from "../Components/CustomSeo";
import { Image_Url } from "../../Utils/const";
import axios from "../../Utils/axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import fetchData from "../Components/fetchData"

// Optional: revalidate every request (fresh data)


const Mediapublications = () => {
  const searchParams = useSearchParams();
  const selectedCategoryState = searchParams.get("selectedCategory") || "";
  const [showFilter, setShowFilter] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(selectedCategoryState);
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogSeo, setBlogSeo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // ✅ Fetch categories (type 2)
  useEffect(() => {
    fetchData({
      url: "blog-categories/index",
      slug: "",
      type: "2", // ✅ For media & publications
      setState: setCategories,
      setLoading: setLoading,
    });
  }, []);

  // ✅ Fetch blog posts
  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.public.post(`blogs/index`, {
          blog_category_slug: selectedCategory,
          slug: "blogs/",
          // ✅ Important difference
        });

        if (response.data?.success) {
          setBlogPosts(response.data.data);
          setBlogSeo(response.data);
        } else {
          setBlogPosts([]);
          console.warn("API returned an error:", response.data?.message);
        }
      } catch (error) {
        console.error("Error fetching media publications:", error);
        setBlogPosts([]);
      } finally {
        setLoading(false);
      }
    };

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
      <h1 className="md:text-6xl text-2xl text-black text-center font-Amaranth px-4 pb-4 rounded-md">
        Media & Publications
      </h1>

      <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center">
        <div className="md:col-span-3 flex items-center justify-center min-h-screen ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 text-center justify-center">
            {loading ? (
              <p className="col-span-full flex justify-center text-center text-gray-500 py-6">
                <img
                  src="/poblogo.png"
                  alt="Loading..."
                  className="w-20 h-20 animate-pulse"
                />
              </p>
            ) : blogPosts
                .filter((post) =>
                  post.blog_title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .sort((a, b) => new Date(b.blog_date) - new Date(a.blog_date))
                .map((post, index) => (
                  <div key={index} className="bg-white rounded shadow h-fit">
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
                      <Link href={`/media-publications/${post?.slug}`}>
                        <button className="text-xs text-white bg-[#F39C12] px-4 py-2 mt-4 rounded">
                          Continue Reading
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mediapublications;
