import React from 'react'
import Navbar from '../Components/Navbar'
import PartnerButton from '../Components/PartnerButton'
import Footer from '../Components/Footer'
import InnovationBanner from '../Components/Innovation/InnovationBanner'
import InnovationProject from '../Components/Innovation/InnovationProject'
import ConnectWithUs from '../Components/ConnectWithUs'

const InnovationPage = () => {
  return (
    <div>
      <Navbar/>
      <InnovationBanner/>
      <InnovationProject/>
      <PartnerButton/>
      <ConnectWithUs/>
      <Footer/>
    </div>
  )
}

export default InnovationPage