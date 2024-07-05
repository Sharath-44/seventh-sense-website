import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage'; 
import AboutUsPage from './Pages/AboutUsPage'; 
import CareersPage from './Pages/CareersPage'; 
import AboutTeamPage from './Pages/AboutTeamPage'; 
import PartnerUsPage from './Pages/PartnerUsPage'; 
import SupportUsPage from './Pages/SupportUsPage'; 
import Partners from './Pages/Partners';
import ContactUsPage from './Pages/ContactUsPage';
import WomenEmpowermentPage from './Pages/WomenEmpowermentPage';
import InnovationPage from './Pages/InnovationPage';
import Skilling from './Pages/Skilling';
import EmploymentPage from './Pages/EmploymentPage';
import ResearchPage from './Pages/ResearchPage';
import JobForm from './Components/Careers/JobForm';
import AnnualReport from './Pages/AnnualReport';
import GalleryPage from './Pages/GalleryPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/about-team" element={<AboutTeamPage />} />
        <Route path="/partner-us" element={<PartnerUsPage />} />
        <Route path="/support-us" element={<SupportUsPage />} />
        <Route path="/partner" element={<Partners />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/women-empowerment" element={<WomenEmpowermentPage />} />
        <Route path="/innovation-entrepreneurship" element={<InnovationPage />} />
        <Route path="/skilling" element={<Skilling />} />
        <Route path="/employment" element={<EmploymentPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/annual-report" element={<AnnualReport />} />
        <Route path="/careers/jobs/:jobTitle" element={<JobForm />} />
        <Route path="/gallery" element={<GalleryPage/>}/>
      </Routes> 
    </Router>
  );
};

export default AppRoutes;
