import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import PartnerButton from '../Components/PartnerButton'
import ContactUs from '../Components/ContactUs/ContactUsTile'
import ContactUsBanner from '../Components/ContactUs/ContactUsBanner'

const ContactUsPage = () => {
  return (
    <div>
        <Navbar/>
        <ContactUsBanner/>
        <ContactUs/>
        <PartnerButton/>
        <Footer/>
    </div>
  )
}

export default ContactUsPage