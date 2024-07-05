import React from 'react'
import Navbar from '../Components/Navbar'
import PartnerWithUs from '../Components/PartnerUs/PartnerUs'
import Footer from '../Components/Footer'
import ConnectWithUs from '../Components/ConnectWithUs'
import PartnerWithUsBanner from '../Components/PartnerUsBanner'

const PartnerUsPage = () => {
  return (
    <div>
        <Navbar/>
        <PartnerWithUsBanner/>
        <PartnerWithUs/>
        <ConnectWithUs/>
        <Footer/>
    </div>
  )
}

export default PartnerUsPage