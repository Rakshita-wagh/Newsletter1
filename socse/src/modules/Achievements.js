import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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


  const handleSubmit = () => {
    if (selectedYearSports && selectedYearTechnical && selectedYearAcademics) {
      window.alert("Please select either Sports or Techincal or academics, not all.");
      setSelectedYearSports('');
      setSelectedYearTechnical('');
      setSelectedYearAcademics('');
    } else if (selectedYearSports) {
      //history.push(`/poems/${selectedYearPoems}`);
      navigate('/Achievements-detail');
    } else if (selectedYearTechnical) {
      //history.push(`/articles/${selectedYearArticles}`);
      navigate('/Achievements-detail');
    }else if (selectedYearAcademics){
      navigate('/Achievements-detail');

    }
     else {
      window.alert("Please select either Sports or Techincal or academics.");
    }
  };
  /*
  const handleSubmit = async () => {
    try {
      let response;
      let selectedCategory;
  
      if (selectedYearSports) {
        selectedCategory = 'Sports';
        response = await fetch(`http://localhost:8000/data/${selectedCategory}/${selectedYearSports}`);
      } else if (selectedYearTechnical) {
        selectedCategory = 'Technical';
        response = await fetch(`http://localhost:8000/data/${selectedCategory}/${selectedYearTechnical}`);
      } else if (selectedYearAcademics) {
        selectedCategory = 'Academics';
        response = await fetch(`http://localhost:8000/data/${selectedCategory}/${selectedYearAcademics}`);
      } else {
        window.alert("Please select one category: Sports, Technical, or Academics.");
        return;
      }
  
      //console.log(`URL: http://localhost:8000/data/${selectedCategory}/${selectedYear}`);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      const route = `/achievements-${selectedCategory.toLowerCase()}`;
  
      navigate('/Achievements-detail', { state: { data: responseData, route } });
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };
  */
  return (
    <div className="Achievements-page">
      <body>

<div class="container">
    <h1 class="center">Achievements</h1>

    <div class="content">
        <h2>Sports:</h2>
        <select value={selectedYearSports} onChange={handleSportsChange}>
            <option disabled selected value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select>
        <h2>Techincal:</h2>
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

</body>
    </div>
  );
}


export default Achievements;

