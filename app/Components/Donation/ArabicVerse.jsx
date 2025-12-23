import React from 'react'
import Image from "next/image";

const ArabicVerse = ({ img01, img02, text, reference }) => {
    return (

        <div className="w-full flex flex-col text-center justify-center gap-4 items-center py-4 md:py-10">
            <div className="hidden md:flex relative w-full h-auto justify-center">
                <Image src={img01} alt="" width={800} height={200} className="w-auto h-auto" />
            </div>
            <div className="md:hidden flex relative w-full h-auto justify-center">
                <Image src={img02} alt="" width={400} height={200} className="w-auto h-auto" />
            </div>
            <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="md:text-[24px] md:w3/5 w-11/12 font-inter">
            </p>
            <p className='text-[24px] font-inter'>{reference}</p>
        </div>
    )
}

export default ArabicVerse