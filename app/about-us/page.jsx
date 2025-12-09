// app/about-us/page.jsx
import React from "react";
import Banner from "../Components/Banner/Banner";
import Faqs from "../Components/Home/Faqs";
import fetchData from "../Components/fetchData";
import { Image_Url } from "../../Utils/const";
import OurStory from "../Components/About/OurStory";
import Timeline from "../Components/About/Timeline";
import VisionSection from "../Components/About/VisionSection";
import Mission from "../Components/About/Mission";
import Values from "../Components/About/Values";
import LeaderShip from "../Components/Leadership";
import Hope from "../Components/About/Hope";
import Vision from "../Components/About/Vision";

// -------------------------------------------
// Server-side fetch function
// -------------------------------------------
const getAboutData = async () => {
  return await fetchData({
    url: "about-us-page/show-data",
    slug: "about-us/",
  });
};

// -------------------------------------------
// App Router metadata function
// -------------------------------------------
export async function generateMetadata() {
  const about = await getAboutData();

  return {
    title: about?.aboutUsPageSeo?.meta_title || "About Us - POB Trust",
    description: about?.aboutUsPageSeo?.meta_description || "About POB Trust Karachi",
    keywords: about?.aboutUsPageSeo?.focus_keyword || undefined,
    alternates: {
      canonical: about?.aboutUsPageSeo?.canonical_url || undefined,
    },
    openGraph: {
      title: about?.aboutUsPageSeo?.meta_title,
      description: about?.aboutUsPageSeo?.meta_description,
    },
    twitter: {
      card: "summary_large_image",
      title: about?.aboutUsPageSeo?.meta_title,
      description: about?.aboutUsPageSeo?.meta_description,
    },
    other: about?.aboutUsPageSeo?.schema
      ? [
          {
            tagName: "script",
            type: "application/ld+json",
            innerHTML: about.aboutUsPageSeo.schema,
          },
        ]
      : [],
  };
}

// -------------------------------------------
// AboutPage component (default export)
// -------------------------------------------
export default async function AboutPage() {
  const about = await getAboutData();

  return (
    <div className="pt-20 md:pt-32">
      <Banner image={`${Image_Url}/${about?.aboutUsBannerImage?.image_path}`} />

      <h1 className="md:text-6xl text-2xl text-black text-center font-Amaranth px-4 pb-4 rounded-md">
        About POB Trust Karachi
      </h1> 

      <OurStory aboutOurStorySection={about?.aboutOurStorySection} />
      <Timeline />
      <VisionSection aboutUsVisionSection={about?.aboutUsVisionSection} />
      <Mission aboutusPageOurMession={about?.aboutusPageOurMession} />
      <Values />
      <LeaderShip /> 
      <Hope aboutusPageBojectives={about?.aboutusPageBojectives} />
      <Vision aboutusPageWhatWeDo={about?.aboutusPageWhatWeDo} />
      <Faqs faqs={about?.aboutUsPageFaq} />
    </div>
  );
}
