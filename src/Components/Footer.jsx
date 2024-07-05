import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-white rounded-lg shadow-lg dark:bg-gray-300 m-2">
                <div className="w-full max-w-screen-xl mx-auto p-2 md:py-4">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex flex-col items-center mb-2 sm:mb-0 space-y-2 sm:items-start sm:space-y-0 sm:space-x-2 rtl:space-x-reverse">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse py-2">
                                <a href="/">
                                    <img src="/fullLogo.png" className="h-8 px-1 pr-0" alt="Logo" />
                                </a>
                            </div>
                            <div className="text-center sm:text-left text-black dark:text-black text-sm">
                                <a href='https://maps.app.goo.gl/kMBorAHscmzziyBM7' className="hover:underline hover:text-blue-800 block sm:inline">#4, 1st and 2nd floor, 23rd A Main Rd, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</a>
                                <p className="hover:text-blue-800 block sm:inline"><br/>080 – 4174 4141</p>
                                <a href="mailto:csr@seventhsensetalent.com" className="hover:underline hover:text-blue-800 block sm:inline"><br/>csr@seventhsensetalent.com</a>
                            </div>
                        </div>
                        <ul className="flex flex-wrap items-center mb-4 text-sm font-medium text-black sm:mb-0 dark:text-black justify-center sm:justify-end">
                            <li>
                                <a href="/about-us" className="hover:underline hover:text-blue-800 me-3 md:me-4">About Us</a>
                            </li>
                            <li>
                                <a href="/annual-report" className="hover:underline hover:text-blue-800 me-3 md:me-4">Annual Reports</a>
                            </li>
                            <li>
                                <a href="/contact-us" className="hover:underline hover:text-blue-800">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <span className="block text-xs text-black text-center sm:text-center dark:text-black mt-4 sm:mt-0">
                        Copyright © 2024
                        <a href="/" className="hover:underline hover:text-blue-800"> Seventh Sense People Development Solutions Private Limited</a>. All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
