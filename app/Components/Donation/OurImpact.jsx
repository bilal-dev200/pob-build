"use client"; // ensure client-side

import React from "react";
import DOMPurify from "isomorphic-dompurify";  // import factory
import { Image_Url } from "../../../Utils/const";

const OurImpact = ({ donationPageOurImpact }) => {
    
  const handleDonateClick = () => {
  const footer = document.getElementById("footer-section");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
};
    if (!donationPageOurImpact) return null;

    const { heading, content, bullet_point_heading, bullet_points, image } =
      donationPageOurImpact;

    // const li = [
    //     { p: 'One-time donation: Make an immediate difference with a single contribution.', },
    //     { p: 'Monthly giving program: Provide consistent support to those in need.', },
    //     { p: 'Corporate and institutional giving: Businesses can partner with us to amplify their social impact.', },
    //     { p: 'In - kind donations: Donate essential supplies such as food, clothing, and books.', },
    //     { p: 'Legacy donations: Leave a lasting impact by including charitable giving in your will.', },
    // ]
    return (
        <>
            <div className='hidden md:flex w-full justify-center items-center hscreen my-20'>
                <div className='w-4/5 relative flex justify-center items-center  rounded[58px]   overflowhidden'>
                    <div className="w-1/2 rounded-l-[58px] flex items-center shadow-2xl my-20 h-[60vh] p-10">
                        {/* <img className='w-full object-cover rounded-l-[58px] h-full' src="/ourImpactImg.png" alt="" /> */}
                        <div className="lg:w-3/5 w-3/5 flex flex-col  gap-3">
                            <h2 className='text-3xl font-Amaranth'>{bullet_point_heading}</h2>
                            <div
          className="list-disc pl-4 flex flex-col gap-2 font-inter text-sm text-center md:text-start"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bullet_points) }}
        ></div>
                        </div>
                    </div>
                    <div className="absolute  w-1/3 h-[75vh] bg-[#28A745] rounded-b-full p-5 flex flex-col gap-3 justify-center items-center text-center text-white">
                        <h2 className='text-3xl font-Amaranth'>{heading}</h2>
                        {/* <p className='lg:text-xs text-[9px]'>
                            Our General Eye Clinics provide thorough eye examinations and treatments for common eye conditions, such as refractive errors, dry eyes, and infections. From diagnosing routine vision problems to prescribing glasses or contact lenses, we ensure that your everyday vision needs are met with precision and care.
                            <br />
                            <br />
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p> */}
                        <div
          className="lg:text-xs text-[9px] font-inter text-center md:text-start"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        ></div>
                        <button onClick={handleDonateClick} className='border border-white rounded-full p-2 px-6 text-xs mt-2 text-[16px]'>Donate Now</button>
                    </div>
                    <div className="w-1/2 h-[60vh] my-20">
                        <img className='w-full object-cover rounded-r-[58px] h-full' src={`${Image_Url}/${image}`} alt="" />
                    </div>
                </div>
            </div>
            <div className='md:hidden relative flex flex-col w-full justify-center items-center pt-44 pb-52 my-10'>
                {/* <div className='w-4/5 relative flex flex-col justify-center items-center  rounded[58px]   overflowhidden'> */}
                <div className="w-11/12 absolute top-0 z-10 rounded-t-[58px] flex items-center bg-white shadow-2xl p-4">
                    <div className="w-full flex flex-col  gap-3">
                        <h2 className='text-3xl text-center font-Amaranth'>Ways to Donate</h2>
                        {/* <ul className='list-disc pl-4 flex flex-col gap-2'>
                            {li.map((data, index) => (
                                <li key={index} className='lg:text-xs text-[9px]' > {data.p}</li>
                            ))}
                        </ul> */}
                                                    <div
          className="list-disc pl-4 flex flex-col gap-2 lg:text-xs text-[9px] font-inter text-center md:text-start"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bullet_points) }}
        ></div>
                    </div>
                </div>
                <div className="bg-[#28A745] p-5 mt-6 flex flex-col gap-3 justify-center items-center text-center text-white py-14">
                    <h2 className='text-3xl font-Amaranth'>{heading}</h2>
                    {/* <p className='lg:text-xs text-[9px]'>
                        Our General Eye Clinics provide thorough eye examinations and treatments for common eye conditions, such as refractive errors, dry eyes, and infections. From diagnosing routine vision problems to prescribing glasses or contact lenses, we ensure that your everyday vision needs are met with precision and care.
                        <br />
                        <br />
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p> */}
                                            <div
          className="lg:text-xs text-[9px]"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        ></div>
                    <button className='border border-white rounded-full p-2 px-6 text-[12px] mt-2'>Donate Now</button>
                </div>
                <div className="w-11/12  absolute bottom-0 z-10">
                    <img className='w-full object-cover rounded-b-[58px] h-60' src={`${Image_Url}/${image}`} alt="" />
                </div>
                {/* </div> */}
            </div>
        </>
    )
}
export default OurImpact;
