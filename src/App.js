// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Edwardslawfirm from './components/Edwardslawfirm';
import CorporatePage from './pages/CorporatePage';
import LitigationPage from './pages/LitigationPage';
import BusinessPage from './pages/BusinessPage';
import CasePage from './pages/CasePage';
import DocumentPage from './pages/DocumentPage';
import LegalnewsPage from './pages/LegalnewsPage';
import SuccesPage from './pages/SuccesPage';
import CommunityPage from './pages/CommunityPage';
import Contactpage from './pages/Contactpage';
import Corporatelaw from './pages/Corporatelaw';
import Familylaw from './pages/Familylaw';
import Internationaltrade from './pages/Internationaltrade';
import Realestatelaw from './pages/Realestatelaw';
import Taxadvisory from './pages/Taxadvisory';
import Employmentlaw from './pages/Employmentlaw';
import Criminaldefense from './pages/Criminaldefense';
import Tuallaw from './pages/Tuallaw';
import ThankYouPage from './pages/ThankYouPage';


// ...other external pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Edwardslawfirm />} />
        <Route path="/Edwardslawfirm" element={<Edwardslawfirm />} />
        <Route path="/corporate-advisory" element={<CorporatePage />} />
        <Route path="/litigation" element={<LitigationPage />} />
        <Route path="/BusinessPage" element={<BusinessPage />} />
        <Route path="/CasePage" element={<CasePage />} />
        <Route path="/DocumentPage" element={<DocumentPage />} />
        <Route path="/LegalnewsPage" element={<LegalnewsPage />} />
        <Route path="/SuccesPage" element={<SuccesPage />} />
        <Route path="/CommunityPage" element={<CommunityPage />} />
        <Route path="/Contactpage" element={<Contactpage />} />
        <Route path="/Corporatelaw" element={<Corporatelaw />} />
        <Route path="/Realestatelaw" element={<Realestatelaw />} />
        <Route path="/Familylaw" element={<Familylaw />} />
        <Route path="/Criminaldefense" element={<Criminaldefense />} />
        <Route path="/Internationaltrade" element={<Internationaltrade />} />
        <Route path="/Intellectuallaw" element={<Tuallaw />} />
        <Route path="/Taxadvisory" element={<Taxadvisory />} />
        <Route path="/Employmentlaw" element={<Employmentlaw />} />
        <Route path="/ThankYouPage" element={<ThankYouPage />} />
        <Route path="*" element={<div style={{ textAlign: 'center', padding: '5rem' }}><h2>404 - Page Not Found</h2></div>} />

        {/* Add more routes for external pages if needed */}
      </Routes>
    </Router>
  );
}

export default App;
