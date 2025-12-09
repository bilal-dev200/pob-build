import Banner from "../Components/Banner/Banner";
import fetchData from "../Components/fetchData";
import CustomSeo from "../Components/CustomSeo";
import Faqs from "../Components/Home/Faqs";
import ContactSection from "../Components/ContactSection";
import { Image_Url } from "../../Utils/const";
import ArabicVerse from "../Components/Donation/ArabicVerse";
import Vision2 from "../Components/Waqf/Vision2";
import WaqfSection from "../Components/Waqf/WaqfSection";
import ImpactSection from "../Components/Waqf/ImpactSection";
import WaqfBenefits from "../Components/Waqf/WaqfBenefits";
import DonationSection from "../Components/Waqf/DonationSection";

export const dynamic = "force-dynamic"; // ensures fresh fetch every time

// Server-side fetch for SEO + initial data
const getWaqfPageData = async () => {
  const waqfRes = await fetchData({ url: "waqf-page/show-data", slug: "waqf/" });
  return { waqfData: waqfRes?.data || null };
};

// SEO metadata
export async function generateMetadata() {
  const { waqfData } = await getWaqfPageData();

  return {
    title: waqfData?.pagesSeoDetail?.meta_title || "Waqf Page",
    description: waqfData?.pagesSeoDetail?.meta_description || "Learn about Waqf with POB Trust",
    keywords: waqfData?.pagesSeoDetail?.focus_keyword || undefined,
    alternates: { canonical: waqfData?.pagesSeoDetail?.canonical_url },
    openGraph: {
      title: waqfData?.pagesSeoDetail?.meta_title,
      description: waqfData?.pagesSeoDetail?.meta_description,
    },
    twitter: {
      card: "summary_large_image",
      title: waqfData?.pagesSeoDetail?.meta_title,
      description: waqfData?.pagesSeoDetail?.meta_description,
    },
    other: waqfData?.pagesSeoDetail?.schema
      ? [
          {
            tagName: "script",
            type: "application/ld+json",
            innerHTML: waqfData.pagesSeoDetail.schema,
          },
        ]
      : [],
  };
}

export default async function WaqfPage() {
  const arabicVerseTranslation =
    "Whatever Allah has bestowed upon His Messenger from the people of the towns—[it is] for Allah ... indeed, Allah is severe in penalty.";

  const waqf = await fetchData({ url: "waqf-page/show-data", slug: "waqf/" });

  return (
    <div className="pt-20 md:pt-32">
      {/* SEO */}
      <CustomSeo
        title={waqf?.pagesSeoDetail?.meta_title}
        des={waqf?.pagesSeoDetail?.meta_description}
        focuskey={waqf?.pagesSeoDetail?.focus_keyword}
        canonicalUrl={waqf?.pagesSeoDetail?.canonical_url}
        schema={waqf?.pagesSeoDetail?.schema}
      />

      <Banner
        title={waqf?.section_1?.banner_heading}
        image={`${Image_Url}/${waqf?.section_1?.banner_image}`}
      />

      <ArabicVerse
        img01="/waqfVerse.png"
        img02="/waqfVerse2.png"
        text={arabicVerseTranslation}
      />

      <Vision2 section_2={waqf?.section_2} />
      <WaqfSection section_3={waqf?.section_3} />

      <div className="px-6 md:px-20">
        <ImpactSection section_4={waqf?.section_4} />
      </div>

      <ContactSection
        heading={waqf?.section_5?.section_5_heading}
        para={waqf?.section_5?.section_5_description}
        button="Contact Us"
      />

      <WaqfBenefits section_6={waqf?.section_6} />

      <DonationSection section_7={waqf?.section_7} />

      <Faqs faqs={waqf?.zakatPageFaqs} />
    </div>
  );
}
