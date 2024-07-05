import React from 'react'
import Navbar from '../Components/Navbar'
import PartnerButton from '../Components/PartnerButton'
import StatisticsSection from '../Components/Home/statsComponent'
import Footer from '../Components/Footer'
import ConnectWithUs from '../Components/ConnectWithUs'
import GetInvolved from '../Components/Home/GetInvolved'
import Gallery from '../Components/Gallery'
import PartnerSlideshow from '../Components/partnersSlideshow'
import WiserHome from '../Components/Home/WiserHome'
import PressReleaseVideoSection from '../Components/Home/PressRelease'
import TestimonialSlider from '../Components/Home/Testimonial'
import CarouselComponent from '../Components/Home/VideoHome'
import CollegeButton from '../Components/CollegeButton'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <CarouselComponent/>
        <CollegeButton/>
        <WiserHome/>
        <StatisticsSection/>
        <Gallery/>
        <PartnerSlideshow/>
        <PressReleaseVideoSection/>
        <TestimonialSlider/>
        <GetInvolved/>
        <PartnerButton/>
        <ConnectWithUs/>
        <Footer/>
    </div>
  )
}

export default HomePage