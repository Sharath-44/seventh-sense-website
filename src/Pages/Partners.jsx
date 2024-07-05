import React from 'react'
import OurPartnersBanner from '../Components/Partners/OurPartnersBanner'
import Navbar from '../Components/Navbar'
import PartnerButton from '../Components/PartnerButton'
import Footer from '../Components/Footer'
import PartnerTiles from '../Components/Partners/PartnersTile'
import ConnectWithUs from '../Components/ConnectWithUs'

const Partners = () => {
  return (
    <div>
        <Navbar/>
        <OurPartnersBanner/>
        <PartnerTiles/>
        <PartnerButton/>
        <ConnectWithUs/>
        <Footer/>
    </div>
  )
}

export default Partners