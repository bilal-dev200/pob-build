// app/academics/page.jsx

import Banner from "../Components/Banner/Banner";
// import FutureSpecialists from "@/Components/Academics/FutureSpecialists/FutureSpecialists";
// import ClinicalMeetings from "@/Components/Academics/ClinicalMeetings/ClinicalMeetings";
import Faqs from "../Components/Home/Faqs";
import CustomSeo from "../Components/CustomSeo";
import { Image_Url } from "../../Utils/const";
import fetchData from "../Components/fetchData";
import FutureSpecialists from "../Components/Academics/FutureSpecialists";
import ClinicalMeetings from "../Components/Academics/ClinicalMeetings";

// Server-side fetch (Next.js built-in)
export default async function AcademicsPage() {
  // Fetch data server-side
  const academics = await fetchData({
    url: "academics-page/show-data",
    slug: "academics/",
  });

  return (
    <div className="pt-32">
      {/* ✅ SEO Component */}
      <CustomSeo
        title={academics?.pagesSeoDetail?.meta_title}
        des={academics?.pagesSeoDetail?.meta_description}
        focuskey={academics?.pagesSeoDetail?.focus_keyword}
        canonicalUrl={academics?.pagesSeoDetail?.canonical_url}
        schema={academics?.pagesSeoDetail?.schema}
      />

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
