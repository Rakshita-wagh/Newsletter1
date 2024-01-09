// CocurricularDetail.js

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './CocurricularDetail.css'; // Import the CSS file

function CocurricularDetail() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [expandedSlides, setExpandedSlides] = useState({});
  const sliderRef = useRef(null);
  const location = useLocation();
  const { data } = location.state || {};

  useEffect(() => {
    setCarouselItems(data);
  }, [data]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleReadMore = (id) => {
    setExpandedSlides((prev) => ({ ...prev, [id]: true }));
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const Card = ({ item }) => (
    <div className="card">
      <img
        src={`data:${item.images[0].contentType};base64,${item.images[0].data}`}
        alt={`Image for ${item.title}`}
        className="cardImage"
      />
      <div className="cardText">
        <h3 className="cardTitle">{item.title}</h3>
        {expandedSlides[item._id] ? (
          <p className="cardDescription">{item.relatedText}</p>
        ) : (
          <p className="cardDescription">{item.relatedText.substring(0, 100)}</p>
        )}
        <button
          className="readMoreButton"
          onClick={() => handleReadMore(item._id)}
        >
          Read More
        </button>
      </div>
    </div>
  );

  return (
    <div className="cocurricular-detail-container">
      <h2 className="events-heading" style={{ textAlign: 'center', marginTop: 0 }}>
  Cocurricular Events
    </h2>

      <div className="slider-box">
        <Slider {...settings} ref={sliderRef}>
          {carouselItems.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CocurricularDetail;
