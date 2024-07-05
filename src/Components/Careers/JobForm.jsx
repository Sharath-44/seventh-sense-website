import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Navbar from '../Navbar';
import ConnectWithUs from '../ConnectWithUs';
import Footer from '../Footer';
import PartnerButton from '../PartnerButton';

const JobForm = () => {
  const { jobTitle } = useParams();
  const formRef = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1zoo8ps', 'template_rmx3f8a', formRef.current, 'mOYrsuqGnZ5t47lcp')
      .then((result) => {
        console.log(result.text);
        alert('Application sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the application, please try again.');
      });

    e.target.reset();
    navigate('/careers');
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Apply for {jobTitle}</h2>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input type="hidden" name="job_title" value={jobTitle} />
              <input type="text" name="name" placeholder="Full Name" className="w-full p-3 border rounded" required />
              <input type="text" name="number" placeholder="Mobile Number" className="w-full p-3 border rounded" required />
              <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded" required />
              <input type="text" name="experience" placeholder="Years of Experience" className="w-full p-3 border rounded" required />
              <input type="text" name="city" placeholder="City" className="w-full p-3 border rounded" required />
              <input type="text" name="resume_link" placeholder="Link to Resume" className="w-full p-3 border rounded" required />
              <div className="flex justify-between items-center">
                <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded">Submit</button>
                <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => navigate('/careers')}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <PartnerButton/>
      <ConnectWithUs />
      <Footer />
    </>
  );
};

export default JobForm;
