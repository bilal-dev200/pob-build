// // app/page.jsx
// import dynamic from 'next/dynamic';
// import HeroSlider from "./Components/Home/HeroSlider/HeroSlider";
// import AboutUs from "./Components/Home/AboutUs";
// const StatsSection = dynamic(() => import("./Components/Home/StatsSection"), { ssr: true });
// const ZakatDonations = dynamic(() => import("./Components/Home/ZakatDonations"), { ssr: true });
// import fetchData from "./Components/fetchData";
// const LaserTreatment = dynamic(() => import("./Components/Home/LaserTreatment"), { ssr: true });
// const MediaGallery = dynamic(() => import("./Components/Gallery/MediaGallery"), { ssr: true });
// const Partners = dynamic(() => import("./Components/Partners"), { ssr: true });
// import { Image_Url } from "../Utils/const";
// const DonationSection = dynamic(() => import("./Components/DonationSection"), { ssr: true });
// const Purpose = dynamic(() => import("./Components/Purpose"), { ssr: true });
// const SecondCount = dynamic(() => import("./Components/SecondCount"), { ssr: true });
// const Testimonial = dynamic(() => import("./Components/Testimonial/Testimonial"), { ssr: true });
// const VideoSection = dynamic(() => import("./Components/Gallery/VideoSection"), { ssr: true });
// const Faqs = dynamic(() => import("./Components/Home/Faqs"), { ssr: true });
// const BlogsSection = dynamic(() => import("./Components/Home/BlogSection"), { ssr: true });
// const Moments = dynamic(() => import("./Components/Home/Moments"), { ssr: true });
// // import NewsEvents from "./Components/Home/NewsEvents";

// // -------------------------------------------
// // Server-side fetch function
// // -------------------------------------------
// const getHomeData = async () => {
//   return await fetchData({ url: "home-page/show-data", slug: "home/" });
// };

// // -------------------------------------------
// // App Router metadata function
// // -------------------------------------------
// export async function generateMetadata() {
//   const home = await getHomeData();

//   const CANONICAL = "https://pobtrust.com/";
//   console.log("seo", home?.pagesSeoDetail)
//   return {
//     title: home?.pagesSeoDetail?.meta_title || "Default Title",
//     description:
//       home?.pagesSeoDetail?.meta_description || "Default description",

//     alternates: {
//       canonical: process.env.NEXT_PUBLIC_URL + home?.pagesSeoDetail?.canonical_url || CANONICAL,
//     },

//     openGraph: {
//       url: home?.pagesSeoDetail?.canonical_url || CANONICAL,
//       title: home?.pagesSeoDetail?.meta_title,
//       description: home?.pagesSeoDetail?.meta_description,
//     },
//   };
// }

// // -------------------------------------------
// // HomePage component (default export)
// // -------------------------------------------
// export default async function HomePage() {
//   const home = await getHomeData();

//   return (
//     <div>
//       <HeroSlider slides={home?.Homepageslider} />

//       <AboutUs
//         img={`${Image_Url}/${home?.homePageAboutUsSection[0]?.image}`}
//         yellowHead={home?.homePageAboutUsSection[0]?.main_heading}
//         head={home?.homePageAboutUsSection[0]?.heading}
//         des={home?.homePageAboutUsSection[0]?.content}
//         pageName="home"
//         btnName="Read More"
//       />

//       <StatsSection />
//       <ZakatDonations />

//       <LaserTreatment
//         title={home?.homePageOculoplasty?.heading}
//         subtitle={home?.homePageOculoplasty?.sub_heading}
//         description={home?.homePageOculoplasty?.description}
//         buttonText="Contact Us"
//         image={`${Image_Url}/${home?.homePageOculoplasty?.image}`}
//       />

//       <MediaGallery imageGalleryImages={home?.imageGalleryImages} />
//       <Partners middleCarouselImages={home?.middleCarouselImages} />

//       <Purpose
//         yellowHead={home?.homePageDonateNow[0]?.main_heading}
//         head={home?.homePageDonateNow[0]?.heading}
//         des={home?.homePageDonateNow[0]?.content}
//         btnName="Donate Now"
//         img={`${Image_Url}/${home?.homePageDonateNow[0]?.image}`}
//       />

//       <DonationSection />
//       <SecondCount />
//       <Testimonial />
//       <VideoSection />
//       <Faqs faqs={home?.homePageFaqs} />
//       <BlogsSection />
//       <Moments />
//       {/* <NewsEvents /> */}
//     </div>
//   );
// }
// app/page.jsx
import HeroSlider from "./Components/Home/HeroSlider/HeroSlider";
import AboutUs from "./Components/Home/AboutUs";
import LaserTreatment from "./Components/Home/LaserTreatment";
import Purpose from "./Components/Purpose";

import dynamic from "next/dynamic";
import fetchData from "./Components/fetchData";
import { Image_Url } from "../Utils/const";

// ================================
// Dynamic (below-the-fold ONLY)
// ================================
const StatsSection = dynamic(() => import("./Components/Home/StatsSection"), { ssr: false });
const ZakatDonations = dynamic(() => import("./Components/Home/ZakatDonations"), { ssr: false });
const MediaGallery = dynamic(() => import("./Components/Gallery/MediaGallery"), { ssr: false });
const Partners = dynamic(() => import("./Components/Partners"), { ssr: false });
const DonationSection = dynamic(() => import("./Components/DonationSection"), { ssr: false });
const SecondCount = dynamic(() => import("./Components/SecondCount"), { ssr: false });
const Testimonial = dynamic(() => import("./Components/Testimonial/Testimonial"), { ssr: false });
const VideoSection = dynamic(() => import("./Components/Gallery/VideoSection"), { ssr: false });
const Faqs = dynamic(() => import("./Components/Home/Faqs"), { ssr: false });
const BlogsSection = dynamic(() => import("./Components/Home/BlogSection"), { ssr: false });
const Moments = dynamic(() => import("./Components/Home/Moments"), { ssr: false });

// ================================
// ISR (performance boost)
// ================================
export const revalidate = 60;

// ================================
// Data fetch (server only)
// ================================
const getHomeData = async () => {
  return await fetchData({
    url: "home-page/show-data",
    slug: "home/",
  });
};

// ================================
// Metadata (SEO)
// ================================
export async function generateMetadata() {
  const home = await getHomeData();
  const CANONICAL = "https://pobtrust.com/";

  return {
    title: home?.pagesSeoDetail?.meta_title || "Default Title",
    description: home?.pagesSeoDetail?.meta_description || "Default description",
    alternates: {
      canonical: home?.pagesSeoDetail?.canonical_url || CANONICAL,
    },
    openGraph: {
      url: home?.pagesSeoDetail?.canonical_url || CANONICAL,
      title: home?.pagesSeoDetail?.meta_title,
      description: home?.pagesSeoDetail?.meta_description,
    },
  };
}

// ================================
// Page Component (SERVER)
// ================================
export default async function HomePage() {
  const home = await getHomeData();

  return (
    <>
      {/* ABOVE THE FOLD */}
      <HeroSlider slides={home?.Homepageslider} />

      <AboutUs
        img={`${Image_Url}/${home?.homePageAboutUsSection?.[0]?.image}`}
        yellowHead={home?.homePageAboutUsSection?.[0]?.main_heading}
        head={home?.homePageAboutUsSection?.[0]?.heading}
        des={home?.homePageAboutUsSection?.[0]?.content}
        pageName="home"
        btnName="Read More"
      />

      <LaserTreatment
        title={home?.homePageOculoplasty?.heading}
        subtitle={home?.homePageOculoplasty?.sub_heading}
        description={home?.homePageOculoplasty?.description}
        buttonText="Contact Us"
        image={`${Image_Url}/${home?.homePageOculoplasty?.image}`}
      />

      {/* BELOW THE FOLD (CLIENT ONLY, NO PROPS FROM SERVER) */}
      <StatsSection />
      <ZakatDonations />
      <MediaGallery />
      <Partners />
      <Purpose
        yellowHead={home?.homePageDonateNow?.[0]?.main_heading}
        head={home?.homePageDonateNow?.[0]?.heading}
        des={home?.homePageDonateNow?.[0]?.content}
        btnName="Donate Now"
        img={`${Image_Url}/${home?.homePageDonateNow?.[0]?.image}`}
      />
      <DonationSection />
      <SecondCount />
      <Testimonial />
      <VideoSection />
      <Faqs />
      <BlogsSection />
      <Moments />
    </>
  );
}
