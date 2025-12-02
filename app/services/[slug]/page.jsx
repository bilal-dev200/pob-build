"use client"; // client component for interactivity & hooks

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Next.js hook for dynamic route params
import axios from "../../../Utils/axios";
import { Image_Url } from "../../../Utils/const";

// Components


import Purpose from "../../Components/Purpose";


import Faqs from "../../Components/Home/Faqs";
import CustomSeo from "../../Components/CustomSeo";
import EyeExams from "../../Components/Service/EyeExam";
import RetinaExcellence from "../../Components/Service/RetinaExcellence";
import DonationSection from "../../Components/Service/DonationSection";
import OrbitDisorder from "../../Components/Service/OrbitDisorder";
import Banner from "../../Components/Service/Banner";


const Service = () => {
  const purposeDes = `<div style={{ color: "black" }}>
        <div
          style={{
            display: "flex",
            alignItems: "start",
            gap: "1rem",
            margin: "20px 0",
          }}
        >
          <span
            style={{
              fontSize: "1.5rem",
              fontFamily: "Amaranth, sans-serif",
            }}
          >
            01.
          </span>
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontFamily: "Amaranth, sans-serif",
              }}
            >
              Cataract Surgery
            </h3>
            <p style={{ fontSize: "0.875rem" }}>
              Expert surgical care for pediatric cataracts, ensuring timely
              intervention to support healthy visual development.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "start",
            gap: "1rem",
            margin: "20px 0",
          }}
        >
          <span
            style={{
              fontSize: "1.5rem",
              fontFamily: "Amaranth, sans-serif",
            }}
          >
            02.
          </span>
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontFamily: "Amaranth, sans-serif",
              }}
            >
              Congenital Anomalies
            </h3>
            <p style={{ fontSize: "0.875rem" }}>
              Specialized diagnosis and management of congenital eye conditions,
              including congenital cataracts, strabismus, and other structural
              abnormalities.
            </p>
          </div>
        </div>
      </div>`;
        const [service, setService] = useState(null);
        const [loading, setLoading] = useState(false);
       
     
  const params = useParams();
  const serviceId = params.slug;

console.log(serviceId)
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.public.post("services-pages/detail", { service_page_slug: `${serviceId}/` } );
      // console.log("Fetched categories:", response.data.data); // Debugging log
      setService(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  fetchData();
}, [serviceId]);

if (!service) {
  return <div className="pt-32 text-center text-lg">Loading...</div>;
}

const modifiedFaqs = service?.faqs?.map((faqItem) => ({
  ...faqItem,
  pages_faq_details: faqItem.details || [], // rename 'details' to 'pages_faq_details'
}));

  return (
    <div className="pt-32">
      <CustomSeo
        title={service?.meta_title}
        des={service?.meta_description}
        focuskey={service?.focus_keyword}
        canonicalUrl={service?.canonical_url}
        schema={service?.schema}
      />
      <Banner
        title={service?.banner_heading}
        image={`${Image_Url}/${service?.banner_image}`}
      />
      <EyeExams section_2_main_heading={service?.section_2_main_heading} section_2_sub_heading={service?.section_2_sub_heading} section_2_description={service?.section_2_description} section_2_image={`${Image_Url}/${service?.section_2_image}`}/>
      {/* <CataractSurgeries section_3_main_heading={service?.section_3_main_heading} section_3_sub_heading={service?.section_3_sub_heading} section_3_description={service?.section_3_description} section_3_image={service?.section_3_image} section_3_options={service?.section_3_options}/> */}
      <Purpose
        yellowHead={service?.section_4_main_heading}
        head={service?.section_4_sub_heading}
        des={service?.section_4_description}
        // pageName="service"
        btnName="Donate Now"
        img={`${Image_Url}/${service?.section_4_image}`}
      />

      <RetinaExcellence 
      section_5_main_heading={service?.section_5_main_heading}
      section_5_sub_heading={service?.section_5_sub_heading}
      section_5_description={service?.section_5_description}
      section_5_image={`${Image_Url}/${service?.section_5_image}`}
      />
      <DonationSection
        yellowHead={service?.section_6_main_heading}
        head={service?.section_6_sub_heading}
        // pageName="service"
        des={service?.section_6_description}
        img={`${Image_Url}/${service?.section_6_image}`}
      />
      <OrbitDisorder 
      section_7_main_heading={service?.section_7_main_heading}
      section_7_sub_heading={service?.section_7_sub_heading}
      section_7_description={service?.section_7_description}
      section_7_image={`${Image_Url}/${service?.section_7_image}`}
      section_8_main_heading={service?.section_8_main_heading}
      section_8_sub_heading={service?.section_8_sub_heading}
      section_8_cards={service?.section_8_cards}
      />
      {/* <LaserTreatment
        title={service?.section_9_main_heading}
        subtitle={service?.section_9_sub_heading}
        description={service?.section_9_description}
        buttonText="View Detail"
        image={`${Image_Url}/${service?.section_9_image}`}
      /> */}
      {/* <AboutUs
        img={`${Image_Url}/${service?.section_10_image}`}
        yellowHead={service?.section_10_main_heading}
        head={service?.section_10_sub_heading}
        des={service?.section_10_description}
        pageName="home"
        btnName="View Detail"
      /> */}
      {/* <Diagnostics 
      section_11_main_heading={service?.section_11_main_heading}
      section_11_sub_heading={service?.section_11_sub_heading}
      section_11_cards={service?.section_11_cards}
      /> */}
      {/* <LaserTherapy 
      section_12_main_heading={service?.section_12_main_heading}
      section_12_sub_heading={service?.section_12_sub_heading}
      section_12_description={service?.section_12_description}
      section_12_image={`${Image_Url}/${service?.section_12_image}`}
      /> */}
      {/* <EyeCareCTA 
      section_13_main_heading={service?.section_13_main_heading}
      section_13_sub_heading={service?.section_13_sub_heading}
      /> */}

      {/* <LaserTreatment
        title={service?.section_14_main_heading}
        subtitle={service?.section_14_sub_heading}
        description={service?.section_14_description}
        // description2="We believe accurate diagnosis is the foundation of effective treatment. Our diagnostic facilities include advanced tools."
        buttonText="View Detail"
        direction='top'
        image={`${Image_Url}/${service?.section_14_image}`}
      /> */}
      <Faqs faqs={modifiedFaqs}/>
    </div>
  );
};

export default Service;

