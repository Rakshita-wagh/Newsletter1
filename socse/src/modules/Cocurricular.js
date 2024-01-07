import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Literature.css';


function Cocurricular() {
  const navigate = useNavigate();

  const [selectedYearCocurricular, setSelectedYearCocurricular] = useState('');

  const handleCocurricularChange = (event) => {
    setSelectedYearCocurricular(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedYearCocurricular) {
      //history.push(`/poems/${selectedYearPoems}`);
      navigate('/cocurricular-detail');
    }
     else {
      window.alert("Please select either Sports or Techincal or academics.");
    }
  };

  return (
    <div className="Cocurricular-page">
      <body>

<div class="container">
    <h1 class="center">Cocurricular</h1>

    <div class="content">
        <h2>Select the year:</h2>
        <select value={selectedYearCocurricular} onChange={handleCocurricularChange}>
            <option disabled selected value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select>
     </div>
     <button className="submit-button" onClick={handleSubmit}>Submit</button>
</div>

</body>
    </div>
  );
}


export default Cocurricular;
