import { Image_Url } from "../../Utils/const";
import Banner from "../Components/Banner/Banner";
import Link from "next/link";
import CustomSeo from "../Components/CustomSeo";

// BASE_URL for API
const BASE_URL =
  process.env.NEXT_PUBLIC_API_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_LIVE
    : process.env.NEXT_PUBLIC_API_URL_LOCAL;

// -------------------------------------------
// Fetch categories from API
// -------------------------------------------
const getCategories = async () => {
  try {
    const res = await fetch(`${BASE_URL}blog-categories/index`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: "", type: "1" }),
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data?.data || [];
  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
};

// -------------------------------------------
// Fetch blogs from API
// -------------------------------------------
const getBlogs = async (categorySlug = "") => {
  try {
    const res = await fetch(`${BASE_URL}blogs/index`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ blog_category_slug: categorySlug, slug: "blogs/" }),
      cache: "no-store",
    });
    if (!res.ok) return { posts: [], seo: {} };
    const data = await res.json();
    return {
      posts: data.data || [],
      seo: data || {},
    };
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return { posts: [], seo: {} };
  }
};

// -------------------------------------------
// Metadata (SEO)
// -------------------------------------------
export async function generateMetadata() {
  const { seo } = await getBlogs();
  return {
    title: seo?.blogSeoDetail?.meta_title || "Blogs",
    description: seo?.blogSeoDetail?.meta_description || "POB Trust Blogs",
    alternates: {
      canonical:
        process.env.NEXT_PUBLIC_URL + "/blogs",
    },
    openGraph: {
      title: seo?.blogSeoDetail?.meta_title || "Blogs",
      description: seo?.blogSeoDetail?.meta_description || "POB Trust Blogs",
      url: process.env.NEXT_PUBLIC_URL + "/blogs",
    },
  };
}

// -------------------------------------------
// Blogs Page (Server Component)
// -------------------------------------------
export default async function BlogsPage() {
  // Fetch all categories & blogs on server
  const categories = await getCategories();
  const { posts: blogPosts, seo: blogSeo } = await getBlogs();

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
        {/* Sidebar */}
        <div className="hidden md:block md:col-span-1 space-y-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border px-4 py-2 rounded focus:outline-none"
              id="blogSearchInput"
            />
          </div>

          <div>
            <h2 className="text-xl mb-4">Category</h2>
            <div className="space-y-2 h-52 overflow-auto">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="border px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
                  data-slug={cat?.slug}
                >
                  {cat?.name}
                </div>
              ))}
            </div>
          </div>

          {/* Recent posts */}
          <div className="space-y-4">
            {blogPosts
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 5)
              .map((post, idx) => (
                <Link
                  href={`/blog/${post?.slug}`}
                  key={idx}
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
              ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogPosts.length === 0 ? (
            <p className="col-span-full text-center py-6 text-gray-500">
              No blog found
            </p>
          ) : (
            blogPosts
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
                    <Link href={`/blogs/${post.slug}`}>
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
}
