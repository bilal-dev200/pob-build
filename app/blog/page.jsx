import Blogs from "../blog/BlogClient";

const API_BASE = process.env.NEXT_PUBLIC_API_URL_LIVE;

// -------------------------------------------
// Server-side POST fetch (EXACT same as axios)
// -------------------------------------------
const getAcademicsData = async () => {
  const res = await fetch(`https://pob.datainovate.com/backend/api/blogs/index`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      blog_category_slug: "", // ✅ same as selectedCategory empty
      slug: "blogs/",         // ✅ EXACT match
    }),
  });

  if (!res.ok) {
    console.error("Failed to fetch academics blogs");
    return null;
  }

  return res.json(); // response.data
};

// -------------------------------------------
// Metadata (SEO FIXED)
// -------------------------------------------
export async function generateMetadata() {
  const academics = await getAcademicsData();
  const seo = academics?.blogSeoDetail; // ✅ CORRECT LEVEL

  return {
    title: seo?.meta_title || "Academics - POB Trust",
    description:
      seo?.meta_description ||
      "POB Trust Academic Programs",

    keywords: seo?.focus_keyword || undefined,

    alternates: {
      canonical:
        process.env.NEXT_PUBLIC_URL +  seo?.canonical_url ||
        process.env.NEXT_PUBLIC_URL + "/blogs",
    },

    openGraph: {
      title: seo?.meta_title,
      description: seo?.meta_description,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seo?.meta_title,
      description: seo?.meta_description,
    },
  };
}

// -------------------------------------------
// Page Component
// -------------------------------------------
export default async function Page() {
  return <Blogs />;
}
