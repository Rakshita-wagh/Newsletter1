// SportsDetail.js

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './CocurricularDetail.css'; // Import the CSS file

function SportsDetail() {
  const [carouselItems, setCarouselItems] = useState([]);
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

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="sports-detail-container">
      <h2 className="sports-heading">Sports</h2>

      <div className="slider-box" style={{ height: 'auto' }}>
        <Slider {...settings} ref={sliderRef}>
          {carouselItems.map((item) => (
            <div key={item._id} className="carousel-slide">
              <h3>{item.title}</h3>
              {item.images.length > 0 && (
                <div className="image-gallery">
                  {item.images.map((image, index) => (
                    <img
                      key={index}
                      src={`data:${image.contentType};base64,${image.data}`}
                      alt={`Image ${index + 1} for ${item.title}`}
                      className="event-image"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SportsDetail;
