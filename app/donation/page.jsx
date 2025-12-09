


// "use client";
// import React, { useEffect, useState } from "react";
// import Faqs from "../Components/Home/Faqs"; // path check karein
// import fetchData from "../Components/fetchData";
// import { Image_Url } from "../../Utils/const";
// import Banner from "../Components/Banner/Banner";
// import ArabicVerse from "../Components/Donation/ArabicVerse";
// import Mission from "../Components/Mission";
// import OurImpact from "../Components/Donation/OurImpact";
// import DonationSection from "../Components/DonationSection";
// import Future from "../Components/Donation/Future";
// import ImpactSection from "../Components/Donation/ImpactSection";

// export default function DonationPage() {
//   const [donation, setDonation] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchData({
//       url: "donation-page/show-data",
//       slug: "donation/",
//       setState: setDonation,
//       setLoading: setLoading,
//     });
//   }, []);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="pt-20 md:pt-32">

//         <Banner image={`${Image_Url}/${donation?.donationPageImageBanner?.image}`} />
//       <h1 className="md:text-6xl text-2xl text-black text-center font-Amaranth px-4 pb-4 rounded-md">
//         Donations for POB Trust
//       </h1>

//       <ArabicVerse
//         img01="/arabicVerse.png"
//         img02="/arabicVerse.png"
//         text="Indeed, the men who practice charity and the women who practice charity and [they who] have loaned Allah a goodly loan - it will be multiplied for them, and they will have a noble reward."
//       />

//       <Mission aboutusPageOurMession={donation?.donationPageOurMession} />
//        <OurImpact donationPageOurImpact={donation?.donationPageOurImpact} />
//       <DonationSection
//         donationPageHowYourDonationHelp={
//           donation?.donationPageHowYourDonationHelp
//         }
//         pageName="donation"
//       />
//        <Future />
//        <ImpactSection
//         donationPageLowerSection={donation?.donationPageLowerSection}
//       />

//       <Faqs faqs={donation?.donationPageFaq} />
//     </div>
//   );
// }
// app/donation/page.jsx
import React from "react";
import Faqs from "../Components/Home/Faqs";
import fetchData from "../Components/fetchData";
import { Image_Url } from "../../Utils/const";
import Banner from "../Components/Banner/Banner";
import ArabicVerse from "../Components/Donation/ArabicVerse";
import Mission from "../Components/Mission";
import OurImpact from "../Components/Donation/OurImpact";
import DonationSection from "../Components/DonationSection";
import Future from "../Components/Donation/Future";
import ImpactSection from "../Components/Donation/ImpactSection";
import CustomSeo from "../Components/CustomSeo";
import HowYourDonation from "../Components/Donation/HowYourDonation";

export default async function DonationPage() {

  const donation = await fetchData({
    url: "donation-page/show-data",
    slug: "donation/",
  });
  // console.log("donation" , donation);
  

  return (
    <div className="pt-20 md:pt-32">
      <CustomSeo
        title={donation?.donationPageSeo?.meta_title}
        des={donation?.donationPageSeo?.meta_description}
        focuskey={donation?.donationPageSeo?.focus_keyword}
        canonicalUrl={donation?.donationPageSeo?.canonical_url}
        schema={donation?.donationPageSeo?.schema}
      />
      <Banner image={`${Image_Url}/${donation?.donationPageImageBanner?.image}`} />

      <h1 className="md:text-6xl text-2xl text-black text-center font-Amaranth px-4 pb-4 rounded-md">
        Donations for POB Trust
      </h1>

      <ArabicVerse
        img01="/arabicVerse.png"
        img02="/arabicVerse.png"
        text="Indeed, the men who practice charity and the women who practice charity and [they who] have loaned Allah a goodly loan - it will be multiplied for them, and they will have a noble reward."
      />

      <Mission aboutusPageOurMession={donation?.donationPageOurMession} />

      <OurImpact
        donationPageOurImpact={donation?.donationPageOurImpact}
        // handleDonateClick={() => {
        //   console.log("Redirect to donation form or page");
        // }}
      />

      <DonationSection
        donationPageHowYourDonationHelp={donation?.donationPageHowYourDonationHelp}
        pageName="donation"
      />

      <HowYourDonation
        donationPageHowYourDonationHelp={
          donation?.donationPageHowYourDonationHelp
        }
        pageName="donation"
      />

      <Future />

      <ImpactSection donationPageLowerSection={donation?.donationPageLowerSection} />

      <Faqs faqs={donation?.donationPageFaq} />
    </div>
  );
}

