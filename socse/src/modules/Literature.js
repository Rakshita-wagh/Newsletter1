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
        <select>
            <option disabled selected value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select>
    </div>
</div>

</body>
    </div>
  );
}

export default Literature;
