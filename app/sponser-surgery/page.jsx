import React from 'react'
import Banner from '../Components/Banner/Banner'
import ZakatDonations from '../Components/Home/ZakatDonations'
import SecondCount from '../Components/SecondCount'


const SponserSurgeries = () => {
  return (
    <div className='pt-32'>
        {/* <Banner
        title={academics?.section_1?.banner_heading}
        image={`${Image_Url}/${academics?.section_1?.banner_image}`}
      /> */}
      <Banner
        title={"Sponser Surgeries"}
        image={`/aboutBanner.png`}
      />
      <ZakatDonations />
      <SecondCount   />
    </div>
  )
}

export default SponserSurgeries
