// app/kaffara/page.jsx
import Banner from "../Components/Banner/Banner";
import ArabicVerse from "../Components/Donation/ArabicVerse";
import KaffaraSection from "../Components/Kaffara/KaffaraSection";
import KaffaraTypes from "../Components/Kaffara/KaffaraTypes";
import KaffaraObligation from "../Components/Kaffara/KaffaraObligation";
import ContactSection from "../Components/ContactSection";
import DonationSection from "../Components/Kaffara/DonationSection";
import WhyVolunteer from "../Components/Volunteer/WhyVolunteer";
import Faqs from "../Components/Home/Faqs";
import CustomSeo from "../Components/CustomSeo";
import { Image_Url } from "../../Utils/const";
import fetchData from "../Components/fetchData";

// ===== Server-side fetch for SEO + initial data =====
const getKaffaraPageData = async () => {
  const kaffaraRes = await fetchData({ url: "kaffara-page/show-data", slug: "kaffara/" });
  return { kaffaraData: kaffaraRes?.data || null };
};

// ===== SEO metadata =====
export async function generateMetadata() {
  const { kaffaraData } = await getKaffaraPageData();

  return {
    title: kaffaraData?.pagesSeoDetail?.meta_title || "Kaffara Page",
    description: kaffaraData?.pagesSeoDetail?.meta_description || "Learn about Kaffara with POB Trust",
    keywords: kaffaraData?.pagesSeoDetail?.focus_keyword || undefined,
    alternates: { canonical: kaffaraData?.pagesSeoDetail?.canonical_url },
    openGraph: {
      title: kaffaraData?.pagesSeoDetail?.meta_title,
      description: kaffaraData?.pagesSeoDetail?.meta_description,
    },
    twitter: {
      card: "summary_large_image",
      title: kaffaraData?.pagesSeoDetail?.meta_title,
      description: kaffaraData?.pagesSeoDetail?.meta_description,
    },
    other: kaffaraData?.pagesSeoDetail?.schema
      ? [
          {
            tagName: "script",
            type: "application/ld+json",
            innerHTML: kaffaraData.pagesSeoDetail.schema,
          },
        ]
      : [],
  };
}

export default async function KaffaraPage() {
  const kaffara = await fetchData({ url: "kaffara-page/show-data", slug: "kaffara/" });

  const arabicVerseTranslation =
    "Allah will not call you to account for your unintentional oaths, but He will call you to account for deliberate oaths. So the expiation for it is feeding ten needy people with the average of what you feed your own families, or clothing them, or freeing a slave. But whoever cannot afford that, then (he must) fast for three days. That is the expiation for your oaths when you have sworn. But guard your oaths. Thus Allah makes clear to you His verses so that you may be grateful.";

  return (
    <div className="pt-20 md:pt-32">
      {/* SEO */}
      <CustomSeo
        title={kaffara?.pagesSeoDetail?.meta_title}
        des={kaffara?.pagesSeoDetail?.meta_description}
        focuskey={kaffara?.pagesSeoDetail?.focus_keyword}
        canonicalUrl={kaffara?.pagesSeoDetail?.canonical_url}
        schema={kaffara?.pagesSeoDetail?.schema}
      />

      <Banner
        title={kaffara?.section_1?.banner_heading}
        image={`${Image_Url}/${kaffara?.section_1?.banner_image}`}
      />

      <ArabicVerse
        img01="/kaffaraVerse.png"
        img02="/kaffaraVerse.png"
        text={arabicVerseTranslation}
      />

      <KaffaraSection section_2={kaffara?.section_2} />
      <KaffaraTypes section_3={kaffara?.section_3} />
      <KaffaraObligation section_4={kaffara?.section_4} />

      <ContactSection
        heading={kaffara?.section_5?.give_kaffara_title}
        para={kaffara?.section_5?.give_kaffara_description}
        button="Contact us"
      />

      <DonationSection section_6={kaffara?.section_6} />

      <WhyVolunteer
        heading={kaffara?.section_7?.duty_heading}
        para={kaffara?.section_7?.duty_description}
      />

      <Faqs faqs={kaffara?.ContactPageFaqs} />
    </div>
  );
}
