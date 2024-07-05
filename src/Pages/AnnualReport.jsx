import React from 'react'
import AnnualReportBanner from '../Components/AnnualReport/AnnualReportBanner'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AnnualRep from '../Components/AnnualReport/AnnualRep'
import ConnectWithUs from '../Components/ConnectWithUs'
import PartnerButton from '../Components/PartnerButton'

const AnnualReport = () => {
  return (
    <div>
      <Navbar />
      <AnnualReportBanner />
      <AnnualRep/>
      <PartnerButton/>
      <ConnectWithUs/>
      <Footer />
    </div>
  )
}

export default AnnualReport