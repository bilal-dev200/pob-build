import React from "react";
import { Image_Url } from "../../../Utils/const";
import DOMPurify from "isomorphic-dompurify"; 

const ImpactSection = ({ section_2 }) => {
    if (!section_2) return null;

    const {
        zakat_who_qualify_heading,
        zakat_who_qualify_image,
        cards
    } = section_2;
    return (
        <section className="bg-white py-12 px-6">
            <h2 className="text-center text-3xl md:text-4xl font-Amaranth mb-8">
            {zakat_who_qualify_heading}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Left Side Content */}
                <div className="space-y-8 w-full md:w-1/3">
                    <div className="flex flex-col justify-center md:justify-start gap-4">
                        <div className="w-fit px-1 pt-2 rounded-full bg-[#F39C12] md:mx-0 mx-auto">
                            <img
                                src={`${Image_Url}/${cards[0]?.images}`}
                                alt="Education Waqf"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        </div>
                        {/* <div> */}
                            {/* <h3 className="font-Amaranth">Education Waqf</h3> */}
                            {/* <p className="text-gray-600 text-sm">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p> */}
                             <div
          className="text-gray-600 text-sm text-center md:text-start font-inter"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cards[0]?.descriptions) }}
        ></div>
                        {/* </div> */}
                    </div>
                    <div className="flex flex-col justify-center md:justify-start gap-4">
                    <div className="w-fit px-1 py-1 rounded-full bg-[#F39C12] md:mx-0 mx-auto">
                        <img
                            src={`${Image_Url}/${cards[1]?.images}`}
                            alt="Healthcare Waqf"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        </div>
                        {/* <div> */}
                            {/* <h3 className="font-Amaranth">Healthcare Waqf</h3> */}
                            {/* <p className="text-gray-600 text-sm">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p> */}
                               <div
          className="text-gray-600 text-sm text-center md:text-start font-inter"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cards[1]?.descriptions) }}
        ></div>
                        {/* </div> */}
                    </div>
                </div>

                {/* Center Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <img
                        src={`${Image_Url}/${zakat_who_qualify_image}`}
                        alt="Main Impact"
                        className="w-80 h-auto object-cover"
                    />
                </div>

                {/* Right Side Content */}
                <div className="space-y-8 w-full md:w-1/3">
                    <div className="flex flex-col gap-4 justify-center md:justify-start">
                    <div className="w-fit px-1 py-1 rounded-full bg-[#F39C12] md:mx-0 mx-auto">
                        <img
                            src={`${Image_Url}/${cards[2]?.images}`}
                            alt="Mosque Waqf"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        </div>
                        {/* <div>
                            <h3 className="font-Amaranth">Mosque Waqf</h3>
                            <p className="text-gray-600 text-sm">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p>
                        </div> */}
                           <div
          className="text-gray-600 text-sm text-center md:text-start font-inter"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cards[2]?.descriptions) }}
        ></div>
                    </div>
                    <div className="flex flex-col gap-4 justify-center md:justify-start">
                    <div className="w-fit px-1 py-1 rounded-full bg-[#F39C12] md:mx-0 mx-auto">
                        <img
                            src={`${Image_Url}/${cards[3]?.images}`}
                            alt="General Charity Waqf"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        </div>
                        {/* <div>
                            <h3 className="font-Amaranth">General Charity Waqf</h3>
                            <p className="text-gray-600 text-sm">
                                It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.
                            </p>
                        </div> */}
                           <div
          className="text-gray-600 text-sm text-center md:text-start font-inter"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cards[3]?.descriptions) }}
        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;