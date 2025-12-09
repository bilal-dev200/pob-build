







import React from 'react';
import Banner from '../Components/Banner/Banner';
import ZakatDonations from '../Components/Home/ZakatDonations';
import SecondCount from '../Components/SecondCount';
import CustomSeo from '../Components/CustomSeo';
import fetchData from '../Components/fetchData';

const getSponserSurgeriesSeo = async () => {
  const res = await fetchData({ url: "sponser-surgeries-page/show-data", slug: "sponser-surgeries/" });
  return { seoData: res?.data || null };
};

// ===== SEO metadata =====
export async function generateMetadata() {
  const { seoData } = await getSponserSurgeriesSeo();
  console.log("seoData " , seoData)

  return {
    title: seoData?.pagesSeoDetail?.meta_title || "Sponser Surgeries",
    description: seoData?.pagesSeoDetail?.meta_description || "Join us to sponser surgeries and save lives",
    keywords: seoData?.pagesSeoDetail?.focus_keyword || undefined,
    alternates: { canonical: seoData?.pagesSeoDetail?.canonical_url },
    openGraph: {
      title: seoData?.pagesSeoDetail?.meta_title,
      description: seoData?.pagesSeoDetail?.meta_description,
    },
    twitter: {
      card: "summary_large_image",
      title: seoData?.pagesSeoDetail?.meta_title,
      description: seoData?.pagesSeoDetail?.meta_description,
    },
    other: seoData?.pagesSeoDetail?.schema
      ? [
          {
            tagName: "script",
            type: "application/ld+json",
            innerHTML: seoData.pagesSeoDetail.schema, 
          },
        ]
      : [],
  };
}

// ===== Page Component =====
const SponserSurgeries = () => {
  return (
    <div className='pt-32'>
      <CustomSeo
        title={"Sponser Surgeries"}
        des={"Join us to sponser surgeries and save lives"}
        focuskey={undefined}
        canonicalUrl={undefined}
        schema={undefined} // Schema already handled in generateMetadata
      />

      <Banner
        title={"Sponser Surgeries"}
        image={`/aboutBanner.png`}
      />
      <ZakatDonations />
      <SecondCount />
    </div>
  );
}

export default SponserSurgeries;

