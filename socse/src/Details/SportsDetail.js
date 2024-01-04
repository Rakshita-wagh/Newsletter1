import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import events from '../images/events.jpg';
import sports from '../images/sports.jpg';
import literature from '../images/literature.jpg';
import indoor from '../images/indoor.jpg';
import { useNavigate } from 'react-router-dom';

const SportsDetail = () => {

  const navigate=useNavigate();
  const containerStyle = {
    backgroundImage: `url("${indoor}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '400px',
    position: 'relative', // Change to relative if needed
  };

  const editButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '30px',
    color:'white',
    background:'grey',
    width:'70px',
    height:'30px',
    borderRadius:'10px'
  };

  const carouselContainerStyle = {
    position: 'absolute',
    top: '80%',
    left: 0,
    right: 0,
    transform: 'translateY(-43%)',
  };

  const handleEditClick = () => {
    navigate('/edit'); 
  };

  return (
    <div style={containerStyle}>
      <button style={editButtonStyle} onClick={handleEditClick}>Edit</button>
      <Carousel style={carouselContainerStyle}>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src={events}
            alt="Slide 1"
            style={{ width: '500px', height: '400px', marginTop: '17%' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src={sports}
            alt="Slide 2"
            style={{ width: '500px', height: '400px', marginTop: '17%' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src={literature}
            alt="Slide 3"
            style={{ width: '500px', height: '400px', marginTop: '17%' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SportsDetail;
