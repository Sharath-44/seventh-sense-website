import React from 'react'
import Navbar from '../Components/Navbar'
import PartnerButton from '../Components/PartnerButton'
import Careers from '../Components/Careers/CareersTiles'
import Footer from '../Components/Footer'
import ConnectWithUs from '../Components/ConnectWithUs'
import CareersBanner from '../Components/Careers/CareerPageBanner'
import LifeAtFoundation from '../Components/Careers/LifeAtFoundation'

const CareersPage = () => {
  return (
    <div>
        <Navbar/>
        <CareersBanner/>
        <LifeAtFoundation/>
        <Careers/>
        <PartnerButton/>
        <ConnectWithUs/>
        <Footer/>
    </div>
  )
}

export default CareersPage