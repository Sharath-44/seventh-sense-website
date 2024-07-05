import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const SupportUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1zoo8ps', 'template_l13ws2y', form.current, 'mOYrsuqGnZ5t47lcp')
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
      <h2 className="text-4xl font-bold mb-2 text-gray-800 text-center">Support Us</h2>
      <div className="h-1 w-24 bg-blue-800 mx-auto mb-6"></div>
      <h3 className="text-3xl text-center mb-6">In order to significantly influence society, let's forge enduring bonds, use technology to further social good, and promote inclusive progress.</h3>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="donation_amount" placeholder="Donation Amount*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" requiblue />
          <input type="text" name="full_name" placeholder="Full Name*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" requiblue />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="mobile_number" placeholder="Mobile Number*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" requiblue />
          <input type="email" name="email" placeholder="Email ID*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" requiblue />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="company_name" placeholder="Company Name*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" requiblue />
          <input type="text" name="pan_card_number" placeholder="Pan Card Number*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" requiblue />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="address" placeholder="Address*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" requiblue />
          <input type="text" name="city" placeholder="City*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" requiblue />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="state" placeholder="State*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" requiblue />
          <input type="text" name="country" placeholder="Country*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" requiblue />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="zip_code" placeholder="Zip/Postal Code*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" requiblue />
        </div>
        <textarea name="message" placeholder="Message" className="border border-gray-300 p-3 rounded-lg w-full h-32 focus:outline-none focus:border-blue-800"></textarea>
        <button type="submit" className="flex items-center text-blue-800 border-2 border-blue-800 px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition">
          <span className="mr-2">SUBMIT</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>
      <h3 className="text-3xl text-center my-6">You will be contacted back for more details upon submitting the form.</h3>
    </div>
  );
};

export default SupportUs;
