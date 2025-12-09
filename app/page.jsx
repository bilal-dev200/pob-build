// app/page.jsx
import HeroSlider from "./Components/Home/HeroSlider/HeroSlider";
import StatsSection from "./Components/Home/StatsSection";
import ZakatDonations from "./Components/Home/ZakatDonations";
import AboutUs from "./Components/Home/AboutUs";
import fetchData from "./Components/fetchData";
import LaserTreatment from "./Components/Home/LaserTreatment";
import MediaGallery from "./Components/Gallery/MediaGallery";
import Partners from "./Components/Partners";
import { Image_Url } from "../Utils/const";
import DonationSection from "./Components/DonationSection";
import Purpose from "./Components/Purpose";
import SecondCount from "./Components/SecondCount";
import Testimonial from "./Components/Testimonial/Testimonial";
import VideoSection from './Components/Gallery/VideoSection';
import Faqs from "./Components/Home/Faqs";
import BlogsSection from "./Components/Home/BlogSection";
import Moments from "./Components/Home/Moments";
import NewsEvents from "./Components/Home/NewsEvents";

// -------------------------------------------
// Server-side fetch function
// -------------------------------------------
const getHomeData = async () => {
  return await fetchData({ url: "home-page/show-data", slug: "home/" });
};

// -------------------------------------------
// App Router metadata function
// -------------------------------------------
export async function generateMetadata() {
  const home = await getHomeData();

  return {
    title: home?.pagesSeoDetail?.meta_title || "Default Title",
    description: home?.pagesSeoDetail?.meta_description || "Default description",
    keywords: home?.pagesSeoDetail?.focus_keyword || undefined,
    alternates: {
      canonical: home?.pagesSeoDetail?.canonical_url || undefined,
    },
    openGraph: {
      title: home?.pagesSeoDetail?.meta_title,
      description: home?.pagesSeoDetail?.meta_description,
    },
    twitter: {
      card: "summary_large_image",
      title: home?.pagesSeoDetail?.meta_title,
      description: home?.pagesSeoDetail?.meta_description,
    },
    other: home?.pagesSeoDetail?.schema
      ? [
          {
            tagName: "script",
            type: "application/ld+json",
            innerHTML: home.pagesSeoDetail.schema,
          },
        ]
      : [],
  };
}

// -------------------------------------------
// HomePage component (default export)
// -------------------------------------------
export default async function HomePage() {
  const home = await getHomeData();

  return (
    <div>
      <HeroSlider slides={home?.Homepageslider} />

      <AboutUs
        img={`${Image_Url}/${home?.homePageAboutUsSection[0]?.image}`}
        yellowHead={home?.homePageAboutUsSection[0]?.main_heading}
        head={home?.homePageAboutUsSection[0]?.heading}
        des={home?.homePageAboutUsSection[0]?.content}
        pageName="home"
        btnName="Read More"
      />

      <StatsSection />
      <ZakatDonations />

      <LaserTreatment
        title={home?.homePageOculoplasty?.heading}
        subtitle={home?.homePageOculoplasty?.sub_heading}
        description={home?.homePageOculoplasty?.description}
        buttonText="Contact Us"
        image={`${Image_Url}/${home?.homePageOculoplasty?.image}`}
      />

      <MediaGallery imageGalleryImages={home?.imageGalleryImages} />
      <Partners middleCarouselImages={home?.middleCarouselImages} />

      <Purpose
        yellowHead={home?.homePageDonateNow[0]?.main_heading}
        head={home?.homePageDonateNow[0]?.heading}
        des={home?.homePageDonateNow[0]?.content}
        btnName="Donate Now"
        img={`${Image_Url}/${home?.homePageDonateNow[0]?.image}`}
      />

      <DonationSection />
      <SecondCount />
      <Testimonial />
      <VideoSection />
      <Faqs faqs={home?.homePageFaqs} />
      <BlogsSection />
      <Moments />
      <NewsEvents />
    </div>
  );
}
