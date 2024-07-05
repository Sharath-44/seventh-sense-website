import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ConnectWithUs from '../Components/ConnectWithUs'
import PartnerButton from '../Components/PartnerButton'
import GalleryTile from '../Components/Gallery/GalleryTile'

const GalleryPage = () => {
  return (
    <div>
        <Navbar/>
        <GalleryTile/>
        <PartnerButton/>
        <ConnectWithUs/>
        <Footer/>
    </div>
  )
}

export default GalleryPage