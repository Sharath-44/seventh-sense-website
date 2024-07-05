import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-2 text-gray-900">You can Reach us on</h2>
          <div className="h-1 w-24 bg-blue-800 mx-auto mb-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Seventh Sense People Development Solutions</h3>
            <p className="text-gray-600 font-bold">
              Main branch:
            </p>
            <p className="text-gray-600 mb-4">
              #4, 1st and 2nd floor, 23rd A Main Rd, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078
            </p>
            <p className="text-gray-600 font-bold">
              JP Nagar branch:
            </p>
            <p className="text-gray-600 mb-4">
              #24, 1st floor, 23rd Main Rd, Marenahalli, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078
            </p>
            <p className="text-gray-600 font-bold">
              Pune branch:
            </p>
            <p className="text-gray-600 mb-4">
              #18, Mini Market, Chikhali Akurdi Rd, near Kasturi Market, Mahatma, M Phulenagar, Chinchwad, Pimpri-Chinchwad, Maharashtra 411019
            </p>
            <div className="flex items-center mt-4">
              <FaPhone className="text-gray-500 mr-2" />
              <span className="text-gray-700">080 – 4174 4141, +91 99168 47774</span>
            </div>
            <div className="flex items-center mt-4">
              <FaEnvelope className="text-gray-500 mr-2" />
              <span className="text-gray-700">
                Candidates seeking jobs can write to{' '}
                <a href="mailto:jobs@seventhsensetalent.com" className="text-blue-800 hover:underline">
                  jobs@seventhsensetalent.com
                </a>
              </span>
            </div>
            <div className="flex items-center mt-4">
              <FaEnvelope className="text-gray-500 mr-2" />
              <span className="text-gray-700">
                For any other queries write to{' '}
                <a href="mailto:csr@seventhsensetalent.com" className="text-blue-800 hover:underline">
                  csr@seventhsensetalent.com
                </a>
              </span>
            </div>
            <div className="flex items-start mt-4">
              <MdOutlineAccessTimeFilled className="text-gray-500 mr-2 mt-1" />
              <div className="text-gray-700">
                <p>Monday to Saturday</p>
                <p>9:00AM to 6:00PM</p>
                <p>Sunday Closed</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://maps-api-ssl.google.com/maps?hl=en-US&amp;ll=12.915287,77.586327&amp;output=embed&amp;q=%234,+1st+floor+23rd+A,+10th+Main+Rd,+2nd+Phase,+J.+P.+Nagar,+Bengaluru,+Karnataka+560078,+India+(Seventh+Sense+Talent+Solutions)&amp;z=17"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
