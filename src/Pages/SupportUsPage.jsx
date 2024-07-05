import React from 'react'
import Navbar from '../Components/Navbar'
import SupportUs from '../Components/SupportUs/SupportUs'
import Footer from '../Components/Footer'
import SupportUsBanner from '../Components/SupportUsBanner'
import PartnerButton from '../Components/PartnerButton'
import ConnectWithUs from '../Components/ConnectWithUs'

const SupportUsPage = () => {
  return (
    <div>
        <Navbar/>
        <SupportUsBanner/>
        <PartnerButton/>
        <SupportUs/>
        <ConnectWithUs/>
        <Footer/>
    </div>
  )
}

export default SupportUsPage