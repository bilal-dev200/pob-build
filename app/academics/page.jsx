// app/academics/page.jsx
import Banner from "../Components/Banner/Banner";
import Faqs from "../Components/Home/Faqs";
import { Image_Url } from "../../Utils/const";
import fetchData from "../Components/fetchData";
import FutureSpecialists from "../Components/Academics/FutureSpecialists";
import ClinicalMeetings from "../Components/Academics/ClinicalMeetings";

// -------------------------------------------
// Server-side fetch function
// -------------------------------------------
const getAcademicsData = async () => {
  return await fetchData({
    url: "academics-page/show-data",
    slug: "academics/",
  });
};

// -------------------------------------------
// App Router metadata function
// -------------------------------------------
export async function generateMetadata() {
  const academics = await getAcademicsData();

  return {
    title: academics?.pagesSeoDetail?.meta_title || "Academics - POB Trust",
    description: academics?.pagesSeoDetail?.meta_description || "POB Trust Academic Programs",
    keywords: academics?.pagesSeoDetail?.focus_keyword || undefined,
    alternates: {
      canonical: academics?.pagesSeoDetail?.canonical_url || undefined,
    },
    openGraph: {
      title: academics?.pagesSeoDetail?.meta_title,
      description: academics?.pagesSeoDetail?.meta_description,
    },
    twitter: {
      card: "summary_large_image",
      title: academics?.pagesSeoDetail?.meta_title,
      description: academics?.pagesSeoDetail?.meta_description,
    },
    other: academics?.pagesSeoDetail?.schema
      ? [
          {
            tagName: "script",
            type: "application/ld+json",
            innerHTML: academics.pagesSeoDetail.schema,
          },
        ]
      : [],
  };
}

// -------------------------------------------
// AcademicsPage component (default export)
// -------------------------------------------
export default async function AcademicsPage() {
  const academics = await getAcademicsData();

  return (
    <div className="pt-32">
      {/* 🔹 Banner Section */}
      <Banner
        title={academics?.section_1?.banner_heading}
        image={`${Image_Url}/${academics?.section_1?.banner_image}`}
      />

      {/* 🔹 Sections */}
      <FutureSpecialists section_4={academics?.section_4} />
      <ClinicalMeetings section_7={academics?.section_7} />

      <Faqs faqs={academics?.academicsPageFaq} />
    </div>
  );
}
