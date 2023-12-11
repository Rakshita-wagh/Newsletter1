import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Literature.css';


function Literature() {
  const [selectedYearPoems, setSelectedYearPoems] = useState('');
  const [selectedYearArticles, setSelectedYearArticles] = useState('');

  const handlePoemsChange = (event) => {
    setSelectedYearPoems(event.target.value);
  };

  const handleArticlesChange = (event) => {
    setSelectedYearArticles(event.target.value);
  };


  const handleSubmit = () => {
    if (selectedYearPoems && selectedYearArticles) {
      window.alert("Please select either poems or articles, not both.");
      setSelectedYearPoems('');
      setSelectedYearArticles('');
    } else if (selectedYearPoems) {
      //history.push(`/poems/${selectedYearPoems}`);
    } else if (selectedYearArticles) {
      //history.push(`/articles/${selectedYearArticles}`);
    } else {
      window.alert("Please select either poems or articles.");
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
