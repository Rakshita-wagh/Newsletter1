import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Literature.css';



  function Events() {
    const navigate = useNavigate();
    const [selectedYearEvents, setSelectedYearEvents] = useState('');
  
    const handleEventsChange = (event) => {
      setSelectedYearEvents(event.target.value);
    };
    
    const handleSubmit = async () => {
      try {
        if (!selectedYearEvents) {
          window.alert("Please select the year.");
          return;
        }
  
        const response = await fetch(`http://localhost:8000/data/Events/${selectedYearEvents}`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const responseData = await response.json();
  
        navigate('/events-detail', { state: { data: responseData } });
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., display an error message to the user
      }
    };
  return (
    <div className="Events-page">
    

<div class="container">
    <h1 class="center">Events</h1>

    <div class="content">
        <h2>Select the year:</h2>
        <select value={selectedYearEvents} onChange={handleEventsChange}>
            
            <option disabled selected value="">Select Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select>
     </div>
     <button className="submit-button" onClick={handleSubmit}>Submit</button>
</div>

    </div>
  );
}


export default Events;

