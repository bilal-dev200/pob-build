import React from "react";
import Banner from "../Components/Banner/Banner";
// import OurStory from "../../Components/About/OurStory/OurStory";
// import Timeline from "../../Components/About/Timeline/Timeline";
// import VisionSection from "../../Components/About/VisionSection/VisionSection";
// import Mission from "../../Components/About/Mission/Mission";
// import Values from "../../Components/About/Values/Values";
// import LeaderShip from "../../Components/LeaderShip/LeaderShip";
// import Hope from "../../Components/About/Hope/Hope";
// import Vision from "../../Components/About/Vision/Vision";
import Faqs from "../Components/Home/Faqs";
import CustomSeo from "../Components/CustomSeo";
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

export default async function AboutPage() {
  // Fetch data server-side
  const about = await fetchData({
    url: "about-us-page/show-data",
    slug: "about-us/",
  });

  return (
    <div className="pt-20 md:pt-32">
      <CustomSeo
        title={about?.aboutUsPageSeo?.meta_title}
        des={about?.aboutUsPageSeo?.meta_description}
        focuskey={about?.aboutUsPageSeo?.focus_keyword}
        canonicalUrl={about?.aboutUsPageSeo?.canonical_url}
        schema={about?.aboutUsPageSeo?.schema}
      />

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
