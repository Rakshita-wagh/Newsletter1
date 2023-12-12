import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Literature.css';


function Sports() {
  return (
    <div className="Techincal-page">
      <body>

<div class="container">
    <h1 class="center">Technical</h1>

    <div class="content">
        <h2>Select the year:</h2>
        <select >
            <option disabled selected value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select>
     </div>
    <button className="submit-button">Submit</button>
</div>

</body>
    </div>
  );
}


export default Sports;


