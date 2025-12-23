import { Suspense } from "react";
import Blogs from "../blog/BlogClient";

const API_BASE = process.env.NEXT_PUBLIC_API_URL_LIVE;

// -------------------------------------------
// Server-side POST fetch (EXACT same as axios)
// -------------------------------------------
const getAcademicsData = async () => {
  try {
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

    return await res.json(); // response.data
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
};

// -------------------------------------------
// Metadata (SEO FIXED)
// -------------------------------------------
export async function generateMetadata() {
  const academics = await getAcademicsData();
  const seo = academics?.blogSeoDetail; // ✅ CORRECT LEVEL

  const baseUrl = process.env.NEXT_PUBLIC_URL || "https://pobtrust.com";
  const canonicalPath = seo?.canonical_url || "/blogs";

  return {
    title: seo?.meta_title || "Academics - POB Trust",
    description:
      seo?.meta_description ||
      "POB Trust Academic Programs",

    keywords: seo?.focus_keyword || undefined,

    alternates: {
      canonical: baseUrl + canonicalPath,
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
  return (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
      <Blogs />
    </Suspense>
  );
}
