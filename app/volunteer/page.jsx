import React from "react";

import { Image_Url } from "../../Utils/const";
import CustomSeo from "../Components/CustomSeo";
import Banner from "../Components/Banner/Banner";
import ContactSection from "../Components/ContactSection";
import Faqs from "../Components/Home/Faqs";
import fetchData from "../Components/fetchData";
import WhyVolunteer from "../Components/Volunteer/WhyVolunteer"
import Efforts from "../Components/Volunteer/Efforts";
import WhyVolunteer2 from "../Components/Volunteer/WhyVolunteer2";
import Factors from "../Components/Volunteer/Factors";
import SkillBasedVolunteering from "../Components/SkillBasedVolunteering";

// SSR data fetching function
export default async function VolunteerPage() {

  const volunteer = await fetchData({
    url: "volunteer-page/show-data",
    slug: "volunteer/",
  });


  return (
    <div className="pt-32">
      <CustomSeo
        title={volunteer?.pagesSeoDetail?.meta_title}
        des={volunteer?.pagesSeoDetail?.meta_description}
        focuskey={volunteer?.pagesSeoDetail?.focus_keyword}
        canonicalUrl={volunteer?.pagesSeoDetail?.canonical_url}
        schema={volunteer?.pagesSeoDetail?.schema}
      />

      <Banner
        title={''}
        image={`${Image_Url}/${volunteer?.section_1?.image_banner}`}
      />

     <WhyVolunteer
        heading={volunteer?.section_2?.why_volunteer_first_section_heading}
        para={volunteer?.section_2?.why_volunteer_first_section_description}
      />

    <Efforts section_3={volunteer?.section_3} />
     <WhyVolunteer2 section_4={volunteer?.section_4} />
      <Factors section_5={volunteer?.section_5} />

      <ContactSection
        heading={volunteer?.section_6?.contact_us_heading}
        para={volunteer?.section_6?.contact_us_description}
        button={volunteer?.section_6?.contact_us_button_text}
      />

      <SkillBasedVolunteering section_7={volunteer?.section_7} />
      <Faqs faqs={volunteer?.ContactPageFaqs} />
    </div>
  );
};

