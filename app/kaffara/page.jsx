// app/kaffara/page.jsx
import Banner from "../Components/Banner/Banner";
import ArabicVerse from "../Components/Donation/ArabicVerse";
// import KaffaraSection from "@/components/Kaffara/KaffaraSection";
// import KaffaraTypes from "@/components/Kaffara/KaffaraTypes";
// import KaffaraObligation from "@/components/Kaffara/KaffaraObligation";
// import ContactSection from "@/components/Sadaqah/ContactSection/ContactSection";
// import DonationSection from "@/components/Kaffara/DonationSection";
// import WhyVolunteer from "@/components/Volunteer/WhyVolunteer";
import Faqs from "../Components/Home/Faqs";
import CustomSeo from "../Components/CustomSeo";
import { Image_Url } from "../../Utils/const";
import fetchData from "../Components/fetchData";
import KaffaraSection from "../Components/Kaffara/KaffaraSection";

import KaffaraTypes  from "../Components/Kaffara/KaffaraTypes";
import KaffaraObligation from "../Components/Kaffara/KaffaraObligation";
import ContactSection from "../Components/ContactSection";
import DonationSection from "../Components/Kaffara/DonationSection";
import WhyVolunteer from "../Components/Volunteer/WhyVolunteer";

export default async function KaffaraPage() {
  const kaffara = await fetchData({ url: "kaffara-page/show-data", slug: "kaffara/" });

  const arabicVerseTranslation =
    "Allah will not call you to account for your unintentional oaths, but He will call you to account for deliberate oaths...";

  return (
    <div className="pt-20 md:pt-32">
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

     <KaffaraSection    section_2={kaffara?.section_2} />

      <KaffaraTypes section_3={kaffara?.section_3} />

       <KaffaraObligation   section_4={kaffara?.section_4} />

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
