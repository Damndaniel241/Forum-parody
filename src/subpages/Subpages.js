import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Romance from './Romance' // Import your subpage components
import Programming from './Programming'
import Career from './Career' ;
import Business from './Business' ;
import Investment from './Investment' ;
import Nysc from './Nysc' ;
import Education from './Education' ;
import Autos from './Autos' ;
import Properties from './Properties' ;
import Health from './Health' ;
import Travel from './Travel' ;
import Family from './Family' ;
import Culture from './Culture' ;
import Religion from './Religion' ;
import Food from './Food' ;
import Diaries from './Diaries' ;
import Pets from './Pets' ;
import Crime from './Crime';
import Politics from './Politics';

// ... import other subpage components

function Subpages() {
  return (
    <Routes>
      <Route path="/romance" element={<Romance />} />
      <Route path="/programming" element={<Programming />} />
      <Route path="/crime" element={<Crime />} />
      <Route path="/career" element={<Career />} />
      <Route path="/business" element={<Business />} />
      <Route path="/investment" element={<Investment />} />
      <Route path="/nysc" element={<Nysc />} />
      <Route path="/education" element={<Education />} />
      <Route path="/autos" element={<Autos />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/health" element={<Health />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/family" element={<Family />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/religion" element={<Religion />} />
      <Route path="/food" element={<Food />} />
      <Route path="/diaries" element={<Diaries />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/politics" element={<Politics />} />
      {/* ... add more routes for other subpage components */}
    </Routes>
  )
};

export default Subpages
;