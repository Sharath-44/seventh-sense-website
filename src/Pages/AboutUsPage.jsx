import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AtAGlance from '../Components/AboutUs/AtAGlance'
import PrimaryAreas from '../Components/AboutUs/PrimaryAreas'
import ConnectWithUs from '../Components/ConnectWithUs'
import Motto from '../Components/AboutUs/Motto'
import AboutUsBanner from '../Components/AboutUs/AboutUsBanner'
import AboutUsText from '../Components/AboutUs/AboutUsIntro'
import PartnerButton from '../Components/PartnerButton'

const AboutUsPage = () => {
  return (
    <div>
        <Navbar/>
        <AboutUsBanner/>
        <AboutUsText/>
        <Motto/>
        <AtAGlance/>
        <PrimaryAreas/>
        <PartnerButton/>
        <ConnectWithUs/>
        <Footer/>
    </div>
  )
}

export default AboutUsPage