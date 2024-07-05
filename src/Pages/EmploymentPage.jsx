import React from 'react'
import Navbar from '../Components/Navbar'
import PartnerButton from '../Components/PartnerButton'
import Footer from '../Components/Footer'
import EmploymentBanner from '../Components/Employment/EmploymentBanner'
import EmploymentProject from '../Components/Employment/EmploymentProject'
import ConnectWithUs from '../Components/ConnectWithUs'

const EmploymentPage = () => {
  return (
    <div>
      <Navbar/>
      <EmploymentBanner/>
      <EmploymentProject/>
      <PartnerButton/>
      <ConnectWithUs/>
      <Footer/>
    </div>
  )
}

export default EmploymentPage