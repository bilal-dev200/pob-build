import { Image_Url } from "../../Utils/const";

// Components
import Purpose from "../Components/Purpose";
import Faqs from "../Components/Home/Faqs";
import CustomSeo from "../Components/CustomSeo";
import EyeExams from "../Components/Service/EyeExam";
import RetinaExcellence from "../Components/Service/RetinaExcellence";
import DonationSection from "../Components/Service/DonationSection";
import OrbitDisorder from "../Components/Service/OrbitDisorder";
import Banner from "../Components/Service/Banner";

// const API_BASE = process.env.NEXT_PUBLIC_API_URL; 
const BASE_URL =
  process.env.NEXT_PUBLIC_API_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_LIVE
    : process.env.NEXT_PUBLIC_API_URL_LOCAL;

// example: https://pob.datainovate.com/backend/api/

// -------------------------------------------
// Server fetch
// -------------------------------------------
const getServiceData = async (slug) => {
  try {
    const res = await fetch(`${BASE_URL}services-pages/detail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_page_slug: `${slug}/`,
      }),
      cache: "no-store", // or revalidate below
      // next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const json = await res.json();
    return json?.data || null;
  } catch (err) {
    console.error("Service fetch error:", err);
    return null;
  }
};

// -------------------------------------------
// Metadata
// -------------------------------------------
export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ REQUIRED
  const service = await getServiceData(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.meta_title,
    description: service.meta_description,
    alternates: {
      canonical:
        process.env.NEXT_PUBLIC_URL + "/services" + service?.canonical_url
    },
    openGraph: {
      title: service.meta_title,
      description: service.meta_description,
      url: service.canonical_url,
    },
  };
}

// -------------------------------------------
// Page
// -------------------------------------------
export default async function ServicePage({ params }) {
  const { slug } = await params; // ✅ REQUIRED
  const service = await getServiceData(slug);

  if (!service) {
    return (
      <div className="pt-32 text-center">
        Service not found
      </div>
    );
  }

  const modifiedFaqs = service?.faqs?.map((faq) => ({
    ...faq,
    pages_faq_details: faq.details || [],
  }));

  return (
    <div className="pt-32">
      <CustomSeo
        title={service.meta_title}
        des={service.meta_description}
        focuskey={service.focus_keyword}
        canonicalUrl={service.canonical_url}
        schema={service.schema}
      />

      <Banner
        title={service.banner_heading}
        image={`${Image_Url}/${service.banner_image}`}
      />

      <EyeExams
        section_2_main_heading={service.section_2_main_heading}
        section_2_sub_heading={service.section_2_sub_heading}
        section_2_description={service.section_2_description}
        section_2_image={`${Image_Url}/${service.section_2_image}`}
      />

      <Purpose
        yellowHead={service.section_4_main_heading}
        head={service.section_4_sub_heading}
        des={service.section_4_description}
        btnName="Donate Now"
        img={`${Image_Url}/${service.section_4_image}`}
      />

      <RetinaExcellence
        section_5_main_heading={service.section_5_main_heading}
        section_5_sub_heading={service.section_5_sub_heading}
        section_5_description={service.section_5_description}
        section_5_image={`${Image_Url}/${service.section_5_image}`}
      />

      <DonationSection
        yellowHead={service.section_6_main_heading}
        head={service.section_6_sub_heading}
        des={service.section_6_description}
        img={`${Image_Url}/${service.section_6_image}`}
      />

      <OrbitDisorder
        section_7_main_heading={service.section_7_main_heading}
        section_7_sub_heading={service.section_7_sub_heading}
        section_7_description={service.section_7_description}
        section_7_image={`${Image_Url}/${service.section_7_image}`}
        section_8_main_heading={service.section_8_main_heading}
        section_8_sub_heading={service.section_8_sub_heading}
        section_8_cards={service.section_8_cards}
      />

      <Faqs faqs={modifiedFaqs} />
    </div>
  );
}
