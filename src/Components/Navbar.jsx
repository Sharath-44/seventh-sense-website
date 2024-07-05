import React, { useState } from 'react';

const Navbar = () => {
    const [dropdowns, setDropdowns] = useState({
        whoWeAre: false,
        whatWeDo: false,
        workWithUs: false,
    });

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMouseEnter = (dropdown) => {
        if (window.innerWidth >= 768) { // Only activate on larger screens
            setDropdowns((prevState) => ({
                ...prevState,
                [dropdown]: true,
            }));
        }
    };

    const handleMouseLeave = (dropdown) => {
        if (window.innerWidth >= 768) { // Only activate on larger screens
            setDropdowns((prevState) => ({
                ...prevState,
                [dropdown]: false,
            }));
        }
    };

    const handleDropdownClick = (dropdown) => {
        if (window.innerWidth < 768) { // Only activate on smaller screens
            setDropdowns((prevState) => ({
                whoWeAre: dropdown === 'whoWeAre' ? !prevState.whoWeAre : false,
                whatWeDo: dropdown === 'whatWeDo' ? !prevState.whatWeDo : false,
                workWithUs: dropdown === 'workWithUs' ? !prevState.workWithUs : false,
            }));
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-gray-200 shadow-lg">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/fullLogo.png" className="h-10 px-2 pr-0" alt="Logo" />
                    </a>
                    <button
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-multi-level"
                        aria-expanded="false"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm0 4h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1zm0 4h14a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-multi-level">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a href="/" className="block py-2 px-3 text-blue-800 rounded hover:bg-blue-800 hover:text-white md:bg-transparent md:hover:bg-transparent md:hover:text-blue-800 md:p-0" aria-current="page">Home</a>
                            </li>
                            <li
                                onMouseEnter={() => handleMouseEnter('whoWeAre')}
                                onMouseLeave={() => handleMouseLeave('whoWeAre')}
                                className="relative"
                            >
                                <button 
                                    id="dropdownNavbarLink" 
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-blue-800 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0 md:w-auto"
                                    onClick={() => handleDropdownClick('whoWeAre')}
                                >
                                    Who We Are
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                    
                                <div id="dropdownNavbar" className={`z-10 ${dropdowns.whoWeAre ? 'block' : 'hidden'} absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 md:left-0`}>
                                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="/about-us" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
                                        </li>
                                        <li>
                                            <a href="/about-team" className="block px-4 py-2 hover:bg-gray-100">About The Team</a>
                                        </li>
                                        <li>
                                            <a href="/partner" className="block px-4 py-2 hover:bg-gray-100">Our Partners</a>
                                        </li>
                                        <li>
                                            <a href="/annual-report" className="block px-4 py-2 hover:bg-gray-100">Annual Reports</a>
                                        </li>
                                        <li>
                                            <a href="/gallery" className="block px-4 py-2 hover:bg-gray-100">Gallery</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li
                                onMouseEnter={() => handleMouseEnter('whatWeDo')}
                                onMouseLeave={() => handleMouseLeave('whatWeDo')}
                                className="relative"
                            >
                                <button 
                                    id="dropdownNavbarLink" 
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-blue-800 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0 md:w-auto"
                                    onClick={() => handleDropdownClick('whatWeDo')}
                                >
                                    What We Do
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div id="dropdownNavbar" className={`z-10 ${dropdowns.whatWeDo ? 'block' : 'hidden'} absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 md:left-0`}>
                                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="/women-empowerment" className="block px-4 py-2 hover:bg-gray-100">Women Empowerment</a>
                                        </li>
                                        <li>
                                            <a href="/innovation-entrepreneurship" className="block px-4 py-2 hover:bg-gray-100">Innovation & Entrepreneurship</a>
                                        </li>
                                        <li>
                                            <a href="/skilling" className="block px-4 py-2 hover:bg-gray-100">Skilling</a>
                                        </li>
                                        <li>
                                            <a href="/employment" className="block px-4 py-2 hover:bg-gray-100">Employment</a>
                                        </li>
                                        <li>
                                            <a href="/research" className="block px-4 py-2 hover:bg-gray-100">Research</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li
                                onMouseEnter={() => handleMouseEnter('workWithUs')}
                                onMouseLeave={() => handleMouseLeave('workWithUs')}
                                className="relative"
                            >
                                <button 
                                    id="dropdownNavbarLink" 
                                    className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-blue-800 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0 md:w-auto"
                                    onClick={() => handleDropdownClick('workWithUs')}
                                >
                                    Work With Us
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div id="dropdownNavbar" className={`z-10 ${dropdowns.workWithUs ? 'block' : 'hidden'} absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 md:left-0`}>
                                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</a>
                                        </li>
                                        <li>
                                            <a href="/partner-us" className="block px-4 py-2 hover:bg-gray-100">Partner With Us</a>
                                        </li>
                                        <li>
                                            <a href="/support-us" className="block px-4 py-2 hover:bg-gray-100">Support Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="/contact-us" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-blue-800 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-800 md:p-0" aria-current="page">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
