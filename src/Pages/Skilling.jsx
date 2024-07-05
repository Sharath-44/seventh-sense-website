import React from 'react'
import Navbar from '../Components/Navbar'
import PartnerButton from '../Components/PartnerButton'
import Footer from '../Components/Footer'
import ConnectWithUs from '../Components/ConnectWithUs'
import SkillingBanner from '../Components/Skilling/SkillingBanner'
import SkillingProject from '../Components/Skilling/SkillingProject'

const Skilling = () => {
  return (
    <div>
      <Navbar/>
      <SkillingBanner/>
      <SkillingProject/>
      <PartnerButton/>
      <ConnectWithUs/>
      <Footer/>
    </div>
  )
}

export default Skilling