// // app/blogs/media-and-publications/page.jsx
// "use client"
// import React from "react";
// import Banner from "../Components/Banner/Banner";
// import CustomSeo from "../Components/CustomSeo";
// import { Image_Url } from "../../Utils/const";
// import axios from "../../Utils/axios";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";

// // Optional: revalidate every request (fresh data)
// export const revalidate = 0;

// const MediaPublicationsPage = async (props) => {
//   const searchParams = useSearchParams();
//    const selectedCategoryState = searchParams.get("category") || "";
//    const [showFilter, setShowFilter] = useState(false);
//    const [categories, setCategories] = useState([]);
//    const [selectedCategory, setSelectedCategory] = useState(selectedCategoryState);
//    const [blogPosts, setBlogPosts] = useState([]);
//    const [blogSeo, setBlogSeo] = useState([]);
//    const [loading, setLoading] = useState(false);
//    const [searchTerm, setSearchTerm] = useState("");
 
//    const handleInputChange = (e) => setSearchTerm(e.target.value);
 
//    // Fetch Categories
//   // Fetch Categories
//  useEffect(() => {
//    const getCategories = async () => {
//      setLoading(true);
//      try {
//        const res = await axios.public.post("blog-categories/index", {
//          slug: "",   // send empty string if needed
//          type: "2",  // send type as required by API
//        });
//        console.log("Categories API:", res.data);
//        setCategories(res.data?.data || []);
//      } catch (err) {
//        console.error("Error fetching categories:", err);
//        setCategories([]);
//      } finally {
//        setLoading(false);
//      }
//    };
 
//    getCategories();
//  }, []);
 
 
//    // Fetch Blogs
//    useEffect(() => {
//      const getBlogs = async () => {
//        setLoading(true);
//        try {
//          const res = await axios.public.post("blogs/index", {
//            blog_category_slug: selectedCategory,
//            slug: "blogs/",
//          });
//          if (res.data?.success) {
//            setBlogPosts(res.data.data || []);
//            setBlogSeo(res.data);
//          } else {
//            setBlogPosts([]);
//            console.warn("API returned error:", res.data?.message);
//          }
//        } catch (err) {
//          console.error("Error fetching blogs:", err);
//          setBlogPosts([]);
//        } finally {
//          setLoading(false);
//        }
//      };
 
//      getBlogs();
//    }, [selectedCategory]);

//   return (
//     <div className="pt-20 md:pt-32">
//       {/* SEO */}
//       <CustomSeo
//         title={blogSeo?.blogSeoDetail?.meta_title || "Media & Publications"}
//         des={blogSeo?.blogSeoDetail?.meta_description || ""}
//         focuskey={blogSeo?.blogSeoDetail?.focus_keyword || ""}
//         canonicalUrl={blogSeo?.blogSeoDetail?.canonical_url || ""}
//         schema={blogSeo?.blogSeoDetail?.schema || ""}
//       />

//       {/* Banner */}
//       <Banner image="/aboutBanner.png" />

//       <h1 className="md:text-6xl text-2xl text-black text-center font-Amaranth px-4 pb-4 rounded-md">
//         Media & Publications
//       </h1>

//       {/* Blog Posts Grid */}
//       <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center">
//         <div className="md:col-span-3 flex items-center justify-center min-h-screen">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 text-center justify-center">
//             {blogPosts?.length === 0 ? (
//               <p className="col-span-full flex justify-center text-gray-500 py-6">
//                 No blog posts found.
//               </p>
//             ) : (
//               blogPosts
//                 .sort((a, b) => new Date(b.blog_date) - new Date(a.blog_date))
//                 .map((post, index) => (
//                   <div key={index} className="bg-white rounded shadow h-fit">
//                     <img
//                       src={`${Image_Url}${post.main_image}`}
//                       alt={post.blog_title}
//                       className="w-full h-56 object-cover rounded-t"
//                     />
//                     <div className="p-4 space-y-2 text-center md:text-start">
//                       <h3 className="text-md font-semibold">{post.blog_title}</h3>
//                       <p className="text-[10px] text-gray-400 font-Amaranth">
//                         {new Date(post.blog_date).toLocaleDateString()}
//                       </p>
//                       <Link
//                         href={`/blogs/media-and-publications/${post?.slug}`}
//                         className="text-xs text-white bg-[#F39C12] px-4 py-2 mt-4 rounded inline-block"
//                       >
//                         Continue Reading
//                       </Link>
//                     </div>
//                   </div>
//                 ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaPublicationsPage;
