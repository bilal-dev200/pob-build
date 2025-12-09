// app/services/page.jsx

import Banner from "../Components/Service/Banner";
import AboutUs from "../Components/ServicesList/AboutUs";
import CataractSurgeries from "../Components/ServicesList/CataractSurgeries";
import Diagnostics from "../Components/ServicesList/Diagnostics";
import DonationSection from "../Components/ServicesList/DonationSection";
import EyeCareCTA from "../Components/ServicesList/EyeCareCTA";
import EyeExams from "../Components/ServicesList/EyeExams";
import GlaucomaCare from "../Components/ServicesList/GlaucomaCare";
import LaserTherapy from "../Components/ServicesList/LaserTherapy";
import LaserTreatment from "../Components/ServicesList/LaserTreatent";
import OrbitDisorder from "../Components/ServicesList/OrbitDisorder";
import Purpose from "../Components/ServicesList/Purpose";
import RetinaExcellence from "../Components/ServicesList/RetinaExcellence";
import Section2 from "../Components/ServicesList/Section2";
import Faqs from "../Components/Home/Faqs";
import fetchData from "../Components/fetchData";

// -------------------------------------------
// Server-side fetch function
// -------------------------------------------
const getServiceData = async () => {
  return await fetchData({
    url: "services-pages/detail/",
    slug: "services/",
  });
};

// -------------------------------------------
// App Router metadata function
// -------------------------------------------
export async function generateMetadata() {
  const service = await getServiceData();
  console.log("serviceservice" , service);
  

  return {
    title: service?.meta_title || "POB Eye Hospital Services",
    description: service?.meta_description || "Explore our comprehensive eye care services",
    keywords: service?.focus_keyword || undefined,
    alternates: {
      canonical: service?.canonical_url || undefined,
    },
    openGraph: {
      title: service?.meta_title,
      description: service?.meta_description,
    },
    twitter: {
      card: "summary_large_image",
      title: service?.meta_title,
      description: service?.meta_description,
    },
    other: service?.schema
      ? [
          {
            tagName: "script",
            type: "application/ld+json",
            innerHTML: service.schema,
          },
        ]
      : [],
  };
}

// -------------------------------------------
// ServiceList component (default export)
// -------------------------------------------
export default async function ServiceList() {
  const service = await getServiceData();

  const pages_faq_details = [
    {
      top_heading: "FAQs",
      main_heading: "Frequently Asked Questions",
      pages_faq_details: [
        {
          id: 7,
          question: "Do I need a referral to visit the clinic?",
          answer: "<p>No referral is needed. You can directly book an appointment.<br></p>",
        },
        {
          id: 8,
          question: "How often should I get my eyes checked?",
          answer: "<p>We recommend annual check-ups.</p>",
        },
        {
          id: 9,
          question: "What types of surgeries are performed?",
          answer: "<p>We offer cataract, glaucoma, oculoplastic & retina surgeries.</p>",
        },
        {
          id: 10,
          question: "Is laser treatment painful?",
          answer: "<p>It is quick and painless. Numbing drops are used.</p>",
        },
        {
          id: 11,
          question: "What payment options do you accept?",
          answer: "<p>We accept insurance and flexible payment options.</p>",
        },
      ],
    },
  ];

  return (
    <div className="pt-32">
      <Banner
        title="All-inclusive Eye Care Services at POB Eye Hospital"
        image="/servicebg.png"
      />

      <EyeExams slug="general-ophthalmology-screening-clinic" />
      <CataractSurgeries slug="oculoplasty-and-orbit" />
      <GlaucomaCare slug="medical-surgical-retina" />
      <Purpose
        slug="optometry-care"
        yellowHead="Comprehensive Optometry Services"
        head="Everyday Eye Care You Can Trust"
        btnName="Donate Now"
      />
      <RetinaExcellence slug="diabetic-eye-care" />
      <DonationSection
        slug="diagnostic-services"
        yellowHead="Get Your Diagnosis Done on Time"
        head="Our Specialized Diagnostic Services for Eye Health"
        img="/donationAbout.png"
      />
      <OrbitDisorder slug="pediatric-eye-care" />
      <LaserTreatment
        title="Neuro-Ophthalmology"
        subtitle="Specialized Care For Eye-Brain Connection"
        description="Neuro-ophthalmology deals with vision problems linked with the brain..."
        buttonText="/neuro-ophthalmology/"
        slug="neuro-ophthalmology"
        image="/service2.png"
      />
      <AboutUs
        slug="cataract-extractions"
        yellowHead="Glaucoma Care"
        head="Protecting Sight, Preserving Life"
        btnName="View Detail"
      />
      <LaserTreatment
        title="Glaucoma"
        subtitle="Protecting Sight With Early Treatment"
        description="Glaucoma silently damages the optic nerve..."
        buttonText="/glaucoma/"
        slug="glaucoma"
        image="/service5.png"
      />
      <Section2 slug="vitreoretina" />
      <Diagnostics
        slug="corneal-diseases"
        section_11_main_heading="Corneal Diseases & Grafts with Personalized Care"
        section_11_sub_heading="Restoring Clarity and Comfort"
      />
      <LaserTherapy slug="laser-treatments" />
      <EyeCareCTA />
      <Faqs faqs={pages_faq_details} />
    </div>
  );
}
