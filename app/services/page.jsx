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
  console.log("Fetching service data...");
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
  // console.log("service seo", service?.meta_title);
  

  return {
    title: service?.meta_title || "POB Eye Hospital Services",
    description: service?.meta_description || "Explore our comprehensive eye care services",
    keywords: service?.focus_keyword || undefined,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_URL + "/services/"|| undefined,
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

 const pages_faq_details = [
    {
      top_heading:'FAQs',
      main_heading:'Frequently Asked Questions',
      pages_faq_details: [
        {
          id: 7,
          faq_detail_id: 1,
          question: "Do I need a referral to visit the clinic?",
          answer:
            "<p>No referral is needed. You can directly book an appointment for any of our services, including screenings and specialist consultations.<br></p>",
          status: 1,
          created_by: "Shah Faisal",
          created_date: "2025-04-28",
        },
        {
          id: 8,
          faq_detail_id: 1,
          question: "How often should I get my eyes checked?",
          answer:
            "<p>We recommend annual check-ups, especially if you have diabetes, wear glasses, or are over 40.</p>",
          status: 1,
          created_by: "Shah Faisal",
          created_date: "2025-04-28",
        },
        {
          id: 9,
          faq_detail_id: 1,
          question: "What types of surgeries are performed at the clinic?",
          answer:
            "<p>We offer cataract surgery, corneal grafts, glaucoma procedures, oculoplastic and orbital surgeries, all performed using advanced techniques.</p>",
          status: 1,
          created_by: "Shah Faisal",
          created_date: "2025-04-28",
        },
        {
          id: 10,
          faq_detail_id: 1,
          question: "Is laser treatment painful?",
          answer:
            "<p>Most laser eye treatments are quick and cause little to no discomfort. Numbing drops are used for comfort during the procedure.</p>",
          status: 1,
          created_by: "Shah Faisal",
          created_date: "2025-04-28",
        },
        {
          id: 11,
          faq_detail_id: 1,
          question: "What insurance or payment options are accepted?",
          answer:
            "<p>We accept a variety of insurance plans and also offer flexible payment options. Our staff can guide you based on your specific coverage.</p>",
          status: 1,
          created_by: "Shah Faisal",
          created_date: "2025-04-28",
        },
      ]
    }
  ];
  

  return (
    <div className="pt-32">
      <Banner
        title={'All-inclusive Eye Care Services at POB Eye Hospital'}
        image="/servicebg.png"
      />

      <EyeExams slug="/general-ophthalmology-screening-clinic" />
      <CataractSurgeries slug="/oculoplasty-and-orbit" />
      <GlaucomaCare slug="medical-surgical-retina" />
      <Purpose
        slug="/optometry-care"
        yellowHead='Optometry Care' head='Expert Care For Everyday Vision'
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
         description="Neuro-ophthalmology deals with vision problems linked to the nervous system. At POB Eye Hospital, specialists manage complex issues like double vision or unexplained vision loss. Using advanced diagnostic methods, we uncover underlying causes. Our treatments integrate neurological and ophthalmic care for complete solutions.
Explore how neuro-ophthalmology care restores complex vision issues. Click below to view complete details of this service."
        buttonText="/neuro-ophthalmology/"
        slug="neuro-ophthalmology"
        image="/service2.png"
      />
      <AboutUs
        slug="cataract-extractions"
       yellowHead="Cataract Extractions"
         head="Restoring Vision With Safe Surgery"
        btnName="View Detail"
      />
      <LaserTreatment
        title="Glaucoma"
         subtitle="Protecting Sight With Early Treatment"
         description="Glaucoma silently damages the optic nerve and may cause permanent vision loss. At POB Eye Hospital, we offer medical, laser, and surgical care to manage the disease. Our specialists focus on lowering eye pressure and protecting optic nerve health. Timely diagnosis ensures effective long-term outcomes.
See how our glaucoma treatments safeguard your future sight. Click below to learn more about this service."
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
