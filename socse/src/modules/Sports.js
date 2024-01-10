import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Literature.css';


function Sports() {
  const navigate = useNavigate();
  const [selectedYearIndoor, setSelectedYearIndoor] = useState('');
  const [selectedYearOutdoor, setSelectedYearOutdoor] = useState('');

  const handleIndoorChange = (event) => {
    setSelectedYearIndoor(event.target.value);
  };
  const handleOutdoorChange = (event) => {
    setSelectedYearOutdoor(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      let response;
      let selectedType;
      if (selectedYearIndoor && selectedYearOutdoor) {
        window.alert("Please select either Indoor or Outdoor, not both.");
        setSelectedYearIndoor('');
        setSelectedYearOutdoor('');
      }
      else if (selectedYearIndoor) {
        selectedType = 'Indoor';
        response = await fetch(`http://localhost:8000/data/${selectedType}/${selectedYearIndoor}`);
      } else if (selectedYearOutdoor) {
        selectedType = 'Outdoor';
        response = await fetch(`http://localhost:8000/data/${selectedType}/${selectedYearOutdoor}`);
      } else {
        window.alert("Please select either Indoor or Outdoor.");
        return;
      }
      console.log(`URL: http://localhost:8000/data/${selectedType}/${selectedYearIndoor || selectedYearOutdoor}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      const route = selectedType === 'indoor' ? '/indoor' : '/outdoor';
  
      navigate('/sports-detail', { state: { data: responseData, route } });
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <div className="Sports-page">
      <body>

<div class="container1">
    <h1  style={{textAlign: 'center'}}>Sports</h1>

    <div class="content">
        <h2>Indoor:</h2>
        <select value={selectedYearIndoor} onChange={handleIndoorChange}>
            <option disabled selected value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select>
        <h2>Outdoor:</h2>
        <select value={selectedYearOutdoor} onChange={handleOutdoorChange}>
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
</body>
    </div>
  );
}


export default Sports;


