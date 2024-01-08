import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Literature.css';

function Cocurricular() {
  const navigate = useNavigate();
  const [selectedYearCocurricular, setSelectedYearCocurricular] = useState('');

  const handleCocurricularChange = (event) => {
    setSelectedYearCocurricular(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (!selectedYearCocurricular) {
        window.alert("Please select the year.");
        return;
      }

      const response = await fetch(`http://localhost:8000/data/Cocurricular/${selectedYearCocurricular}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      navigate('/cocurricular-detail', { state: { data: responseData } });
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <div className="Cocurricular-page">
      <div className="container">
        <h1 className="center">Cocurricular</h1>
        <div className="content">
          <h2>Select the year:</h2>
          <select value={selectedYearCocurricular} onChange={handleCocurricularChange}>
            <option disabled selected value="">
              Select Year
            </option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Cocurricular;
