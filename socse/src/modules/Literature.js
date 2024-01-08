import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Literature.css';
import { useNavigate } from 'react-router-dom';
import LiteratureDetail from '../Details/LiteratureDetail.js';


function Literature() {
  const navigate = useNavigate();

  const [selectedYearPoems, setSelectedYearPoems] = useState('');
  const [selectedYearArticles, setSelectedYearArticles] = useState('');

  const handlePoemsChange = (event) => {
    setSelectedYearPoems(event.target.value);
  };

  const handleArticlesChange = (event) => {
    setSelectedYearArticles(event.target.value);
  };


  const handleSubmit = async () => {
    let response;
    let responseText;
  
    try {
      if (selectedYearPoems && selectedYearArticles) {
        window.alert("Please select either poems or articles, not both.");
        setSelectedYearPoems('');
        setSelectedYearArticles('');
        return;
      }
  
      if (selectedYearPoems) {
        response = await fetch(`/api/poems/${selectedYearPoems}`)

      } else if (selectedYearArticles) {
        response = await fetch(`/api/articles/${selectedYearArticles}`);
      } else {
        window.alert("Please select either poems or articles.");
        return;
      }
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      responseText = await response.text();
      console.log('Fetched Data:', responseText);
  
      // Determine the route based on the selected type (poems or articles)
      const route = selectedYearPoems ? '/poems' : '/articles';
  
      navigate('/literature-detail', { state: { data: responseText, route } });
  
    } catch (error) {
      console.error('Error fetching data:', error);
      if (response) {
        console.log('Full response:', responseText);
      }
    }
  };
  
  

  return (
    <div className="literature-page">
      <body>

<div class="container">
    <h1 class="center">Literature</h1>

    <div class="content">
        <h2>Poems</h2>
        <select value={selectedYearPoems} onChange={handlePoemsChange}>
            <option disabled selected value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select>

        <h2>Articles</h2>
        <select value={selectedYearArticles} onChange={handleArticlesChange}>
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

export default Literature;
