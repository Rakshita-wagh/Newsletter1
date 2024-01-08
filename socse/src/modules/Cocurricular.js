import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Literature.css';


function Cocurricular() {
  return (
    <div className="Cocurricular-page">
      <body>

<div class="container">
    <h1 class="center">Cocurricular</h1>

    <div class="content">
        <h2>Select the year:</h2>
        <select >
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
