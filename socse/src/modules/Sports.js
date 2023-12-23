import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SportsDetail from '../Details/SportsDetail';
import './Literature.css';


function Sports() {

  const navigate=useNavigate();
  const [selectedYearIndoor, setSelectedYearIndoor] = useState('');
  const [selectedYearOutdoor, setSelectedYearOutdoor] = useState('');

  const handleIndoorChange = (event) => {
    setSelectedYearIndoor(event.target.value);
  };

  const handleOutdoorChange = (event) => {
    setSelectedYearOutdoor(event.target.value);
  };


  const handleSubmit = () => {
    if (selectedYearIndoor && selectedYearOutdoor) {
      window.alert("Please select either Indoor or Outdoor, not both.");
      setSelectedYearIndoor('');
      setSelectedYearOutdoor('');
    } else if (selectedYearIndoor) {
      //history.push(`/poems/${selectedYearPoems}`);
      navigate('/sports-detail');
    } else if (selectedYearOutdoor) {
      //history.push(`/articles/${selectedYearArticles}`);
    } else {
      window.alert("Please select either Indoor or Outdoor.");
    }
  };
  return (
    <div className="Sports-page">
      <body>

<div class="container">
    <h1 class="center">Sports</h1>

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

</body>
    </div>
  );
}


export default Sports;


