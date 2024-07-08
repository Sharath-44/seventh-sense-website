import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const SupportUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    donationAmount: '',
    mobileNumber: '',
    companyName: '',
    panCardNumber: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    message: ''
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptcha = (value) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert('Please verify the reCAPTCHA.');
      return;
    }

    emailjs.send(
      'service_qkcfrfe', // Replace with your EmailJS service ID
      'template_xh5cpt6', // Replace with your EmailJS template ID
      formData,
      'SfKZU2k8ybahJ5jMa' // Replace with your EmailJS user ID
    ).then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send the message, please try again.');
    });

    e.target.reset();
    setCaptchaVerified(false); // Reset captcha verification
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Donate Now</h2>
      <h3 className="text-1xl text-center mb-6">In order to significantly influence society, let's forge enduring bonds, use technology to further social good, and promote inclusive progress.</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="donationAmount" placeholder="Donation Amount*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required onChange={handleChange} />
          <input type="text" name="name" placeholder="Full Name*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required onChange={handleChange} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="mobileNumber" placeholder="Mobile Number*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email ID*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required onChange={handleChange} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="companyName" placeholder="Company Name*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required onChange={handleChange} />
          <input type="text" name="panCardNumber" placeholder="Pan Card Number*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required onChange={handleChange} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="address" placeholder="Address*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required onChange={handleChange} />
          <input type="text" name="city" placeholder="City*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required onChange={handleChange} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="state" placeholder="State*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required onChange={handleChange} />
          <input type="text" name="country" placeholder="Country*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required onChange={handleChange} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="zipCode" placeholder="Zip/Postal Code*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-800" required onChange={handleChange} />
        </div>
        <textarea name="message" placeholder="Message" className="border border-gray-300 p-3 rounded-lg w-full h-32 focus:outline-none focus:border-blue-800" onChange={handleChange}></textarea>
        <ReCAPTCHA
          sitekey="6LcsDQsqAAAAAKGepG9_MwHXgnb3iN_kVFxHuuMM" // Replace with your reCAPTCHA site key
          onChange={handleCaptcha}
        />
        <button type="submit" className="flex items-center text-blue-800 border-2 border-blue-800 px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition">
          <span className="mr-2">SUBMIT</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </form>
      <h3 className="text-2xl text-center my-6">You will be contacted back for more details upon submitting the form.</h3>
    </div>
  );
};

export default SupportUs;
