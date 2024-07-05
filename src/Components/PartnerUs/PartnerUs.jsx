import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import partnerImage from '/banner/partner.jpg';

const PartnerWithUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1zoo8ps', 'template_xdfjlra', form.current, 'mOYrsuqGnZ5t47lcp')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
      });

    e.target.reset();
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-2 text-gray-800 text-center">Partner With Us</h2>
      <div className="h-1 w-24 bg-blue-800 mx-auto mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <img src={partnerImage} alt="Partner With Us" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <p className="mb-6 text-lg text-gray-700">
            In order to significantly influence society, let's forge enduring bonds, use technology to further social good, and promote inclusive progress.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="fullName" placeholder="Full Name*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required />
              <input type="text" name="mobileNumber" placeholder="Mobile Number*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="Email ID*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required />
              <input type="text" name="companyName" placeholder="Company Name*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required />
            </div>
            <textarea name="message" placeholder="Message*" className="border border-gray-300 p-3 rounded-lg w-full h-32 focus:outline-none focus:border-blue-800" required></textarea>
            <button type="submit" className="flex items-center text-blue-800 border-2 border-blue-800 px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition">
              <span className="mr-2">SUBMIT</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
