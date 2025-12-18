import Banner from "../Components/Banner/Banner";
import CustomSeo from "../Components/CustomSeo";
import fetchData from "../Components/fetchData";
import { Image_Url } from "../../Utils/const";
import Link from "next/link";

// -----------------------------
// Server-side data fetching
// -----------------------------
const getBlogsPageData = async (selectedCategory = "", searchTerm = "") => {
  const [categoriesRes, blogsRes] = await Promise.all([
    fetchData({
      url: "blog-categories/index",
      slug: "",
      type: "1",
    }),
    fetchData({
      url: "blogs/index",
      slug: "blogs/",
      body: selectedCategory ? { blog_category_slug: selectedCategory } : {},
    }),
  ]);

  let blogs = blogsRes?.data || [];

  // Apply search filter only if searchTerm exists
  if (searchTerm) {
    blogs = blogs.filter((b) =>
      b.blog_title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return {
    categories: categoriesRes?.data || [],
    blogs,
    blogSeo: blogsRes || null,
  };
};


// -----------------------------
// SSR SEO
// -----------------------------
export async function generateMetadata({ searchParams }) {
  const selectedCategory = searchParams?.selectedCategory || "";
  const searchTerm = searchParams?.search || "";
  const { blogSeo } = await getBlogsPageData(selectedCategory, searchTerm);

  return {
    title:
      blogSeo?.blogSeoDetail?.meta_title || "Blogs | POB Trust",
    description:
      blogSeo?.blogSeoDetail?.meta_description ||
      "Read latest blogs by POB Trust",
    keywords: blogSeo?.blogSeoDetail?.focus_keyword || undefined,
    alternates: {
      canonical:
        // blogSeo?.blogSeoDetail?.canonical_url ||
        process.env.NEXT_PUBLIC_URL + "/blog/",
    },
    openGraph: {
      title: blogSeo?.blogSeoDetail?.meta_title,
      description: blogSeo?.blogSeoDetail?.meta_description,
    },
    twitter: {
      card: "summary_large_image",
      title: blogSeo?.blogSeoDetail?.meta_title,
      description: blogSeo?.blogSeoDetail?.meta_description,
    },
    other: blogSeo?.blogSeoDetail?.schema
      ? [
          {
            tagName: "script",
            type: "application/ld+json",
            innerHTML: blogSeo.blogSeoDetail.schema,
          },
        ]
      : [],
  };
}

// -----------------------------
// Page Component (SSR)
// -----------------------------
export default async function BlogsPage({ searchParams }) {
  const selectedCategory = searchParams?.selectedCategory || "";
  const searchTerm = searchParams?.search || "";

  const { categories, blogs, blogSeo } =
    await getBlogsPageData(selectedCategory, searchTerm);

  const filteredBlogs = blogs.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="pt-20 md:pt-32">
      {/* SEO */}
      <CustomSeo
        title={blogSeo?.blogSeoDetail?.meta_title}
        des={blogSeo?.blogSeoDetail?.meta_description}
        focuskey={blogSeo?.blogSeoDetail?.focus_keyword}
        canonicalUrl={blogSeo?.blogSeoDetail?.canonical_url}
        schema={blogSeo?.blogSeoDetail?.schema}
      />

      <Banner image="/aboutBanner.png" />

      <h1 className="md:text-6xl text-2xl text-black text-center font-Amaranth px-4 pb-4">
        Blogs by POB Trust
      </h1>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Sidebar */}
        <div className="md:col-span-1 space-y-10">
          <form method="get">
            <input
              type="text"
              name="search"
              placeholder="Search"
              defaultValue={searchTerm}
              className="w-full border px-4 py-2 rounded mb-6"
            />
          </form>

          <div>
            <h2 className="text-xl mb-4">Category</h2>
            <div className="space-y-2 h-52 overflow-auto">
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  href={`/blogs?selectedCategory=${cat.slug}`}
                  className={`block border px-3 py-2 rounded hover:bg-gray-100 ${
                    cat.slug === selectedCategory ? "bg-gray-200" : ""
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-4">Recent Posts</h2>
            <div className="space-y-4">
              {filteredBlogs.slice(0, 5).map((post, i) => (
                <Link
                  key={i}
                  href={`/blog/${post.slug}`}
                  className="flex gap-3 border px-2 py-2 rounded hover:bg-gray-100"
                >
                  <img
                    src={`${Image_Url}/${post.main_image}`}
                    alt={post.blog_title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm">{post.blog_title}</p>
                    <p className="text-[10px] text-gray-400">
                      {post.blog_date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredBlogs.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No blog found
            </p>
          ) : (
            filteredBlogs.map((post, i) => (
              <div key={i} className="bg-white rounded shadow">
                <img
                  src={`${Image_Url}/${post.main_image}`}
                  alt={post.blog_title}
                  className="w-full h-56 object-cover rounded-t"
                />
                <div className="p-4 text-center md:text-start">
                  <h3 className="text-md">{post.blog_title}</h3>
                  <p className="text-[10px] text-gray-400">{post.blog_date}</p>
                  <Link href={`/blog/${post.slug}`}>
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
