import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Literature.css';
import { useNavigate } from 'react-router-dom';
import LiteratureDetail from '../Details/LiteratureDetail.js';
import clite from '../images/clite.jpg'


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
    try {
      let response;
      let selectedType;
      if (selectedYearPoems && selectedYearArticles) {
        window.alert("Please select either poems or articles, not both.");
        setSelectedYearPoems('');
        setSelectedYearArticles('');
      }
      else if (selectedYearPoems) {
        selectedType = 'Poems';
        response = await fetch(`http://localhost:8000/data/${selectedType}/${selectedYearPoems}`);
      } else if (selectedYearArticles) {
        selectedType = 'Articles';
        response = await fetch(`http://localhost:8000/data/${selectedType}/${selectedYearArticles}`);
      } else {
        window.alert("Please select either poems or articles.");
        return;
      }
      console.log(`URL: http://localhost:8000/data/${selectedType}/${selectedYearPoems || selectedYearArticles}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      const route = selectedType === 'poems' ? '/poems' : '/articles';
  
      navigate('/literature-detail', { state: { data: responseData, route } });
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };
  
  
  

  return (
    <div className="literature-page">
      <body>

<div class="container1">
    <h1  style={{textAlign: 'center'}}>Literature</h1>

    <div class="content">
        <h2 >Poems</h2>
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
<div >
<div className="image" style={{ textAlign: 'center', margin: '20px'}}>
  <img
    src={clite}
    alt="Image description"
    style={{marginLeft: '150px', height: '550px', width: '1000%', borderRadius: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
  />
</div>


</div>

</body>
    </div>
  );
}

export default Literature;
