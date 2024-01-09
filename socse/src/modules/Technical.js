import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Literature.css';

function Technical() {
  const navigate = useNavigate();
  const [selectedYearTechnical, setSelectedYearTechnical] = useState('');

  const handleTechnicalChange = (event) => {
    setSelectedYearTechnical(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (!selectedYearTechnical) {
        window.alert("Please select the year.");
        return;
      }

      const response = await fetch(`http://localhost:8000/data/Technical/${selectedYearTechnical}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      navigate('/technical-detail', { state: { data: responseData } });
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <div className="Technical-page">
      <div className="container1">
        <h1  style={{textAlign: 'center'}}>Technical</h1>
        <div className="content">
          <h2>Select the year:</h2>
          <select value={selectedYearTechnical} onChange={handleTechnicalChange}>
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
      <div >
<div className="image" style={{ textAlign: 'center', margin: '20px'}}>
  <img
    src="https://www.collegebatch.com/static/clg-gallery/kle-technological-university-hubli-252613.jpg"
    alt="Image description"
    style={{marginLeft: '120px', height: '550px', width: '1000%', borderRadius: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
  />
</div>


</div>
    </div>
    
  );
}

export default Technical;
