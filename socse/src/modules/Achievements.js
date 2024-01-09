import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Literature.css';

function Achievements() {
  const navigate = useNavigate();
  const [selectedYearSports, setSelectedYearSports] = useState('');
  const [selectedYearTechnical, setSelectedYearTechnical] = useState('');
  const [selectedYearAcademics, setSelectedYearAcademics] = useState('');

  const handleSportsChange = (event) => {
    setSelectedYearSports(event.target.value);
  };

  const handleTechnicalChange = (event) => {
    setSelectedYearTechnical(event.target.value);
  };

  const handleAcademicsChange = (event) => {
    setSelectedYearAcademics(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      let response;
      let selectedCategory;

      if (selectedYearSports) {
        selectedCategory = 'aSports';
        response = await fetch(`http://localhost:8000/data/${selectedCategory}/${selectedYearSports}`);
      } else if (selectedYearTechnical) {
        selectedCategory = 'aTechnical';
        response = await fetch(`http://localhost:8000/data/${selectedCategory}/${selectedYearTechnical}`);
      } else if (selectedYearAcademics) {
        selectedCategory = 'aAcademics';
        response = await fetch(`http://localhost:8000/data/${selectedCategory}/${selectedYearAcademics}`);
      } else {
        window.alert("Please select one category: Sports, Technical, or Academics.");
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      const route = `/achievements-${selectedCategory.toLowerCase()}`;

      navigate('/achievements-detail', { state: { data: responseData, route } });
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <div className="achievements-page">
      <div className="container1">
        <h1  style={{textAlign: 'center'}}>Achievements</h1>

        <div className="content">
          <h2>Sports:</h2>
          <select value={selectedYearSports} onChange={handleSportsChange}>
            <option disabled selected value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
          <h2>Technical:</h2>
          <select value={selectedYearTechnical} onChange={handleTechnicalChange}>
            <option disabled selected value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
          <h2>Academics:</h2>
          <select value={selectedYearAcademics} onChange={handleAcademicsChange}>
            <option disabled selected value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
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

export default Achievements;
