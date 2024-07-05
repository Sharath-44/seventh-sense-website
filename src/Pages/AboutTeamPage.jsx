import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import PartnerButton from '../Components/PartnerButton'
import ConnectWithUs from '../Components/ConnectWithUs'
import AboutTheTeamBanner from '../Components/AboutTeam/AboutTeamBanner'
import AboutTheTeam from '../Components/AboutTeam/AboutTheTeam'

const AboutTeamPage = () => {
  return (
    <div>
        <Navbar/>
        <AboutTheTeamBanner/>
        <AboutTheTeam/>
        <PartnerButton/>
        <ConnectWithUs/>
        <Footer/>
    </div>
  )
}

export default AboutTeamPage;