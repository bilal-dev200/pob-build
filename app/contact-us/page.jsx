import CustomSeo from "../Components/CustomSeo";
import { Image_Url } from "../../Utils/const";
import Banner from "../Components/Banner/Banner";
import Faqs from "../Components/Home/Faqs";
import fetchData from "../Components/fetchData";
import ContactSection from "../Components/ContactUs/ContactSection";
import OurStory from "../Components/ContactUs/OurStory";

// Server-side fetch for SEO + initial data
const getContactPageData = async () => {
  const contactRes = await fetchData({
    url: "contact-us-page/show-data",
    slug: "contact-us/",
  });

  return {
    contactData: contactRes?.data || null,
  };
};

export async function generateMetadata() {
  const { contactData } = await getContactPageData();

  return {
    title: contactData?.pagesSeoDetail?.meta_title || "Contact POB Trust",
    description:
      contactData?.pagesSeoDetail?.meta_description ||
      "Get in touch with POB Trust Karachi",
    keywords: contactData?.pagesSeoDetail?.focus_keyword || undefined,
    alternates: { canonical: contactData?.pagesSeoDetail?.canonical_url },
    openGraph: {
      title: contactData?.pagesSeoDetail?.meta_title,
      description: contactData?.pagesSeoDetail?.meta_description,
    },
    twitter: {
      card: "summary_large_image",
      title: contactData?.pagesSeoDetail?.meta_title,
      description: contactData?.pagesSeoDetail?.meta_description,
    },
    other: contactData?.pagesSeoDetail?.schema
      ? [
          {
            tagName: "script",
            type: "application/ld+json",
            innerHTML: contactData.pagesSeoDetail.schema,
          },
        ]
      : [],
  };
}

export default async function ContactPage() {
  const contact = await fetchData({
    url: "contact-us-page/show-data",
    slug: "contact-us/",
  });

  const hospitalLocation = {
    hospital_location_heading: "Hospital Locations",
    details: [
      {
        location: "Gulistan-e-Johar",
        contact_no: "02134012229",
        direct: "https://maps.app.goo.gl/HYHmon3iV2gACC7V8",
        full_address:
          "C-15 Munawar Chowrangi Rd, Block 12 Gulistan-e-Johar, Karachi, 74500, Pakistan",
      },
      {
        location: "Adamjee Nagar - Dhoraji",
        contact_no: "02134132824",
        direct: "https://maps.app.goo.gl/AJnnzDYJ3uF5QeKe9",
        full_address:
          "39B, 39, adjacent Madina Masjid, Block C Karachi, 74500",
      },
      {
        location: "Hussainabad - F.B.Area",
        contact_no: "02136330044",
        direct: "https://maps.app.goo.gl/hAAhRSVLzw4H4Nbz6",
        full_address: "A 43, FB Area Block 1 Gulberg Town, Karachi",
      },
      {
        location: "Surjani Town",
        contact_no: "02134156597",
        direct: "https://maps.app.goo.gl/C9Ps2pBTYgwBT18JA",
        full_address: "Plot A 59, Sector 7 B Surjani Town, Karachi",
      },
      {
        location: "Orangi Town",
        contact_no: "02134156597",
        direct: "https://maps.app.goo.gl/T5bEZnXaR1wt7yWm8",
        full_address:
          "Orangi town sector 11-1/2 Gulshan e Zia, Karachi",
      },
    ],
  };

  return (
    <div className="pt-20 md:pt-32">
      {/* SSR SEO */}
      <CustomSeo
        title={contact?.pagesSeoDetail?.meta_title}
        des={contact?.pagesSeoDetail?.meta_description}
        focuskey={contact?.pagesSeoDetail?.focus_keyword}
        canonicalUrl={contact?.pagesSeoDetail?.canonical_url}
        schema={contact?.pagesSeoDetail?.schema}
      />

      <Banner
        title=""
        image={`${Image_Url}/${contact?.imageBanner?.image_banner}`}
      />

      <h1 className="md:text-6xl text-2xl text-black text-center font-Amaranth px-4 pb-4 rounded-md">
        Contact POB Trust Karachi
      </h1>

       <ContactSection
        contactUsHeading={contact?.contactUsHeading}
        hospitalLocation={hospitalLocation}
      />

      <OurStory
        ourStorySection={contact?.ourStorySection}
        instagramLink={contact?.instagramLink}
      /> 

      <Faqs faqs={contact?.ContactPageFaqs} />
    </div>
  );
}
