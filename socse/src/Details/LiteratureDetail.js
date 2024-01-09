import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './LiteratureDetail.css'; // Import the CSS file

function LiteratureDetail() {
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
    // Use slick slider method to move to the next slide
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="literature-detail-container">
      <h2 className="poems-heading">Poems</h2>

      <div className="slider-box" style={{ height: 'auto' }}>
        <Slider {...settings} ref={sliderRef}>
          {carouselItems.map((item) => (
            <div key={item._id} className="carousel-slide">
              <h3>{item.title}</h3>
              {expandedSlides[item._id] ? (
                <div>
                  <p>{item.relatedText}</p>
                </div>
              ) : (
                <div>
                  <p>{item.relatedText.substring(0, 100)}</p>
                  <button
                    className="read-more-button"
                    onClick={() => handleReadMore(item._id)}
                  >
                    Read More
                  </button>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LiteratureDetail;
