import React from 'react'

const ArabicVerse = ({ img01, img02, text, reference }) => {
    return (

        <div className="w-full flex flex-col text-center justify-center gap-4 items-center py-4 md:py-10">
            <img className='hidden md:flex' src={img01} alt="" />
            <img className='md:hidden flex' src={img02} alt="" />
            <p
                dangerouslySetInnerHTML={{ __html: text }}
                className="md:text-[24px] md:w3/5 w-11/12 font-inter">
            </p>
<p className='text-[24px] font-inter'>{reference}</p>
        </div>
    )
}

export default ArabicVerse