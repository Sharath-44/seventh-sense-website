import React from 'react'
import Navbar from '../Components/Navbar'
import PartnerButton from '../Components/PartnerButton'
import Footer from '../Components/Footer'
import ResearchBanner from '../Components/Research/ResearchBanner'
import ResearchProject from '../Components/Research/ResearchProject'
import ConnectWithUs from '../Components/ConnectWithUs'

const ResearchPage = () => {
  return (
    <div>
      <Navbar/>
      <ResearchBanner/>
      <ResearchProject/>
      <PartnerButton/>
      <ConnectWithUs/>
      <Footer/>
    </div>
  )
}

export default ResearchPage