import React from 'react'
import Navbar from '../Components/Navbar'
import PartnerButton from '../Components/PartnerButton'
import Footer from '../Components/Footer'
import ConnectWithUs from '../Components/ConnectWithUs'
import WomenEmpowermentBanner from '../Components/WomenEmp/WoEmpBanner'
import WomenEmpowermentProject from '../Components/WomenEmp/WomenEmpowerProject'

const womenEmpowermentPage = () => {
  return (
    <div>
        <Navbar/>
        <WomenEmpowermentBanner/>
        <WomenEmpowermentProject/>
        <PartnerButton/>
        <ConnectWithUs/>
        <Footer/>
    </div>
  )
}

export default womenEmpowermentPage