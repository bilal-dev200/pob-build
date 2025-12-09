import React from "react";
import Image from "next/image";
import fetchData from "../Components/fetchData";
import { Image_Url } from "./../../Utils/const";
import Banner from "../Components/Banner/Banner";
import ArabicVerse from "../Components/Donation/ArabicVerse";
import ContactSection from "../Components/ContactSection";
import Faqs from "../Components/Home/Faqs";
import Kindness from "../Components/Kindness";
import SadaqahJariyah from "../Components/SadaqahJariyah";
import Contribute from "../Components/Contribute";
import SadaqahBenefits from "../Components/SadaqahBenefits";
import CustomSeo from "../Components/CustomSeo";

// Server-side fetch for SEO + initial data
const getSadaqahPageData = async () => {
  const sadaqahRes = await fetchData({ url: "sadaqah-page/show-data", slug: "sadaqah/" });
  return { sadaqahData: sadaqahRes?.data || null };
};

// SEO metadata
export async function generateMetadata() {
  const { sadaqahData } = await getSadaqahPageData();

  return {
    title: sadaqahData?.pagesSeoDetail?.meta_title || "Sadaqah Page",
    description: sadaqahData?.pagesSeoDetail?.meta_description || "Learn about Sadaqah with POB Trust",
    keywords: sadaqahData?.pagesSeoDetail?.focus_keyword || undefined,
    alternates: { canonical: sadaqahData?.pagesSeoDetail?.canonical_url },
    openGraph: {
      title: sadaqahData?.pagesSeoDetail?.meta_title,
      description: sadaqahData?.pagesSeoDetail?.meta_description,
    },
    twitter: {
      card: "summary_large_image",
      title: sadaqahData?.pagesSeoDetail?.meta_title,
      description: sadaqahData?.pagesSeoDetail?.meta_description,
    },
    other: sadaqahData?.pagesSeoDetail?.schema
      ? [
          {
            tagName: "script",
            type: "application/ld+json",
            innerHTML: sadaqahData.pagesSeoDetail.schema,
          },
        ]
      : [],
  };
}

export default async function SadaqahPage() {
  const sadaqah = await fetchData({ url: "sadaqah-page/show-data", slug: "sadaqah/" });

  return (
    <div className="pt-20 md:pt-32">
      {/* SEO */}
      <CustomSeo
        title={sadaqah?.pagesSeoDetail?.meta_title}
        des={sadaqah?.pagesSeoDetail?.meta_description}
        focuskey={sadaqah?.pagesSeoDetail?.focus_keyword}
        canonicalUrl={sadaqah?.pagesSeoDetail?.canonical_url}
        schema={sadaqah?.pagesSeoDetail?.schema}
      />

      <Banner
        title={sadaqah?.section_1?.banner_heading}
        image={`${Image_Url}/${sadaqah?.section_1?.banner_image}`}
      />

      <ArabicVerse
        img01="/sadaqahverse.png"
        img02="/arabicVerse2.png"
        text="Indeed, the charity is for the poor, the needy, those employed to collect it, those whose hearts are to be reconciled, for freeing captives, for those in debt, for the cause of Allah, and for the wayfarer. This is an obligation from Allah, and Allah is All-Knowing, Wise."
        reference="Surah Al-Baqarah (2:261)"
      />

      <Kindness section_2={sadaqah?.section_2} />
      <SadaqahJariyah section_3={sadaqah?.section_3} />

      <ContactSection
        heading={sadaqah?.section_4?.eye_care_heading}
        para={sadaqah?.section_4?.eye_care_description}
        button={sadaqah?.section_4?.eye_care_button_text}
      />

      <Contribute section_5={sadaqah?.section_5} />
      <SadaqahBenefits section_6={sadaqah?.section_6} />

      <Faqs faqs={sadaqah?.SadaqahPageFaqs} />
    </div>
  );
}
