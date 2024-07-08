import React, { useRef } from 'react';
import axios from 'axios';

const SupportUs = () => {
  const formRef = useRef();

  const handlePayment = async () => {
    const amount = formRef.current.donation_amount.value;
    const name = formRef.current.full_name.value;
    const email = formRef.current.email.value;

    const order = await axios.post('http://localhost:5000/create-order', {
      amount,
      currency: 'INR'
    });

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.data.amount,
      currency: order.data.currency,
      name: 'Your Company Name',
      description: 'Donation',
      order_id: order.data.id,
      handler: function (response) {
        alert(`Payment successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name,
        email,
        contact: formRef.current.mobile_number.value
      },
      notes: {
        address: formRef.current.address.value
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Donate Now</h2>
        <p className="text-1xl text-center mb-6">In order to significantly influence society, let's forge enduring bonds, use technology to further social good, and promote inclusive progress.</p>
        <form ref={formRef} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="donation_amount" placeholder="Donation Amount*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
            <input type="text" name="full_name" placeholder="Full Name*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="mobile_number" placeholder="Mobile Number*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
            <input type="email" name="email" placeholder="Email ID*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="company_name" placeholder="Company Name*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
            <input type="text" name="pan_card_number" placeholder="Pan Card Number*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="address" placeholder="Address*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
            <input type="text" name="city" placeholder="City*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="state" placeholder="State*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
            <input type="text" name="country" placeholder="Country*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="zip_code" placeholder="Zip/Postal Code*" className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-blue-500" required />
          </div>
          <textarea name="message" placeholder="Message" className="border border-gray-300 p-3 rounded-lg w-full h-32 focus:outline-none focus:border-blue-800"></textarea>
          <button type="button" onClick={handlePayment} className="flex items-center text-blue-800 border-2 border-blue-800 px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition">
            <span className="mr-2">SUBMIT</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default SupportUs;
